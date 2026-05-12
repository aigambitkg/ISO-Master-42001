# AIMS Starter Kit · ISO/IEC 42001

Statisches, GitHub-Pages-fähiges Web-Tool, mit dem Startups (10–20 MA) in einem geführten Flow ein konformes **AI Management System (AIMS)** nach ISO/IEC 42001:2023 aufbauen.

Es generiert auf Basis weniger Eingaben die zentrale **AI Policy**, eine vollständige **Statement of Applicability (SoA)** über die 30 Kern-Controls des Annex A, eine **AI Impact Assessment**-Bibliothek und exportiert das Ergebnis als git-fertiges Repository.

## Demo-Schritte

1. Öffne `index.html` über einen lokalen Web-Server (siehe unten) oder die GitHub-Pages-URL.
2. **Kontext erfassen** — Unternehmensname, Rollen, Anwendungsfälle, Risikoklasse.
3. **AI Policy** — live-aktualisierte Vorschau, Markdown-Download oder Zwischenablage.
4. **SoA** — pro Control Status setzen (Offen / In Bearbeitung / Erledigt).
5. **Impact Assessments** — pro KI-System eine AIIA erstellen.
6. **Export** — ZIP des kompletten Repos, direkt nach GitHub commit-fähig.

## Architektur

```
.
├── index.html                  # App Shell
├── dashboard.html              # Stand-alone Lite-Dashboard (Legacy)
│
├── js/
│   ├── app.js                  # Bootstrap, Section-Registry, Routing
│   ├── state.js                # Zentraler Store + localStorage + pub/sub
│   ├── router.js               # Hash-basiertes Routing
│   ├── data.js                 # Loader für controls/_index.json + Policy
│   │
│   ├── components/             # Eine Datei pro Sektion
│   │   ├── sidebar.js          # Navigation + Status-Dots
│   │   ├── overview.js         # Dashboard
│   │   ├── context-form.js     # Formular aus JSON-Schema
│   │   ├── policy-preview.js   # Live-Vorschau der AI Policy
│   │   ├── soa-builder.js      # Statement of Applicability
│   │   ├── aiia-builder.js     # Impact Assessment CRUD
│   │   └── export-panel.js     # ZIP-Export + Snapshot Import/Export
│   │
│   └── services/               # Reine Hilfsmodule, kein DOM
│       ├── template-engine.js  # {Variable}-Substitution
│       ├── markdown.js         # Marked.js-Wrapper
│       └── export.js           # ZIP-Erzeugung (JSZip)
│
├── policies/
│   ├── AI-Policy-Template.md          # Variablisierte Policy
│   └── AI-Policy-Template.schema.json # Variablen-Schema (Form-Generator-Input)
│
└── controls/
    ├── README.md
    ├── _index.json             # Maschinenlesbarer Master-Index
    ├── A.2.2-AI-Policy.md
    ├── A.2.3-Alignment-mit-Policies.md
    ├── …                       # 30 audit-fertige Control-Templates
    └── A.10.4-Kunden-AGB-Opt-out.md
```

### Designprinzipien

| Aspekt | Entscheidung | Begründung |
|--------|--------------|------------|
| Module | Native ES6, kein Bundler | GitHub Pages liefert statisch aus; kein Build-Schritt nötig. |
| State | localStorage + zentraler Store | Kein Server, kein Cookie-Banner, keine Datenschutz-Fragen. |
| Styling | Tailwind via CDN | Schnelles Iterieren, vertrautes Vokabular, sub-50 KB Footprint. |
| Markdown | Marked.js via CDN | 35 KB, robuste GFM-Unterstützung. |
| ZIP | JSZip via CDN | Stabilste statische ZIP-Bibliothek im Browser. |
| Routing | Hash-Routing | Funktioniert auf `user.github.io/repo/` ohne 404-Probleme. |
| Templates | `{Variable}`-Platzhalter | Lesbar, mit jedem Editor bearbeitbar, sprach­agnostisch. |

## Lokal starten

ES-Module funktionieren nicht über `file://`. Du brauchst einen lokalen Server:

```bash
# Variante 1: Python
python -m http.server 8000

# Variante 2: Node
npx serve

# Variante 3: VS Code
# Extension "Live Server" installieren → Rechtsklick auf index.html → "Open with Live Server"
```

Dann öffne `http://localhost:8000` im Browser.

## GitHub Pages Deployment

1. Repository auf GitHub anlegen, z. B. `aims-starter-kit`.
2. Lokalen Ordner pushen:
   ```bash
   git init
   git add .
   git commit -m "AIMS Starter Kit"
   git branch -M main
   git remote add origin git@github.com:USER/aims-starter-kit.git
   git push -u origin main
   ```
3. Settings → Pages → Source: `main` Branch, Ordner `/ (root)`.
4. Nach ein bis zwei Minuten ist das Tool erreichbar unter
   `https://USER.github.io/aims-starter-kit/`.

## Anpassung der Vorlagen

Die **AI Policy** liegt als `policies/AI-Policy-Template.md` und kann direkt editiert werden. Variablen folgen der Konvention `{VariableInPascalCase}`. Beim Hinzufügen neuer Variablen muss zusätzlich `policies/AI-Policy-Template.schema.json` erweitert werden — daraus generiert das Tool automatisch das Eingabe-Formular.

Die **30 Controls** liegen als einzelne Markdown-Dateien in `controls/`. Struktur ist normiert (7 Sektionen). Beim Hinzufügen eines neuen Controls muss der `_index.json` ergänzt werden — das Dashboard und der SoA-Builder lesen ihn als Single Source of Truth.

## Stand der Implementierung

| Modul | Status |
|-------|--------|
| AI Policy Template + Schema | ✓ fertig |
| 30 Annex-A Controls als Markdown | ✓ fertig |
| Modulares Dashboard | ✓ fertig |
| SoA Builder | ✓ fertig |
| AI Impact Assessment Builder | ✓ fertig |
| Repository-Export als ZIP | ✓ fertig |
| Snapshot Import/Export (JSON) | ✓ fertig |

## Lizenz und Haftung

Die generierten Dokumente sind Vorlagen, keine Rechtsberatung. Vor produktivem Einsatz prüfe sie gegen deine konkrete Situation — idealerweise mit einer auf KI-Recht spezialisierten Kanzlei.

Standard und Norm­bezüge:
- ISO/IEC 42001:2023 (AI Management System)
- ISO/IEC 23894:2023 (AI Risk Management)
- Verordnung (EU) 2024/1689 (EU AI Act)
- Verordnung (EU) 2016/679 (DSGVO)
