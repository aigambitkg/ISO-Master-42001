/**
 * AI Impact Assessment Builder.
 *
 * CRUD list of assessments. Each item is identified by a generated ID
 * and stores a `fields` object with the seven canonical AIIA dimensions.
 */

import { upsertAssessment, removeAssessment, toast } from '../state.js';

const DIMENSIONS = [
  { key: 'description',       title: 'System und Zweck',                    hint: 'Was tut das System? Welchen Geschäftszweck erfüllt es?' },
  { key: 'stakeholders',      title: 'Stakeholder und Betroffene',          hint: 'Welche Personengruppen sind direkt oder indirekt betroffen?' },
  { key: 'privacyRisks',      title: 'Datenschutz-Risiken',                 hint: 'Welche personenbezogenen Daten? Rechtsgrundlage? Risiken?' },
  { key: 'biasRisks',         title: 'Fairness und Bias',                   hint: 'Diskriminierungspotenzial? Schutzgruppen? Mitigation?' },
  { key: 'transparencyRisks', title: 'Transparenz und Erklärbarkeit',       hint: 'Wie erklärbar sind die Ergebnisse? Welche Kennzeichnung?' },
  { key: 'safetyRisks',       title: 'Sicherheit und Robustheit',           hint: 'Failure-Modes? Adversarial-Risiken? Cybersecurity-Aspekte?' },
  { key: 'societalImpact',    title: 'Gesellschaftlicher Impact',           hint: 'Markt-, Demokratie-, Umwelt-Auswirkungen.' },
  { key: 'mitigations',       title: 'Mitigationsmaßnahmen und Restrisiko', hint: 'Welche Maßnahmen sind umgesetzt? Welches Restrisiko bleibt?' },
];

const RISK_CLASSES = [
  'minimales Risiko',
  'begrenztes Risiko mit Transparenzpflicht',
  'hohes Risiko',
  'kein Hochrisiko-Einsatz, aber Transparenz-Anforderungen',
];

let editingId = null;

export function renderAiiaBuilder(host, state) {
  const list = state.assessments || [];

  host.innerHTML = `
    <header class="mb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
      <div>
        <p class="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">Schritt 4 von 4</p>
        <h1 class="text-3xl font-semibold mt-2 tracking-tight">AI Impact Assessments</h1>
        <p class="text-sm text-slate-500 mt-1.5 max-w-2xl">
          Pro produktivem KI-System eine Folgenabschätzung gemäß ISO/IEC 42001 Annex A.5 (sowie Art. 27 EU AI Act, Art. 35 DSGVO).
        </p>
      </div>
      <button data-action="new" class="text-sm font-medium px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors whitespace-nowrap">
        + Neue Assessment
      </button>
    </header>

    <div id="aiia-content"></div>
  `;

  host.querySelector('[data-action="new"]').addEventListener('click', () => {
    editingId = null;
    renderEditor(host, state, null);
  });

  if (editingId) {
    const item = list.find((a) => a.id === editingId);
    renderEditor(host, state, item || null);
  } else {
    renderList(host, state);
  }
}

/* ------------------------------------------------------------------ */

function renderList(host, state) {
  const container = host.querySelector('#aiia-content');
  const list = state.assessments || [];

  if (list.length === 0) {
    container.innerHTML = `
      <div class="bg-white border border-slate-200/70 rounded-2xl p-12 text-center">
        <svg class="w-12 h-12 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        <h3 class="text-base font-semibold mb-2">Noch keine Impact Assessments</h3>
        <p class="text-sm text-slate-500 max-w-md mx-auto mb-6">
          Erstelle pro produktivem KI-System eine Folgenabschätzung. Sie bildet die Grundlage für deine Risikobewertung und ist Pflichtbestandteil des Audits.
        </p>
        <button data-action="new-empty" class="text-sm font-medium px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">+ Erste Assessment anlegen</button>
      </div>
    `;
    container.querySelector('[data-action="new-empty"]').addEventListener('click', () => {
      editingId = null;
      renderEditor(host, state, null);
    });
    return;
  }

  container.innerHTML = `
    <div class="bg-white border border-slate-200/70 rounded-2xl divide-y divide-slate-100">
      ${list.map((a) => assessmentRow(a)).join('')}
    </div>
  `;

  container.querySelectorAll('[data-edit]').forEach((b) =>
    b.addEventListener('click', () => {
      editingId = b.dataset.edit;
      renderEditor(host, state, list.find((a) => a.id === editingId));
    })
  );
  container.querySelectorAll('[data-delete]').forEach((b) =>
    b.addEventListener('click', () => {
      if (confirm('Diese Assessment wirklich löschen?')) {
        removeAssessment(b.dataset.delete);
        toast('Assessment gelöscht', 'warn');
        renderList(host, state);
      }
    })
  );
}

function assessmentRow(a) {
  const f = a.fields || {};
  const statusColors = {
    'draft': 'bg-slate-100 text-slate-600',
    'in-progress': 'bg-amber-100 text-amber-700',
    'done': 'bg-emerald-100 text-emerald-700',
  };
  const statusLabel = { draft: 'Entwurf', 'in-progress': 'In Bearbeitung', done: 'Freigegeben' }[a.status] || 'Entwurf';
  return `
    <div class="flex items-center gap-4 px-5 py-4 hover:bg-slate-50/50 transition-colors">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-[10px] font-mono text-slate-400">${a.id}</span>
          <span class="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded ${statusColors[a.status] || statusColors.draft}">${statusLabel}</span>
        </div>
        <p class="text-sm font-medium truncate">${escapeHtml(f.system || 'Unbenanntes System')}</p>
        <p class="text-xs text-slate-500 mt-0.5">Risikoklasse: ${escapeHtml(f.riskClass || '—')} · Aktualisiert: ${formatDate(a.updated)}</p>
      </div>
      <button data-edit="${a.id}" class="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 transition-colors">Bearbeiten</button>
      <button data-delete="${a.id}" class="text-xs font-medium text-slate-400 hover:text-rose-600 transition-colors" title="Löschen">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M9 7V4a2 2 0 012-2h2a2 2 0 012 2v3"></path></svg>
      </button>
    </div>
  `;
}

function renderEditor(host, state, existing) {
  const a = existing || {
    id: 'aiia-' + Date.now().toString(36),
    status: 'draft',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
    fields: { riskClass: state.context?.Risikoklasse || '' },
  };
  const f = { ...a.fields };

  const container = host.querySelector('#aiia-content');
  container.innerHTML = `
    <button data-action="back" class="text-xs text-slate-500 hover:text-slate-900 transition-colors mb-4 inline-flex items-center gap-1">
      <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>
      Zurück zur Liste
    </button>

    <form id="aiia-form" class="bg-white border border-slate-200/70 rounded-2xl p-6 lg:p-8 space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1.5">System-Name <span class="text-rose-500">*</span></label>
          <input name="system" required value="${escapeHtml(f.system || '')}" placeholder="z. B. Support-Chatbot v2" class="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-400" />
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1.5">Risikoklasse</label>
          <select name="riskClass" class="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-400">
            <option value="">— bitte wählen —</option>
            ${RISK_CLASSES.map((r) => `<option value="${escapeHtml(r)}" ${f.riskClass === r ? 'selected' : ''}>${escapeHtml(r)}</option>`).join('')}
          </select>
        </div>
      </div>

      ${DIMENSIONS.map((d) => dimensionField(d, f[d.key])).join('')}

      <div class="pt-4 border-t border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1.5">Status</label>
          <select name="status" class="text-sm px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-400">
            <option value="draft"        ${a.status === 'draft' ? 'selected' : ''}>Entwurf</option>
            <option value="in-progress"  ${a.status === 'in-progress' ? 'selected' : ''}>In Bearbeitung</option>
            <option value="done"         ${a.status === 'done' ? 'selected' : ''}>Freigegeben</option>
          </select>
        </div>
        <div class="flex gap-2">
          <button type="button" data-action="back-bottom" class="text-sm px-4 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 transition-colors">Abbrechen</button>
          <button type="submit" class="text-sm font-medium px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">Speichern</button>
        </div>
      </div>
    </form>
  `;

  container.querySelectorAll('[data-action="back"], [data-action="back-bottom"]').forEach((b) =>
    b.addEventListener('click', () => { editingId = null; renderList(host, state); })
  );

  container.querySelector('#aiia-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const fields = {};
    fd.forEach((v, k) => { if (k !== 'status') fields[k] = v; });
    const item = {
      ...a,
      status: fd.get('status') || 'draft',
      updated: new Date().toISOString(),
      fields,
    };
    upsertAssessment(item);
    toast('Assessment gespeichert', 'success');
    editingId = null;
    renderList(host, state);
  });
}

function dimensionField(d, value) {
  return `
    <div>
      <label class="block text-sm font-medium text-slate-700 mb-1.5">${d.title}</label>
      <p class="text-xs text-slate-500 mb-2">${d.hint}</p>
      <textarea name="${d.key}" rows="3" class="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-400 font-mono text-xs">${escapeHtml(value || '')}</textarea>
    </div>
  `;
}

function formatDate(iso) {
  if (!iso) return '—';
  try { return new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium' }).format(new Date(iso)); }
  catch { return '—'; }
}

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
