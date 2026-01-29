/**
 * UI Helper Funktionen
 * Erstellt häufig genutzte UI-Elemente
 */
const UI = {
  /**
   * Erstellt einen "Zurück" Button
   * @param {string} label Text für Button (default: "Zurück")
   * @returns {HTMLElement} Button Element
   */
  createBackButton: (label = "Zurück") => {
    const btn = document.createElement("button");
    btn.className = "btn btn-back";
    btn.type = "button";
    btn.innerHTML = "← " + label;
    btn.addEventListener("click", () => window.history.back());
    return btn;
  },

  /**
   * Erstellt einen "Hilfe" Hinweisbox
   * @param {string} text
   * @returns {HTMLElement}
   */
  createHelpBox: (text) => {
    const box = document.createElement("aside");
    box.className = "help-box";
    box.innerHTML = `<strong>💡 Hilfe:</strong> ${text}`;
    box.setAttribute("role", "note");
    return box;
  },

  /**
   * Zeigt eine Benachrichtigung
   * @param {string} message
   * @param {string} type "success" | "error" | "info"
   * @param {number} duration ms (default 3000)
   */
  showNotification: (message, type = "info", duration = 3000) => {
    const notif = document.createElement("div");
    notif.className = `notification notification-${type}`;
    notif.setAttribute("role", "status");
    notif.setAttribute("aria-live", "polite");
    notif.textContent = message;
    document.body.appendChild(notif);

    setTimeout(() => {
      notif.classList.add("notification-fade");
      setTimeout(() => notif.remove(), 300);
    }, duration);
  },

  /**
   * Startet Vorlesen (Web Speech API)
   * @param {string} text
   * @returns {SpeechSynthesisUtterance|null}
   */
  speak: (text) => {
    if (!("speechSynthesis" in window)) {
      console.warn("Web Speech API nicht verfügbar");
      return null;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.rate = 0.9; // leicht langsamer für Barrierefreiheit
    window.speechSynthesis.speak(utterance);
    return utterance;
  },

  /**
   * Stoppt Vorlesen
   */
  stopSpeaking: () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  },
};
