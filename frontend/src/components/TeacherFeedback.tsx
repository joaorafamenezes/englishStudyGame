import { useState } from "react";
import { speakEnglish } from "../tts";
import type { AnswerResponse } from "../types";

type TeacherFeedbackProps = {
  feedback: AnswerResponse;
  onContinue: () => void;
  busy: boolean;
  isLastQuestion: boolean;
};

export function TeacherFeedback({
  feedback,
  onContinue,
  busy,
  isLastQuestion,
}: TeacherFeedbackProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const fullSentence =
    feedback.fullSentence ||
    feedback.question?.prompt.replace("_____", feedback.connector) ||
    feedback.connector;

  function handlePronounce() {
    setIsPlayingAudio(true);
    speakEnglish(fullSentence, () => setIsPlayingAudio(false));
  }

  return (
    <section className={`teacher-feedback-sheet ${feedback.correct ? "is-correct" : "is-learning"}`}>
      {/* Cabeçalho Acolhedor */}
      <div className="teacher-feedback-header">
        <div className="teacher-avatar-badge">
          {feedback.correct ? "🎉" : "💡"}
        </div>
        <div>
          <h3 className="teacher-feedback-title">
            {feedback.timedOut
              ? "Tempo esgotado, mas não se preocupe!"
              : feedback.correct
                ? "Excelente dedução!"
                : "Boa tentativa! Veja a diferença na prática"}
          </h3>
          <p className="teacher-feedback-subtitle">
            {feedback.correct
              ? "Você identificou o papel sintático exato deste conectivo."
              : "Errar faz parte natural do aprendizado. Vamos entender juntos o porquê."}
          </p>
        </div>
      </div>

      {/* Frase Completa Montada + Tradução + Botão de Pronúncia */}
      <div className="teacher-sentence-card">
        <div className="sentence-audio-row">
          <div className="full-sentence-en">
            {renderHighlightedSentence(fullSentence, feedback.connector)}
          </div>
          <button
            type="button"
            className={`listen-btn ${isPlayingAudio ? "playing" : ""}`}
            onClick={handlePronounce}
            title="Ouvir pronúncia em inglês"
          >
            {isPlayingAudio ? "🔊 Falando..." : "🔊 Ouvir"}
          </button>
        </div>

        {feedback.sentenceTranslation ? (
          <div className="sentence-translation-pt">
            <span className="pt-label">Tradução em Português:</span>
            <p>"{feedback.sentenceTranslation}"</p>
          </div>
        ) : null}
      </div>

      {/* Blocos Didáticos: Regra, Contraste e Dica de Ouro */}
      <div className="teacher-insights-grid">
        {feedback.whyCorrect ? (
          <div className="teacher-insight-box insight-rule">
            <div className="insight-title">🧠 Por que é essa resposta?</div>
            <p>{feedback.whyCorrect}</p>
          </div>
        ) : null}

        {feedback.whyOthersFail ? (
          <div className="teacher-insight-box insight-contrast">
            <div className="insight-title">⚖️ Por que não as outras?</div>
            <p>{feedback.whyOthersFail}</p>
          </div>
        ) : null}

        {feedback.proTip ? (
          <div className="teacher-insight-box insight-tip">
            <div className="insight-title">💡 Dica de Ouro do Professor</div>
            <p>{feedback.proTip}</p>
          </div>
        ) : null}
      </div>

      {/* Botão de Avanço Encorajador */}
      <div className="teacher-action-row">
        <span className="keyboard-hint">Atalho: [Espaço] ou [Enter]</span>
        <button
          className="btn btn-primary continue-btn"
          onClick={onContinue}
          disabled={busy}
          autoFocus
        >
          {isLastQuestion ? "Ver Revisão Completa 🎓" : "Entendi, Próxima Frase ➔"}
        </button>
      </div>
    </section>
  );
}

function renderHighlightedSentence(sentence: string, connector: string) {
  if (!sentence) return sentence;
  const regex = new RegExp(`(${escapeRegex(connector)})`, "i");
  const parts = sentence.split(regex);

  return parts.map((part, index) => {
    if (part.toLowerCase() === connector.toLowerCase()) {
      return (
        <mark key={index} className="connector-highlight">
          {part}
        </mark>
      );
    }
    return part;
  });
}

function escapeRegex(text: string) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
