import { useState } from "react";
import { speakEnglish } from "../tts";
import type { AnswerResponse } from "../types";
import { resolveTeacherNote } from "../data/teacherNotes";

type TeacherFeedbackProps = {
  feedback: AnswerResponse;
  currentPrompt?: string;
  onContinue: () => void;
  busy: boolean;
  isLastQuestion: boolean;
};

export function TeacherFeedback({
  feedback,
  currentPrompt,
  onContinue,
  busy,
  isLastQuestion,
}: TeacherFeedbackProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const answeredPrompt = currentPrompt || feedback.prompt;

  const fullSentence =
    feedback.fullSentence ||
    (answeredPrompt ? answeredPrompt.replace("_____", feedback.connector) : feedback.connector);

  // Resolve anotação pedagógica específica estritamente da questão respondida (NUNCA da próxima questão)
  const note = resolveTeacherNote({
    id: feedback.questionId,
    fullSentence,
    prompt: answeredPrompt,
  });

  const displayTranslation =
    note?.sentenceTranslation ||
    (feedback.sentenceTranslation &&
    !feedback.sentenceTranslation.startsWith("Frase contextual:") &&
    !feedback.sentenceTranslation.startsWith("O conectivo '")
      ? feedback.sentenceTranslation
      : `O conectivo '${feedback.connector}' significa '${feedback.translation}' e conecta as ideias com sentido de ${feedback.family}.`);

  const displayWhyCorrect =
    note?.whyCorrect ||
    (feedback.whyCorrect &&
    !/^[A-Z][a-z]+ (covers|is used|means|indicates|expresses|shows|connects|refers)/i.test(feedback.whyCorrect)
      ? feedback.whyCorrect
      : `'${feedback.connector}' expressa ${feedback.family} e conecta perfeitamente as ideias desta frase.`);

  const displayWhyOthersFail =
    note?.whyOthersFail ||
    (feedback.whyOthersFail &&
    !feedback.whyOthersFail.includes("não atendem à regência sintática necessária")
      ? feedback.whyOthersFail
      : "As outras alternativas alteram o sentido pretendido ou não atendem à regência gramatical desta frase.");

  const displayProTip =
    note?.proTip ||
    (feedback.proTip &&
    !feedback.proTip.includes("Identifique a função de ligação entre as ideias para acertar com confiança!")
      ? feedback.proTip
      : `Dica de Ouro: O conectivo '${feedback.connector}' expressa ${feedback.family}. Observe a correlação entre as orações para fixar o uso!`);

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

        <div className="sentence-translation-pt">
          <span className="pt-label">Tradução em Português:</span>
          <p>"{displayTranslation}"</p>
        </div>
      </div>

      {/* Blocos Didáticos: Regra, Contraste e Dica de Ouro - 100% em Português */}
      <div className="teacher-insights-grid">
        <div className="teacher-insight-box insight-rule">
          <div className="insight-title">🧠 Por que é essa resposta?</div>
          <p>{displayWhyCorrect}</p>
        </div>

        <div className="teacher-insight-box insight-contrast">
          <div className="insight-title">⚖️ Por que não as outras?</div>
          <p>{displayWhyOthersFail}</p>
        </div>

        <div className="teacher-insight-box insight-tip">
          <div className="insight-title">💡 Dica de Ouro do Professor</div>
          <p>{displayProTip}</p>
        </div>
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
