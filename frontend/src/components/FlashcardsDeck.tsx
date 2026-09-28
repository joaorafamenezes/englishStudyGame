import { useEffect, useMemo, useState } from "react";
import { fetchConnectors } from "../api";
import {
  getMasteredIds,
  MASTERED_CHANGED_EVENT,
  setAreaMastered,
  toggleMasteredId,
} from "../mastery";
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
  const [allConnectors, setAllConnectors] = useState<ConnectorItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [selectedFamily, setSelectedFamily] = useState<ConnectorFamily | "all">("all");
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [masteredIds, setMasteredIds] = useState<Set<string>>(() => getMasteredIds());
  const [filterMode, setFilterMode] = useState<"all" | "learning" | "mastered">("all");

  // Carrega todos os conectivos uma vez para calcular progresso global e por área
  useEffect(() => {
    fetchConnectors()
      .then((data) => setAllConnectors(data.connectors))
      .catch(() => {});
  }, []);

  // Sincroniza estado se houver alteração em outra aba ou componente
  useEffect(() => {
    function handleSync() {
      setMasteredIds(getMasteredIds());
    }
    window.addEventListener(MASTERED_CHANGED_EVENT, handleSync);
    return () => window.removeEventListener(MASTERED_CHANGED_EVENT, handleSync);
  }, []);

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
    const { next, isNowMastered } = toggleMasteredId(id);
    setMasteredIds(next);
    if (isNowMastered) {
      playSuccessSound();
    } else {
      playClickSound();
    }
  }

  function handleToggleCurrentArea(targetMastered: boolean) {
    if (selectedFamily === "all") return;
    const familyItems = (allConnectors.length > 0 ? allConnectors : connectors).filter(
      (c) => c.family === selectedFamily,
    );
    const ids = familyItems.map((c) => c.id);
    const next = setAreaMastered(ids, targetMastered);
    setMasteredIds(next);
    if (targetMastered) {
      playSuccessSound();
    } else {
      playClickSound();
    }
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
  const totalCount = allConnectors.length > 0 ? allConnectors.length : Math.max(81, connectors.length);
  const masteryPercentage = Math.round((masteredCount / totalCount) * 100);

  const selectedFamilyStats = useMemo(() => {
    if (selectedFamily === "all") return null;
    const items = (allConnectors.length > 0 ? allConnectors : connectors).filter(
      (c) => c.family === selectedFamily,
    );
    const mastered = items.filter((c) => masteredIds.has(c.id)).length;
    return {
      totalCount: items.length,
      masteredCount: mastered,
      isFullyMastered: items.length > 0 && mastered === items.length,
    };
  }, [selectedFamily, allConnectors, connectors, masteredIds]);

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
            {(Object.keys(FAMILY_LABELS) as Array<ConnectorFamily | "all">).map((familyKey) => {
              const familyItems = (allConnectors.length > 0 ? allConnectors : connectors).filter(
                (c) => familyKey === "all" || c.family === familyKey,
              );
              const familyMastered = familyItems.filter((c) => masteredIds.has(c.id)).length;
              const isFully =
                familyKey !== "all" && familyItems.length > 0 && familyMastered === familyItems.length;

              return (
                <button
                  key={familyKey}
                  className={`pill-btn ${selectedFamily === familyKey ? "active" : ""} ${
                    isFully ? "pill-mastered" : ""
                  }`}
                  onClick={() => setSelectedFamily(familyKey)}
                >
                  {FAMILY_LABELS[familyKey]}
                  {familyKey !== "all" && familyItems.length > 0 ? (
                    <span className="pill-badge">
                      {familyMastered}/{familyItems.length}
                      {isFully ? " ★" : ""}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>

          {/* Barra de Ação por Área/Categoria Selecionada */}
          {selectedFamilyStats && selectedFamily !== "all" ? (
            <div className="area-mastery-action-bar">
              <div className="area-mastery-info">
                <span className="area-title">
                  Área: <strong>{FAMILY_LABELS[selectedFamily]}</strong>
                </span>
                <span className="area-counter">
                  {selectedFamilyStats.masteredCount} de {selectedFamilyStats.totalCount} dominados
                  {selectedFamilyStats.isFullyMastered ? " · Categoria 100% Dominada! 🌟" : ""}
                </span>
              </div>
              <button
                type="button"
                className={`btn-area-mastery ${
                  selectedFamilyStats.isFullyMastered ? "is-mastered" : ""
                }`}
                onClick={() => handleToggleCurrentArea(!selectedFamilyStats.isFullyMastered)}
              >
                {selectedFamilyStats.isFullyMastered
                  ? "☆ Desmarcar Área Inteira"
                  : "★ Marcar Área como Dominada"}
              </button>
            </div>
          ) : null}
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
