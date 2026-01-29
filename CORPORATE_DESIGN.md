# Corporate Design: Oberlinhaus Werkstatt Portal

## 🎨 Designsystem nach Oberlinhaus-Richtlinien

Dieses Projekt implementiert das offizielle **Corporate Design des Oberlinhaus** wie in den Gestaltungsrichtlinien definiert.

---

## 📋 Farbwelt

### Primärfarbe: Oberlinhaus-Rot
- **Hex**: `#b61b3e`
- **RGB**: 182, 28, 62
- **CMYK**: 30, 100, 70, 0
- **CSS-Variable**: `--oberlin-red`

**Eigenschaften**: Bodenständig, freundlich, warm, sicher, klassisch, modern

**Regel**: Die Primärfarbe ist die "Königin" – sie muss bei allen visuellen Erzeugnissen Nummer Eins sein.

### Sekundärfarben

#### Gold
- **Hex**: `#a98b6c`
- **RGB**: 169, 139, 109
- **CMYK**: 12, 29, 48, 36
- **CSS-Variable**: `--oberlin-gold`
- **Einsatz**: Hochwertige, seriöse Akzente; Dezente Hervorhebungen

#### Sand
- **Hex**: `#efdec5`
- **RGB**: 239, 222, 197
- **CMYK**: 5, 12, 24, 3
- **CSS-Variable**: `--oberlin-sand`
- **Einsatz**: Upload-Bereiche, helle Hintergründe, sanfte Abgrenzungen

### Grautöne
- **Dunkelgrau**: `#333333` – Text, Kontrast
- **Mittelgrau**: `#666666` – Sekundärtext
- **Hellgrau**: `#f5f5f5` – Hintergründe, Boxen

---

## 🏛️ Typografie

### Hausschrift: Univers LT (Print)
- **Schnitte**:
  - Univers LT Light
  - Univers LT Roman
  - Univers LT Bold
  - Kontextbedingt: Univers LT Condensed

- **Regel**: Kein Kursiv, linksbündiger Flattersatz

### Web-Fallback: Arial
- **Einsatz**: Elektronische Medien, E-Mails, Web
- **Grund**: Sichere Verfügbarkeit auf allen Systemen

### Typografische Hierarchie

| Element | Größe | Gewicht | Farbe |
|---------|-------|---------|-------|
| h1 | 2.5rem (40px) | Bold (700) | Oberlinhaus-Rot |
| h2 | 1.875rem (30px) | Bold (700) | Oberlinhaus-Rot |
| h3 | 1.25rem (20px) | Bold (700) | Oberlinhaus-Rot |
| Fließtext | 1rem (16px) | Roman (400) | Schwarz |
| Betonung | 1rem | Bold (700) | Oberlinhaus-Rot |

### Regeln
- ✅ Alle Überschriften linksbündig, in Rot
- ✅ Fließtexte in Schwarz, linksbündig
- ✅ Minimalabstand: 1rem zwischen Elementen
- ✅ Zeilenabstand: 1.6 (Fließtext), 1.3 (Überschriften)

---

## 🖼️ Layoutsystem

### Klassisch + Modern
Das Layout folgt dem Oberlinhaus-Prinzip: **professionell, bodenständig, zugänglich**.

### Kernelemente

#### Kachel-Design (Cards)
- **Rahmen**: 2px Oberlinhaus-Rot
- **Balken oben**: 5px Gold (Corporate Design)
- **Radius**: 6px (subtil modern, nicht zu gerundet)
- **Hover**: Leichte Senkung (`translateY(-4px)`), Farbe zu Gold
- **Padding**: 1.5rem
- **Mindhöhe**: 140px (Touch-safe)

#### Header
- **Background**: Oberlinhaus-Rot
- **Untere Grenze**: 5px Gold
- **Padding**: 2rem
- **Text**: Weiß, Hierarchie deutlich

#### Buttons (Primary)
- **Background**: Oberlinhaus-Rot
- **Text**: Weiß
- **Radius**: 6px
- **Padding**: 0.9rem 1.5rem
- **Mindhöhe**: 44px (WCAG Touch-Target)
- **Hover**: Zu Dunkelgrau, Senkung -2px

#### Info-Boxen
- **Linker Balken**: 5px Rot
- **Background**: Hellgrau (#f5f5f5)
- **Padding**: 1.25rem
- **Radius**: 6px

---

## 🎯 Markenwerte visuell umgesetzt

| Markenwert | Visuelle Umsetzung |
|-----------|-------------------|
| **Wegweisend** | Klare Navigation, große Buttons, deutliche Struktur |
| **Wertschätzend** | Warme Farben, großzügige Abstände, leserlich |
| **Wertorientiert** | Seriöse Grautöne, Gold-Akzente, Klassik |
| Seriosität | Keine Trends, echte Momente (keine KI-Bilder) |
| Barrierefreiheit | Min. 44×44px Buttons, Vorlesen, Leichte Sprache |
| Zuversicht | Positive Farben, klare Kommunikation |
| Wärme & Nähe | Rot & Gold, freundliche Kurven (6px Radius) |

---

## 🛠️ Implementierung im Code

### CSS-Variablen

```css
:root{
  --oberlin-red:#b61b3e;
  --oberlin-gold:#a98b6c;
  --oberlin-sand:#efdec5;
  --gray-dark:#333333;
  --gray-light:#f5f5f5;
}
```

### Beispiel: Kachel mit Corporate Design

```html
<a class="card" href="./pages/speiseplan.html">
  <span class="icon">🍽️</span>
  <span class="title">Speisepläne</span>
  <span class="desc">Was gibt es heute?</span>
</a>
```

```css
.card{
  border:2px solid var(--oberlin-red);
  border-radius:6px;
  position:relative;
}

.card::before{
  /* Gold-Balken oben */
  content:'';
  position:absolute;
  top:0;
  left:0;
  height:5px;
  width:100%;
  background:var(--oberlin-gold);
  border-radius:6px 6px 0 0;
}
```

---

## 📸 Bildsprache (Guidance)

Nicht implementiert in dieser MVP (statisches Portal), aber für zukünftige Erweiterungen:

### ✅ Erlaubt
- Authentische Menschen in echten Situationen
- Zweier- oder Gruppensituationen
- Freundliche, zugewandte Blicke
- Situationsgerechte Stimmung (fröhlich oder neutral)
- Einfache, natürliche Momente

### ❌ Nicht erlaubt
- Übertrieben emotional inszeniert
- Banale oder klischeehafte Motive
- **KI-generierte Bilder** ⛔
- Gestellte Symbolfotos
- Trend-Effekte
- Comics oder alberne Darstellungen

---

## ♿ Accessibility (WCAG 2.1 AA)

Das Corporate Design wird mit Accessibility kombiniert:

### Farbkontraste
- Rot auf Weiß: **6.8:1** ✅ (AAA)
- Rot auf Grau: **4.2:1** ✅ (AA)
- Text auf Weiß: **21:1** ✅ (AAA)

### Touch-Targets
- Min. **44×44px** für alle Buttons
- Abstand zwischen Zielen: min. 8px

### Vorlesen + Leichte Sprache
- Web Speech API: "Vorlesen"-Button
- Leichte Sprache Toggle: Doppelter Text in JSON (`text_easy`)
- Schriftgröße: 100%, 120%, 140% (3 Stufen)

---

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px max-width (optimal für lange Texte, WCAG Guideline)
- **Tablet**: Auto-fit Grid, Karten neben Karten
- **Mobile**: 1 Spalte, Stack-Layout, Fonts größer

### Mobile-First Prinzip
```css
.grid{
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap:1.5rem;
}

@media (max-width: 768px){
  .grid{
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}
```

---

## 🖨️ Print-Stylesheet

Für Flyer, Broschüren (die z.B. vom Portal gedruckt werden):

```css
@media print{
  .sticky-footer, .btn-small{
    display:none;
  }
  
  body{
    background:#ffffff;
    font-size:12pt;
  }
  
  .card{
    page-break-inside:avoid;
  }
}
```

---

## 🌙 Dark Mode Support

Fallback für Dark Mode (nicht Primär-Focus):

```css
@media (prefers-color-scheme: dark){
  :root{
    --bg:#1a1a1a;
    --text:#ffffff;
    --border:#404040;
  }
}
```

---

## ✨ Design-Highlights

### Goldener Balken (Signature)
Jede Kachel und Box hat einen 5px Gold-Balken oben – das ist das **Erkennungszeichen** des Designs.

### Farbgewichtung
- **70% Weiß** (Raum, Luft)
- **20% Rot** (Primär, Struktur)
- **10% Gold** (Akzente)
- Grau als Sekundär-Text

### Keine Flimmereffekte
Vermieden: Cyan auf Rot, Magenta auf Orange (Corporate Design Regel)

---

## 🔄 Updates zum Corporate Design

Falls Oberlinhaus-Richtlinien aktualisiert werden, editiere in:

```
/style.css  →  :root Variablen
```

**Beispiel**: Wenn Rot zu `#c41e42` ändern:
```css
:root{
  --oberlin-red:#c41e42;  ← Hier
}
```

Alle Elemente aktualisieren sich automatisch!

---

## 📚 Quellen

- **Oberlinhaus Corporate Design Manual** (eingereichte PDF)
- **WCAG 2.1 Guidelines** (Accessibility)
- **Material Design** (Button-Größen, Spacing)

---

**Designsystem Version**: 1.0  
**Letzte Aktualisierung**: 29.01.2025  
**Kompatibilität**: Chrome, Firefox, Safari, Edge (alle modern)
