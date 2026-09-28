import { useEffect, useRef, useState } from "react";
import { fetchEverFamilyGuide } from "../api";
import {
  answerEverQuestion,
  createEverSession,
  getEverSummary,
  type EverSessionState,
} from "../everSessionEngine";
import {
  playClickSound,
  playErrorSound,
  playSuccessSound,
  playTickSound,
  playVictoryFanfare,
} from "../sound";
import { speakEnglish } from "../tts";
import type { AnswerResponse, EverFamilyGuideResponse, GameMode, PublicQuestion, SummaryResponse } from "../types";
import { TeacherFeedback } from "./TeacherFeedback";

const QUESTION_SECONDS = 18;

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

function renderPrompt(prompt: string) {
  const parts = prompt.split("_____");
  return parts.map((part, index) => (
    <span key={index}>
      {part}
      {index < parts.length - 1 ? <span className="blank-spot">______</span> : null}
    </span>
  ));
}

function hearts(lives: number, maxLives: number) {
  const safeLives = Math.max(0, lives);
  return "❤️".repeat(safeLives) + "🖤".repeat(Math.max(0, maxLives - safeLives));
}

type EverView = "guide" | "play" | "summary";

export function EverStudySection() {
  const [guide, setGuide] = useState<EverFamilyGuideResponse>(DEFAULT_EVER_GUIDE);
  const [view, setView] = useState<EverView>("guide");
  const [questionCount, setQuestionCount] = useState(10);
  const [mode, setMode] = useState<GameMode>("zen");

  // Estados da Sessão Exclusiva de Jogo
  const [session, setSession] = useState<EverSessionState | null>(null);
  const [question, setQuestion] = useState<PublicQuestion | null>(null);
  const [feedback, setFeedback] = useState<AnswerResponse | null>(null);
  const [summary, setSummary] = useState<SummaryResponse | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(QUESTION_SECONDS);
  const answering = useRef(false);

  // Sincronização graciosa em background do guia (nunca quebra a UI)
  useEffect(() => {
    let active = true;
    fetchEverFamilyGuide()
      .then((data) => {
        if (active && data?.items?.length) {
          setGuide(data);
        }
      })
      .catch((err) => {
        console.debug("Remote ever-family guide unavailable, using embedded guide:", err);
      });

    return () => {
      active = false;
    };
  }, []);

  // Cronômetro do Modo Arcade
  const isZen = mode === "zen";
  useEffect(() => {
    if (view !== "play" || !session || isZen || !question || feedback) {
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          void handleAnswer(undefined, true);
          return 0;
        }
        if (prev <= 4) {
          playTickSound();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [view, session?.sessionId, question?.id, feedback, isZen]);

  function startExclusivePractice() {
    playClickSound();
    const { state, question: firstQ } = createEverSession(questionCount, mode);
    setSession(state);
    setQuestion(firstQ);
    setFeedback(null);
    setSummary(null);
    setSecondsLeft(QUESTION_SECONDS);
    answering.current = false;
    setView("play");
  }

  function handleAnswer(optionId?: string, timedOut = false) {
    if (!session || answering.current || feedback) {
      return;
    }
    answering.current = true;

    const { nextState, response } = answerEverQuestion(
      session,
      optionId,
      timedOut,
      isZen ? undefined : secondsLeft,
    );

    setSession(nextState);
    setFeedback(response);

    if (response.correct) {
      playSuccessSound();
    } else {
      playErrorSound();
    }
  }

  function handleContinue() {
    if (!session || !feedback) return;
    playClickSound();

    if (session.status !== "playing") {
      const finalSummary = getEverSummary(session);
      setSummary(finalSummary);
      setView("summary");
      if (session.status === "won") {
        playVictoryFanfare();
      }
      setFeedback(null);
      answering.current = false;
      return;
    }

    setQuestion(feedback.question);
    setFeedback(null);
    setSecondsLeft(QUESTION_SECONDS);
    answering.current = false;
  }

  function handleBackToGuide() {
    playClickSound();
    setView("guide");
    setSession(null);
    setQuestion(null);
    setFeedback(null);
  }

  const timerPercent = Math.max(0, Math.min(100, (secondsLeft / QUESTION_SECONDS) * 100));

  // ==========================================
  // VIEW 1: GUIA COMPARATIVO & LAUNCHER
  // ==========================================
  if (view === "guide") {
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
              Ao iniciar este treino, <strong>todas as perguntas e alternativas serão 100% exclusivas da família -Ever e Whereas</strong>.
              Você treinará sem interferência de outros assuntos, focando em nunca mais confundir <em>Wherever</em> com <em>Whereas</em>.
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
                onClick={startExclusivePractice}
              >
                Iniciar Treino Exclusivo do Clã -Ever & Whereas ➔
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ==========================================
  // VIEW 2: ARENA DE JOGO EXCLUSIVA (PLAY)
  // ==========================================
  if (view === "play" && session && question) {
    return (
      <section className="card practice-session-card ever-exclusive-arena">
        {/* Banner Superior de Exclusividade */}
        <div className="ever-exclusive-banner">
          <div className="ever-exclusive-badge-wrap">
            <span className="ever-exclusive-chip">🎯 Sessão 100% Exclusiva</span>
            <span className="ever-exclusive-subtitle">
              Família -Ever & Whereas (Todas as alternativas deste grupo)
            </span>
          </div>
          <button
            type="button"
            className="ever-back-btn"
            onClick={handleBackToGuide}
            title="Voltar para a tabela comparativa"
          >
            ← Voltar ao Guia
          </button>
        </div>

        {/* HUD de Jogo */}
        <div className="hud">
          <div className="hud-item">
            <span>Modo Atual</span>
            <strong>{isZen ? "🧘 Estudo Zen" : "⚡ Desafio Arcade"}</strong>
          </div>

          {!isZen ? (
            <div className="hud-item">
              <span>Vidas</span>
              <strong className="lives">{hearts(session.lives, session.maxLives)}</strong>
            </div>
          ) : null}

          <div className="hud-item">
            <span>Frase</span>
            <strong>
              {question.index} de {question.total}
            </strong>
          </div>

          <div className="hud-item">
            <span>Pontos</span>
            <strong>{session.score}</strong>
          </div>

          {!isZen ? (
            <div className="hud-item">
              <span>Streak</span>
              <strong style={{ color: "var(--amber-2)" }}>{session.streak}x</strong>
            </div>
          ) : null}
        </div>

        {/* Barra de Tempo do Modo Arcade */}
        {!isZen ? (
          <div className="timer" aria-hidden="true">
            <i style={{ ["--p" as string]: `${timerPercent}%` }} />
          </div>
        ) : null}

        {/* Prompt da Frase com Áudio */}
        <div className="prompt-wrap">
          <div className="prompt-actions-bar">
            <button
              type="button"
              className="listen-btn"
              onClick={() => speakEnglish(question.prompt.replace("_____", "blank"))}
              title="Ouvir frase em inglês"
              aria-label="Ouvir frase em inglês"
            >
              🔊 Ouvir Frase
            </button>
            <span className="prompt-tag">Complete a lacuna com a opção correta:</span>
          </div>
          <p className="prompt-text">{renderPrompt(question.prompt)}</p>
        </div>

        {/* Alternativas (Estritamente da Família -Ever & Whereas) */}
        <div className="options-grid">
          {question.options.map((option) => (
            <button
              key={option.id}
              type="button"
              className="btn btn-secondary option-btn ever-option-btn"
              onClick={() => handleAnswer(option.id)}
              disabled={Boolean(feedback)}
            >
              <span className="option-key">{option.id.toUpperCase()}</span>
              <span className="option-text">{option.text}</span>
            </button>
          ))}
        </div>

        {/* Feedback Pedagógico Completo */}
        {feedback ? (
          <TeacherFeedback
            feedback={feedback}
            currentPrompt={question.prompt}
            onContinue={handleContinue}
            busy={false}
            isLastQuestion={session.index >= session.total || (mode !== "zen" && session.lives <= 0)}
          />
        ) : null}
      </section>
    );
  }

  // ==========================================
  // VIEW 3: RESUMO DE RESULTADOS (SUMMARY)
  // ==========================================
  if (view === "summary" && summary) {
    const accuracy =
      summary.total > 0
        ? Math.round(
            (summary.review.filter((item) => item.correct).length / summary.review.length) * 100,
          )
        : 0;

    return (
      <section className="card summary-card ever-summary-card">
        <div className="ever-summary-header">
          <span className="ever-hero-badge">🎯 Conclusão da Prática Exclusiva</span>
          <h2>
            {summary.status === "lost"
              ? "Sessão Concluída: Não Desista!"
              : "Parabéns pelo Treino na Família -Ever & Whereas!"}
          </h2>
          <p className="muted">
            Revise abaixo suas respostas com as anotações do professor para consolidar de vez a regra
            de cada conectivo.
          </p>
        </div>

        <div className="summary-metrics">
          <div className="metric">
            <span>Pontuação</span>
            <strong>{summary.score}</strong>
          </div>
          <div className="metric">
            <span>Aproveitamento</span>
            <strong>{accuracy}%</strong>
          </div>
          <div className="metric">
            <span>Melhor Sequência</span>
            <strong>{summary.bestStreak}x</strong>
          </div>
          <div className="metric">
            <span>Frases Estudadas</span>
            <strong>
              {summary.review.length} de {summary.total}
            </strong>
          </div>
        </div>

        <div className="summary-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={startExclusivePractice}
          >
            🔄 Treinar Novamente (Família -Ever & Whereas)
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleBackToGuide}
          >
            📖 Voltar à Tabela Comparativa
          </button>
        </div>

        {/* Revisão Detalhada Frase a Frase */}
        <div className="review-wrap">
          <h3>Revisão Pedagógica das Frases:</h3>
          <div className="review-list">
            {summary.review.map((item, idx) => (
              <div
                key={item.questionId || idx}
                className={`review-card ${item.correct ? "is-correct" : "is-wrong"}`}
              >
                <div className="review-top-row">
                  <span className="review-status">
                    {item.correct ? "✅ Acertou" : "❌ Precisa de Atenção"}
                  </span>
                  <button
                    type="button"
                    className="listen-mini-btn"
                    onClick={() => speakEnglish(item.fullSentence || item.prompt)}
                    title="Ouvir frase completa"
                  >
                    🔊
                  </button>
                </div>

                <div className="review-sentence-box">
                  <p className="review-full-sentence">
                    "{item.fullSentence || item.prompt.replace("_____", item.correctText)}"
                  </p>
                  {item.sentenceTranslation ? (
                    <p className="review-translation">"{item.sentenceTranslation}"</p>
                  ) : null}
                </div>

                <div className="review-answers-compare">
                  <span>Sua resposta: <strong>{item.selectedText}</strong></span>
                  {!item.correct ? (
                    <span>Resposta correta: <strong className="text-teal">{item.correctText}</strong></span>
                  ) : null}
                </div>

                <div className="review-notes-block">
                  <p><strong>Por que está correto:</strong> {item.whyCorrect || item.explanation}</p>
                  {item.whyOthersFail ? (
                    <p><strong>Por que as outras não cabem:</strong> {item.whyOthersFail}</p>
                  ) : null}
                  {item.proTip ? (
                    <p className="review-tip"><strong>💡 Dica do Professor:</strong> {item.proTip}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
}
