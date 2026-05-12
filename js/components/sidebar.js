/**
 * Sidebar with modular navigation + status dots per section.
 */

import { navigate } from '../router.js';
import { sectionStatus, progressOf } from '../state.js';
import { ctx, getControls } from '../data.js';
import { resetAll, toast } from '../state.js';

const ICON = {
  overview: '<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>',
  context:  '<path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.1 12 2.1 7.1 4.3 7.1 7s2.2 5 4.9 5zm0 2.4c-3.3 0-9.9 1.7-9.9 5v2.3h19.9V19.4c0-3.3-6.6-5-9.9-5z"/>',
  policy:   '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/>',
  soa:      '<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>',
  aiia:     '<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z"/>',
  export:   '<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>',
};

const STATUS_TONE = {
  done:          { bg: 'bg-emerald-500', ring: '' },
  'in-progress': { bg: 'bg-amber-500',   ring: '' },
  todo:          { bg: 'bg-slate-200',   ring: '' },
};

export function renderSidebar(host, sections, currentSection, state, opts = {}) {
  if (!host) return;
  const overall = progressOf(getControls());
  const company = state.context?.Unternehmensname || 'Mein Unternehmen';

  host.innerHTML = `
    <div class="flex flex-col h-full">
      <!-- Brand -->
      <div class="px-6 pt-6 pb-5 border-b border-slate-200/70">
        <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">AIMS Starter Kit</p>
        <h1 class="text-base font-semibold mt-1 tracking-tight">ISO 42001</h1>
        <p class="text-xs text-slate-500 mt-2 truncate" title="${escapeHtml(company)}">${escapeHtml(company)}</p>
      </div>

      <!-- Progress -->
      <div class="px-6 py-5 border-b border-slate-200/70">
        <div class="flex items-baseline justify-between mb-1.5">
          <span class="text-[11px] uppercase tracking-wider text-slate-500 font-medium">Gesamtfortschritt</span>
          <span class="text-sm font-semibold tabular-nums">${overall}%</span>
        </div>
        <div class="h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div class="progress-bar h-full bg-slate-900 rounded-full" style="width: ${overall}%"></div>
        </div>
      </div>

      <!-- Nav -->
      <nav class="flex-1 px-3 py-3 overflow-y-auto" role="navigation">
        ${Object.entries(sections).map(([key, def]) => navItem(key, def, currentSection, state)).join('')}
      </nav>

      <!-- Footer -->
      <div class="px-6 py-4 border-t border-slate-200/70 space-y-2">
        <button data-action="reset" class="w-full text-xs text-slate-500 hover:text-rose-600 transition-colors text-left">
          Alle Daten zurücksetzen
        </button>
        <p class="text-[10px] text-slate-400">Lokal gespeichert · Kein Tracking</p>
      </div>
    </div>
  `;

  // Wire navigation
  host.querySelectorAll('[data-nav]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(a.dataset.nav);
    });
  });
  host.querySelector('[data-action="reset"]')?.addEventListener('click', () => {
    if (confirm('Wirklich alle Daten zurücksetzen? Dies kann nicht rückgängig gemacht werden.')) {
      resetAll();
      toast('Alle Daten zurückgesetzt', 'warn');
    }
  });
}

function navItem(key, def, currentSection, state) {
  const active = currentSection === key;
  const status = sectionStatus(key, ctx);
  const tone = STATUS_TONE[status] || STATUS_TONE.todo;
  const activeCls = active
    ? 'bg-slate-900 text-white'
    : 'text-slate-700 hover:bg-slate-100';
  const iconCls = active ? 'text-white/80' : 'text-slate-400';
  const dotCls = active ? 'ring-2 ring-white/30' : '';
  return `
    <a href="#/${key}" data-nav="${key}"
       class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${activeCls} transition-colors mb-0.5">
      <svg class="w-4 h-4 ${iconCls}" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">${ICON[key] || ''}</svg>
      <span class="flex-1 truncate">${def.title}</span>
      <span class="w-2 h-2 rounded-full ${tone.bg} ${dotCls}" title="${status}"></span>
    </a>
  `;
}

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
