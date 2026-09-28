import { useEffect, useMemo, useRef, useState } from "react";
import { fetchConnectors, fetchSummary, startSession, submitAnswer } from "./api";
import { EverStudySection } from "./components/EverStudySection";
import { FlashcardsDeck } from "./components/FlashcardsDeck";
import { LeaderboardModal } from "./components/LeaderboardModal";
import { MatchMode } from "./components/MatchMode";
import { TeacherFeedback } from "./components/TeacherFeedback";
import { resolveTeacherNote } from "./data/teacherNotes";
import {
  getLeaderboard,
  qualifiesForTop5,
  saveScore,
  type LeaderboardEntry,
} from "./leaderboard";
import { getMasteredIds, MASTERED_CHANGED_EVENT } from "./mastery";
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
  ConnectorItem,
  GameMode,
  PublicQuestion,
  SessionResponse,
  SummaryResponse,
} from "./types";

const QUESTION_SECONDS = 18;

const FAMILY_LABEL: Record<string, string> = {
  all: "Todas as Categorias",
  ever_family: "🎯 Especial: Família -Ever (Whatever, Whenever...)",
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
type ActiveTab = "practice" | "ever" | "deck" | "match";

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
  const [selectedFamily, setSelectedFamily] = useState<ConnectorFamily | "all" | "ever_family">("all");
  const [excludeMastered, setExcludeMastered] = useState(true);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(() => getMasteredIds());
  const [allConnectors, setAllConnectors] = useState<ConnectorItem[]>([]);

  const [session, setSession] = useState<SessionResponse | null>(null);
  const [question, setQuestion] = useState<PublicQuestion | null>(null);
  const [feedback, setFeedback] = useState<AnswerResponse | null>(null);
  const [summary, setSummary] = useState<SummaryResponse | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(QUESTION_SECONDS);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const answering = useRef(false);

  // Carrega lista completa de conectivos para estatísticas por categoria
  useEffect(() => {
    fetchConnectors()
      .then((data) => setAllConnectors(data.connectors))
      .catch(() => {});
  }, []);

  // Sincroniza quando os conectivos dominados mudarem no Deck ou em outra aba
  useEffect(() => {
    function handleSync() {
      setMasteredIds(getMasteredIds());
    }
    window.addEventListener(MASTERED_CHANGED_EVENT, handleSync);
    return () => window.removeEventListener(MASTERED_CHANGED_EVENT, handleSync);
  }, []);

  // Estatísticas da categoria atualmente selecionada
  const selectedFamilyConnectors = useMemo(() => {
    if (selectedFamily === "ever_family") {
      const everIds = new Set(["whatever", "whenever", "wherever", "whoever", "however"]);
      return allConnectors.filter((c) => everIds.has(c.id));
    }
    return allConnectors.filter((c) => selectedFamily === "all" || c.family === selectedFamily);
  }, [allConnectors, selectedFamily]);

  const selectedFamilyMasteredCount = useMemo(() => {
    return selectedFamilyConnectors.filter((c) => masteredIds.has(c.id)).length;
  }, [selectedFamilyConnectors, masteredIds]);

  const isSelectedFamilyAllMastered = useMemo(() => {
    return (
      selectedFamilyConnectors.length > 0 &&
      selectedFamilyMasteredCount === selectedFamilyConnectors.length
    );
  }, [selectedFamilyConnectors, selectedFamilyMasteredCount]);

  // Ranking Local (Top 5)
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [top5List, setTop5List] = useState<LeaderboardEntry[]>(() => getLeaderboard());
  const [playerName, setPlayerName] = useState(() => {
    try {
      return localStorage.getItem("gap_runner_player_name") || "";
    } catch {
      return "";
    }
  });
  const [savedSessionId, setSavedSessionId] = useState<string | null>(null);
  const [highlightRecordId, setHighlightRecordId] = useState<string | null>(null);

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
      const isEver = selectedFamily === "ever_family";
      const excludedList =
        !isEver && excludeMastered && masteredIds.size > 0 ? Array.from(masteredIds) : undefined;
      const next = await startSession(
        questionCount,
        isEver ? undefined : selectedFamily,
        gameMode,
        excludedList,
        isEver ? "ever_family" : undefined,
      );
      setSession(next);
      setQuestion(next.question);
      setFeedback(null);
      setSummary(null);
      setSavedSessionId(null);
      setHighlightRecordId(null);
      setSecondsLeft(QUESTION_SECONDS);
      setScreen("play");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível iniciar a prática");
    } finally {
      setBusy(false);
    }
  }

  async function beginEverSession(count: number, chosenMode: GameMode) {
    setError(null);
    setBusy(true);
    playClickSound();
    try {
      setGameMode(chosenMode);
      setSelectedFamily("ever_family");
      const next = await startSession(count, undefined, chosenMode, undefined, "ever_family");
      setSession(next);
      setQuestion(next.question);
      setFeedback(null);
      setSummary(null);
      setSavedSessionId(null);
      setHighlightRecordId(null);
      setSecondsLeft(QUESTION_SECONDS);
      setActiveTab("practice");
      setScreen("play");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Não foi possível iniciar o treino da Família -Ever",
      );
    } finally {
      setBusy(false);
    }
  }

  function handleSaveHighScore(e: React.FormEvent) {
    e.preventDefault();
    if (!summary || !session) return;
    const nameToSave = playerName.trim() || "Estudante Anônimo";
    try {
      localStorage.setItem("gap_runner_player_name", nameToSave);
    } catch {}

    const updated = saveScore({
      name: nameToSave,
      score: summary.score,
      streak: summary.bestStreak,
      mode: session.mode || gameMode,
    });
    setTop5List(updated);
    setSavedSessionId(session.sessionId);
    const found = updated.find((r) => r.name === nameToSave && r.score === summary.score);
    if (found) {
      setHighlightRecordId(found.id);
    }
    playSuccessSound();
  }

  async function answer(optionId?: string, timedOut = false) {
    if (!session || answering.current || feedback) {
      return;
    }
    const currentQuestion = question;
    answering.current = true;
    setBusy(true);
    setError(null);
    try {
      const rawResult = await submitAnswer(session.sessionId, {
        optionId,
        timedOut,
        secondsLeft: isZen ? undefined : secondsLeft,
      });
      const fullSentence =
        rawResult.fullSentence ||
        (currentQuestion ? currentQuestion.prompt.replace("_____", rawResult.connector) : undefined);
      const note = resolveTeacherNote({
        id: rawResult.questionId || currentQuestion?.id,
        prompt: currentQuestion?.prompt,
        fullSentence,
      });

      const result: AnswerResponse = {
        ...rawResult,
        secondsLeft: isZen ? undefined : secondsLeft,
        prompt: rawResult.prompt || currentQuestion?.prompt,
        fullSentence: fullSentence || rawResult.fullSentence,
        sentenceTranslation: note?.sentenceTranslation || rawResult.sentenceTranslation,
        whyCorrect: note?.whyCorrect || rawResult.whyCorrect,
        whyOthersFail: note?.whyOthersFail || rawResult.whyOthersFail,
        proTip: note?.proTip || rawResult.proTip,
      };

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
        const enrichedReview = data.review.map((item) => {
          const note = resolveTeacherNote({
            id: item.questionId,
            prompt: item.prompt,
            fullSentence: item.fullSentence,
          });
          return {
            ...item,
            sentenceTranslation: note?.sentenceTranslation || item.sentenceTranslation,
            whyCorrect: note?.whyCorrect || item.whyCorrect,
            whyOthersFail: note?.whyOthersFail || item.whyOthersFail,
            proTip: note?.proTip || item.proTip,
          };
        });
        setSummary({ ...data, review: enrichedReview });
        setTop5List(getLeaderboard());
        setHighlightRecordId(null);
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
            className="leaderboard-toggle-btn"
            onClick={() => {
              playClickSound();
              setIsLeaderboardOpen(true);
            }}
            title="Ver o Hall da Fama dos 5 maiores recordes"
            aria-label="Ver ranking"
          >
            🏆 Ranking
          </button>

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
          className={`tab-item ${activeTab === "ever" ? "active" : ""}`}
          onClick={() => {
            playClickSound();
            setActiveTab("ever");
          }}
        >
          🎯 Especial: Família -Ever
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

          {/* Banner de Destaque da Família -Ever */}
          <div
            className="ever-quick-banner"
            onClick={() => {
              playClickSound();
              setActiveTab("ever");
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                playClickSound();
                setActiveTab("ever");
              }
            }}
          >
            <div className="ever-banner-icon">🎯</div>
            <div className="ever-banner-content">
              <strong>Sessão Especial: Whatever, Whenever, Wherever, Whoever e However</strong>
              <p>
                Aprenda a regra de ouro do sufixo <em>-ever</em> e treine frases com alternativas
                exclusivas deste grupo essencial.
              </p>
            </div>
            <span className="ever-banner-cta">Abrir Estudo Comparativo ➔</span>
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

          {/* Filtro inteligente: Ocultar conectivos dominados */}
          <div className="exclude-mastered-box">
            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={excludeMastered}
                onChange={(e) => setExcludeMastered(e.target.checked)}
              />
              <div className="checkbox-text">
                <strong>🎯 Focar apenas nos itens em estudo (Ocultar conectivos dominados)</strong>
                <span className="muted">
                  {masteredIds.size > 0
                    ? `${masteredIds.size} de ${allConnectors.length || 81} conectivos marcados como dominados no Deck serão ignorados nesta sessão.`
                    : "Nenhum conectivo marcado como dominado ainda. Marque itens no Deck para filtrá-los aqui."}
                </span>
              </div>
            </label>
          </div>

          {/* Alerta quando a categoria atual estiver 100% dominada */}
          {excludeMastered && isSelectedFamilyAllMastered ? (
            <div className="mastery-alert-banner">
              <div className="mastery-alert-icon">🌟</div>
              <div className="mastery-alert-content">
                <strong>Todos os conectivos desta categoria já foram dominados!</strong>
                <p>
                  Para praticar estes itens novamente, ative o <strong>Modo Revisão</strong> desmarcando a opção "Ocultar conectivos dominados" acima, ou escolha outra categoria.
                </p>
                <button
                  type="button"
                  className="btn-review-mode"
                  onClick={() => setExcludeMastered(false)}
                >
                  Ativar Modo Revisão para esta categoria ➔
                </button>
              </div>
            </div>
          ) : null}

          <div className="start-row" style={{ marginTop: 24 }}>
            <div className="form-group">
              <label className="input-label" htmlFor="family-select">
                Família de Conectivos:
              </label>
              <select
                id="family-select"
                value={selectedFamily}
                onChange={(event) =>
                  setSelectedFamily(event.target.value as ConnectorFamily | "all" | "ever_family")
                }
              >
                {(Object.keys(FAMILY_LABEL) as Array<ConnectorFamily | "all" | "ever_family">).map((key) => {
                  let famConnectors: ConnectorItem[] = [];
                  if (key === "ever_family") {
                    const everIds = new Set(["whatever", "whenever", "wherever", "whoever", "however"]);
                    famConnectors = allConnectors.filter((c) => everIds.has(c.id));
                  } else {
                    famConnectors = allConnectors.filter((c) => key === "all" || c.family === key);
                  }
                  const famMastered = famConnectors.filter((c) => masteredIds.has(c.id)).length;
                  const isAllDominated =
                    famConnectors.length > 0 && famMastered === famConnectors.length;
                  let statusBadge = "";
                  if (key !== "all" && famConnectors.length > 0) {
                    statusBadge = isAllDominated
                      ? " — [★ Categoria Dominada]"
                      : ` (${famConnectors.length - famMastered} a estudar)`;
                  }
                  return (
                    <option key={key} value={key}>
                      {FAMILY_LABEL[key]}{statusBadge}
                    </option>
                  );
                })}
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
              disabled={busy || (excludeMastered && isSelectedFamilyAllMastered)}
              title={
                excludeMastered && isSelectedFamilyAllMastered
                  ? "Todos os conectivos desta categoria estão dominados. Ative o Modo Revisão para praticar."
                  : undefined
              }
            >
              {busy
                ? "Preparando..."
                : excludeMastered && isSelectedFamilyAllMastered
                  ? "Categoria Dominada (Ative Revisão)"
                  : "Começar a Praticar ➔"}
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

            {excludeMastered && masteredIds.size > 0 ? (
              <span
                className="focus-filter-chip"
                title="Conectivos dominados estão sendo ignorados nesta sessão"
              >
                🎯 Foco em Estudo ({masteredIds.size} dominados ocultos)
              </span>
            ) : (
              <span
                className="review-filter-chip"
                title="Modo Revisão: todos os conectivos podem ser exibidos"
              >
                🔄 Modo Revisão
              </span>
            )}

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
              currentPrompt={question.prompt}
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

          {/* BANNER DE NOVO RECORDE TOP 5 */}
          {qualifiesForTop5(summary.score) && savedSessionId !== session?.sessionId ? (
            <div className="new-record-banner">
              <div className="record-header">
                <span className="record-icon">🎉</span>
                <div>
                  <h4>Novo Recorde no Top 5!</h4>
                  <p>
                    Você atingiu <strong>{summary.score.toLocaleString("pt-BR")} pontos</strong>! Registre seu nome no Hall da Fama:
                  </p>
                </div>
              </div>
              <form onSubmit={handleSaveHighScore} className="record-form">
                <input
                  type="text"
                  maxLength={24}
                  placeholder="Digite seu nome ou apelido (ex: Rafael)"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="record-name-input"
                  required
                  autoFocus
                />
                <button type="submit" className="btn btn-primary save-record-btn">
                  Salvar no Ranking 🏅
                </button>
              </form>
            </div>
          ) : null}

          {/* CARD DO TOP 5 ATUALIZADO */}
          <div className="result-top5-card">
            <div className="result-top5-header">
              <span>🏆 Hall da Fama (Top 5 Local)</span>
              <button
                type="button"
                className="btn btn-ghost"
                style={{ padding: "4px 10px", fontSize: 13 }}
                onClick={() => setIsLeaderboardOpen(true)}
              >
                Ver Ranking Completo ↗
              </button>
            </div>
            <div className="result-top5-chips">
              {top5List.length === 0 ? (
                <span className="muted" style={{ fontSize: 13 }}>
                  Nenhum recorde registrado ainda.
                </span>
              ) : (
                top5List.map((entry, idx) => (
                  <div
                    key={entry.id}
                    className={`top5-chip ${entry.id === highlightRecordId ? "highlight" : ""}`}
                  >
                    <span className="chip-medal">
                      {idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `${idx + 1}º`}
                    </span>
                    <span className="chip-name">{entry.name}</span>
                    <strong className="chip-score">{entry.score.toLocaleString("pt-BR")} pts</strong>
                  </div>
                ))
              )}
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

                {item.whyOthersFail ? (
                  <div className="review-teacher-tip" style={{ marginTop: 6, opacity: 0.9 }}>
                    <span>⚖️ Por que não as outras:</span> {item.whyOthersFail}
                  </div>
                ) : null}

                {item.proTip ? (
                  <div className="review-teacher-tip" style={{ marginTop: 6, opacity: 0.9 }}>
                    <span>✨ Dica de Ouro:</span> {item.proTip}
                  </div>
                ) : null}
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

      {/* MODO ESPECIAL: FAMÍLIA -EVER */}
      {activeTab === "ever" ? (
        <EverStudySection onStartPractice={beginEverSession} busy={busy} />
      ) : null}

      {/* MODO 2: DECK DOS 81 CONECTIVOS */}
      {activeTab === "deck" ? <FlashcardsDeck /> : null}

      {/* MODO 3: MATCH RÁPIDO */}
      {activeTab === "match" ? <MatchMode /> : null}

      {/* MODAL DO HALL DA FAMA (RANKING LOCAL) */}
      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
        highlightId={highlightRecordId}
      />
    </div>
  );
}
