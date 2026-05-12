/**
 * Overview / Dashboard section.
 *
 * Composition: header → hero progress → KPI row → category grid → next actions.
 * All progress derived live from state; no internal data fetching.
 */

import { progressOf, countsOf } from '../state.js';
import { getControls, getCategories } from '../data.js';
import { navigate } from '../router.js';

const READINESS = (p) => {
  if (p >= 90) return { label: 'Zertifizierungsreif',   tone: 'emerald', hint: 'Bereit für Stage-2 Audit.' };
  if (p >= 60) return { label: 'Auditierbar',           tone: 'sky',     hint: 'Stage-1 Audit kann angesetzt werden.' };
  if (p >= 30) return { label: 'Auf gutem Weg',         tone: 'amber',   hint: 'Fokussiere auf offene kritische Controls.' };
  return                  { label: 'Im Aufbau',         tone: 'slate',   hint: 'Beginne mit den kritischen Controls.' };
};

const TONES = {
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  sky:     { bg: 'bg-sky-50',     border: 'border-sky-200',     text: 'text-sky-700',     dot: 'bg-sky-500' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-700',   dot: 'bg-amber-500' },
  slate:   { bg: 'bg-slate-50',   border: 'border-slate-200',   text: 'text-slate-700',   dot: 'bg-slate-400' },
};

export function renderOverview(host, state) {
  const controls = getControls();
  const categories = getCategories();
  const overall = progressOf(controls);
  const counts = countsOf(controls);
  const r = READINESS(overall);
  const t = TONES[r.tone];
  const company = state.context?.Unternehmensname || '';

  host.innerHTML = `
    <header class="mb-10">
      <p class="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">Übersicht</p>
      <h1 class="text-3xl font-semibold mt-2 tracking-tight">ISO 42001 Implementation</h1>
      <p class="text-sm text-slate-500 mt-1.5">
        ${company ? `Status für <span class="text-slate-700 font-medium">${escapeHtml(company)}</span>` : 'Noch kein Unternehmens­kontext erfasst.'}
        Aktualisiert: ${formatDate(state.meta?.lastUpdate)}.
      </p>
    </header>

    <!-- Hero -->
    <section class="bg-white border border-slate-200/70 rounded-2xl p-8 lg:p-10 mb-6">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-6">
        <div>
          <p class="text-sm text-slate-500">Gesamtfortschritt</p>
          <div class="flex items-baseline gap-1 mt-2">
            <span class="text-6xl lg:text-7xl font-semibold tabular-nums tracking-tight">${overall}</span>
            <span class="text-2xl font-medium text-slate-400">%</span>
          </div>
          <p class="text-sm text-slate-500 mt-2">${counts.done} von ${controls.length} Controls erledigt · ${counts['in-progress']} in Bearbeitung</p>
        </div>
        <div class="text-left lg:text-right">
          <p class="text-xs uppercase tracking-wider text-slate-500 mb-1.5">Audit-Readiness</p>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${t.bg} ${t.border} ${t.text}">
            <span class="w-1.5 h-1.5 rounded-full ${t.dot}"></span>
            <span class="text-sm font-medium">${r.label}</span>
          </div>
          <p class="text-xs text-slate-400 mt-2">${r.hint}</p>
        </div>
      </div>
      <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div class="progress-bar h-full bg-gradient-to-r from-slate-900 to-slate-700 rounded-full" style="width: ${overall}%"></div>
      </div>
    </section>

    <!-- KPI Row -->
    <section class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
      ${kpi('Controls gesamt', controls.length, '', 'text-slate-900')}
      ${kpi('Erledigt', counts.done, pct(counts.done, controls.length), 'text-emerald-600')}
      ${kpi('In Bearbeitung', counts['in-progress'], pct(counts['in-progress'], controls.length), 'text-amber-600')}
      ${kpi('Offen', counts.todo, pct(counts.todo, controls.length), 'text-slate-400')}
    </section>

    <!-- Category Grid -->
    <section class="mb-10">
      <div class="flex items-baseline justify-between mb-5">
        <h2 class="text-lg font-semibold tracking-tight">Fortschritt pro Annex-A-Bereich</h2>
        <button data-jump="soa" class="text-xs text-slate-500 hover:text-slate-900 transition-colors">SoA bearbeiten →</button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        ${Object.entries(categories).map(([key, cat]) => categoryCard(key, cat, controls, state)).join('')}
      </div>
    </section>

    <!-- Next Actions -->
    <section class="bg-white border border-slate-200/70 rounded-2xl p-6 lg:p-8 mb-10">
      <div class="flex items-baseline justify-between mb-4">
        <h2 class="text-lg font-semibold tracking-tight">Empfohlene nächste Schritte</h2>
        <span class="text-xs text-slate-500">Top kritische Controls</span>
      </div>
      ${renderNextActions(controls, state)}
    </section>

    <!-- Quick Links -->
    <section class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
      ${quickLink('context', 'Kontext erfassen', 'Stammdaten, Rollen, Anwendungs­fälle — Grundlage für die Generierung.')}
      ${quickLink('policy',  'Policy anzeigen', 'Lebende Vorschau der AI Policy mit deinen Variablen.')}
      ${quickLink('export',  'Repo exportieren', 'GitHub-Pages-fertiges Repository als ZIP.')}
    </section>
  `;

  // Wire jumps
  host.querySelectorAll('[data-jump]').forEach((el) => {
    el.addEventListener('click', () => navigate(el.dataset.jump));
  });
}

/* ------------------------------------------------------------------ */

function kpi(label, value, sub, valueColor = 'text-slate-900') {
  return `
    <div class="bg-white border border-slate-200/70 rounded-xl p-5">
      <p class="text-[11px] font-medium uppercase tracking-wider text-slate-500">${label}</p>
      <div class="flex items-baseline gap-2 mt-2">
        <p class="text-3xl font-semibold tabular-nums ${valueColor}">${value}</p>
        ${sub ? `<p class="text-xs text-slate-400 tabular-nums">${sub}</p>` : ''}
      </div>
    </div>
  `;
}

function categoryCard(key, cat, controls, state) {
  const items = controls.filter((c) => c.category === key);
  const progress = progressOf(items);
  const c = countsOf(items);
  return `
    <button data-jump="soa" class="text-left bg-white border border-slate-200/70 rounded-xl p-5 hover:border-slate-300 transition-colors">
      <div class="flex items-start justify-between mb-3">
        <div>
          <span class="text-[10px] font-mono font-medium text-slate-400">${cat.id}</span>
          <p class="font-medium text-sm mt-0.5">${cat.name_de || cat.name}</p>
        </div>
        <span class="text-xl font-semibold tabular-nums">${progress}%</span>
      </div>
      <div class="h-1 bg-slate-100 rounded-full overflow-hidden mb-3">
        <div class="progress-bar h-full bg-slate-900 rounded-full" style="width: ${progress}%"></div>
      </div>
      <div class="flex items-center gap-3 text-[11px] text-slate-500">
        <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>${c.done}</span>
        <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>${c['in-progress']}</span>
        <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-slate-300"></span>${c.todo}</span>
        <span class="ml-auto">${items.length} Controls</span>
      </div>
    </button>
  `;
}

function renderNextActions(controls, state) {
  const open = controls.filter((c) => (state.controls[c.id] || 'todo') !== 'done' && c.priority === 'critical').slice(0, 3);
  if (open.length === 0) {
    return `<div class="text-center py-6 text-sm text-slate-500">Alle kritischen Controls sind erledigt oder in Bearbeitung.</div>`;
  }
  return `
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      ${open.map((c, i) => `
        <button data-jump="soa" class="text-left border border-slate-200/70 rounded-xl p-4 hover:border-slate-300 transition-colors">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-[10px] font-semibold text-slate-300">#${i + 1}</span>
            <span class="text-[10px] font-mono text-slate-400">${c.id}</span>
            <span class="text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 bg-slate-900 text-white rounded">Kritisch</span>
          </div>
          <p class="text-sm font-medium leading-snug">${c.name}</p>
        </button>
      `).join('')}
    </div>
  `;
}

function quickLink(section, title, hint) {
  return `
    <button data-jump="${section}" class="text-left bg-white border border-slate-200/70 rounded-xl p-5 hover:border-slate-300 transition-colors group">
      <div class="flex items-center justify-between mb-1">
        <h3 class="text-sm font-semibold">${title}</h3>
        <svg class="w-4 h-4 text-slate-300 group-hover:text-slate-700 transition-colors" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
      </div>
      <p class="text-xs text-slate-500 leading-relaxed">${hint}</p>
    </button>
  `;
}

function pct(n, total) {
  if (!total) return '0%';
  return Math.round((n / total) * 100) + '%';
}

function formatDate(iso) {
  if (!iso) return 'noch keine Eingaben';
  try {
    const d = new Date(iso);
    return new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium', timeStyle: 'short' }).format(d);
  } catch { return '—'; }
}

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
