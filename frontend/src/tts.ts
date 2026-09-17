// Text-to-Speech nativo para pronúncia de inglês em frases e conectivos
// Utiliza a Web Speech API do navegador sem dependências externas

export function isTtsSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function stopSpeaking() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

export function speakEnglish(text: string, onEnd?: () => void) {
  if (!isTtsSupported()) {
    if (onEnd) onEnd();
    return;
  }

  stopSpeaking();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.9; // Velocidade ligeiramente pausada para clareza didática
  utterance.pitch = 1.0;

  // Busca voz nativa em inglês se disponível
  const voices = window.speechSynthesis.getVoices();
  const englishVoice =
    voices.find((v) => v.lang === "en-US" && !v.name.includes("Google") === false) ||
    voices.find((v) => v.lang.startsWith("en-US")) ||
    voices.find((v) => v.lang.startsWith("en"));

  if (englishVoice) {
    utterance.voice = englishVoice;
  }

  if (onEnd) {
    utterance.onend = () => onEnd();
    utterance.onerror = () => onEnd();
  }

  window.speechSynthesis.speak(utterance);
}
