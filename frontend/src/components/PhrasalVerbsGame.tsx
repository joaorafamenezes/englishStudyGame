import { useEffect, useMemo, useState } from "react";
import { fetchPhrasalVerbMatchPairs, fetchPhrasalVerbQuiz } from "../api";
import { PHRASAL_VERBS_DATA, PHRASAL_VERBS_QUESTIONS } from "../data/phrasalVerbs";
import {
  playClickSound,
  playErrorSound,
  playSuccessSound,
  playTickSound,
  playVictoryFanfare,
} from "../sound";
import { speakEnglish } from "../tts";
import type { PhrasalVerbLevel, PhrasalVerbQuestion } from "../types";

type SubMode = "quiz" | "match" | "deck";
type QuizGameMode = "zen" | "arcade";

type Tile = {
  tileId: string;
  pairId: string;
  text: string;
  lang: "en" | "pt";
  level: PhrasalVerbLevel;
};

const MASTERED_PV_STORAGE_KEY = "mastered_phrasal_verbs";

function getStoredMasteredIds(): Set<string> {
  try {
    const raw = localStorage.getItem(MASTERED_PV_STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw));
  } catch {
    return new Set();
  }
}

function saveStoredMasteredIds(ids: Set<string>) {
  try {
    localStorage.setItem(MASTERED_PV_STORAGE_KEY, JSON.stringify(Array.from(ids)));
  } catch {}
}

function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const QUESTION_SECONDS = 18;

export function PhrasalVerbsGame() {
  const [subMode, setSubMode] = useState<SubMode>("quiz");

  // ==========================================
  // SHARED STATE / MASTERED TRACKING
  // ==========================================
  const [masteredIds, setMasteredIds] = useState<Set<string>>(() => getStoredMasteredIds());

  function toggleMastered(id: string) {
    playClickSound();
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        playSuccessSound();
      }
      saveStoredMasteredIds(next);
      return next;
    });
  }

  // ==========================================
  // SUB-MODE 1: QUIZ / DESAFIO DAS FRASES
  // ==========================================
  const [quizLevel, setQuizLevel] = useState<PhrasalVerbLevel | "all">("all");
  const [quizGameMode, setQuizGameMode] = useState<QuizGameMode>("zen");
  const [quizQuestionCount, setQuizQuestionCount] = useState<number>(10);
  const [quizState, setQuizState] = useState<"menu" | "playing" | "summary">("menu");

  const [questions, setQuestions] = useState<PhrasalVerbQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{
    correct: boolean;
    timedOut: boolean;
    question: PhrasalVerbQuestion;
  } | null>(null);

  const [quizScore, setQuizScore] = useState(0);
  const [quizStreak, setQuizStreak] = useState(0);
  const [quizBestStreak, setQuizBestStreak] = useState(0);
  const [quizLives, setQuizLives] = useState(3);
  const [quizSecondsLeft, setQuizSecondsLeft] = useState(QUESTION_SECONDS);
  const [quizHistory, setQuizHistory] = useState<
    Array<{
      question: PhrasalVerbQuestion;
      selectedOptionId: string | null;
      correct: boolean;
      timedOut: boolean;
    }>
  >([]);

  const currentQuestion = questions[currentQIndex] ?? null;

  function startQuiz() {
    playClickSound();
    // Try to load from backend or fallback to local questions
    let pool = PHRASAL_VERBS_QUESTIONS;
    if (quizLevel !== "all") {
      const filtered = pool.filter((q) => q.level === quizLevel);
      if (filtered.length >= 3) {
        pool = filtered;
      }
    }

    // Shuffle pool AND shuffle options of each question so the correct option is completely mixed!
    const preparedQuestions = shuffleArray(pool)
      .slice(0, quizQuestionCount)
      .map((q) => ({
        ...q,
        options: shuffleArray(q.options),
      }));

    setQuestions(preparedQuestions);
    setCurrentQIndex(0);
    setSelectedOptionId(null);
    setFeedback(null);
    setQuizScore(0);
    setQuizStreak(0);
    setQuizBestStreak(0);
    setQuizLives(3);
    setQuizSecondsLeft(QUESTION_SECONDS);
    setQuizHistory([]);
    setQuizState("playing");

    // Also attempt fetching from API
    fetchPhrasalVerbQuiz(quizQuestionCount, quizLevel)
      .then((data) => {
        if (data.questions && data.questions.length > 0) {
          const apiPrepared = data.questions.map((q) => ({
            ...q,
            options: shuffleArray(q.options),
          }));
          setQuestions(apiPrepared);
        }
      })
      .catch(() => {
        // Fallback already configured
      });
  }


  // Timer in Arcade Mode
  useEffect(() => {
    if (quizState !== "playing" || quizGameMode !== "arcade" || feedback !== null) {
      return;
    }

    const interval = setInterval(() => {
      setQuizSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleAnswer(null, true);
          return 0;
        }
        if (prev <= 5) {
          playTickSound();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [quizState, quizGameMode, feedback, currentQIndex]);

  function handleAnswer(optId: string | null, timedOut = false) {
    if (feedback !== null || !currentQuestion) return;

    setSelectedOptionId(optId);
    const isCorrect = !timedOut && optId === currentQuestion.correctOptionId;

    if (isCorrect) {
      playSuccessSound();
      const points = 100 + quizStreak * 25 + (quizGameMode === "arcade" ? quizSecondsLeft * 10 : 0);
      setQuizScore((prev) => prev + points);
      const nextStreak = quizStreak + 1;
      setQuizStreak(nextStreak);
      setQuizBestStreak((prev) => Math.max(prev, nextStreak));
    } else {
      playErrorSound();
      setQuizStreak(0);
      if (quizGameMode === "arcade") {
        setQuizLives((prev) => Math.max(0, prev - 1));
      }
    }

    const record = {
      question: currentQuestion,
      selectedOptionId: optId,
      correct: isCorrect,
      timedOut,
    };

    setQuizHistory((prev) => [...prev, record]);
    setFeedback({
      correct: isCorrect,
      timedOut,
      question: currentQuestion,
    });
  }

  function nextQuestion() {
    playClickSound();
    // Check if game over in arcade mode
    if (quizGameMode === "arcade" && quizLives <= 0) {
      setQuizState("summary");
      playVictoryFanfare();
      return;
    }

    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setFeedback(null);
      setQuizSecondsLeft(QUESTION_SECONDS);
    } else {
      setQuizState("summary");
      playVictoryFanfare();
    }
  }

  // Keyboard shortcut listener for Quiz
  useEffect(() => {
    if (subMode !== "quiz" || quizState !== "playing") return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (feedback) {
        if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
          e.preventDefault();
          nextQuestion();
        }
        return;
      }

      const key = e.key.toLowerCase();
      if (key === "p" && currentQuestion) {
        e.preventDefault();
        speakEnglish(currentQuestion.prompt.replace("_____", "..."));
        return;
      }

      let idx = -1;
      if (key === "1" || key === "a") idx = 0;
      else if (key === "2" || key === "b") idx = 1;
      else if (key === "3" || key === "c") idx = 2;
      else if (key === "4" || key === "d") idx = 3;

      if (currentQuestion && idx >= 0 && idx < currentQuestion.options.length) {
        e.preventDefault();
        const opt = currentQuestion.options[idx];
        if (opt) handleAnswer(opt.id);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [subMode, quizState, feedback, currentQuestion, currentQIndex]);

  // ==========================================
  // SUB-MODE 2: MATCH RÁPIDO (ASSOCIAÇÃO)
  // ==========================================
  const [matchLevel, setMatchLevel] = useState<PhrasalVerbLevel | "all">("all");
  const [matchPairsCount, setMatchPairsCount] = useState<number>(6);
  const [matchLoading, setMatchLoading] = useState(false);
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [selectedTile, setSelectedTile] = useState<Tile | null>(null);
  const [matchedPairIds, setMatchedPairIds] = useState<Set<string>>(new Set());
  const [failedPair, setFailedPair] = useState<[string, string] | null>(null);
  const [matchScore, setMatchScore] = useState(0);
  const [matchStreak, setMatchStreak] = useState(0);
  const [matchRoundsWon, setMatchRoundsWon] = useState(0);
  const [matchRoundComplete, setMatchRoundComplete] = useState(false);

  function loadMatchRound() {
    setMatchLoading(true);
    setSelectedTile(null);
    setMatchedPairIds(new Set());
    setFailedPair(null);
    setMatchRoundComplete(false);

    // Pick pairs from local data
    let pool = PHRASAL_VERBS_DATA;
    if (matchLevel !== "all") {
      pool = pool.filter((v) => v.level === matchLevel);
      if (pool.length < matchPairsCount) pool = PHRASAL_VERBS_DATA;
    }

    const shuffledVerbs = [...pool].sort(() => Math.random() - 0.5).slice(0, matchPairsCount);
    const newTiles: Tile[] = [];

    shuffledVerbs.forEach((v) => {
      newTiles.push({
        tileId: `en-${v.id}`,
        pairId: v.id,
        text: v.phrasalVerb,
        lang: "en",
        level: v.level,
      });
      newTiles.push({
        tileId: `pt-${v.id}`,
        pairId: v.id,
        text: v.meaningPt.split("/")[0]?.trim() || v.meaningPt,
        lang: "pt",
        level: v.level,
      });
    });

    // Shuffle tiles
    for (let i = newTiles.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [newTiles[i], newTiles[j]] = [newTiles[j], newTiles[i]];
    }

    setTiles(newTiles);
    setMatchLoading(false);

    // Also attempt fetching from API
    fetchPhrasalVerbMatchPairs(matchPairsCount, matchLevel)
      .then((data) => {
        if (data.pairs && data.pairs.length > 0) {
          const apiTiles: Tile[] = [];
          data.pairs.forEach((p) => {
            apiTiles.push({
              tileId: `en-${p.id}`,
              pairId: p.id,
              text: p.phrasalVerb,
              lang: "en",
              level: p.level,
            });
            apiTiles.push({
              tileId: `pt-${p.id}`,
              pairId: p.id,
              text: p.meaningPt.split("/")[0]?.trim() || p.meaningPt,
              lang: "pt",
              level: p.level,
            });
          });
          for (let i = apiTiles.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [apiTiles[i], apiTiles[j]] = [apiTiles[j], apiTiles[i]];
          }
          setTiles(apiTiles);
        }
      })
      .catch(() => {});
  }

  useEffect(() => {
    if (subMode === "match") {
      loadMatchRound();
    }
  }, [subMode, matchLevel, matchPairsCount]);

  function handleTileClick(tile: Tile) {
    if (matchedPairIds.has(tile.pairId) || failedPair) return;

    playClickSound();

    if (!selectedTile) {
      setSelectedTile(tile);
      if (tile.lang === "en") {
        speakEnglish(tile.text);
      }
      return;
    }

    if (selectedTile.tileId === tile.tileId) {
      setSelectedTile(null);
      return;
    }

    // Same language clicked twice
    if (selectedTile.lang === tile.lang) {
      setSelectedTile(tile);
      if (tile.lang === "en") speakEnglish(tile.text);
      return;
    }

    // Correct Match
    if (selectedTile.pairId === tile.pairId) {
      playSuccessSound();
      const nextMatched = new Set(matchedPairIds);
      nextMatched.add(tile.pairId);
      setMatchedPairIds(nextMatched);
      setSelectedTile(null);

      const nextStreak = matchStreak + 1;
      setMatchStreak(nextStreak);
      setMatchScore((prev) => prev + 100 * nextStreak);

      const totalPairs = tiles.length / 2;
      if (nextMatched.size === totalPairs) {
        setMatchRoundsWon((prev) => prev + 1);
        setMatchRoundComplete(true);
        playVictoryFanfare();
      }
    } else {
      // Failed Match
      playErrorSound();
      setFailedPair([selectedTile.tileId, tile.tileId]);
      setMatchStreak(0);
      setTimeout(() => {
        setFailedPair(null);
        setSelectedTile(null);
      }, 700);
    }
  }

  // ==========================================
  // SUB-MODE 3: DECK / DICIONÁRIO 3D
  // ==========================================
  const [deckLevel, setDeckLevel] = useState<PhrasalVerbLevel | "all">("all");
  const [deckSearch, setDeckSearch] = useState("");
  const [deckFilterMastered, setDeckFilterMastered] = useState<"all" | "learning" | "mastered">(
    "all",
  );
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const filteredDeck = useMemo(() => {
    let list = PHRASAL_VERBS_DATA;
    if (deckLevel !== "all") {
      list = list.filter((v) => v.level === deckLevel);
    }
    if (deckFilterMastered === "mastered") {
      list = list.filter((v) => masteredIds.has(v.id));
    } else if (deckFilterMastered === "learning") {
      list = list.filter((v) => !masteredIds.has(v.id));
    }
    if (deckSearch.trim()) {
      const q = deckSearch.toLowerCase().trim();
      list = list.filter(
        (v) =>
          v.phrasalVerb.toLowerCase().includes(q) ||
          v.meaningPt.toLowerCase().includes(q) ||
          v.meaningEn.toLowerCase().includes(q) ||
          v.category.toLowerCase().includes(q) ||
          v.examples.some((ex) => ex.toLowerCase().includes(q)) ||
          v.teacherTip?.toLowerCase().includes(q),
      );
    }
    return list;
  }, [deckLevel, deckFilterMastered, deckSearch, masteredIds]);

  function toggleCardFlip(id: string) {
    playClickSound();
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const totalVerbsCount = PHRASAL_VERBS_DATA.length;
  const masteredCount = useMemo(() => {
    return PHRASAL_VERBS_DATA.filter((v) => masteredIds.has(v.id)).length;
  }, [masteredIds]);
  const masteryPercentage = Math.round((masteredCount / totalVerbsCount) * 100);

  return (
    <div className="phrasal-game-container">
      {/* HEADER / BANNER DO MODO PHRASAL VERBS */}
      <header className="phrasal-hero card">
        <div className="phrasal-hero-top">
          <div className="phrasal-title-badge">
            <span className="phrasal-pill-badge">🚀 Phrasal Verbs Academy</span>
            <span className="phrasal-stats-badge">
              ⭐ {masteredCount} de {totalVerbsCount} dominados ({masteryPercentage}%)
            </span>
          </div>
          <h2>Domine os Phrasal Verbs mais cobrados no inglês real</h2>
          <p>
            Estude através de frases contextualizadas, exercícios de preenchimento de lacunas, jogo
            de associação rápida e flashcards interativos com todos os níveis oficiais (A1, A2, B1 e
            B2) extraídos do seu material de estudo.
          </p>
        </div>

        {/* NAVEGAÇÃO DE SUB-MODOS */}
        <div className="phrasal-submode-switcher">
          <button
            type="button"
            className={`phrasal-submode-btn ${subMode === "quiz" ? "active" : ""}`}
            onClick={() => {
              playClickSound();
              setSubMode("quiz");
            }}
          >
            🎯 Desafio das Frases (Quiz)
          </button>
          <button
            type="button"
            className={`phrasal-submode-btn ${subMode === "match" ? "active" : ""}`}
            onClick={() => {
              playClickSound();
              setSubMode("match");
            }}
          >
            ⚡ Match Rápido (Associação)
          </button>
          <button
            type="button"
            className={`phrasal-submode-btn ${subMode === "deck" ? "active" : ""}`}
            onClick={() => {
              playClickSound();
              setSubMode("deck");
            }}
          >
            📚 Dicionário & Deck 3D ({totalVerbsCount})
          </button>
        </div>
      </header>

      {/* ========================================================= */}
      {/* SUB-MODO 1: QUIZ / DESAFIO DAS FRASES                     */}
      {/* ========================================================= */}
      {subMode === "quiz" && (
        <section className="phrasal-quiz-section">
          {quizState === "menu" && (
            <div className="card phrasal-menu-card">
              <h3>🎯 Configure seu Desafio de Frases</h3>
              <p className="muted">
                Preencha as lacunas com o phrasal verb correto e receba explicações completas com
                pronúncia e notas do professor.
              </p>

              <div className="phrasal-config-grid">
                <div className="phrasal-config-item">
                  <label>Nível de Dificuldade:</label>
                  <div className="phrasal-pill-group">
                    {(["all", "A1", "A2", "B1", "B2"] as const).map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        className={`pill-btn ${quizLevel === lvl ? "active" : ""}`}
                        onClick={() => {
                          playClickSound();
                          setQuizLevel(lvl);
                        }}
                      >
                        {lvl === "all" ? "Todos os Níveis" : `Nível ${lvl}`}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="phrasal-config-item">
                  <label>Modo de Jogo:</label>
                  <div className="phrasal-pill-group">
                    <button
                      type="button"
                      className={`pill-btn ${quizGameMode === "zen" ? "active" : ""}`}
                      onClick={() => {
                        playClickSound();
                        setQuizGameMode("zen");
                      }}
                    >
                      🧘 Estudo Zen (Sem cronômetro)
                    </button>
                    <button
                      type="button"
                      className={`pill-btn ${quizGameMode === "arcade" ? "active" : ""}`}
                      onClick={() => {
                        playClickSound();
                        setQuizGameMode("arcade");
                      }}
                    >
                      ⚡ Arcade (3 Vidas & 18s por pergunta)
                    </button>
                  </div>
                </div>

                <div className="phrasal-config-item">
                  <label>Quantidade de Perguntas:</label>
                  <div className="phrasal-pill-group">
                    {[5, 10, 15].map((cnt) => (
                      <button
                        key={cnt}
                        type="button"
                        className={`pill-btn ${quizQuestionCount === cnt ? "active" : ""}`}
                        onClick={() => {
                          playClickSound();
                          setQuizQuestionCount(cnt);
                        }}
                      >
                        {cnt} Perguntas
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="phrasal-start-row">
                <button type="button" className="btn btn-primary" onClick={startQuiz}>
                  Começar Desafio 🚀
                </button>
              </div>
            </div>
          )}

          {quizState === "playing" && currentQuestion && (
            <div className="card phrasal-playing-card">
              {/* HUD Superior */}
              <div className="phrasal-quiz-hud">
                <div className="phrasal-hud-left">
                  <span className="phrasal-badge-lvl badge-{currentQuestion.level.toLowerCase()}">
                    Nível {currentQuestion.level}
                  </span>
                  <span className="phrasal-q-counter">
                    Pergunta {currentQIndex + 1} de {questions.length}
                  </span>
                </div>

                <div className="phrasal-hud-right">
                  {quizGameMode === "arcade" && (
                    <div className="phrasal-hearts">
                      {"❤️".repeat(quizLives)}
                      {"🖤".repeat(Math.max(0, 3 - quizLives))}
                    </div>
                  )}
                  {quizStreak > 1 && (
                    <span className="phrasal-streak-chip">🔥 {quizStreak}x Combo!</span>
                  )}
                  <span className="phrasal-score-chip">🏆 {quizScore} pts</span>
                </div>
              </div>

              {/* Barra de Tempo do Modo Arcade */}
              {quizGameMode === "arcade" && (
                <div className="phrasal-timer-track">
                  <div
                    className="phrasal-timer-fill"
                    style={{
                      width: `${(quizSecondsLeft / QUESTION_SECONDS) * 100}%`,
                      backgroundColor:
                        quizSecondsLeft <= 5 ? "var(--rose)" : "var(--teal)",
                    }}
                  />
                </div>
              )}

              {/* Prompt da Frase com Lacuna */}
              <div className="phrasal-prompt-box">
                <div className="phrasal-prompt-text">
                  {currentQuestion.prompt.split("_____").map((segment, idx, arr) => (
                    <span key={idx}>
                      {segment}
                      {idx < arr.length - 1 && (
                        <span className="phrasal-blank-highlight">
                          {feedback
                            ? currentQuestion.phrasalVerb
                            : "______"}
                        </span>
                      )}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="phrasal-audio-btn"
                  onClick={() =>
                    speakEnglish(
                      feedback
                        ? currentQuestion.fullSentence
                        : currentQuestion.prompt.replace("_____", "..."),
                    )
                  }
                  title="Ouvir pronúncia em inglês (Atalho: P)"
                  aria-label="Ouvir pronúncia"
                >
                  🔊 Ouvir Frase
                </button>
              </div>

              {/* Opções de Resposta */}
              <div className="phrasal-options-grid">
                {currentQuestion.options.map((opt, idx) => {
                  let statusClass = "";
                  if (feedback) {
                    if (opt.id === currentQuestion.correctOptionId) {
                      statusClass = "option-correct";
                    } else if (opt.id === selectedOptionId) {
                      statusClass = "option-wrong";
                    } else {
                      statusClass = "option-dimmed";
                    }
                  }

                  const shortcutLabel = `${idx + 1}`;

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      className={`phrasal-option-btn ${statusClass}`}
                      onClick={() => handleAnswer(opt.id)}
                      disabled={feedback !== null}
                    >
                      <span className="phrasal-opt-shortcut">{shortcutLabel}</span>
                      <span className="phrasal-opt-text">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* CARD DE FEEDBACK DETALHADO DO PROFESSOR */}
              {feedback && (
                <div
                  className={`phrasal-feedback-box ${
                    feedback.correct ? "feedback-success" : "feedback-error"
                  }`}
                >
                  <div className="phrasal-feedback-header">
                    <h4>
                      {feedback.correct
                        ? "🎉 Resposta Correta!"
                        : feedback.timedOut
                        ? "⏰ Tempo Esgotado!"
                        : "❌ Resposta Incorreta"}
                    </h4>
                    <span className="phrasal-verb-meaning">
                      <strong>{currentQuestion.phrasalVerb}:</strong> {currentQuestion.meaningPt}
                    </span>
                  </div>

                  <div className="phrasal-feedback-body">
                    <p className="phrasal-sentence-trans">
                      <strong>🇧🇷 Tradução da Frase:</strong> {currentQuestion.sentenceTranslation}
                    </p>
                    <p className="phrasal-why-correct">
                      <strong>💡 Por que está correta:</strong> {currentQuestion.whyCorrect}
                    </p>
                    {currentQuestion.teacherTip && (
                      <p className="phrasal-teacher-tip">
                        <strong>🧠 Dica do Professor:</strong> {currentQuestion.teacherTip}
                      </p>
                    )}
                  </div>

                  <div className="phrasal-feedback-actions">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={nextQuestion}
                      autoFocus
                    >
                      {currentQIndex + 1 < questions.length
                        ? "Próxima Pergunta ➡️"
                        : "Ver Resumo Final 🏆"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {quizState === "summary" && (
            <div className="card phrasal-summary-card">
              <div className="phrasal-summary-header">
                <h3>🏆 Resumo do Desafio de Phrasal Verbs</h3>
                <div className="phrasal-summary-stats">
                  <div className="stat-card">
                    <span className="stat-label">Pontuação</span>
                    <strong className="stat-value">{quizScore} pts</strong>
                  </div>
                  <div className="stat-card">
                    <span className="stat-label">Acertos</span>
                    <strong className="stat-value">
                      {quizHistory.filter((h) => h.correct).length} / {questions.length}
                    </strong>
                  </div>
                  <div className="stat-card">
                    <span className="stat-label">Melhor Combo</span>
                    <strong className="stat-value">🔥 {quizBestStreak}x</strong>
                  </div>
                </div>
              </div>

              {/* Lista de Revisão Pedagógica */}
              <div className="phrasal-review-list">
                <h4>📋 Revisão Detalhada das Questões</h4>
                {quizHistory.map((item, idx) => (
                  <div
                    key={idx}
                    className={`phrasal-review-item ${
                      item.correct ? "review-correct" : "review-wrong"
                    }`}
                  >
                    <div className="review-top-line">
                      <span className="review-status">
                        {item.correct ? "✅ Correto" : "❌ Errado"}
                      </span>
                      <span className="review-verb-name">
                        {item.question.phrasalVerb} (Nível {item.question.level})
                      </span>
                    </div>

                    <div className="review-sentence-full">
                      <strong>En:</strong> {item.question.fullSentence}
                    </div>
                    <div className="review-sentence-trans">
                      <strong>Pt:</strong> {item.question.sentenceTranslation}
                    </div>
                    <div className="review-tip-text">
                      💡 {item.question.whyCorrect}
                    </div>
                  </div>
                ))}
              </div>

              <div className="phrasal-start-row" style={{ marginTop: 24 }}>
                <button type="button" className="btn btn-primary" onClick={startQuiz}>
                  Jogar Novamente 🔄
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setQuizState("menu")}
                >
                  Mudar Configurações ⚙️
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setSubMode("deck")}
                >
                  Consultar Dicionário 📚
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* ========================================================= */}
      {/* SUB-MODO 2: MATCH RÁPIDO (ASSOCIAÇÃO)                     */}
      {/* ========================================================= */}
      {subMode === "match" && (
        <section className="card phrasal-match-section">
          <div className="phrasal-match-header">
            <div>
              <h3>⚡ Match Rápido: Conecte o Verbo ao Significado</h3>
              <p className="muted">
                Clique no Phrasal Verb em inglês e depois na sua respectiva tradução em português.
              </p>
            </div>

            <div className="phrasal-match-filters">
              <select
                className="select"
                value={matchLevel}
                onChange={(e) => setMatchLevel(e.target.value as PhrasalVerbLevel | "all")}
              >
                <option value="all">Todos os Níveis</option>
                <option value="A1">Nível A1 (Básico)</option>
                <option value="A2">Nível A2 (Comum)</option>
                <option value="B1">Nível B1 (Intermediário)</option>
                <option value="B2">Nível B2 (Avançado)</option>
              </select>

              <select
                className="select"
                value={matchPairsCount}
                onChange={(e) => setMatchPairsCount(Number(e.target.value))}
              >
                <option value={4}>4 Pares (Rápido)</option>
                <option value={6}>6 Pares (Padrão)</option>
                <option value={8}>8 Pares (Desafio)</option>
              </select>

              <button type="button" className="btn btn-ghost" onClick={loadMatchRound}>
                Embaralhar 🔄
              </button>
            </div>
          </div>

          <div className="phrasal-match-hud">
            <span className="phrasal-score-chip">🏆 {matchScore} pts</span>
            {matchStreak > 1 && (
              <span className="phrasal-streak-chip">🔥 {matchStreak}x Combo!</span>
            )}
            <span className="phrasal-rounds-chip">
              Rodadas Vencidas: {matchRoundsWon}
            </span>
          </div>

          {matchLoading ? (
            <div className="loading-spinner">Carregando cartas...</div>
          ) : matchRoundComplete ? (
            <div className="phrasal-round-won-box">
              <h3>🎉 Incrível! Rodada Completa!</h3>
              <p>Você associou todos os phrasal verbs perfeitamente.</p>
              <button type="button" className="btn btn-primary" onClick={loadMatchRound}>
                Próxima Rodada 🚀
              </button>
            </div>
          ) : (
            <div className="phrasal-tiles-grid">
              {tiles.map((tile) => {
                const isMatched = matchedPairIds.has(tile.pairId);
                const isSelected = selectedTile?.tileId === tile.tileId;
                const isFailed =
                  failedPair && (failedPair[0] === tile.tileId || failedPair[1] === tile.tileId);

                return (
                  <button
                    key={tile.tileId}
                    type="button"
                    className={`phrasal-tile ${tile.lang} ${
                      isSelected ? "tile-selected" : ""
                    } ${isMatched ? "tile-matched" : ""} ${
                      isFailed ? "tile-failed" : ""
                    }`}
                    onClick={() => handleTileClick(tile)}
                    disabled={isMatched}
                  >
                    <span className="tile-text">{tile.text}</span>
                    {tile.lang === "en" && (
                      <span className="tile-level-tag">{tile.level}</span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* ========================================================= */}
      {/* SUB-MODO 3: DECK & DICIONÁRIO 3D                         */}
      {/* ========================================================= */}
      {subMode === "deck" && (
        <section className="phrasal-deck-section">
          {/* Barra de Filtros e Busca */}
          <div className="card phrasal-deck-filter-card">
            <div className="phrasal-deck-search-row">
              <input
                type="search"
                className="input phrasal-search-input"
                placeholder="🔍 Buscar por phrasal verb, tradução, exemplo ou categoria..."
                value={deckSearch}
                onChange={(e) => setDeckSearch(e.target.value)}
              />

              <div className="phrasal-deck-filters">
                <select
                  className="select"
                  value={deckLevel}
                  onChange={(e) => setDeckLevel(e.target.value as PhrasalVerbLevel | "all")}
                >
                  <option value="all">Todos os Níveis ({totalVerbsCount})</option>
                  <option value="A1">Nível A1 (Básico)</option>
                  <option value="A2">Nível A2 (Comum)</option>
                  <option value="B1">Nível B1 (Intermediário)</option>
                  <option value="B2">Nível B2 (Avançado)</option>
                </select>

                <select
                  className="select"
                  value={deckFilterMastered}
                  onChange={(e) =>
                    setDeckFilterMastered(e.target.value as "all" | "learning" | "mastered")
                  }
                >
                  <option value="all">Todos os Verbos</option>
                  <option value="learning">Apenas em Estudo 📖</option>
                  <option value="mastered">Apenas Dominados ⭐</option>
                </select>
              </div>
            </div>

            <div className="phrasal-progress-row">
              <span className="phrasal-progress-text">
                Progresso: <strong>{masteredCount}</strong> de {totalVerbsCount} dominados (
                {masteryPercentage}%)
              </span>
              <div className="phrasal-deck-progress-bar">
                <div
                  className="phrasal-deck-progress-fill"
                  style={{ width: `${masteryPercentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* Grid de Flashcards 3D */}
          <div className="phrasal-cards-grid">
            {filteredDeck.length === 0 ? (
              <div className="card empty-results">
                <p>Nenhum phrasal verb encontrado para os filtros selecionados.</p>
              </div>
            ) : (
              filteredDeck.map((verb) => {
                const isFlipped = Boolean(flippedCards[verb.id]);
                const isMastered = masteredIds.has(verb.id);

                return (
                  <article
                    key={verb.id}
                    className={`phrasal-3d-card ${isFlipped ? "flipped" : ""} ${
                      isMastered ? "card-mastered" : ""
                    }`}
                  >
                    <div className="phrasal-card-inner">
                      {/* FRENTE DO CARD */}
                      <div className="phrasal-card-front card">
                        <div className="card-top-bar">
                          <span
                            className={`phrasal-lvl-badge badge-${verb.level.toLowerCase()}`}
                          >
                            {verb.level}
                          </span>
                          <span className="phrasal-category-chip">{verb.category}</span>
                          <button
                            type="button"
                            className={`master-star-btn ${isMastered ? "active" : ""}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMastered(verb.id);
                            }}
                            title={
                              isMastered
                                ? "Dominado! Clique para desmarcar"
                                : "Marcar como dominado"
                            }
                          >
                            {isMastered ? "⭐ Dominado" : "☆ Estudar"}
                          </button>
                        </div>

                        <div className="card-verb-main">
                          <h3>{verb.phrasalVerb}</h3>
                          <button
                            type="button"
                            className="audio-icon-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              speakEnglish(verb.phrasalVerb);
                            }}
                            title="Ouvir pronúncia"
                          >
                            🔊
                          </button>
                        </div>

                        <p className="card-quick-meaning">
                          🇧🇷 {verb.meaningPt}
                        </p>

                        <div className="card-flip-prompt" onClick={() => toggleCardFlip(verb.id)}>
                          <span>Girar Card para Detalhes 🔄</span>
                        </div>
                      </div>

                      {/* VERSO DO CARD */}
                      <div className="phrasal-card-back card">
                        <div className="card-top-bar">
                          <strong>{verb.phrasalVerb}</strong>
                          <button
                            type="button"
                            className="btn btn-ghost btn-sm"
                            onClick={() => toggleCardFlip(verb.id)}
                          >
                            Voltar ↩️
                          </button>
                        </div>

                        <div className="card-back-content">
                          <div className="card-back-def">
                            <strong>Significado (En):</strong> {verb.meaningEn}
                          </div>

                          <div className="card-back-examples">
                            <strong>Exemplos reais do material:</strong>
                            <ul>
                              {verb.examples.map((ex, exIdx) => (
                                <li key={exIdx} className="example-item">
                                  <span>"{ex}"</span>
                                  <button
                                    type="button"
                                    className="audio-tiny-btn"
                                    onClick={() => speakEnglish(ex)}
                                    title="Ouvir exemplo"
                                  >
                                    🔊
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {verb.teacherTip && (
                            <div className="card-back-tip">
                              <span>🧠 Nota do Professor:</span> {verb.teacherTip}
                            </div>
                          )}
                        </div>

                        <div className="card-back-footer">
                          <button
                            type="button"
                            className={`btn btn-sm ${
                              isMastered ? "btn-ghost" : "btn-primary"
                            }`}
                            onClick={() => toggleMastered(verb.id)}
                          >
                            {isMastered ? "Remover de Dominados ✖" : "Marcar como Dominado ⭐"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </section>
      )}
    </div>
  );
}
