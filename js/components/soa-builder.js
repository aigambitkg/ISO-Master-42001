/**
 * Statement of Applicability builder.
 *
 * Lists all 30 controls grouped by category, with status toggles per
 * control and filter chips for priority/status/category.
 *
 * Status mutations go through `setControlStatus` → state persists +
 * sidebar status dots update automatically.
 */

import { getControls, getCategories, getControlById } from '../data.js';
import { setControlStatus, bulkSetControls, progressOf, countsOf, toast } from '../state.js';
import { navigate } from '../router.js';

let filterState = { priority: 'all', status: 'all', search: '' };

export function renderSoaBuilder(host, state) {
  const controls = getControls();
  const categories = getCategories();
  const counts = countsOf(controls);
  const overall = progressOf(controls);

  host.innerHTML = `
    <header class="mb-8">
      <p class="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">Schritt 3 von 4</p>
      <h1 class="text-3xl font-semibold mt-2 tracking-tight">Statement of Applicability</h1>
      <p class="text-sm text-slate-500 mt-1.5 max-w-2xl">
        Setze pro Annex-A-Control den Implementierungs-Status. Klicke auf den Status-Punkt, um zwischen Offen, In Bearbeitung und Erledigt zu wechseln, oder nutze das Dropdown.
      </p>
    </header>

    <!-- Top stats -->
    <section class="bg-white border border-slate-200/70 rounded-2xl p-6 mb-6">
      <div class="flex flex-col sm:flex-row sm:items-center gap-6">
        <div class="flex-1">
          <p class="text-xs text-slate-500 mb-1">Anwendbarkeitsabdeckung</p>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-semibold tabular-nums">${overall}%</span>
            <span class="text-sm text-slate-500">${counts.done} / ${controls.length} erledigt</span>
          </div>
        </div>
        <div class="flex gap-2">
          <button data-bulk="todo" class="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 transition-colors">Alle auf Offen</button>
          <button data-bulk="done" class="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 transition-colors">Alle auf Erledigt</button>
        </div>
      </div>
    </section>

    <!-- Filters -->
    <section class="bg-white border border-slate-200/70 rounded-xl px-4 py-3 mb-6 flex flex-wrap items-center gap-3">
      <div class="flex items-center gap-2">
        <span class="text-xs text-slate-500 font-medium uppercase tracking-wider">Priorität</span>
        ${chipGroup('priority', [['all','Alle'],['critical','Kritisch'],['important','Wichtig'],['recommended','Empfohlen']])}
      </div>
      <div class="w-px h-5 bg-slate-200"></div>
      <div class="flex items-center gap-2">
        <span class="text-xs text-slate-500 font-medium uppercase tracking-wider">Status</span>
        ${chipGroup('status', [['all','Alle'],['todo','Offen'],['in-progress','In Bearbeitung'],['done','Erledigt']])}
      </div>
      <div class="flex-1 min-w-[180px]">
        <input data-filter="search" value="${escapeHtml(filterState.search)}" placeholder="ID oder Name suchen…" class="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:border-slate-400" />
      </div>
    </section>

    <!-- Categories -->
    <div id="soa-categories" class="space-y-4">
      ${Object.entries(categories).map(([key, cat]) => categorySection(key, cat, controls, state)).join('')}
    </div>

    <footer class="mt-8 flex items-center justify-between text-xs text-slate-500">
      <span>${controls.length} Controls aus ISO/IEC 42001 Annex A</span>
      <button data-jump="aiia" class="hover:text-slate-900 transition-colors">Weiter zu Impact Assessments →</button>
    </footer>
  `;

  // Apply filters once after render
  applyFilters(host);

  // Wire events
  host.querySelectorAll('[data-filter-priority]').forEach((b) =>
    b.addEventListener('click', () => { filterState.priority = b.dataset.filterPriority; renderSoaBuilder(host, state); })
  );
  host.querySelectorAll('[data-filter-status]').forEach((b) =>
    b.addEventListener('click', () => { filterState.status = b.dataset.filterStatus; renderSoaBuilder(host, state); })
  );
  host.querySelector('[data-filter="search"]')?.addEventListener('input', (e) => {
    filterState.search = e.target.value;
    applyFilters(host);
  });

  host.querySelectorAll('.status-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const cur = state.controls[id] || 'todo';
      const next = { todo: 'in-progress', 'in-progress': 'done', done: 'todo' }[cur];
      setControlStatus(id, next);
      updateRow(host, id, next);
      updateTopStats(host);
    });
  });
  host.querySelectorAll('.status-select').forEach((sel) => {
    sel.addEventListener('change', (e) => {
      setControlStatus(e.target.dataset.id, e.target.value);
      updateRow(host, e.target.dataset.id, e.target.value);
      updateTopStats(host);
    });
  });

  host.querySelectorAll('[data-bulk]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const v = btn.dataset.bulk;
      const map = {};
      controls.forEach((c) => (map[c.id] = v));
      bulkSetControls(map);
      toast(`Alle Controls auf "${v}" gesetzt`, 'warn');
      renderSoaBuilder(host, state);
    });
  });

  host.querySelector('[data-jump]')?.addEventListener('click', () => navigate('aiia'));
}

/* ------------------------------------------------------------------ */

function chipGroup(kind, options) {
  const current = filterState[kind];
  return `<div class="inline-flex gap-1">${options.map(([val, label]) => {
    const active = current === val;
    return `<button data-filter-${kind}="${val}" class="text-xs px-2.5 py-1 rounded-md transition-colors ${
      active ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-50'
    }">${label}</button>`;
  }).join('')}</div>`;
}

function categorySection(key, cat, controls, state) {
  const items = controls.filter((c) => c.category === key);
  const progress = progressOf(items);
  const counts = countsOf(items);
  return `
    <details open class="bg-white border border-slate-200/70 rounded-xl overflow-hidden">
      <summary class="cursor-pointer list-none px-5 py-4 flex items-center gap-4 hover:bg-slate-50/50 transition-colors">
        <svg class="w-3.5 h-3.5 text-slate-400 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        <div class="flex-1">
          <span class="text-xs font-mono text-slate-400">${cat.id}</span>
          <span class="text-sm font-medium ml-1">${cat.name_de || cat.name}</span>
        </div>
        <div class="flex items-center gap-3 text-[11px] text-slate-500">
          <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>${counts.done}</span>
          <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>${counts['in-progress']}</span>
          <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-slate-300"></span>${counts.todo}</span>
        </div>
        <span class="text-sm font-semibold tabular-nums w-14 text-right">${progress}%</span>
      </summary>
      <div class="border-t border-slate-100 divide-y divide-slate-100">
        ${items.map((c) => controlRow(c, state)).join('')}
      </div>
    </details>
  `;
}

function controlRow(c, state) {
  const status = state.controls[c.id] || 'todo';
  return `
    <div class="control-row flex items-center gap-4 px-5 py-3.5 hover:bg-slate-50/40 transition-colors"
         data-id="${c.id}" data-priority="${c.priority}" data-status="${status}" data-search="${escapeHtml((c.id + ' ' + c.name).toLowerCase())}">
      <button class="status-toggle focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 rounded-full" data-id="${c.id}" aria-label="Status wechseln">
        ${statusIcon(status)}
      </button>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="text-[10px] font-mono text-slate-400">${c.id}</span>
          ${priorityBadge(c.priority)}
        </div>
        <p class="text-sm font-medium mt-0.5 ${status === 'done' ? 'text-slate-400 line-through' : ''}">${escapeHtml(c.name)}</p>
        <p class="text-[10px] text-slate-400 mt-0.5 font-mono">→ ${c.deliverable}</p>
      </div>
      <select data-id="${c.id}" class="status-select text-xs border border-slate-200 rounded-md px-2 py-1 bg-white focus:outline-none focus:border-slate-400">
        <option value="todo"        ${status === 'todo' ? 'selected' : ''}>Offen</option>
        <option value="in-progress" ${status === 'in-progress' ? 'selected' : ''}>In Bearbeitung</option>
        <option value="done"        ${status === 'done' ? 'selected' : ''}>Erledigt</option>
      </select>
    </div>
  `;
}

function statusIcon(status) {
  if (status === 'done') {
    return `<div class="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
    </div>`;
  }
  if (status === 'in-progress') {
    return `<div class="w-5 h-5 rounded-full border-2 border-amber-500 flex items-center justify-center shrink-0">
      <div class="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
    </div>`;
  }
  return `<div class="w-5 h-5 rounded-full border-2 border-slate-300 shrink-0"></div>`;
}

function priorityBadge(p) {
  if (p === 'critical')
    return `<span class="text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 bg-slate-900 text-white rounded">Kritisch</span>`;
  if (p === 'important')
    return `<span class="text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded">Wichtig</span>`;
  return `<span class="text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 bg-slate-50 text-slate-500 rounded ring-1 ring-slate-200">Empfohlen</span>`;
}

function applyFilters(host) {
  const s = filterState.search.toLowerCase().trim();
  host.querySelectorAll('.control-row').forEach((row) => {
    const matchPriority = filterState.priority === 'all' || row.dataset.priority === filterState.priority;
    const matchStatus   = filterState.status === 'all'   || row.dataset.status   === filterState.status;
    const matchSearch   = !s || row.dataset.search.includes(s);
    row.style.display = (matchPriority && matchStatus && matchSearch) ? '' : 'none';
  });
}

function updateRow(host, id, status) {
  const row = host.querySelector(`.control-row[data-id="${id}"]`);
  if (!row) return;
  row.dataset.status = status;
  row.querySelector('.status-toggle').innerHTML = statusIcon(status);
  const title = row.querySelector('p.text-sm');
  if (status === 'done') title.classList.add('text-slate-400', 'line-through');
  else title.classList.remove('text-slate-400', 'line-through');
  const sel = row.querySelector('.status-select');
  if (sel) sel.value = status;
  applyFilters(host);
}

function updateTopStats(host) {
  // simplest: trigger a full re-render of the page next time the user navigates,
  // but for now update the visible numbers in place
  const controls = getControls();
  const counts = countsOf(controls);
  const overall = progressOf(controls);
  const big = host.querySelector('.text-3xl.font-semibold.tabular-nums');
  if (big) big.textContent = overall + '%';
  const sub = big?.nextElementSibling;
  if (sub) sub.textContent = `${counts.done} / ${controls.length} erledigt`;
}

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
