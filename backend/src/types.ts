export type ConnectorFamily =
  | "contrast"
  | "cause"
  | "condition"
  | "addition"
  | "time"
  | "purpose"
  | "example"
  | "emphasis"
  | "substitution"
  | "summary";

export type ConnectorItem = {
  number: number;
  id: string;
  connector: string;
  translation: string;
  family: ConnectorFamily;
  grammarRule?: string;
  notes?: string;
  examples: string[];
};

export type GameMode = "zen" | "arcade";

export type QuestionOption = {
  id: string;
  text: string;
};

export type Question = {
  id: string;
  prompt: string;
  options: QuestionOption[];
  correctOptionId: string;
  connector: string;
  family: ConnectorFamily;
  translation: string;
  explanation: string;
  fullSentence?: string;
  sentenceTranslation?: string;
  whyCorrect?: string;
  whyOthersFail?: string;
  proTip?: string;
};

export type PublicQuestion = {
  id: string;
  prompt: string;
  options: QuestionOption[];
  family: ConnectorFamily;
  index: number;
  total: number;
  mode?: GameMode;
};

export type GameStatus = "playing" | "won" | "lost";

export type AnswerRecord = {
  questionId: string;
  selectedOptionId: string | null;
  correct: boolean;
  timedOut: boolean;
};

export type GameSession = {
  id: string;
  mode: GameMode;
  lives: number;
  maxLives: number;
  score: number;
  streak: number;
  bestStreak: number;
  questionIds: string[];
  index: number;
  answers: AnswerRecord[];
  status: GameStatus;
  currentQuestionId: string | null;
  familyFilter?: ConnectorFamily | "all";
};

export type StartGameBody = {
  questionCount?: number;
  family?: ConnectorFamily | "all";
  mode?: GameMode;
};

export type AnswerBody = {
  optionId?: string | null;
  timedOut?: boolean;
};

export type MatchPair = {
  id: string;
  connector: string;
  translation: string;
  family: ConnectorFamily;
};

export type ReviewItem = {
  prompt: string;
  fullSentence?: string;
  sentenceTranslation?: string;
  selectedText: string;
  correctText: string;
  correct: boolean;
  translation: string;
  explanation: string;
  whyCorrect?: string;
  proTip?: string;
};


