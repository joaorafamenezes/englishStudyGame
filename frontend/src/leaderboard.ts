export type LeaderboardEntry = {
  id: string;
  name: string;
  score: number;
  streak: number;
  mode: "zen" | "arcade";
  date: string;
};

const LEADERBOARD_STORAGE_KEY = "gap_runner_leaderboard_v1";

export function getLeaderboard(): LeaderboardEntry[] {
  try {
    const raw = localStorage.getItem(LEADERBOARD_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.sort((a, b) => b.score - a.score).slice(0, 5);
  } catch {
    return [];
  }
}

export function qualifiesForTop5(score: number): boolean {
  if (score <= 0) return false;
  const current = getLeaderboard();
  if (current.length < 5) return true;
  return score > current[current.length - 1].score;
}

export function saveScore(entry: {
  name: string;
  score: number;
  streak: number;
  mode: "zen" | "arcade";
}): LeaderboardEntry[] {
  const current = getLeaderboard();
  const date = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const newRecord: LeaderboardEntry = {
    id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `rec-${Date.now()}`,
    name: entry.name.trim() || "Estudante Anônimo",
    score: Math.max(0, entry.score),
    streak: Math.max(0, entry.streak),
    mode: entry.mode,
    date,
  };

  const updated = [...current, newRecord]
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  try {
    localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error("Erro ao salvar ranking no localStorage:", err);
  }

  return updated;
}

export function clearLeaderboard(): void {
  try {
    localStorage.removeItem(LEADERBOARD_STORAGE_KEY);
  } catch (err) {
    console.error("Erro ao limpar ranking:", err);
  }
}
