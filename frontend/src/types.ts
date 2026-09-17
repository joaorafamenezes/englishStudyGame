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

export type MatchPair = {
  id: string;
  connector: string;
  translation: string;
  family: ConnectorFamily;
};

export type GameMode = "zen" | "arcade";

export type QuestionOption = {
  id: string;
  text: string;
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

export type Hud = {
  sessionId: string;
  mode?: GameMode;
  lives: number;
  maxLives: number;
  score: number;
  streak: number;
  bestStreak: number;
  status: GameStatus;
  answered: number;
  total: number;
  familyFilter?: ConnectorFamily | "all";
};

export type SessionResponse = Hud & {
  question: PublicQuestion | null;
};

export type AnswerResponse = Hud & {
  correct: boolean;
  timedOut: boolean;
  selectedOptionId: string | null;
  correctOptionId: string;
  correctText: string;
  connector: string;
  translation: string;
  explanation: string;
  family: ConnectorFamily;
  fullSentence?: string;
  sentenceTranslation?: string;
  whyCorrect?: string;
  whyOthersFail?: string;
  proTip?: string;
  question: PublicQuestion | null;
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

export type SummaryResponse = Hud & {
  review: ReviewItem[];
};


