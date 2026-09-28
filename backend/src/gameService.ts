import { randomUUID } from "node:crypto";
import { CONNECTORS_CATALOG } from "./data/connectorsCatalog.js";
import { QUESTIONS } from "./data/questions.js";
import { getTeacherNote } from "./data/teacherNotes.js";
import type {
  AnswerBody,
  ConnectorFamily,
  ConnectorItem,
  EverFamilyGuideResponse,
  EverFamilyItem,
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


function normalizeConnectorName(name: string): string {
  return (name || "")
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/in contrast to/g, "in contrast")
    .replace(/\s+/g, " ")
    .trim();
}

const CONNECTOR_NORM_TO_ID = new Map<string, string>();
for (const item of CONNECTORS_CATALOG) {
  CONNECTOR_NORM_TO_ID.set(normalizeConnectorName(item.connector), item.id);
}

export function getConnectorIdForQuestion(question: Question): string | undefined {
  return CONNECTOR_NORM_TO_ID.get(normalizeConnectorName(question.connector));
}

export const EVER_FAMILY_ITEMS: EverFamilyItem[] = [
  {
    word: "Whatever",
    meaning: "o que quer que / qualquer coisa",
    targetRole: "Coisas, ações, eventos ou objetos",
    mnemonic: "What + ever = qualquer coisa que seja / no matter what",
    exampleEn: "Whatever happens during the demo, keep calm and explain the architecture.",
    examplePt: "O que quer que aconteça durante a demonstração, mantenha a calma e explique a arquitetura.",
    connectorId: "whatever",
  },
  {
    word: "Whenever",
    meaning: "quando quer que / sempre que",
    targetRole: "Tempo, momentos, ocasiões ou frequência",
    mnemonic: "When + ever = qualquer momento que seja / every time that",
    exampleEn: "Whenever the CI pipeline fails, an alert is sent to our squad Slack channel.",
    examplePt: "Sempre que a pipeline de CI falha, um alerta é enviado para o canal da nossa squad no Slack.",
    connectorId: "whenever",
  },
  {
    word: "Wherever",
    meaning: "onde quer que / onde quer que seja",
    targetRole: "Lugares, localizações geográficas ou espaciais",
    mnemonic: "Where + ever = qualquer lugar que seja / in any place where",
    exampleEn: "With cloud workstations, software engineers can code securely from wherever they are.",
    examplePt: "Com estações em nuvem, engenheiros de software podem programar com segurança de onde quer que estejam.",
    connectorId: "wherever",
  },
  {
    word: "Whoever",
    meaning: "quem quer que / qualquer pessoa que",
    targetRole: "Pessoas, sujeitos humanos ou agentes",
    mnemonic: "Who + ever = qualquer pessoa que seja / any person who",
    exampleEn: "Whoever authored this pull request followed all clean code principles.",
    examplePt: "Quem quer que tenha criado este pull request seguiu todos os princípios de código limpo.",
    connectorId: "whoever",
  },
  {
    word: "However",
    meaning: "como quer que / por mais que (e contudo)",
    targetRole: "Modo ('como quer que') ou Grau de intensidade ('por mais que + adjetivo')",
    mnemonic: "How + ever = de qualquer maneira que seja / por mais [adjetivo] que seja",
    exampleEn: "However difficult the legacy migration seems, breaking it into smaller stories ensures success.",
    examplePt: "Por mais difícil que a migração do legado pareça, dividi-la em histórias menores garante o sucesso.",
    connectorId: "however",
  },
];

export function getEverFamilyGuide(): EverFamilyGuideResponse {
  return {
    title: "These are worth learning together:",
    ruleOfThumb:
      "Pergunte a si mesmo o que a lacuna representa: Pessoa (Who -> Whoever), Lugar (Where -> Wherever), Tempo (When -> Whenever), Coisa/Evento (What -> Whatever) ou Modo/Intensidade (How -> However).",
    items: EVER_FAMILY_ITEMS,
  };
}

export function startGame(body: StartGameBody = {}) {
  const requested = body.questionCount ?? DEFAULT_QUESTION_COUNT;
  const isEverFamily =
    body.specialTopic === "ever_family" || (body.family as string) === "ever_family";
  const requestedFamily =
    !isEverFamily && body.family && body.family !== "all" ? body.family : undefined;

  let filteredQuestions = QUESTIONS;

  if (isEverFamily) {
    const dedicatedEverQuestions = QUESTIONS.filter((q) => q.id.startsWith("q-ever-"));
    if (dedicatedEverQuestions.length > 0) {
      filteredQuestions = dedicatedEverQuestions;
    } else {
      const everConnectorIds = new Set(["whatever", "whenever", "wherever", "whoever", "however"]);
      filteredQuestions = QUESTIONS.filter((q) => {
        const connId = getConnectorIdForQuestion(q);
        return connId && everConnectorIds.has(connId);
      });
    }
  } else if (requestedFamily) {
    filteredQuestions = QUESTIONS.filter((item) => item.family === requestedFamily);
  }

  const excludeSet = new Set(body.excludeConnectorIds || []);
  if (excludeSet.size > 0 && !isEverFamily) {
    const unmasteredQuestions = filteredQuestions.filter((q) => {
      const connId = getConnectorIdForQuestion(q);
      return !connId || !excludeSet.has(connId);
    });
    filteredQuestions = unmasteredQuestions;
  }

  if (filteredQuestions.length === 0) {
    throw new Error(
      "Todos os conectivos desta seleção foram marcados como dominados. Desative 'Ocultar dominados' para Modo Revisão ou desmarque conectivos no Deck.",
    );
  }

  const pool = filteredQuestions;

  const questionCount = Math.min(
    MAX_QUESTION_COUNT,
    Math.max(1, Number.isFinite(requested) ? requested : DEFAULT_QUESTION_COUNT),
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

  let pointsEarned = 0;
  let timeBonus = 0;
  let basePoints = 0;
  let streakMultiplier = 1;

  if (correct) {
    session.streak += 1;
    session.bestStreak = Math.max(session.bestStreak, session.streak);
    streakMultiplier = Math.min(session.streak, STREAK_CAP);
    basePoints = BASE_POINTS * streakMultiplier;

    // No modo Arcade, adiciona bônus de agilidade de 5 pontos por segundo restante (Opção 1)
    if (session.mode === "arcade") {
      const rawSeconds = typeof body.secondsLeft === "number" ? body.secondsLeft : 0;
      const clampedSeconds = Math.max(0, Math.min(18, Math.floor(rawSeconds)));
      timeBonus = clampedSeconds * 5;
    }

    pointsEarned = basePoints + timeBonus;
    session.score += pointsEarned;
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
      questionId: question.id,
      prompt: question.prompt,
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
      pointsEarned,
      timeBonus,
      basePoints,
      streakMultiplier,
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
      questionId: question.id,
      prompt: question.prompt,
      fullSentence: teacher.fullSentence,
      sentenceTranslation: teacher.sentenceTranslation,
      selectedText: answer.timedOut ? "Tempo esgotado" : (selected?.text ?? "—"),
      correctText: correct?.text ?? question.connector,
      correct: answer.correct,
      translation: question.translation,
      explanation: question.explanation,
      whyCorrect: teacher.whyCorrect,
      whyOthersFail: teacher.whyOthersFail,
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

