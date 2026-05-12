/**
 * Export Panel.
 *
 * Three actions:
 *  - Repository als ZIP — full GitHub-Pages-ready repo structure.
 *  - Snapshot als JSON — state export, re-importable later.
 *  - Snapshot importieren — restore state from a previously exported JSON.
 *
 * Shows a live preview of the file tree that will be generated.
 */

import { ctx, getControls } from '../data.js';
import { buildExportZip, triggerDownload } from '../services/export.js';
import { toast, state as appState, resetAll, bulkSetControls, setContext } from '../state.js';
import { extractVariables } from '../services/template-engine.js';
import { getPolicyTemplate } from '../data.js';

export function renderExportPanel(host, state) {
  const company = state.context?.Unternehmensname || '_(Unternehmensname)_';
  const controls = getControls();
  const assessments = state.assessments || [];

  // Readiness summary
  const tpl = getPolicyTemplate();
  const allVars = extractVariables(tpl);
  const filledVars = allVars.filter((n) => !!state.context[n]).length;
  const requiredFromSchema = ctx.policySchema?.required || [];
  const requiredFilled = requiredFromSchema.filter((k) => !!state.context[k]).length;

  host.innerHTML = `
    <header class="mb-8">
      <p class="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">Export</p>
      <h1 class="text-3xl font-semibold mt-2 tracking-tight">Repository erzeugen</h1>
      <p class="text-sm text-slate-500 mt-1.5 max-w-2xl">
        Generiert ein GitHub-Pages-fertiges Repository mit AI Policy, allen Controls, SoA, Assessments und Snapshot — alle Variablen sind ausgefüllt.
      </p>
    </header>

    <!-- Readiness Card -->
    <section class="bg-white border border-slate-200/70 rounded-2xl p-6 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <p class="text-xs uppercase tracking-wider text-slate-500 mb-1">Unternehmen</p>
          <p class="text-base font-medium truncate">${escapeHtml(company)}</p>
        </div>
        <div>
          <p class="text-xs uppercase tracking-wider text-slate-500 mb-1">Pflichtfelder</p>
          <div class="flex items-baseline gap-2">
            <p class="text-base font-medium tabular-nums">${requiredFilled} / ${requiredFromSchema.length}</p>
            ${requiredFilled === requiredFromSchema.length
              ? '<span class="text-xs text-emerald-600 font-medium">vollständig</span>'
              : '<span class="text-xs text-amber-600 font-medium">unvollständig</span>'}
          </div>
        </div>
        <div>
          <p class="text-xs uppercase tracking-wider text-slate-500 mb-1">Inhalt</p>
          <p class="text-sm text-slate-700">
            ${controls.length} Controls · ${assessments.length} Assessment${assessments.length === 1 ? '' : 's'}
          </p>
        </div>
      </div>
    </section>

    <!-- Main actions -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-8">
      <button data-action="export-zip" class="text-left bg-slate-900 text-white rounded-2xl p-6 hover:bg-slate-800 transition-colors group">
        <div class="flex items-start justify-between mb-2">
          <h3 class="font-semibold">Repository als .zip</h3>
          <svg class="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
        </div>
        <p class="text-sm text-slate-300 leading-relaxed">Komplette Ordnerstruktur mit allen Dokumenten. Direkt nach GitHub übertragbar.</p>
      </button>

      <button data-action="export-json" class="text-left bg-white border border-slate-200/70 rounded-2xl p-6 hover:border-slate-300 transition-colors group">
        <div class="flex items-start justify-between mb-2">
          <h3 class="font-semibold">Snapshot als .json</h3>
          <svg class="w-5 h-5 text-slate-300 group-hover:text-slate-700 transition-colors" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
        </div>
        <p class="text-sm text-slate-500 leading-relaxed">Backup des aktuellen Standes (Kontext, Controls, Assessments) — später re-importierbar.</p>
      </button>
    </section>

    <!-- Import -->
    <section class="bg-white border border-slate-200/70 rounded-2xl p-6 mb-6">
      <h3 class="font-semibold mb-2">Snapshot importieren</h3>
      <p class="text-sm text-slate-500 mb-4">Lade eine zuvor exportierte JSON-Datei, um den Stand wiederherzustellen. Ersetzt vorhandene Daten.</p>
      <input id="import-file" type="file" accept="application/json" class="text-sm file:mr-3 file:px-3 file:py-1.5 file:rounded-lg file:border-0 file:bg-slate-100 file:text-slate-700 file:font-medium file:hover:bg-slate-200 file:transition-colors file:cursor-pointer" />
    </section>

    <!-- File tree preview -->
    <section class="bg-white border border-slate-200/70 rounded-2xl p-6 lg:p-8">
      <h3 class="font-semibold mb-1">Was wird exportiert?</h3>
      <p class="text-xs text-slate-500 mb-4">Verzeichnis-Struktur des erzeugten Repositories</p>
      <pre class="text-xs font-mono leading-relaxed bg-slate-50 border border-slate-100 rounded-lg p-4 overflow-x-auto">${treePreview(controls, assessments, company)}</pre>
    </section>

    <!-- Progress overlay -->
    <div id="export-overlay" class="hidden fixed inset-0 bg-slate-900/40 z-50 flex items-center justify-center">
      <div class="bg-white rounded-2xl p-8 shadow-xl max-w-sm w-full mx-4">
        <div class="flex items-center gap-4">
          <svg class="animate-spin w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          <div>
            <p class="font-medium text-sm">Repository wird erzeugt…</p>
            <p class="text-xs text-slate-500 mt-0.5">Alle Controls werden geladen und Variablen ersetzt.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Wire actions
  host.querySelector('[data-action="export-zip"]').addEventListener('click', async () => {
    const overlay = host.querySelector('#export-overlay');
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
    try {
      const blob = await buildExportZip(state);
      const company = state.context?.Unternehmensname || 'aims';
      const slug = String(company).toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '');
      const date = new Date().toISOString().split('T')[0];
      triggerDownload(blob, `aims-${slug}-${date}.zip`);
      toast('Repository exportiert', 'success');
    } catch (e) {
      console.error(e);
      toast('Export fehlgeschlagen: ' + e.message, 'error');
    } finally {
      overlay.classList.add('hidden');
      overlay.classList.remove('flex');
    }
  });

  host.querySelector('[data-action="export-json"]').addEventListener('click', () => {
    const payload = {
      timestamp: new Date().toISOString(),
      standard: 'ISO/IEC 42001:2023',
      company: state.context?.Unternehmensname || null,
      state: appState,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const date = new Date().toISOString().split('T')[0];
    triggerDownload(blob, `aims-snapshot-${date}.json`);
    toast('Snapshot exportiert', 'success');
  });

  host.querySelector('#import-file').addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!confirm('Aktuellen Stand mit dem importierten Snapshot ersetzen?')) {
      e.target.value = '';
      return;
    }
    try {
      const text = await file.text();
      const payload = JSON.parse(text);
      const imported = payload.state || payload; // accept both wrapped + direct
      resetAll();
      if (imported.context) setContext(imported.context);
      if (imported.controls) bulkSetControls(imported.controls);
      // Assessments: replace
      if (Array.isArray(imported.assessments)) {
        imported.assessments.forEach((a) => {
          // upsert via state helper
          import('../state.js').then(({ upsertAssessment }) => upsertAssessment(a));
        });
      }
      toast('Snapshot importiert', 'success');
      // Re-render after a tick to let dynamic imports settle
      setTimeout(() => renderExportPanel(host, appState), 200);
    } catch (err) {
      toast('Import fehlgeschlagen: ' + err.message, 'error');
    }
  });
}

/* ------------------------------------------------------------------ */

function treePreview(controls, assessments, company) {
  const slug = String(company || 'aims').toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '');
  const lines = [
    `${slug || 'aims'}/`,
    `├── README.md`,
    `├── policies/`,
    `│   └── AI-Policy.md`,
    `├── controls/`,
    `│   ├── _index.json`,
  ];
  controls.slice(0, 5).forEach((c, i) => {
    const isLast = i === Math.min(4, controls.length - 1) && controls.length <= 5;
    lines.push(`│   ${isLast ? '└──' : '├──'} ${c.file}`);
  });
  if (controls.length > 5) lines.push(`│   └── … +${controls.length - 5} weitere Controls`);
  if (assessments.length) {
    lines.push(`├── assessments/`);
    assessments.slice(0, 3).forEach((a, i) => {
      const isLast = i === Math.min(2, assessments.length - 1) && assessments.length <= 3;
      const name = (a.fields?.system || a.id).toLowerCase().replace(/[^a-z0-9-]+/g, '-');
      lines.push(`│   ${isLast ? '└──' : '├──'} ${name}.md`);
    });
    if (assessments.length > 3) lines.push(`│   └── … +${assessments.length - 3} weitere`);
  }
  lines.push(`├── soa.md`);
  lines.push(`└── progress-snapshot.json`);
  return escapeHtml(lines.join('\n'));
}

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
