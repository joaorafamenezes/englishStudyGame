import { useEffect, useState } from "react";
import { fetchEverFamilyGuide } from "../api";
import { playClickSound } from "../sound";
import { speakEnglish } from "../tts";
import type { EverFamilyGuideResponse, GameMode } from "../types";

type EverStudySectionProps = {
  onStartPractice: (questionCount: number, mode: GameMode) => void;
  busy?: boolean;
};

export function EverStudySection({ onStartPractice, busy = false }: EverStudySectionProps) {
  const [guide, setGuide] = useState<EverFamilyGuideResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [questionCount, setQuestionCount] = useState(10);
  const [mode, setMode] = useState<GameMode>("zen");

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchEverFamilyGuide()
      .then((data) => {
        if (active) {
          setGuide(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (active) {
          setError(err instanceof Error ? err.message : "Erro ao carregar guia do -Ever");
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  function handleStart() {
    playClickSound();
    onStartPractice(questionCount, mode);
  }

  return (
    <section className="ever-study-container">
      {/* Header com Contexto Pedagógico */}
      <div className="card ever-hero-card">
        <div className="ever-hero-header">
          <span className="ever-hero-badge">🎯 Estudo Comparativo de Conectivos</span>
          <h2>Família do Sufixo -Ever</h2>
          <p className="muted">
            Estas cinco palavras compartilham a mesma terminação e lógica gramatical. Estudá-las
            em conjunto elimina a confusão na hora de falar e escrever:
          </p>
        </div>

        {/* Tabela Comparativa (These are worth learning together) */}
        {loading ? (
          <div className="deck-loading">Carregando guia da Família -Ever...</div>
        ) : error ? (
          <div className="card error">{error}</div>
        ) : guide ? (
          <div className="ever-table-wrap">
            <h3 className="ever-table-title">{guide.title}</h3>
            <table className="ever-comparison-table">
              <thead>
                <tr>
                  <th>Palavra (-Ever)</th>
                  <th>Significado</th>
                  <th>A que se refere?</th>
                  <th>Exemplo Contextual</th>
                  <th style={{ width: 80, textAlign: "center" }}>Áudio</th>
                </tr>
              </thead>
              <tbody>
                {guide.items.map((item) => (
                  <tr key={item.word} className={`row-${item.connectorId}`}>
                    <td className="word-cell">
                      <strong className="ever-word">{item.word}</strong>
                      <span className="ever-mnemonic-mini">{item.mnemonic}</span>
                    </td>
                    <td className="meaning-cell">{item.meaning}</td>
                    <td className="role-cell">
                      <span className="role-tag">{item.targetRole}</span>
                    </td>
                    <td className="example-cell">
                      <div className="example-en">"{item.exampleEn}"</div>
                      <div className="example-pt">{item.examplePt}</div>
                    </td>
                    <td className="audio-cell" style={{ textAlign: "center" }}>
                      <button
                        type="button"
                        className="listen-mini-btn"
                        onClick={() => speakEnglish(item.exampleEn)}
                        title={`Ouvir frase com ${item.word}`}
                        aria-label={`Ouvir exemplo com ${item.word}`}
                      >
                        🔊
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Caixa Mnemônica da Regra de Ouro */}
            <div className="ever-rule-box">
              <div className="ever-rule-icon">💡</div>
              <div className="ever-rule-text">
                <strong>Regra Mental Rápida:</strong>
                <p>{guide.ruleOfThumb}</p>
                <div className="ever-formula-chips">
                  <span className="formula-chip">
                    <strong>Who</strong> = Pessoa ➔ <em>Whoever</em>
                  </span>
                  <span className="formula-chip">
                    <strong>Where</strong> = Lugar ➔ <em>Wherever</em>
                  </span>
                  <span className="formula-chip">
                    <strong>When</strong> = Tempo ➔ <em>Whenever</em>
                  </span>
                  <span className="formula-chip">
                    <strong>What</strong> = Coisa/Ação ➔ <em>Whatever</em>
                  </span>
                  <span className="formula-chip">
                    <strong>How</strong> = Modo/Grau ➔ <em>However</em>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Launcher da Prática Especial */}
      <div className="card ever-launcher-card">
        <div className="launcher-header">
          <h3>Prática Exclusiva: Teste seu Domínio no Clã do -Ever</h3>
          <p className="muted">
            Nesta sessão, <strong>todas as 4 alternativas serão membros da família -Ever</strong>.
            Você precisará analisar cuidadosamente o contexto de cada frase para acertar com
            confiança.
          </p>
        </div>

        <div className="launcher-controls">
          <div className="mode-selector-compact">
            <button
              type="button"
              className={`mode-btn ${mode === "zen" ? "active" : ""}`}
              onClick={() => {
                playClickSound();
                setMode("zen");
              }}
            >
              🧘 Modo Estudo Zen (Sem Cronômetro)
            </button>
            <button
              type="button"
              className={`mode-btn ${mode === "arcade" ? "active" : ""}`}
              onClick={() => {
                playClickSound();
                setMode("arcade");
              }}
            >
              ⚡ Modo Desafio Arcade (18s por frase)
            </button>
          </div>

          <div className="launcher-action-row">
            <div className="form-group">
              <label className="input-label" htmlFor="ever-count-select">
                Quantidade de Frases:
              </label>
              <select
                id="ever-count-select"
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
              >
                <option value={5}>5 frases (Rápido)</option>
                <option value={10}>10 frases (Recomendado)</option>
                <option value={15}>15 frases (Imersão)</option>
                <option value={20}>20 frases (Completo)</option>
              </select>
            </div>

            <button
              type="button"
              className="btn btn-primary ever-start-btn"
              onClick={handleStart}
              disabled={busy}
            >
              {busy ? "Preparando Sessão..." : "Iniciar Treino do Clã do -Ever ➔"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
