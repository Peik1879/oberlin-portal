# Oberlinhaus Werkstatt Portal

Barrierefreie Web-App für das Oberlinhaus-Werkstatt (im Vitus-App-Stil). Alle Inhalte sind zugänglich, einfach zu bedienen und speichern Daten lokal im Browser.

## 🎯 Features

### Barrierefreiheit
- ✅ Großflächige Touch-Targets (mind. 44x44px)
- ✅ Vorlesen-Funktion (Web Speech API)
- ✅ Schriftgröße anpassbar (100%, 120%, 140%)
- ✅ Leichte Sprache Toggle
- ✅ Tastaturnavigation vollständig
- ✅ Sichtbare Fokusrahmen
- ✅ Semantisches HTML (header, nav, main, footer)
- ✅ ARIA-Labels

### Funktionen
- 📋 **Speisepläne**: Wochenplan mit Druck-Funktion
- ⏰ **Öffnungszeiten**: Wöchentlich + Schließtage
- 📞 **Ansprechpartner**: Filter nach Thema + Telefon-Buttons
- 📝 **Anwesenheit**: Tägliche Einträge (lokal gespeichert)
- 🗳️ **Umfragen**: Schnell abstimmen, lokal speichern
- 🎯 **Angebote**: Mit Favoriten-Funktion
- 🎓 **Weiterbildungen**: Mit Interessens-Register
- 📢 **Meldungen**: News & Wichtiges
- 📤 **Fahrkarten & Lebenslauf**: Datei-Upload lokal
- 🚌 **Fahrpläne & Abholung**: Links + Kontakt
- 💼 **Jobbörse**: Stub für zukünftige Inhalte

## 📁 Projektstruktur

```
/
├── index.html                 # Startseite
├── style.css                  # Zentrale Styles
├── app.js                     # Globale Funktionen
├── /components/               # Wiederverwendbare JS-Module
│   ├── header.js             # Header + Footer-Rendering
│   ├── storage.js            # localStorage Wrapper
│   ├── ui.js                 # UI Helper (Vorlesen, Notifications)
│   └── api.js                # JSON Loader + Future API Stubs
├── /pages/                    # Einzelne Seiten
│   ├── speiseplan.html
│   ├── zeiten.html
│   ├── kontakt.html
│   ├── anwesenheit.html
│   ├── umfragen.html
│   ├── angebote.html
│   ├── weiterbildungen.html
│   ├── fahrkarten.html
│   ├── lebenslauf.html
│   ├── jobs.html
│   ├── meldungen.html
│   └── fahrplaene.html
└── /data/                     # JSON-Inhalte
    ├── speiseplan.json
    ├── zeiten.json
    ├── ansprechpartner.json
    ├── angebote.json
    ├── weiterbildungen.json
    ├── umfragen.json
    └── meldungen.json
```

## 🚀 Verwendung

### Lokal (Live Server)
```bash
# VS Code Live Server Extension verwenden
# Oder mit Python:
python -m http.server 8000
# Dann: http://localhost:8000
```

### GitHub Pages
1. Push zu GitHub: `git push origin main`
2. In GitHub: Settings → Pages → Source = main branch
3. Abrufbar unter: `https://USERNAME.github.io/REPO/`

## 💾 Daten-Verwaltung

### Statische Inhalte (JSON)
Alle Inhalte (Speisepläne, Kontakte, etc.) sind in `/data/*.json` definiert.

Beispiel `data/speiseplan.json`:
```json
{
  "woche": [
    {
      "tag": "Montag",
      "datum": "03.02.2025",
      "mittag": "Pasta mit Tomatensoße",
      "beilage": "Salat",
      "nachtisch": "Joghurt mit Obst",
      "text_easy": "Nudelgericht mit Salat."
    }
  ]
}
```

### Lokale Speicherung (Browser)
- **Anwesenheit**: `attendance_[timestamp]`
- **Fahrkarten**: `ticket_[timestamp]`
- **Lebenslauf**: `cv_[timestamp]`
- **Favoriten**: `favorite_[offerId]`, `course_[courseId]`
- **Umfragen**: `survey_[surveyId]`
- **Einstellungen**: `fontSize`, `easyLang`

```javascript
// Beispiel: Storage API
Storage.set("myKey", { data: "value" });
const data = Storage.get("myKey", null); // null = default
Storage.remove("myKey");
```

## 🔧 Komponenten

### `components/header.js`
```javascript
// Seite mit Header & Footer initialisieren
container.appendChild(renderHeader("Seitentitel", true)); // true = zeige Home-Button
container.appendChild(renderFooter("main")); // Argument: Selector für Vorlesen
```

### `components/storage.js`
Lokaler Storage Wrapper mit Error-Handling:
```javascript
Storage.set(key, value)     // boolean
Storage.get(key, default)   // any
Storage.list(prefix)        // array
Storage.remove(key)         // boolean
Storage.clear(prefix)       // boolean
```

### `components/ui.js`
UI-Helper-Funktionen:
```javascript
UI.createBackButton(label)        // HTMLElement
UI.createHelpBox(text)            // HTMLElement
UI.showNotification(msg, type)    // type: "success"|"error"|"info"
UI.speak(text)                    // Vorlesen starten
UI.stopSpeaking()                 // Vorlesen stoppen
```

### `components/api.js`
JSON Loader (Future: Backend-ready):
```javascript
const data = await API.loadJSON("speiseplan"); // lädt data/speiseplan.json

// Future API Stubs (noch nicht implementiert):
API.uploadTicket(file)            // TODO
API.uploadCV(file)                // TODO
API.saveAttendance(entry)         // TODO
API.submitSurvey(id, answers)     // TODO
```

## 🎨 Styling-Highlight

### Farben
- **Oberlin-Blau**: `#005ea8`
- **Oberlin-Gelb**: `#f7a800`
- **Hintergrund**: `#f4f6f8`
- **Text**: `#0b0f14`

### Responsive
- Mobile-first Design
- Grid: `repeat(auto-fit, minmax(min-width, 1fr))`
- Sticky Footer mit Accessibility-Buttons

### Leichte Sprache
CSS-Klasse `easy-lang` am Body:
```css
body.easy-lang {
  font-size: 1.1em;
  line-height: 1.6;
}
```

## 🔐 Sicherheit & Datenschutz

- ✅ Keine echten Uploads (GitHub Pages hat keine Speicherung)
- ✅ Inhalte nur lokal im Browser (localStorage)
- ✅ Keine Tracking-Cookies
- ✅ Externe Links: `target="_blank" rel="noopener noreferrer"`

## 📱 Browser-Unterstützung

- ✅ Chrome/Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Mobile Browser (iOS Safari, Android Chrome)

**Web Speech API** (Vorlesen):
- Chrome, Edge, Safari ✅
- Firefox (eingeschränkt)
- Fallback: Stille Funktionalität

## 🔮 Future Roadmap

### Backend-Integration (optional)
```javascript
// In api.js vorbereitet:
API.uploadTicket(file)       // → Supabase/Firebase
API.saveAttendance(entry)    // → Datenbank
API.submitSurvey(id, answers) // → Auswertung
```

### Authentifizierung (später)
- PIN-Code Login (einfach für kognitiv eingeschränkte)
- Rollen: Nutzer / Mitarbeitende / Admin

### Erweiterte Features
- Benachrichtigungen (bei neuen Meldungen)
- Offline-Modus (Service Workers)
- Mehrsprachigkeit

## 📖 Entwickler-Guide

### Neue Seite hinzufügen

1. **HTML-Template** in `/pages/meine-seite.html`:
```html
<!DOCTYPE html>
<html lang="de">
<head>
  <link rel="stylesheet" href="../style.css" />
</head>
<body>
  <main class="container page-content"></main>
  <script src="../components/storage.js"></script>
  <script src="../components/api.js"></script>
  <script src="../components/ui.js"></script>
  <script src="../components/header.js"></script>
  <script>
    async function initPage() {
      const container = document.querySelector("main");
      container.appendChild(renderHeader("Mein Titel", true));
      // Inhalte hinzufügen...
      container.appendChild(renderFooter("main.page-content"));
    }
    initPage();
  </script>
</body>
</html>
```

2. **Link auf Startseite** aktualisieren (`index.html`):
```html
<a class="card" href="./pages/meine-seite.html">
  <span class="icon">🎯</span>
  <span class="title">Meine Seite</span>
</a>
```

3. **JSON-Daten** falls nötig in `/data/meine-daten.json`

### Neue Datenquelle laden
```javascript
const data = await API.loadJSON("meine-daten");
// jetzt ist data = Inhalt von data/meine-daten.json
```

### Lokale Daten speichern
```javascript
// Speichern
const entry = { name: "Test", date: new Date() };
Storage.set("myEntry_123", entry);

// Abrufen
const loaded = Storage.get("myEntry_123", null);

// Alle mit Präfix
const allEntries = Storage.list("myEntry_");
```

## ❓ FAQ

**F: Warum nicht [Framework X]?**
A: Absichtlich vanilla JS für minimale Dependencies. Gut wartbar, barrierefrei, schnell.

**F: Wie funktioniert Vorlesen?**
A: Web Speech API – Browser liest Text vor. Fallback: Button wird grau (nicht verfügbar).

**F: Sind die Dateien wirlich privat?**
A: Ja! GitHub Pages ist statisch. Uploads bleiben nur lokal im Browser-Storage.

**F: Kann man das später mit Backend verbinden?**
A: Ja! `api.js` hat stubs vor bereitet. Einfach in `API.uploadTicket()` etc. Supabase/Firebase ansteuern.

## 📞 Support

Für Fragen: Marco Müller (Arbeitsvorbereiter) oder Julia Schmidt (Fahrdienst-Koordination)

---

**Letzte Aktualisierung**: 29.01.2025
**Status**: MVP (Minimum Viable Product) fertig
**Autor**: VSC AI
