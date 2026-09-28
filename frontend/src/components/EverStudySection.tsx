import { useEffect, useState } from "react";
import { fetchEverFamilyGuide } from "../api";
import { playClickSound } from "../sound";
import { speakEnglish } from "../tts";
import type { EverFamilyGuideResponse, GameMode } from "../types";

export const DEFAULT_EVER_GUIDE: EverFamilyGuideResponse = {
  title: "These are worth learning together:",
  ruleOfThumb:
    "Pergunte a si mesmo o que a lacuna representa: Pessoa (Who -> Whoever), Lugar (Where -> Wherever), Tempo (When -> Whenever), Coisa/Evento (What -> Whatever), Modo/Grau (How -> However) ou Contraste Analítico Direto (Where+as -> Whereas).",
  items: [
    {
      word: "Whatever",
      meaning: "o que quer que / qualquer coisa",
      targetRole: "Coisas, ações, eventos ou objetos",
      mnemonic: "What + ever = qualquer coisa que seja / no matter what",
      exampleEn: "Whatever happens during the demo, keep calm and explain the architecture.",
      examplePt: "O que quer que aconteça durante a demonstração, mantenha a calma e explique a arquitetura.",
      connectorId: "whatever",
    },
    {
      word: "Whenever",
      meaning: "quando quer que / sempre que",
      targetRole: "Tempo, momentos, ocasiões ou frequência",
      mnemonic: "When + ever = qualquer momento que seja / every time that",
      exampleEn: "Whenever the CI pipeline fails, an alert is sent to our squad Slack channel.",
      examplePt: "Sempre que a pipeline de CI falha, um alerta é enviado para o canal da nossa squad no Slack.",
      connectorId: "whenever",
    },
    {
      word: "Wherever",
      meaning: "onde quer que / onde quer que seja",
      targetRole: "Lugares, localizações geográficas ou espaciais",
      mnemonic: "Where + ever = qualquer lugar que seja / in any place where",
      exampleEn: "With cloud workstations, software engineers can code securely from wherever they are.",
      examplePt: "Com estações em nuvem, engenheiros de software podem programar com segurança de onde quer que estejam.",
      connectorId: "wherever",
    },
    {
      word: "Whoever",
      meaning: "quem quer que / qualquer pessoa que",
      targetRole: "Pessoas, sujeitos humanos ou agentes",
      mnemonic: "Who + ever = qualquer pessoa que seja / any person who",
      exampleEn: "Whoever authored this pull request followed all clean code principles.",
      examplePt: "Quem quer que tenha criado este pull request seguiu todos os princípios de código limpo.",
      connectorId: "whoever",
    },
    {
      word: "However",
      meaning: "como quer que / por mais que (e contudo)",
      targetRole: "Modo ('como quer que') ou Grau de intensidade ('por mais que + adjetivo')",
      mnemonic: "How + ever = de qualquer maneira que seja / por mais [adjetivo] que seja",
      exampleEn: "However difficult the legacy migration seems, breaking it into smaller stories ensures success.",
      examplePt: "Por mais difícil que a migração do legado pareça, dividi-la em histórias menores garante o sucesso.",
      connectorId: "however",
    },
    {
      word: "Whereas",
      meaning: "ao passo que / enquanto que",
      targetRole: "Contraste analítico direto entre dois fatos ou abordagens",
      mnemonic: "Where + as = ao passo que / enquanto que (CUIDADO: não é lugar! É contraste direto)",
      exampleEn: "Scrum focuses on short timeboxed iterations, whereas Kanban emphasizes continuous workflow.",
      examplePt: "O Scrum foca em iterações curtas e com prazo, ao passo que o Kanban enfatiza o fluxo contínuo de trabalho.",
      connectorId: "whereas",
    },
  ],
};

type EverStudySectionProps = {
  onStartPractice: (questionCount: number, mode: GameMode) => void;
  busy?: boolean;
};

export function EverStudySection({ onStartPractice, busy = false }: EverStudySectionProps) {
  // Inicialização resiliente imediata: evita 404 e tela em branco mesmo em cold-start ou deploy
  const [guide, setGuide] = useState<EverFamilyGuideResponse>(DEFAULT_EVER_GUIDE);
  const [questionCount, setQuestionCount] = useState(10);
  const [mode, setMode] = useState<GameMode>("zen");

  useEffect(() => {
    let active = true;
    fetchEverFamilyGuide()
      .then((data) => {
        if (active && data?.items?.length) {
          setGuide(data);
        }
      })
      .catch((err) => {
        // Fallback gracioso: mantemos o guia padrão incorporado para nunca exibir 'Request failed (404)'
        console.debug("Remote ever-family guide unavailable, using embedded guide:", err);
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
          <h2>Família do Sufixo -Ever & Whereas</h2>
          <p className="muted">
            Estas palavras compartilham raízes semelhantes e geram muitas dúvidas no dia a dia.
            Estudá-las em conjunto elimina a confusão entre <strong>Lugar</strong> (<em>Wherever</em>),
            {" "}<strong>Contraste</strong> (<em>Whereas</em> / <em>However</em>),{" "}
            <strong>Tempo</strong> (<em>Whenever</em>), <strong>Pessoa</strong> (<em>Whoever</em>) e{" "}
            <strong>Coisa/Ação</strong> (<em>Whatever</em>):
          </p>
        </div>

        {/* Tabela Comparativa (These are worth learning together) */}
        <div className="ever-table-wrap">
          <h3 className="ever-table-title">{guide.title}</h3>
          <table className="ever-comparison-table">
            <thead>
              <tr>
                <th>Palavra</th>
                <th>Significado</th>
                <th>A que se refere?</th>
                <th>Exemplo Contextual</th>
                <th style={{ width: 80, textAlign: "center" }}>Áudio</th>
              </tr>
            </thead>
            <tbody>
              {guide.items.map((item) => {
                const isWhereas = item.word.toLowerCase() === "whereas";
                return (
                  <tr key={item.word} className={`row-${item.connectorId}`}>
                    <td className="word-cell">
                      <strong className="ever-word">{item.word}</strong>
                      <span className="ever-mnemonic-mini">{item.mnemonic}</span>
                    </td>
                    <td className="meaning-cell">{item.meaning}</td>
                    <td className="role-cell">
                      <span className={`role-tag ${isWhereas ? "role-tag-contrast" : ""}`}>
                        {item.targetRole}
                      </span>
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
                );
              })}
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
                <span className="formula-chip formula-chip-contrast">
                  <strong>Where + as</strong> = Contraste ➔ <em>Whereas (Não é lugar!)</em>
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
      </div>

      {/* Launcher da Prática Especial */}
      <div className="card ever-launcher-card">
        <div className="launcher-header">
          <h3>Prática Exclusiva: Teste seu Domínio na Família -Ever & Whereas</h3>
          <p className="muted">
            Nesta sessão, <strong>todas as 4 alternativas serão membros da família -Ever e Whereas</strong>.
            Você precisará analisar cuidadosamente o contexto de cada frase para acertar com
            confiança e nunca mais confundir <em>Wherever</em> com <em>Whereas</em>.
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
                <option value={20}>20 frases (Desafio)</option>
                <option value={25}>25 frases (Completo - todas)</option>
              </select>
            </div>

            <button
              type="button"
              className="btn btn-primary ever-start-btn"
              onClick={handleStart}
              disabled={busy}
            >
              {busy ? "Preparando Sessão..." : "Iniciar Treino da Família -Ever & Whereas ➔"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
