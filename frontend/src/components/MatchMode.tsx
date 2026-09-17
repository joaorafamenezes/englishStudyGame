import { useEffect, useState } from "react";
import { fetchMatchPairs } from "../api";
import {
  playClickSound,
  playErrorSound,
  playSuccessSound,
  playVictoryFanfare,
} from "../sound";
import type { MatchPair } from "../types";

type Tile = {
  tileId: string;
  pairId: string;
  text: string;
  lang: "en" | "pt";
};

export function MatchMode() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pairs, setPairs] = useState<MatchPair[]>([]);
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [selectedTile, setSelectedTile] = useState<Tile | null>(null);
  const [matchedPairIds, setMatchedPairIds] = useState<Set<string>>(new Set());
  const [failedPair, setFailedPair] = useState<[string, string] | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [roundsWon, setRoundsWon] = useState(0);
  const [roundComplete, setRoundComplete] = useState(false);

  function loadRound() {
    setLoading(true);
    setError(null);
    setSelectedTile(null);
    setMatchedPairIds(new Set());
    setFailedPair(null);
    setRoundComplete(false);

    fetchMatchPairs(6)
      .then((data) => {
        setPairs(data.pairs);

        const newTiles: Tile[] = [];
        data.pairs.forEach((pair) => {
          newTiles.push({
            tileId: `en-${pair.id}`,
            pairId: pair.id,
            text: pair.connector,
            lang: "en",
          });
          newTiles.push({
            tileId: `pt-${pair.id}`,
            pairId: pair.id,
            text: pair.translation,
            lang: "pt",
          });
        });

        // Embaralha todas as peças
        for (let i = newTiles.length - 1; i > 0; i -= 1) {
          const j = Math.floor(Math.random() * (i + 1));
          [newTiles[i], newTiles[j]] = [newTiles[j], newTiles[i]];
        }

        setTiles(newTiles);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Erro ao carregar pares");
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadRound();
  }, []);

  function handleTileClick(tile: Tile) {
    if (matchedPairIds.has(tile.pairId) || failedPair) return;

    playClickSound();

    if (!selectedTile) {
      setSelectedTile(tile);
      return;
    }

    if (selectedTile.tileId === tile.tileId) {
      setSelectedTile(null);
      return;
    }

    // Mesma língua (ex: clicou em dois ingleses ou dois portugueses)
    if (selectedTile.lang === tile.lang) {
      setSelectedTile(tile);
      return;
    }

    // Verifica acerto
    if (selectedTile.pairId === tile.pairId) {
      playSuccessSound();
      const nextMatched = new Set(matchedPairIds);
      nextMatched.add(tile.pairId);
      setMatchedPairIds(nextMatched);

      const nextStreak = streak + 1;
      setStreak(nextStreak);
      setBestStreak((prev) => Math.max(prev, nextStreak));
      const bonus = Math.min(nextStreak, 5);
      setScore((prev) => prev + 150 * bonus);

      setSelectedTile(null);

      // Verificação de conclusão da rodada
      if (nextMatched.size === pairs.length) {
        setRoundComplete(true);
        setRoundsWon((prev) => prev + 1);
        playVictoryFanfare();
      }
    } else {
      // Erro na combinação
      playErrorSound();
      setStreak(0);
      setFailedPair([selectedTile.tileId, tile.tileId]);

      setTimeout(() => {
        setFailedPair(null);
        setSelectedTile(null);
      }, 700);
    }
  }

  return (
    <section className="match-container">
      <div className="card match-header">
        <div className="hud">
          <div className="hud-item">
            <span>Pontuação</span>
            <strong>{score}</strong>
          </div>
          <div className="hud-item">
            <span>Streak Atual</span>
            <strong>{streak}x</strong>
          </div>
          <div className="hud-item">
            <span>Melhor Combo</span>
            <strong>{bestStreak}</strong>
          </div>
          <div className="hud-item">
            <span>Rodadas Concluídas</span>
            <strong>{roundsWon}</strong>
          </div>
        </div>
        <p className="muted" style={{ margin: "10px 0 0" }}>
          Clique em um conectivo em inglês e encontre sua respectiva tradução em português o mais
          rápido possível!
        </p>
      </div>

      {loading ? (
        <div className="card deck-loading">Carregando novo desafio...</div>
      ) : error ? (
        <div className="card error">{error}</div>
      ) : roundComplete ? (
        <div className="card round-cleared">
          <div className="display" style={{ fontSize: 36, color: "var(--amber-2)" }}>
            ⚡ Rodada Concluída!
          </div>
          <p>Você associou todos os 6 pares de conectivos com sucesso!</p>
          <div className="result-stats">
            <div>
              Pontos acumulados: <strong>{score}</strong>
            </div>
            <div>
              Melhor sequência: <strong>{bestStreak} acertos</strong>
            </div>
          </div>
          <button className="btn btn-primary" onClick={loadRound} style={{ marginTop: 20 }}>
            Jogar Próxima Rodada ➔
          </button>
        </div>
      ) : (
        <div className="match-grid">
          {tiles.map((tile) => {
            const isMatched = matchedPairIds.has(tile.pairId);
            const isSelected = selectedTile?.tileId === tile.tileId;
            const isFailed =
              failedPair && (failedPair[0] === tile.tileId || failedPair[1] === tile.tileId);

            const classNames = [
              "match-tile",
              tile.lang === "en" ? "tile-en" : "tile-pt",
              isMatched ? "matched" : "",
              isSelected ? "selected" : "",
              isFailed ? "shake-error" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <button
                key={tile.tileId}
                className={classNames}
                disabled={isMatched}
                onClick={() => handleTileClick(tile)}
              >
                <span className="tile-lang-tag">{tile.lang === "en" ? "EN" : "PT"}</span>
                <span className="tile-text">{tile.text}</span>
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
