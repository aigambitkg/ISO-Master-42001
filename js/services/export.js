/**
 * Builds a GitHub-Pages-ready repository structure as a downloadable ZIP.
 *
 * Structure produced:
 *
 *   /
 *   ├── README.md
 *   ├── policies/
 *   │   └── AI-Policy.md                (template + context applied)
 *   ├── controls/
 *   │   ├── _index.json
 *   │   └── A.x.y-*.md                  (each with placeholders applied)
 *   ├── assessments/
 *   │   └── <system>.md                 (one per assessment in state)
 *   ├── soa.md                          (Statement of Applicability table)
 *   └── progress-snapshot.json          (state export)
 */

import { ctx, fetchControlBody, getControls, getCategories } from '../data.js';
import { substitute } from './template-engine.js';
import { stripFrontmatter } from './markdown.js';

export async function buildExportZip(state) {
  if (!window.JSZip) throw new Error('JSZip library not loaded');
  const zip = new window.JSZip();

  const vars = state.context || {};
  const today = new Date().toISOString().split('T')[0];

  // --- README ---
  zip.file('README.md', buildReadme(vars, today));

  // --- AI Policy ---
  const policyResolved = substitute(ctx.policyTemplate || '', vars);
  zip.folder('policies').file('AI-Policy.md', policyResolved);

  // --- Controls ---
  const controlsFolder = zip.folder('controls');
  controlsFolder.file('_index.json', JSON.stringify(ctx.controlsIndex, null, 2));

  // Fetch and resolve every control body in parallel
  const controls = getControls();
  await Promise.all(controls.map(async (c) => {
    try {
      const raw = await fetchControlBody(c.file);
      const resolved = applyControlStatus(substitute(raw, vars), state.controls[c.id] || 'todo');
      controlsFolder.file(c.file, resolved);
    } catch (e) {
      controlsFolder.file(c.file, `# ${c.id} – ${c.name}\n\nFehler beim Laden des Templates: ${e.message}`);
    }
  }));

  // --- Statement of Applicability ---
  zip.file('soa.md', buildSoa(state, vars, today));

  // --- Assessments ---
  if (state.assessments?.length) {
    const aFolder = zip.folder('assessments');
    state.assessments.forEach((a) => {
      const filename = sanitizeFilename(a.id || a.fields?.system || 'assessment') + '.md';
      aFolder.file(filename, buildAssessmentDoc(a, vars));
    });
  }

  // --- Progress Snapshot ---
  zip.file('progress-snapshot.json', JSON.stringify({
    timestamp: new Date().toISOString(),
    standard: 'ISO/IEC 42001:2023',
    company: vars.Unternehmensname || null,
    context: state.context,
    controls: state.controls,
    assessments: state.assessments,
  }, null, 2));

  // --- .gitignore ---
  zip.file('.gitignore', `# Local notes\n*.local.md\nnode_modules/\n.DS_Store\n`);

  // --- .nojekyll (disables Jekyll on GitHub Pages so files/folders with `_` prefix are served) ---
  zip.file('.nojekyll', '');

  // Generate
  const blob = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE' });
  return blob;
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function applyControlStatus(md, status) {
  // Inject status into YAML frontmatter (replace `status: todo` if present)
  return md.replace(/^status:\s*\w+(\s*)$/m, `status: ${status}$1`);
}

function buildReadme(vars, today) {
  const company = vars.Unternehmensname || 'Ihr Unternehmen';
  return `# AI Management System – ${company}

Dokumentation des AI-Management-Systems gemäß **ISO/IEC 42001:2023**.
Generiert mit dem AIMS Starter Kit am ${today}.

## Struktur

\`\`\`
.
├── policies/
│   └── AI-Policy.md            ← AI Ethics & Governance Policy
├── controls/
│   ├── _index.json
│   └── A.x.y-*.md              ← 30 Kern-Controls (jeweils audit-fertig)
├── assessments/                ← AI Impact Assessments pro System
│   └── <system>.md
├── soa.md                      ← Statement of Applicability
└── progress-snapshot.json      ← Implementierungs-Stand zum Export-Zeitpunkt
\`\`\`

## Nächste Schritte

1. Überprüfe und finalisiere die generierten Dokumente.
2. Hole die formale Freigabe der Geschäftsführung ein und unterzeichne die AI Policy.
3. Stelle das Repository deinem Auditor zur Verfügung.
4. Pflege die Controls und Assessments regelmäßig fort (siehe Definition of Done je Control).

## Verantwortlich

- AI Officer: ${vars.AIOfficerName || '_(zu ergänzen)_'}
- Geschäftsführung: ${vars.GeschäftsführerName || '_(zu ergänzen)_'}
- Datenschutzbeauftragte:r: ${vars.DPOName || '_(zu ergänzen)_'}

---
_Dieser Export wurde generiert mit dem AIMS Starter Kit (ISO 42001 Master Project)._
`;
}

function buildSoa(state, vars, today) {
  const controls = getControls();
  const categories = getCategories();
  const company = vars.Unternehmensname || '_(Unternehmensname)_';

  let md = `# Statement of Applicability\n\n**Unternehmen:** ${company}\n**Standard:** ISO/IEC 42001:2023 (Annex A)\n**Stand:** ${today}\n\n`;
  md += `Diese Anwendbarkeitserklärung dokumentiert pro Annex-A-Control die Anwendbarkeit, den aktuellen Implementierungs­status und das zugehörige Deliverable.\n\n`;

  Object.entries(categories).forEach(([key, cat]) => {
    const items = controls.filter((c) => c.category === key);
    if (!items.length) return;
    md += `\n## ${cat.id} – ${cat.name_de || cat.name}\n\n`;
    md += `| Control | Bezeichnung | Priorität | Status | Deliverable |\n`;
    md += `|---------|-------------|-----------|--------|-------------|\n`;
    items.forEach((c) => {
      const status = state.controls[c.id] || 'todo';
      const statusLabel = { todo: 'offen', 'in-progress': 'in Bearbeitung', done: 'erledigt' }[status];
      md += `| \`${c.id}\` | ${c.name} | ${c.priority} | ${statusLabel} | \`${c.deliverable}\` |\n`;
    });
  });

  md += `\n---\n_Generiert mit dem AIMS Starter Kit._\n`;
  return md;
}

function buildAssessmentDoc(a, vars) {
  const f = a.fields || {};
  return `---
assessment_id: ${a.id}
system: ${f.system || ''}
status: ${a.status || 'in-progress'}
created: ${a.created || ''}
updated: ${a.updated || new Date().toISOString()}
---

# AI Impact Assessment – ${f.system || a.id}

**Unternehmen:** ${vars.Unternehmensname || ''}
**Erstellt von:** ${vars.AIOfficerName || ''}

## 1. System und Zweck

**System:** ${f.system || ''}

**Beschreibung:** ${f.description || ''}

**Risikoklasse:** ${f.riskClass || vars.Risikoklasse || ''}

## 2. Stakeholder und Betroffene

${f.stakeholders || ''}

## 3. Datenschutz-Risiken

${f.privacyRisks || ''}

## 4. Fairness und Bias

${f.biasRisks || ''}

## 5. Transparenz und Erklärbarkeit

${f.transparencyRisks || ''}

## 6. Sicherheit und Robustheit

${f.safetyRisks || ''}

## 7. Gesellschaftliche Auswirkungen

${f.societalImpact || ''}

## 8. Mitigationsmaßnahmen und Restrisiko

${f.mitigations || ''}

## 9. Freigabe

- **Bewertet von:** ${vars.AIOfficerName || ''}
- **Freigegeben von:** ${vars.GeschäftsführerName || ''}
- **Datum:** ${a.updated?.split('T')[0] || ''}
`;
}

function sanitizeFilename(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9-_]+/g, '-').replace(/^-+|-+$/g, '');
}

/**
 * Trigger a download for a blob.
 */
export function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
