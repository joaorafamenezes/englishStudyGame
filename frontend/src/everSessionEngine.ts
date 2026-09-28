import { EVER_QUESTIONS, type EverQuestion } from "./data/everQuestions";
import type {
  AnswerResponse,
  GameMode,
  PublicQuestion,
  ReviewItem,
  SummaryResponse,
} from "./types";

const BASE_POINTS = 100;
const MAX_LIVES = 3;
const STREAK_CAP = 5;

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export type EverSessionState = {
  sessionId: string;
  mode: GameMode;
  lives: number;
  maxLives: number;
  score: number;
  streak: number;
  bestStreak: number;
  index: number;
  total: number;
  questions: EverQuestion[];
  answers: ReviewItem[];
  status: "playing" | "won" | "lost";
};

function toPublicQuestion(question: EverQuestion, index: number, total: number, mode: GameMode): PublicQuestion {
  return {
    id: question.id,
    prompt: question.prompt,
    options: question.options,
    family: question.family,
    index: index + 1,
    total,
    mode,
  };
}

export function createEverSession(questionCount = 10, mode: GameMode = "zen"): {
  state: EverSessionState;
  question: PublicQuestion;
} {
  const pool = shuffle(EVER_QUESTIONS);
  const count = Math.min(pool.length, Math.max(1, questionCount));
  const selectedQuestions = pool.slice(0, count);
  const maxLives = mode === "zen" ? 99 : MAX_LIVES;

  const state: EverSessionState = {
    sessionId: `ever-local-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    mode,
    lives: maxLives,
    maxLives,
    score: 0,
    streak: 0,
    bestStreak: 0,
    index: 0,
    total: selectedQuestions.length,
    questions: selectedQuestions,
    answers: [],
    status: "playing",
  };

  const question = toPublicQuestion(selectedQuestions[0], 0, selectedQuestions.length, mode);

  return { state, question };
}

export function answerEverQuestion(
  session: EverSessionState,
  optionId?: string,
  timedOut = false,
  secondsLeft?: number,
): {
  nextState: EverSessionState;
  response: AnswerResponse;
} {
  const current = session.questions[session.index];
  if (!current) {
    throw new Error("No active question in ever session");
  }

  const isCorrect = !timedOut && Boolean(optionId && optionId === current.correctOptionId);
  const selectedOption = current.options.find((opt) => opt.id === optionId);
  const correctOption = current.options.find((opt) => opt.id === current.correctOptionId);

  let nextStreak = isCorrect ? session.streak + 1 : 0;
  const bestStreak = Math.max(session.bestStreak, nextStreak);
  let nextLives = session.lives;
  if (!isCorrect && session.mode !== "zen") {
    nextLives = Math.max(0, session.lives - 1);
  }

  let pointsEarned = 0;
  let timeBonus = 0;
  let streakMultiplier = 1;

  if (isCorrect) {
    streakMultiplier = 1 + Math.min(session.streak, STREAK_CAP) * 0.2;
    timeBonus = session.mode === "arcade" && typeof secondsLeft === "number" ? Math.max(0, secondsLeft * 5) : 0;
    pointsEarned = Math.round(BASE_POINTS * streakMultiplier + timeBonus);
  }

  const nextScore = session.score + pointsEarned;

  const reviewItem: ReviewItem = {
    questionId: current.id,
    prompt: current.prompt,
    fullSentence: current.fullSentence,
    sentenceTranslation: current.sentenceTranslation,
    selectedText: selectedOption ? selectedOption.text : timedOut ? "Tempo Esgotado" : "Pulada",
    correctText: correctOption ? correctOption.text : current.connector,
    correct: isCorrect,
    translation: current.translation,
    explanation: current.explanation,
    whyCorrect: current.whyCorrect,
    whyOthersFail: current.whyOthersFail,
    proTip: current.proTip,
  };

  const nextAnswers = [...session.answers, reviewItem];
  const nextIndex = session.index + 1;
  const isOutOfLives = session.mode !== "zen" && nextLives <= 0;
  const isFinished = nextIndex >= session.total || isOutOfLives;

  let nextStatus: "playing" | "won" | "lost" = "playing";
  if (isFinished) {
    nextStatus = isOutOfLives ? "lost" : "won";
  }

  const nextQuestionObj = !isFinished && session.questions[nextIndex]
    ? toPublicQuestion(session.questions[nextIndex], nextIndex, session.total, session.mode)
    : null;

  const nextState: EverSessionState = {
    ...session,
    lives: nextLives,
    score: nextScore,
    streak: nextStreak,
    bestStreak,
    index: nextIndex,
    answers: nextAnswers,
    status: nextStatus,
  };

  const response: AnswerResponse = {
    sessionId: session.sessionId,
    mode: session.mode,
    lives: nextLives,
    maxLives: session.maxLives,
    score: nextScore,
    streak: nextStreak,
    bestStreak,
    status: nextStatus,
    answered: nextAnswers.length,
    total: session.total,
    familyFilter: "ever_family",
    questionId: current.id,
    prompt: current.prompt,
    correct: isCorrect,
    timedOut,
    selectedOptionId: optionId ?? null,
    correctOptionId: current.correctOptionId,
    correctText: correctOption ? correctOption.text : current.connector,
    connector: current.connector,
    translation: current.translation,
    explanation: current.explanation,
    family: current.family,
    fullSentence: current.fullSentence,
    sentenceTranslation: current.sentenceTranslation,
    whyCorrect: current.whyCorrect,
    whyOthersFail: current.whyOthersFail,
    proTip: current.proTip,
    pointsEarned,
    timeBonus,
    basePoints: isCorrect ? BASE_POINTS : 0,
    streakMultiplier,
    secondsLeft,
    question: nextQuestionObj,
  };

  return { nextState, response };
}

export function getEverSummary(session: EverSessionState): SummaryResponse {
  return {
    sessionId: session.sessionId,
    mode: session.mode,
    lives: session.lives,
    maxLives: session.maxLives,
    score: session.score,
    streak: session.streak,
    bestStreak: session.bestStreak,
    status: session.status,
    answered: session.answers.length,
    total: session.total,
    familyFilter: "ever_family",
    review: session.answers,
  };
}
