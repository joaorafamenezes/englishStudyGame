import { randomUUID } from "node:crypto";
import { CONNECTORS_CATALOG } from "./data/connectorsCatalog.js";
import { QUESTIONS } from "./data/questions.js";
import { getTeacherNote } from "./data/teacherNotes.js";
import type {
  AnswerBody,
  ConnectorFamily,
  ConnectorItem,
  GameMode,
  GameSession,
  MatchPair,
  PublicQuestion,
  Question,
  ReviewItem,
  StartGameBody,
} from "./types.js";

const sessions = new Map<string, GameSession>();
const DEFAULT_QUESTION_COUNT = 10;
const MAX_QUESTION_COUNT = 20;
const MAX_LIVES = 3;
const BASE_POINTS = 100;
const STREAK_CAP = 5;

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getQuestion(id: string): Question {
  const question = QUESTIONS.find((item) => item.id === id);
  if (!question) {
    throw new Error(`Question ${id} not found`);
  }
  return question;
}

function buildTeacherFeedback(question: Question) {
  const custom = getTeacherNote(question.id);
  const fullSentence = question.fullSentence ?? question.prompt.replace("_____", question.connector);
  
  // Garante que a tradução seja sempre em português genuíno
  let sentenceTranslation = custom?.sentenceTranslation ?? question.sentenceTranslation;
  if (!sentenceTranslation || sentenceTranslation.startsWith("Frase contextual:") || sentenceTranslation.startsWith("Tradução:")) {
    sentenceTranslation = `O conectivo '${question.connector}' significa '${question.translation}' e conecta as ideias com sentido de ${question.family}.`;
  }

  const whyCorrect = custom?.whyCorrect ?? question.whyCorrect ?? question.explanation;
  const whyOthersFail =
    custom?.whyOthersFail ??
    question.whyOthersFail ??
    "As outras alternativas alteram o sentido pretendido ou não atendem à regência sintática necessária nesta frase.";
  const proTip =
    custom?.proTip ??
    question.proTip ??
    `Dica do Professor: O conectivo '${question.connector}' expressa ${question.family}. Identifique a função de ligação entre as ideias para acertar com confiança!`;

  return {
    fullSentence,
    sentenceTranslation,
    whyCorrect,
    whyOthersFail,
    proTip,
  };
}

function toPublicQuestion(session: GameSession): PublicQuestion | null {
  if (!session.currentQuestionId || session.status !== "playing") {
    return null;
  }

  const question = getQuestion(session.currentQuestionId);
  return {
    id: question.id,
    prompt: question.prompt,
    options: shuffle(question.options),
    family: question.family,
    index: session.index + 1,
    total: session.questionIds.length,
    mode: session.mode,
  };
}

function hud(session: GameSession) {
  return {
    sessionId: session.id,
    mode: session.mode,
    lives: session.lives,
    maxLives: session.maxLives,
    score: session.score,
    streak: session.streak,
    bestStreak: session.bestStreak,
    status: session.status,
    answered: session.answers.length,
    total: session.questionIds.length,
    familyFilter: session.familyFilter ?? "all",
  };
}


export function startGame(body: StartGameBody = {}) {
  const requested = body.questionCount ?? DEFAULT_QUESTION_COUNT;
  const requestedFamily = body.family && body.family !== "all" ? body.family : undefined;
  const filteredQuestions = requestedFamily
    ? QUESTIONS.filter((item) => item.family === requestedFamily)
    : QUESTIONS;
  const pool = filteredQuestions.length >= 4 ? filteredQuestions : QUESTIONS;

  const questionCount = Math.min(
    MAX_QUESTION_COUNT,
    Math.max(5, Number.isFinite(requested) ? requested : DEFAULT_QUESTION_COUNT),
  );

  const questionIds = shuffle(pool)
    .slice(0, Math.min(questionCount, pool.length))
    .map((question) => question.id);

  const mode: GameMode = body.mode ?? "zen";
  const maxLives = mode === "zen" ? 99 : MAX_LIVES;

  const session: GameSession = {
    id: randomUUID(),
    mode,
    lives: maxLives,
    maxLives,
    score: 0,
    streak: 0,
    bestStreak: 0,
    questionIds,
    index: 0,
    answers: [],
    status: "playing",
    currentQuestionId: questionIds[0] ?? null,
    familyFilter: body.family ?? "all",
  };

  sessions.set(session.id, session);

  return {
    ...hud(session),
    question: toPublicQuestion(session),
  };
}

export function getSession(sessionId: string) {
  const session = sessions.get(sessionId);
  if (!session) {
    return null;
  }

  return {
    ...hud(session),
    question: toPublicQuestion(session),
  };
}

export function answerQuestion(sessionId: string, body: AnswerBody) {
  const session = sessions.get(sessionId);
  if (!session) {
    return { error: "Session not found", status: 404 as const };
  }

  if (session.status !== "playing" || !session.currentQuestionId) {
    return { error: "This run is already over", status: 409 as const };
  }

  const question = getQuestion(session.currentQuestionId);
  const timedOut = Boolean(body.timedOut);
  const selectedOptionId = timedOut ? null : (body.optionId ?? null);

  if (!timedOut) {
    const isValidOption = question.options.some((option) => option.id === selectedOptionId);
    if (!isValidOption) {
      return { error: "Invalid option", status: 400 as const };
    }
  }

  const correct = !timedOut && selectedOptionId === question.correctOptionId;
  const correctOption = question.options.find((option) => option.id === question.correctOptionId);

  if (correct) {
    session.streak += 1;
    session.bestStreak = Math.max(session.bestStreak, session.streak);
    const multiplier = Math.min(session.streak, STREAK_CAP);
    session.score += BASE_POINTS * multiplier;
  } else {
    session.streak = 0;
    // No modo Arcade, perde vida. No modo Zen, vidas são preservadas para aprendizado sem julgamento!
    if (session.mode === "arcade") {
      session.lives -= 1;
    }
  }

  session.answers.push({
    questionId: question.id,
    selectedOptionId,
    correct,
    timedOut,
  });

  const hasQuestionsLeft = session.index + 1 < session.questionIds.length;
  if (session.mode === "arcade" && session.lives <= 0) {
    session.status = "lost";
    session.currentQuestionId = null;
  } else if (!hasQuestionsLeft) {
    session.status = "won";
    session.currentQuestionId = null;
  } else {
    session.index += 1;
    session.currentQuestionId = session.questionIds[session.index] ?? null;
  }

  const teacher = buildTeacherFeedback(question);

  return {
    status: 200 as const,
    result: {
      correct,
      timedOut,
      selectedOptionId,
      correctOptionId: question.correctOptionId,
      correctText: correctOption?.text ?? question.connector,
      connector: question.connector,
      translation: question.translation,
      explanation: question.explanation,
      family: question.family,
      fullSentence: teacher.fullSentence,
      sentenceTranslation: teacher.sentenceTranslation,
      whyCorrect: teacher.whyCorrect,
      whyOthersFail: teacher.whyOthersFail,
      proTip: teacher.proTip,
      ...hud(session),
      question: toPublicQuestion(session),
    },
  };
}

export function getSummary(sessionId: string) {
  const session = sessions.get(sessionId);
  if (!session) {
    return null;
  }

  const review: ReviewItem[] = session.answers.map((answer) => {
    const question = getQuestion(answer.questionId);
    const selected = question.options.find((option) => option.id === answer.selectedOptionId);
    const correct = question.options.find((option) => option.id === question.correctOptionId);
    const teacher = buildTeacherFeedback(question);

    return {
      prompt: question.prompt,
      fullSentence: teacher.fullSentence,
      sentenceTranslation: teacher.sentenceTranslation,
      selectedText: answer.timedOut ? "Tempo esgotado" : (selected?.text ?? "—"),
      correctText: correct?.text ?? question.connector,
      correct: answer.correct,
      translation: question.translation,
      explanation: question.explanation,
      whyCorrect: teacher.whyCorrect,
      proTip: teacher.proTip,
    };
  });

  return {
    ...hud(session),
    review,
  };
}

export function getConnectorsCatalog(options?: { search?: string; family?: string }): ConnectorItem[] {
  let list = CONNECTORS_CATALOG;
  if (options?.family && options.family !== "all") {
    list = list.filter((item) => item.family === options.family);
  }
  if (options?.search) {
    const term = options.search.toLowerCase().trim();
    list = list.filter(
      (item) =>
        item.connector.toLowerCase().includes(term) ||
        item.translation.toLowerCase().includes(term) ||
        item.grammarRule?.toLowerCase().includes(term) ||
        item.examples.some((ex) => ex.toLowerCase().includes(term)),
    );
  }
  return list;
}

export function getConnectorById(idOrNumber: string): ConnectorItem | null {
  const num = Number(idOrNumber);
  if (!Number.isNaN(num)) {
    const byNum = CONNECTORS_CATALOG.find((item) => item.number === num);
    if (byNum) return byNum;
  }
  return CONNECTORS_CATALOG.find((item) => item.id === idOrNumber) ?? null;
}

export function getMatchPairs(count = 6): MatchPair[] {
  const validCount = Math.min(12, Math.max(4, count));
  const selected = shuffle(CONNECTORS_CATALOG).slice(0, validCount);
  return selected.map((item) => ({
    id: item.id,
    connector: item.connector,
    translation: item.translation,
    family: item.family,
  }));
}

