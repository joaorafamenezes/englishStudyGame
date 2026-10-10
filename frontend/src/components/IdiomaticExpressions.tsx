import { useMemo, useState } from "react";
import { IDIOMATIC_EXPRESSIONS, type IdiomaticExpression } from "../data/idiomaticExpressions";
import { playClickSound, playErrorSound, playSuccessSound, playVictoryFanfare } from "../sound";
import { speakEnglish } from "../tts";

type AnswerOption = {
  id: string;
  text: string;
};

function shuffled<T>(items: T[]): T[] {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function makeRound(count: number): IdiomaticExpression[] {
  return shuffled(IDIOMATIC_EXPRESSIONS).slice(0, count);
}

export function IdiomaticExpressions() {
  const [roundSize, setRoundSize] = useState(10);
  const [questions, setQuestions] = useState<IdiomaticExpression[]>(() => makeRound(10));
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const question = questions[questionIndex];
  const options = useMemo<AnswerOption[]>(() => {
    if (!question) return [];
    const distractors = shuffled(
      IDIOMATIC_EXPRESSIONS.filter((item) => item.id !== question.id),
    ).slice(0, 3);
    return shuffled([
      { id: question.id, text: question.meaningPt },
      ...distractors.map((item) => ({ id: item.id, text: item.meaningPt })),
    ]);
  }, [question]);

  const isCorrect = selectedOptionId === question?.id;
  const isRoundComplete = questionIndex >= questions.length;

  function startRound() {
    playClickSound();
    setQuestions(makeRound(roundSize));
    setQuestionIndex(0);
    setSelectedOptionId(null);
    setScore(0);
  }

  function chooseAnswer(optionId: string) {
    if (!question || selectedOptionId) return;
    setSelectedOptionId(optionId);
    if (optionId === question.id) {
      setScore((current) => current + 1);
      playSuccessSound();
    } else {
      playErrorSound();
    }
  }

  function continueRound() {
    playClickSound();
    if (questionIndex + 1 === questions.length) {
      setQuestionIndex(questions.length);
      playVictoryFanfare();
      return;
    }
    setQuestionIndex((current) => current + 1);
    setSelectedOptionId(null);
  }

  if (isRoundComplete) {
    return (
      <section className="idiom-game">
        <header className="idiom-heading">
          <div>
            <span className="learning-tag">RODADA CONCLUÍDA</span>
            <h1>Idiomatic Expressions</h1>
          </div>
        </header>
        <div className="card idiom-result">
          <span className="idiom-result-score">{score}<small> / {questions.length}</small></span>
          <h2>{score === questions.length ? "Perfeito!" : "Boa rodada."}</h2>
          <p>Respostas corretas</p>
          <button type="button" className="btn btn-primary" onClick={startRound}>
            Jogar outra rodada
          </button>
        </div>
      </section>
    );
  }

  if (!question) return null;

  return (
    <section className="idiom-game">
      <header className="idiom-heading idiom-play-heading">
        <div>
          <span className="learning-tag">VOCABULARY · IDIOMS</span>
          <h1>Idiomatic Expressions</h1>
        </div>
        <div className="idiom-round-actions">
          <label htmlFor="idiom-round-size">Rodada</label>
          <select
            id="idiom-round-size"
            value={roundSize}
            onChange={(event) => setRoundSize(Number(event.target.value))}
            aria-label="Quantidade de perguntas por rodada"
          >
            <option value={10}>10 perguntas</option>
            <option value={15}>15 perguntas</option>
            <option value={IDIOMATIC_EXPRESSIONS.length}>Todas ({IDIOMATIC_EXPRESSIONS.length})</option>
          </select>
          <div className="idiom-score" aria-label={`${score} respostas corretas`}>
            <span>Acertos</span>
            <strong>{score}</strong>
          </div>
          <button
            type="button"
            className="idiom-restart"
            onClick={startRound}
            title="Começar nova rodada"
            aria-label="Começar nova rodada"
          >
            ↻
          </button>
        </div>
      </header>

      <div
        className="idiom-progress"
        role="progressbar"
        aria-label="Progresso da rodada"
        aria-valuemin={0}
        aria-valuemax={questions.length}
        aria-valuenow={questionIndex + 1}
      >
        <span style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }} />
      </div>

      <div className="idiom-question-meta">
        <span>PERGUNTA {questionIndex + 1} / {questions.length}</span>
        <span>{IDIOMATIC_EXPRESSIONS.length} EXPRESSÕES NO BARALHO</span>
      </div>

      <article className="card idiom-question-card">
        <span className="idiom-eyebrow">O que significa?</span>
        <h2>“{question.expression}”</h2>
        <div className="idiom-options" role="group" aria-label="Alternativas de significado">
          {options.map((option, index) => {
            const correctOption = option.id === question.id;
            const selectedOption = option.id === selectedOptionId;
            const classNames = [
              "idiom-option",
              selectedOption ? (isCorrect ? "is-correct" : "is-wrong") : "",
              selectedOptionId && correctOption && !isCorrect ? "show-correct" : "",
            ].filter(Boolean).join(" ");

            return (
              <button
                key={option.id}
                type="button"
                className={classNames}
                disabled={Boolean(selectedOptionId)}
                aria-pressed={selectedOption}
                onClick={() => chooseAnswer(option.id)}
              >
                <span className="idiom-option-key">{String.fromCharCode(65 + index)}</span>
                <span>{option.text}</span>
              </button>
            );
          })}
        </div>

        {selectedOptionId ? (
          <div className={`idiom-feedback ${isCorrect ? "is-correct" : "is-wrong"}`} aria-live="polite">
            <div className="idiom-feedback-title">
              <strong>{isCorrect ? "Isso mesmo" : "Quase!"}</strong>
              <span>{question.meaningPt}</span>
            </div>
            <p>{question.definition}</p>
            <blockquote>
              <span>EXAMPLE</span>
              <p>“{question.example}”</p>
              <button
                type="button"
                className="idiom-audio-button"
                onClick={() => speakEnglish(question.example)}
                aria-label={`Ouvir exemplo: ${question.example}`}
                title="Ouvir exemplo"
              >
                🔊
              </button>
            </blockquote>
            <button type="button" className="btn btn-primary idiom-next" onClick={continueRound}>
              {questionIndex + 1 === questions.length ? "Ver resultado" : "Próxima expressão"}
              <span aria-hidden="true">→</span>
            </button>
          </div>
        ) : null}
      </article>
    </section>
  );
}