/**
 * Hauptseiten-App & globale Accessibility-Funktionen
 */

// Schriftgröße: 100%, 120%, 140%
let fontSizeIndex = 0;
const fontSizes = ["100%", "120%", "140%"];

function initFontSize() {
  const savedIndex = Storage?.get?.("fontSize", 0) || 0;
  if (savedIndex > 0) {
    fontSizeIndex = savedIndex;
    document.documentElement.style.fontSize = fontSizes[fontSizeIndex];
  }
}

// Leichte Sprache beim Laden
function initEasyLang() {
  const isEasyLang = Storage?.get?.("easyLang", false) || false;
  if (isEasyLang) {
    document.body.classList.add("easy-lang");
  }
}

// Footer Buttons initialisieren (nur auf Startseite)
function initHomeFooter() {
  const btnTextSize = document.getElementById("btnTextSize");
  const btnSpeak = document.getElementById("btnSpeak");
  const btnEasyLang = document.getElementById("btnEasyLang");

  if (btnTextSize) {
    btnTextSize.textContent = ["A", "A+", "A++"][fontSizeIndex];
    btnTextSize.addEventListener("click", () => {
      fontSizeIndex = (fontSizeIndex + 1) % fontSizes.length;
      document.documentElement.style.fontSize = fontSizes[fontSizeIndex];
      btnTextSize.textContent = ["A", "A+", "A++"][fontSizeIndex];
      if (Storage?.set) {
        Storage.set("fontSize", fontSizeIndex);
      }
    });
  }

  if (btnSpeak) {
    let isSpeaking = false;
    btnSpeak.addEventListener("click", () => {
      if (isSpeaking) {
        if (UI?.stopSpeaking) {
          UI.stopSpeaking();
        }
        isSpeaking = false;
        btnSpeak.classList.remove("active");
        return;
      }

      const main = document.querySelector("main");
      const text = main ? main.innerText : document.body.innerText;
      if (text.trim() && UI?.speak) {
        UI.speak(text);
        isSpeaking = true;
        btnSpeak.classList.add("active");
      }
    });
  }

  if (btnEasyLang) {
    let isEasyLang = Storage?.get?.("easyLang", false) || false;

    if (isEasyLang) {
      document.body.classList.add("easy-lang");
      btnEasyLang.classList.add("active");
    }

    btnEasyLang.addEventListener("click", () => {
      isEasyLang = !isEasyLang;
      if (Storage?.set) {
        Storage.set("easyLang", isEasyLang);
      }
      if (isEasyLang) {
        document.body.classList.add("easy-lang");
        btnEasyLang.classList.add("active");
      } else {
        document.body.classList.remove("easy-lang");
        btnEasyLang.classList.remove("active");
      }
    });
  }
}

// Beim Laden starten
document.addEventListener("DOMContentLoaded", () => {
  initFontSize();
  initEasyLang();
  initHomeFooter();
});
