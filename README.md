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

### Design & Branding
- 🎨 **Offizielles Oberlinhaus Corporate Design**
- 📝 **Farben**: Rot (#b61b3e), Gold (#a98b6c), Sand (#efdec5)
- 📖 **Typografie**: Univers LT (Print), Arial (Web)
- ✨ **Markenwerte**: Wegweisend + Wertschätzend + Wertorientiert
- 📚 Siehe [CORPORATE_DESIGN.md](CORPORATE_DESIGN.md) für alle Details

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
├── index.html                 # Startseite (12er Kachel-Menü)
├── style.css                  # Zentrale Styles (Corporate Design)
├── app.js                     # Globale Funktionen
├── /components/               # Wiederverwendbare JS-Module
│   ├── header.js             # Header + Footer mit Accessibility
│   ├── storage.js            # localStorage Wrapper
│   ├── ui.js                 # UI Helper (Vorlesen, Notifications)
│   └── api.js                # JSON Loader + Future API Stubs
├── /pages/                    # Einzelne Feature-Seiten (12 Stück)
│   ├── speiseplan.html       # Wochenmenü
│   ├── zeiten.html           # Öffnungszeiten
│   ├── kontakt.html          # Kontakte (filter nach Thema)
│   ├── anwesenheit.html      # Anwesenheitsliste
│   ├── umfragen.html         # Abstimmungen
│   ├── angebote.html         # Aktivitäts-Angebote
│   ├── weiterbildungen.html  # Kurs-Katalog
│   ├── fahrkarten.html       # Fahrkarten-Upload
│   ├── lebenslauf.html       # CV/Dokumente
│   ├── jobs.html             # Jobbörse
│   ├── meldungen.html        # News & Ankündigungen
│   ├── fahrplaene.html       # externe Links (BVG, etc.)
│   └── design.html           # ⭐ Design-Referenz-Seite
├── /data/                     # JSON-Inhalte
│   ├── speiseplan.json
│   ├── zeiten.json
│   ├── ansprechpartner.json
│   ├── angebote.json
│   ├── weiterbildungen.json
│   ├── umfragen.json
│   ├── meldungen.json
│   └── jobs.json
├── CORPORATE_DESIGN.md        # ⭐ Design-System Spezifikation
├── IMPLEMENTATION.md          # Implementierungs-Übersicht
├── .gitignore
└── README.md                 # Diese Datei
```

## 🚀 Verwendung

### Lokal (Live Server)
```bash
# VS Code Live Server Extension verwenden
# 1. index.html öffnen
# 2. Rechtsklick → "Open with Live Server"
# 3. Browser öffnet sich auf http://127.0.0.1:5500

# Alternativ mit Python:
cd /path/to/oberlin-portal
python -m http.server 8000
# Dann: http://localhost:8000
```

### GitHub Pages
1. Push zu GitHub: `git push origin main`
2. In GitHub: Settings → Pages → Source = main branch
3. Abrufbar unter: `https://USERNAME.github.io/REPO/`

## 💾 Daten-Verwaltung

### Statische Inhalte (JSON)
Alle Inhalte (Speisepläne, Kontakte, etc.) sind in `/data/*.json` definiert und werden zur Laufzeit geladen.

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
Alle Benutzereingaben werden sicher lokal im Browser gespeichert:

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

## 🎨 Corporate Design System

Alle Styles folgen dem offiziellen Oberlinhaus Corporate Design:

### Farben
```css
:root {
  --oberlin-red: #b61b3e;      /* Hauptfarbe */
  --oberlin-gold: #a98b6c;     /* Sekundär */
  --oberlin-sand: #efdec5;     /* Akzent */
  --gray-dark: #333333;
  --gray-light: #f5f5f5;
}
```

**Gewichtung**: 70% Rot, 20% Gold, 10% Sand (aus Corporate Design)

### Typografie
- **Überschriften (h1, h2, h3)**: Rot, Univers LT / Arial Bold
- **Fließtext**: Schwarz, Arial, linksbündig, 1.6 line-height
- **Keine Kursiv-Schnitte** (gem. Richtlinien)

### Komponenten
- **Cards**: 2px rote Linie oben, 5px goldene Bar (::before Pseudo-Element)
- **Buttons**: 44×44px Mindestgröße, Rot mit dunkelgrauer Hover
- **Info-Boxen**: Linke 5px rote Linie, heller Hintergrund
- **Fokus-State**: 3px rote Umrandung (barrierefreundlich)

Siehe [CORPORATE_DESIGN.md](CORPORATE_DESIGN.md) für Komplettdokumentation!

## 🔧 Komponenten

### `components/header.js`
```javascript
// Seite mit Header & Footer initialisieren
const container = document.querySelector("main");
container.appendChild(renderHeader("Seitentitel", true));  // true = zeige Home-Button
container.appendChild(renderFooter("main"));              // für Vorlesen
```

**Footer-Buttons:**
- 🔤 Schriftgröße: 100% → 120% → 140%
- 🔊 Vorlesen: Web Speech API Toggle
- 📖 Leichte Sprache: Einfache Text-Versionen

### `components/storage.js`
Sicherer localStorage-Wrapper mit Error-Handling:
```javascript
Storage.set(key, value)     // → boolean
Storage.get(key, default)   // → any
Storage.list(prefix)        // → array
Storage.remove(key)         // → boolean
Storage.clear(prefix)       // → boolean
```

### `components/ui.js`
UI-Helper-Funktionen:
```javascript
UI.createBackButton(label)           // → HTMLElement
UI.createHelpBox(text)               // → HTMLElement
UI.showNotification(msg, type)       // type: "success"|"error"|"info"
UI.speak(text)                       // → Vorlesen starten
UI.stopSpeaking()                    // → Vorlesen stoppen
```

### `components/api.js`
JSON Loader + Future API Stubs:
```javascript
const data = await API.loadJSON("speiseplan"); // lädt data/speiseplan.json

// Future API Stubs (für Backend-Integration vorbereitet):
API.uploadTicket(file)            // TODO: Supabase/Firebase
API.uploadCV(file)                // TODO: Supabase/Firebase
API.saveAttendance(entry)         // TODO: Datenbank
API.submitSurvey(id, answers)     // TODO: Auswertung
```

## 🔐 Sicherheit & Datenschutz

- ✅ **Keine echten Uploads** (GitHub Pages hat keine Speicherung)
- ✅ **Inhalte nur lokal** im Browser (localStorage)
- ✅ **Keine Tracking-Cookies**
- ✅ **Externe Links** mit `target="_blank" rel="noopener noreferrer"`
- ⚠️ **Künftig**: DSGVO-konforme Impressum/Datenschutz-Seiten

## 📱 Browser-Unterstützung

- ✅ Chrome/Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Mobile Browser (iOS Safari, Android Chrome)

**Web Speech API** (Vorlesen):
- Chrome, Edge, Safari ✅
- Firefox (eingeschränkt)
- Fallback: Normale Funktionalität ohne Sound

## 🔮 Future Roadmap

### Backend-Integration (optional)
```javascript
// In api.js vorbereitet - einfach API-Endpunkte anpassen:
API.uploadTicket(file)       // → Supabase/Firebase
API.saveAttendance(entry)    // → PostgreSQL/Firebase
API.submitSurvey(id, answers) // → Auswertung & Speicherung
```

### Authentifizierung (später)
- PIN-Code Login (einfach für kognitiv beeinträchtigte)
- Rollen-Modell: Nutzer / Mitarbeitende / Admin

### Erweiterte Features
- Push-Benachrichtigungen (neue Meldungen)
- Offline-Modus (Service Workers)
- Mehrsprachigkeit
- Impressum & Datenschutz Seiten

## 📖 Entwickler-Guide

### Neue Seite hinzufügen

1. **HTML-Template** in `/pages/meine-seite.html`:
```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Meine Seite - Oberlinhaus</title>
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
      
      // Header mit Home-Button
      container.appendChild(renderHeader("Mein Titel", true));
      
      // Inhalte hinzufügen...
      const contentBox = document.createElement("div");
      contentBox.className = "card";
      contentBox.innerHTML = "<p>Hallo Welt!</p>";
      container.appendChild(contentBox);
      
      // Footer mit Accessibility-Buttons
      container.appendChild(renderFooter("main.page-content"));
    }
    
    initPage().catch(err => {
      console.error("Fehler beim Laden:", err);
      UI.showNotification("Fehler beim Laden der Seite", "error", 5000);
    });
  </script>
</body>
</html>
```

2. **Link auf Startseite** aktualisieren (`index.html`):
```html
<a class="card" href="./pages/meine-seite.html">
  <span class="icon">🎯</span>
  <span class="title">Meine Seite</span>
  <span class="description">Kurzbeschreibung</span>
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

// Alle mit Präfix auflisten
const allEntries = Storage.list("myEntry_");
allEntries.forEach(({ key, value }) => {
  console.log(key, value);
});
```

## ❓ FAQ

**F: Warum nicht [Framework X]?**
A: Absichtlich vanilla JS für minimale Dependencies. Gut wartbar, barrierefrei, schnell.

**F: Wie funktioniert Vorlesen?**
A: Web Speech API – Browser liest Text vor. Fallback: Button wird grau (nicht verfügbar).

**F: Sind die Dateien wirklich privat?**
A: Ja! GitHub Pages ist statisch. Uploads bleiben nur lokal im Browser-Storage.

**F: Kann man das später mit Backend verbinden?**
A: Ja! `api.js` hat Stubs vorbereitet. Einfach in `API.uploadTicket()` etc. Supabase/Firebase ansteuern.

**F: Wo finde ich die Corporate Design Regeln?**
A: In [CORPORATE_DESIGN.md](CORPORATE_DESIGN.md) - komplett dokumentiert mit Farben, Typografie, Komponenten.

## 📞 Support

Für technische Fragen: VSC AI  
Für Oberlinhaus-spezifisch: Marco Müller (Arbeitsvorbereiter) oder Julia Schmidt (Fahrdienst-Koordination)

---

**Letzte Aktualisierung**: 29.01.2025  
**Status**: MVP + Corporate Design (Phase 4 fertig)  
**Git-Commits**: 5  
**Hosting**: GitHub Pages ready  
**Autor**: VSC AI

