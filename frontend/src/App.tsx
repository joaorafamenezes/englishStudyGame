import { useEffect, useMemo, useRef, useState } from "react";
import { fetchSummary, startSession, submitAnswer } from "./api";
import { FlashcardsDeck } from "./components/FlashcardsDeck";
import { MatchMode } from "./components/MatchMode";
import { TeacherFeedback } from "./components/TeacherFeedback";
import {
  isSoundMuted,
  playClickSound,
  playErrorSound,
  playSuccessSound,
  playTickSound,
  playVictoryFanfare,
  toggleSoundMute,
} from "./sound";
import { speakEnglish } from "./tts";
import type {
  AnswerResponse,
  ConnectorFamily,
  GameMode,
  PublicQuestion,
  SessionResponse,
  SummaryResponse,
} from "./types";

const QUESTION_SECONDS = 18;

const FAMILY_LABEL: Record<string, string> = {
  all: "Todas as Categorias",
  contrast: "Contraste (Although, Despite, However...)",
  cause: "Causa / Efeito (Because, As a result, Hence...)",
  condition: "Condição (If, Unless, As long as...)",
  addition: "Adição (Along with, As well as, Besides...)",
  time: "Tempo (Meanwhile, Afterwards, In advance...)",
  purpose: "Finalidade (In order to, So that, Towards...)",
  example: "Exemplo (For instance, Such as...)",
  emphasis: "Ênfase (Actually, Indeed, At least, No longer...)",
  substitution: "Substituição (Instead of, Rather than...)",
  summary: "Resumo / Conclusão (In short, To sum up, All in all...)",
};

type Screen = "home" | "play" | "result";
type ActiveTab = "practice" | "deck" | "match";

function renderPrompt(prompt: string) {
  const parts = prompt.split("_____");
  return parts.map((part, index) => (
    <span key={index}>
      {part}
      {index < parts.length - 1 ? <span className="gap"> </span> : null}
    </span>
  ));
}

function hearts(lives: number, maxLives: number) {
  return `${"♥".repeat(lives)}${"♡".repeat(Math.max(0, maxLives - lives))}`;
}

export function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("practice");
  const [soundMuted, setSoundMuted] = useState(() => isSoundMuted());

  // Configuração da Sessão de Prática
  const [gameMode, setGameMode] = useState<GameMode>("zen");
  const [screen, setScreen] = useState<Screen>("home");
  const [questionCount, setQuestionCount] = useState(10);
  const [selectedFamily, setSelectedFamily] = useState<ConnectorFamily | "all">("all");

  const [session, setSession] = useState<SessionResponse | null>(null);
  const [question, setQuestion] = useState<PublicQuestion | null>(null);
  const [feedback, setFeedback] = useState<AnswerResponse | null>(null);
  const [summary, setSummary] = useState<SummaryResponse | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(QUESTION_SECONDS);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const answering = useRef(false);

  const isZen = gameMode === "zen";

  const timerPercent = useMemo(
    () => Math.max(0, (secondsLeft / QUESTION_SECONDS) * 100),
    [secondsLeft],
  );

  function handleMuteToggle() {
    const next = toggleSoundMute();
    setSoundMuted(next);
  }

  async function begin() {
    setError(null);
    setBusy(true);
    playClickSound();
    try {
      const next = await startSession(questionCount, selectedFamily, gameMode);
      setSession(next);
      setQuestion(next.question);
      setFeedback(null);
      setSummary(null);
      setSecondsLeft(QUESTION_SECONDS);
      setScreen("play");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível iniciar a prática");
    } finally {
      setBusy(false);
    }
  }

  async function answer(optionId?: string, timedOut = false) {
    if (!session || answering.current || feedback) {
      return;
    }
    answering.current = true;
    setBusy(true);
    setError(null);
    try {
      const result = await submitAnswer(session.sessionId, { optionId, timedOut });
      setFeedback(result);

      if (result.correct) {
        playSuccessSound();
      } else {
        if (isZen) {
          playClickSound(); // No modo zen, som suave sem punição!
        } else {
          playErrorSound();
        }
      }

      setSession({
        sessionId: result.sessionId,
        mode: result.mode ?? session.mode,
        lives: result.lives,
        maxLives: result.maxLives,
        score: result.score,
        streak: result.streak,
        bestStreak: result.bestStreak,
        status: result.status,
        answered: result.answered,
        total: result.total,
        question: result.question,
        familyFilter: session.familyFilter,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível processar a resposta");
    } finally {
      answering.current = false;
      setBusy(false);
    }
  }

  async function goNext() {
    if (!session) {
      return;
    }
    playClickSound();
    if (session.status !== "playing" || !session.question) {
      setBusy(true);
      try {
        const data = await fetchSummary(session.sessionId);
        setSummary(data);
        setScreen("result");
        playVictoryFanfare();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Não foi possível carregar o resumo");
      } finally {
        setBusy(false);
      }
      return;
    }

    setQuestion(session.question);
    setFeedback(null);
    setSecondsLeft(QUESTION_SECONDS);
  }

  // Timer: Apenas ativo no modo Arcade
  useEffect(() => {
    if (isZen || activeTab !== "practice" || screen !== "play" || feedback || !question) {
      return;
    }

    const timer = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 4 && current > 1) {
          playTickSound();
        }
        if (current <= 1) {
          window.clearInterval(timer);
          void answer(undefined, true);
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isZen, activeTab, screen, feedback, question?.id]);

  // Atalhos do teclado (1, 2, 3, 4, Enter/Espaço e P para ouvir)
  useEffect(() => {
    if (activeTab !== "practice" || screen !== "play") return;

    function onKeyDown(e: KeyboardEvent) {
      if (feedback) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          void goNext();
        }
        return;
      }

      if (!question || busy) return;

      const key = e.key.toLowerCase();

      // Atalho 'p' para ouvir a frase
      if (key === "p") {
        e.preventDefault();
        speakEnglish(question.prompt.replace("_____", "..."));
        return;
      }

      let index = -1;
      if (key === "1" || key === "a") index = 0;
      else if (key === "2" || key === "b") index = 1;
      else if (key === "3" || key === "c") index = 2;
      else if (key === "4" || key === "d") index = 3;

      if (index >= 0 && index < question.options.length) {
        e.preventDefault();
        const selected = question.options[index];
        if (selected) {
          void answer(selected.id);
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeTab, screen, feedback, question, busy]);

  return (
    <div className="app-shell">
      {/* Barra de Navegação Superior */}
      <header className="topbar">
        <div className="brand">
          <strong>English Connectors · Practice & Learn</strong>
          <span>Ambiente de estudo focado em compreensão e contexto real</span>
        </div>

        <div className="topbar-actions">
          {session && activeTab === "practice" && screen === "play" ? (
            <span className="mode-indicator-chip">
              {isZen ? "🧘 Modo Estudo Zen" : "⚡ Modo Desafio Arcade"}
            </span>
          ) : null}

          <button
            type="button"
            className="sound-toggle-btn"
            onClick={handleMuteToggle}
            title={soundMuted ? "Ativar som" : "Silenciar som"}
            aria-label={soundMuted ? "Ativar som" : "Silenciar som"}
          >
            {soundMuted ? "🔇 Mudo" : "🔊 Som"}
          </button>
        </div>
      </header>

      {/* Abas de Navegação */}
      <nav className="main-tabs" aria-label="Abas de Estudo">
        <button
          className={`tab-item ${activeTab === "practice" ? "active" : ""}`}
          onClick={() => {
            playClickSound();
            setActiveTab("practice");
          }}
        >
          📖 Prática Guiada de Frases
        </button>
        <button
          className={`tab-item ${activeTab === "deck" ? "active" : ""}`}
          onClick={() => {
            playClickSound();
            setActiveTab("deck");
          }}
        >
          📚 Deck dos 81 Conectivos
        </button>
        <button
          className={`tab-item ${activeTab === "match" ? "active" : ""}`}
          onClick={() => {
            playClickSound();
            setActiveTab("match");
          }}
        >
          ⚡ Match Rápido (Associação)
        </button>
      </nav>

      {/* TELA INICIAL DA PRÁTICA */}
      {activeTab === "practice" && screen === "home" ? (
        <section className="card hero-learning">
          <div className="learning-welcome">
            <span className="learning-tag">🎓 Sem Julgamento · Foco em Fixação</span>
            <h1>Pratique conectivos em frases reais da vida e da tecnologia.</h1>
            <p>
              Exercite preenchimento de lacunas com explicações sintáticas detalhadas, tradução
              completa da frase em português e pronúncia em inglês. Aprenda o porquê de cada escolha
              sem estresse ou punição.
            </p>
          </div>

          {/* Seleção do Modo de Estudo (Zen vs Arcade) */}
          <div className="mode-selector-grid">
            <div
              className={`mode-card ${gameMode === "zen" ? "selected" : ""}`}
              onClick={() => {
                playClickSound();
                setGameMode("zen");
              }}
              role="button"
              tabIndex={0}
            >
              <div className="mode-card-badge">Recomendado para Estudo</div>
              <div className="mode-card-header">
                <span className="mode-icon">🧘</span>
                <h3>Modo Estudo Zen</h3>
              </div>
              <p>
                Zero pressão. Sem vidas, sem cronômetro correndo. Leia as explicações do professor e
                as traduções com tranquilidade.
              </p>
            </div>

            <div
              className={`mode-card ${gameMode === "arcade" ? "selected" : ""}`}
              onClick={() => {
                playClickSound();
                setGameMode("arcade");
              }}
              role="button"
              tabIndex={0}
            >
              <div className="mode-card-badge">Desafio de Agilidade</div>
              <div className="mode-card-header">
                <span className="mode-icon">⚡</span>
                <h3>Modo Desafio Arcade</h3>
              </div>
              <p>
                18 segundos por frase, 3 vidas e bônus por sequência de acertos para quem deseja
                testar reflexos rápidos.
              </p>
            </div>
          </div>

          <div className="start-row" style={{ marginTop: 24 }}>
            <div className="form-group">
              <label className="input-label" htmlFor="family-select">
                Família de Conectivos:
              </label>
              <select
                id="family-select"
                value={selectedFamily}
                onChange={(event) =>
                  setSelectedFamily(event.target.value as ConnectorFamily | "all")
                }
              >
                {(Object.keys(FAMILY_LABEL) as Array<ConnectorFamily | "all">).map((key) => (
                  <option key={key} value={key}>
                    {FAMILY_LABEL[key]}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="input-label" htmlFor="count-select">
                Quantidade de Frases:
              </label>
              <select
                id="count-select"
                value={questionCount}
                onChange={(event) => setQuestionCount(Number(event.target.value))}
                aria-label="Quantidade de frases"
              >
                <option value={8}>8 frases</option>
                <option value={10}>10 frases</option>
                <option value={15}>15 frases</option>
                <option value={20}>20 frases</option>
              </select>
            </div>

            <button
              className="btn btn-primary start-btn"
              onClick={() => void begin()}
              disabled={busy}
            >
              {busy ? "Preparando..." : "Começar a Praticar ➔"}
            </button>
          </div>

          {error ? <p className="error">{error}</p> : null}
        </section>
      ) : null}

      {/* TELA DE PRÁTICA ATIVA */}
      {activeTab === "practice" && screen === "play" && session && question ? (
        <section className="card practice-session-card">
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
              <span>Pontos de Prática</span>
              <strong>{session.score}</strong>
            </div>

            {!isZen ? (
              <div className="hud-item">
                <span>Streak</span>
                <strong style={{ color: "var(--amber-2)" }}>{session.streak}x</strong>
              </div>
            ) : null}
          </div>

          {/* Barra de Tempo apenas no Modo Arcade */}
          {!isZen ? (
            <div className="timer" aria-hidden="true">
              <i style={{ ["--p" as string]: `${timerPercent}%` }} />
            </div>
          ) : null}

          <div className="practice-prompt-header">
            <span className="family-chip">
              Categoria: {FAMILY_LABEL[question.family] ?? question.family}
            </span>

            <button
              type="button"
              className="speak-prompt-btn"
              onClick={() => speakEnglish(question.prompt.replace("_____", "..."))}
              title="Ouvir a frase em inglês"
            >
              🔊 Ouvir Frase
            </button>
          </div>

          <h2 className="prompt">{renderPrompt(question.prompt)}</h2>

          {/* Alternativas */}
          <div className="options">
            {question.options.map((option, idx) => {
              const selected = feedback?.selectedOptionId === option.id;
              const isCorrect = feedback?.correctOptionId === option.id;
              const className = [
                "option",
                feedback && isCorrect ? "correct" : "",
                feedback && selected && !feedback.correct ? "selected-learning" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <button
                  key={option.id}
                  className={className}
                  disabled={Boolean(feedback) || busy}
                  onClick={() => void answer(option.id)}
                >
                  <span className="key-hint">[{idx + 1}]</span>
                  <span className="option-text">{option.text}</span>
                </button>
              );
            })}
          </div>

          {/* Painel do Professor com Explicação Detalhada */}
          {feedback ? (
            <TeacherFeedback
              feedback={feedback}
              onContinue={() => void goNext()}
              busy={busy}
              isLastQuestion={session.status !== "playing" || !session.question}
            />
          ) : null}

          {error ? <p className="error">{error}</p> : null}
        </section>
      ) : null}

      {/* TELA DE REVISÃO E RESUMO PÓS-PRÁTICA */}
      {activeTab === "practice" && screen === "result" && summary ? (
        <section className="card result-card">
          <div className="result-head">
            <div>
              <span className="learning-tag">🎓 Prática Concluída com Sucesso</span>
              <h2>{isZen ? "Excelente sessão de estudos!" : "Desafio Finalizado!"}</h2>
              <p className="muted">
                Você praticou {summary.answered} frases conectivas. Revise as explicações abaixo
                para consolidar sua memória.
              </p>
            </div>
            <div className="result-score-block">
              <div className="score-val">{summary.score} pts</div>
              <span className="muted">Melhor combo: {summary.bestStreak} acertos</span>
            </div>
          </div>

          <div className="review">
            <h3>Revisão de Aprendizado:</h3>
            {summary.review.map((item, index) => (
              <article
                key={`${item.prompt}-${index}`}
                className={`review-item ${item.correct ? "ok" : "learning-review"}`}
              >
                <div className="review-top-row">
                  <div className="review-prompt">
                    {item.fullSentence || item.prompt.replace("_____", item.correctText)}
                  </div>
                  <button
                    type="button"
                    className="listen-mini-btn"
                    onClick={() =>
                      speakEnglish(
                        item.fullSentence || item.prompt.replace("_____", item.correctText),
                      )
                    }
                    title="Ouvir frase em inglês"
                  >
                    🔊 Ouvir
                  </button>
                </div>

                {item.sentenceTranslation ? (
                  <div className="review-translation">"{item.sentenceTranslation}"</div>
                ) : null}

                <div className="review-answer-line">
                  Conectivo:{" "}
                  <strong style={{ color: "var(--ok)" }}>
                    {item.correctText} ({item.translation})
                  </strong>{" "}
                  · Sua seleção: <b>{item.selectedText}</b>
                </div>

                {item.whyCorrect ? (
                  <div className="review-teacher-tip">
                    <span>💡 Nota do Professor:</span> {item.whyCorrect}
                  </div>
                ) : (
                  <div className="muted review-tip">{item.explanation}</div>
                )}
              </article>
            ))}
          </div>

          <div className="start-row" style={{ marginTop: 28 }}>
            <button className="btn btn-primary" onClick={() => void begin()} disabled={busy}>
              Praticar Novamente 🔄
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => {
                playClickSound();
                setActiveTab("deck");
              }}
            >
              Consultar Deck dos 81 Conectivos 📚
            </button>
            <button className="btn btn-ghost" onClick={() => setScreen("home")}>
              Voltar ao Menu
            </button>
          </div>
        </section>
      ) : null}

      {/* MODO 2: DECK DOS 81 CONECTIVOS */}
      {activeTab === "deck" ? <FlashcardsDeck /> : null}

      {/* MODO 3: MATCH RÁPIDO */}
      {activeTab === "match" ? <MatchMode /> : null}
    </div>
  );
}
