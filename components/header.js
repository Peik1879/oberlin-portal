/**
 * Header & Navigation
 * Wird auf jeder Seite eingebunden
 */
function renderHeader(pageTitle = "Oberlinhaus Werkstatt", showBack = false) {
  const header = document.createElement("header");
  header.className = "header";
  header.setAttribute("role", "banner");

  let html = `<h1>${pageTitle}</h1>`;

  if (showBack) {
    html += '<a href="./" class="btn-home" title="Zur Startseite">Home</a>';
  }

  header.innerHTML = html;
  return header;
}

/**
 * Footer mit Buttons: Schriftgröße, Vorlesen, Leichte Sprache
 */
function renderFooter(contentSelector = "main") {
  const footer = document.createElement("footer");
  footer.className = "footer sticky-footer";
  footer.setAttribute("role", "contentinfo");

  footer.innerHTML = `
    <div class="footer-buttons">
      <button id="btnTextSize" class="btn btn-small" type="button" 
              title="Schriftgröße anpassen">
        <span aria-label="Schrift">A</span>
      </button>
      <button id="btnSpeak" class="btn btn-small" type="button" 
              title="Seite vorlesen">
        <span aria-label="Vorlesen">🔊</span>
      </button>
      <button id="btnEasyLang" class="btn btn-small" type="button" 
              title="Leichte Sprache">
        <span aria-label="Leichte Sprache">ABC</span>
      </button>
    </div>
  `;

  // Schriftgröße: 100%, 120%, 140%
  let fontSizeIndex = 0;
  const fontSizes = ["100%", "120%", "140%"];
  const btnTextSize = footer.querySelector("#btnTextSize");

  btnTextSize.addEventListener("click", () => {
    fontSizeIndex = (fontSizeIndex + 1) % fontSizes.length;
    document.documentElement.style.fontSize = fontSizes[fontSizeIndex];
    btnTextSize.textContent = ["A", "A+", "A++"][fontSizeIndex];
    Storage.set("fontSize", fontSizeIndex);
  });

  // Vorlesen
  let isSpeaking = false;
  const btnSpeak = footer.querySelector("#btnSpeak");

  btnSpeak.addEventListener("click", () => {
    if (isSpeaking) {
      UI.stopSpeaking();
      isSpeaking = false;
      btnSpeak.classList.remove("active");
      return;
    }

    const main = document.querySelector(contentSelector);
    const text = main ? main.innerText : document.body.innerText;
    if (text.trim()) {
      UI.speak(text);
      isSpeaking = true;
      btnSpeak.classList.add("active");
    }
  });

  // Leichte Sprache Toggle
  const btnEasyLang = footer.querySelector("#btnEasyLang");
  let isEasyLang = Storage.get("easyLang", false);

  const updateEasyLang = () => {
    if (isEasyLang) {
      document.body.classList.add("easy-lang");
      btnEasyLang.classList.add("active");
    } else {
      document.body.classList.remove("easy-lang");
      btnEasyLang.classList.remove("active");
    }
  };

  updateEasyLang();

  btnEasyLang.addEventListener("click", () => {
    isEasyLang = !isEasyLang;
    Storage.set("easyLang", isEasyLang);
    updateEasyLang();
    UI.showNotification(
      isEasyLang ? "Leichte Sprache aktiviert" : "Normale Sprache aktiviert"
    );
  });

  // Beim Laden vorherige Schriftgröße wiederherstellen
  const savedFontSizeIndex = Storage.get("fontSize", 0);
  if (savedFontSizeIndex > 0) {
    fontSizeIndex = savedFontSizeIndex;
    document.documentElement.style.fontSize = fontSizes[fontSizeIndex];
    btnTextSize.textContent = ["A", "A+", "A++"][fontSizeIndex];
  }

  return footer;
}
