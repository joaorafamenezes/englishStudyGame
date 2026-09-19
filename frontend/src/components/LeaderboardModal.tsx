import { useEffect, useState } from "react";
import { clearLeaderboard, getLeaderboard, type LeaderboardEntry } from "../leaderboard";
import { playClickSound } from "../sound";

type LeaderboardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  highlightId?: string | null;
};

const MEDALS = ["🥇", "🥈", "🥉", "4º", "5º"];

export function LeaderboardModal({ isOpen, onClose, highlightId }: LeaderboardModalProps) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    if (isOpen) {
      setEntries(getLeaderboard());
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function handleClear() {
    playClickSound();
    if (window.confirm("Deseja realmente zerar o Hall da Fama local? Essa ação não pode ser desfeita.")) {
      clearLeaderboard();
      setEntries([]);
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="leaderboard-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="leaderboard-modal-header">
          <div className="leaderboard-modal-title">
            <span className="trophy-icon">🏆</span>
            <div>
              <h2>Hall da Fama · Top 5</h2>
              <p className="muted">As maiores pontuações locais em conectivos</p>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Fechar ranking"
          >
            ✕
          </button>
        </header>

        <div className="leaderboard-modal-body">
          {entries.length === 0 ? (
            <div className="empty-leaderboard">
              <span className="empty-icon">🎯</span>
              <p>Nenhum recorde registrado ainda!</p>
              <span className="muted">
                Complete uma rodada de estudo ou desafio para registrar sua pontuação aqui.
              </span>
            </div>
          ) : (
            <ul className="leaderboard-list">
              {entries.map((entry, index) => {
                const isHighlight = highlightId === entry.id;
                const medal = MEDALS[index] ?? `${index + 1}º`;
                const rankClass = index === 0 ? "rank-gold" : index === 1 ? "rank-silver" : index === 2 ? "rank-bronze" : "rank-standard";

                return (
                  <li
                    key={entry.id}
                    className={`leaderboard-item ${rankClass} ${isHighlight ? "is-new-record" : ""}`}
                  >
                    <div className="leaderboard-rank-badge">{medal}</div>

                    <div className="leaderboard-player-info">
                      <div className="player-name-row">
                        <strong className="player-name">{entry.name}</strong>
                        {isHighlight ? (
                          <span className="new-badge">NOVO RECORDE!</span>
                        ) : null}
                      </div>
                      <div className="player-meta">
                        <span className="entry-mode">
                          {entry.mode === "arcade" ? "⚡ Arcade" : "🧘 Zen"}
                        </span>
                        <span className="entry-streak">🔥 Combo: {entry.streak}</span>
                        <span className="entry-date">📅 {entry.date}</span>
                      </div>
                    </div>

                    <div className="leaderboard-score-badge">
                      <strong>{entry.score.toLocaleString("pt-BR")}</strong>
                      <span>pts</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <footer className="leaderboard-modal-footer">
          {entries.length > 0 ? (
            <button
              type="button"
              className="btn btn-ghost clear-ranking-btn"
              onClick={handleClear}
            >
              🗑️ Zerar Ranking
            </button>
          ) : null}
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Fechar
          </button>
        </footer>
      </div>
    </div>
  );
}
