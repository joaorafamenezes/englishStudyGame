import { useEffect, useMemo, useState } from "react";
import { fetchConnectors } from "../api";
import { playClickSound, playSuccessSound } from "../sound";
import type { ConnectorFamily, ConnectorItem } from "../types";

const FAMILY_LABELS: Record<ConnectorFamily | "all", string> = {
  all: "Todos (81)",
  contrast: "Contraste",
  cause: "Causa / Efeito",
  condition: "Condição",
  addition: "Adição",
  time: "Tempo",
  purpose: "Finalidade",
  example: "Exemplo",
  emphasis: "Ênfase",
  substitution: "Substituição",
  summary: "Resumo / Conclusão",
};

export function FlashcardsDeck() {
  const [connectors, setConnectors] = useState<ConnectorItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [selectedFamily, setSelectedFamily] = useState<ConnectorFamily | "all">("all");
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [masteredIds, setMasteredIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem("gap_runner_mastered");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });
  const [filterMode, setFilterMode] = useState<"all" | "learning" | "mastered">("all");

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchConnectors(selectedFamily === "all" ? undefined : selectedFamily, search)
      .then((data) => {
        if (active) {
          setConnectors(data.connectors);
          setError(null);
        }
      })
      .catch((err) => {
        if (active) {
          setError(err instanceof Error ? err.message : "Erro ao carregar os conectivos");
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [selectedFamily, search]);

  function toggleFlip(id: string) {
    playClickSound();
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function toggleMastered(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        playClickSound();
      } else {
        next.add(id);
        playSuccessSound();
      }
      try {
        localStorage.setItem("gap_runner_mastered", JSON.stringify(Array.from(next)));
      } catch {}
      return next;
    });
  }

  const filteredConnectors = useMemo(() => {
    return connectors.filter((item) => {
      const isMastered = masteredIds.has(item.id);
      if (filterMode === "learning") return !isMastered;
      if (filterMode === "mastered") return isMastered;
      return true;
    });
  }, [connectors, masteredIds, filterMode]);

  const masteredCount = masteredIds.size;
  const totalCount = connectors.length > 0 ? Math.max(80, connectors.length) : 80;
  const masteryPercentage = Math.round((masteredCount / totalCount) * 100);

  return (
    <section className="deck-container">
      <div className="deck-header card">
        <div className="deck-title-row">
          <div>
            <h2>Deck de Estudo dos 81 Conectivos</h2>
            <p className="muted">
              Consulte as regras de ouro, traduções e exemplos reais da área de TI e do cotidiano.
              Vire os cartões para testar sua memória.
            </p>
          </div>
          <div className="mastery-badge">
            <span>Progresso Geral</span>
            <strong>
              {masteredCount} / {totalCount} dominados ({masteryPercentage}%)
            </strong>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar-fill"
                style={{ width: `${Math.min(100, masteryPercentage)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Barra de Busca e Filtros */}
        <div className="deck-controls">
          <input
            type="search"
            className="search-input"
            placeholder="Buscar por conectivo (ex: Although, Meanwhile), tradução ou regra..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="status-filter-row">
            <span className="muted">Exibir:</span>
            <button
              className={`filter-chip ${filterMode === "all" ? "active" : ""}`}
              onClick={() => setFilterMode("all")}
            >
              Todos ({connectors.length})
            </button>
            <button
              className={`filter-chip ${filterMode === "learning" ? "active" : ""}`}
              onClick={() => setFilterMode("learning")}
            >
              Ainda Estudando ({connectors.filter((c) => !masteredIds.has(c.id)).length})
            </button>
            <button
              className={`filter-chip ${filterMode === "mastered" ? "active" : ""}`}
              onClick={() => setFilterMode("mastered")}
            >
              Dominados ★ ({connectors.filter((c) => masteredIds.has(c.id)).length})
            </button>
          </div>

          <div className="family-filter-pills">
            {(Object.keys(FAMILY_LABELS) as Array<ConnectorFamily | "all">).map((familyKey) => (
              <button
                key={familyKey}
                className={`pill-btn ${selectedFamily === familyKey ? "active" : ""}`}
                onClick={() => setSelectedFamily(familyKey)}
              >
                {FAMILY_LABELS[familyKey]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="deck-loading">Carregando conectivos...</div>
      ) : error ? (
        <div className="card error">{error}</div>
      ) : filteredConnectors.length === 0 ? (
        <div className="card empty-deck">
          <p>Nenhum conectivo encontrado para os filtros selecionados.</p>
        </div>
      ) : (
        <div className="cards-grid">
          {filteredConnectors.map((item) => {
            const isFlipped = Boolean(flippedCards[item.id]);
            const isMastered = masteredIds.has(item.id);

            return (
              <div
                key={item.id}
                className={`flip-card ${isFlipped ? "flipped" : ""} ${isMastered ? "card-mastered" : ""}`}
                onClick={() => toggleFlip(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleFlip(item.id);
                  }
                }}
              >
                <div className="flip-card-inner">
                  {/* Frente do Flashcard */}
                  <div className="flip-card-front">
                    <div className="card-top">
                      <span className="card-number">#{String(item.number).padStart(2, "0")}</span>
                      <span className={`family-badge family-${item.family}`}>
                        {FAMILY_LABELS[item.family] ?? item.family}
                      </span>
                    </div>

                    <div className="card-center">
                      <h3 className="card-connector">{item.connector}</h3>
                      <p className="card-hint">Clique para virar e ver regras e exemplos</p>
                    </div>

                    <div className="card-bottom">
                      <button
                        className={`master-btn ${isMastered ? "is-mastered" : ""}`}
                        onClick={(e) => toggleMastered(item.id, e)}
                        title={isMastered ? "Desmarcar como dominado" : "Marcar como dominado"}
                      >
                        {isMastered ? "★ Dominado" : "☆ Marcar como dominado"}
                      </button>
                    </div>
                  </div>

                  {/* Verso do Flashcard */}
                  <div className="flip-card-back">
                    <div className="card-top">
                      <span className="card-number">#{String(item.number).padStart(2, "0")}</span>
                      <strong className="card-connector-mini">{item.connector}</strong>
                    </div>

                    <div className="card-translation">
                      <span className="label">Tradução em Português:</span>
                      <div className="translation-text">{item.translation}</div>
                    </div>

                    {item.grammarRule ? (
                      <div className="grammar-tip">
                        <span className="label">Regra de ouro:</span>
                        <p>{item.grammarRule}</p>
                      </div>
                    ) : null}

                    {item.examples && item.examples.length > 0 ? (
                      <div className="card-examples">
                        <span className="label">Exemplos reais:</span>
                        <ul>
                          {item.examples.map((ex, idx) => (
                            <li key={idx}>{ex}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    <div className="card-bottom">
                      <button
                        className={`master-btn ${isMastered ? "is-mastered" : ""}`}
                        onClick={(e) => toggleMastered(item.id, e)}
                      >
                        {isMastered ? "★ Já domino este!" : "☆ Marcar como dominado"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
