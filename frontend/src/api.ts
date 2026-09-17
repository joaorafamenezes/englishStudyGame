import type {
  AnswerResponse,
  ConnectorItem,
  MatchPair,
  SessionResponse,
  SummaryResponse,
} from "./types";

const API_BASE = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL.replace(/\/$/, "")}/api`
  : "/api";

async function parseJson<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new Error(payload?.error ?? `Request failed (${response.status})`);
  }
  return (await response.json()) as T;
}

export function startSession(
  questionCount = 10,
  family?: string,
  mode: "zen" | "arcade" = "zen",
): Promise<SessionResponse> {
  return fetch(`${API_BASE}/sessions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      questionCount,
      family: family === "all" ? undefined : family,
      mode,
    }),
  }).then((response) => parseJson<SessionResponse>(response));
}

export function submitAnswer(
  sessionId: string,
  payload: { optionId?: string | null; timedOut?: boolean },
): Promise<AnswerResponse> {
  return fetch(`${API_BASE}/sessions/${sessionId}/answers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then((response) => parseJson<AnswerResponse>(response));
}

export function fetchSummary(sessionId: string): Promise<SummaryResponse> {
  return fetch(`${API_BASE}/sessions/${sessionId}/summary`).then((response) =>
    parseJson<SummaryResponse>(response),
  );
}

export function fetchConnectors(
  family?: string,
  search?: string,
): Promise<{ total: number; connectors: ConnectorItem[] }> {
  const params = new URLSearchParams();
  if (family && family !== "all") params.set("family", family);
  if (search && search.trim()) params.set("search", search.trim());
  const qs = params.toString();
  return fetch(`${API_BASE}/connectors${qs ? `?${qs}` : ""}`).then((response) =>
    parseJson<{ total: number; connectors: ConnectorItem[] }>(response),
  );
}

export function fetchMatchPairs(count = 6): Promise<{ pairs: MatchPair[] }> {
  return fetch(`${API_BASE}/match-pairs?count=${count}`).then((response) =>
    parseJson<{ pairs: MatchPair[] }>(response),
  );
}

