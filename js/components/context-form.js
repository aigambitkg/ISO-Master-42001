/**
 * Context form — renders a grouped form from the policy JSON-Schema and
 * persists changes to state.context.
 *
 * Drives every other downstream module: Policy preview, control templates,
 * export — all consume state.context.
 */

import { getPolicySchema } from '../data.js';
import { setContext, toast } from '../state.js';
import { computeNextReview } from '../services/template-engine.js';

export function renderContextForm(host, state) {
  const schema = getPolicySchema();
  const groups = schema['x-groups'] || [];
  const properties = schema.properties || {};
  const required = new Set(schema.required || []);

  // Sort properties by group order from x-groups
  const byGroup = {};
  groups.forEach((g) => (byGroup[g.id] = []));
  Object.entries(properties).forEach(([name, prop]) => {
    const g = prop['x-group'] || (groups[0]?.id || 'misc');
    if (!byGroup[g]) byGroup[g] = [];
    byGroup[g].push({ name, prop });
  });

  // Header + completion bar
  const requiredFilled = [...required].filter((k) => !!state.context[k]).length;
  const requiredTotal = required.size;
  const completion = requiredTotal ? Math.round((requiredFilled / requiredTotal) * 100) : 0;

  host.innerHTML = `
    <header class="mb-8">
      <p class="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">Schritt 1 von 4</p>
      <h1 class="text-3xl font-semibold mt-2 tracking-tight">Unternehmens-Kontext</h1>
      <p class="text-sm text-slate-500 mt-1.5 max-w-2xl">
        Diese Eingaben sind die Single Source of Truth für alle generierten Dokumente. Sie ersetzen die <code class="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">{Variablen}</code> in der AI Policy und den 30 Control-Templates.
      </p>
    </header>

    <!-- Completion bar -->
    <div class="bg-white border border-slate-200/70 rounded-xl p-4 mb-8 flex items-center gap-4">
      <div class="flex-1">
        <div class="flex items-baseline justify-between mb-1.5">
          <span class="text-xs font-medium text-slate-600">Pflichtfelder ausgefüllt</span>
          <span class="text-xs tabular-nums text-slate-500">${requiredFilled} / ${requiredTotal}</span>
        </div>
        <div class="h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div class="progress-bar h-full bg-slate-900 rounded-full" style="width: ${completion}%"></div>
        </div>
      </div>
      <button data-action="next" class="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors whitespace-nowrap">
        Weiter zur Policy →
      </button>
    </div>

    <!-- Form, grouped -->
    <form id="ctx-form" class="space-y-8">
      ${groups.map((g) => groupBlock(g, byGroup[g.id] || [], state, required)).join('')}
    </form>
  `;

  // Wire change handlers — input + change for textarea/select/text
  const form = host.querySelector('#ctx-form');
  form.addEventListener('input', onChange);
  form.addEventListener('change', onChange);

  function onChange(e) {
    const t = e.target;
    if (!t.name) return;
    const value = t.value;
    const update = { [t.name]: value };

    // Auto-compute NächsterReview from Inkrafttreten + ReviewFrequenz
    if (t.name === 'Inkrafttreten' || t.name === 'ReviewFrequenz') {
      const inkraft = t.name === 'Inkrafttreten' ? value : state.context.Inkrafttreten;
      const freq = t.name === 'ReviewFrequenz' ? value : state.context.ReviewFrequenz;
      const next = computeNextReview(inkraft, freq);
      if (next) update.NächsterReview = next;
    }

    setContext(update);

    // Re-render the completion bar without losing focus
    const ri = [...required].filter((k) => !!state.context[k]).length;
    const c = requiredTotal ? Math.round((ri / requiredTotal) * 100) : 0;
    const bar = host.querySelector('.progress-bar');
    if (bar) bar.style.width = c + '%';
    const counter = host.querySelectorAll('.tabular-nums')[0];
    if (counter) counter.textContent = `${ri} / ${requiredTotal}`;
  }

  host.querySelector('[data-action="next"]')?.addEventListener('click', () => {
    if (requiredFilled < requiredTotal) {
      toast(`Es fehlen noch ${requiredTotal - requiredFilled} Pflichtfelder.`, 'warn');
    }
    window.location.hash = '#/policy';
  });
}

function groupBlock(group, items, state, required) {
  if (!items.length) return '';
  return `
    <section class="bg-white border border-slate-200/70 rounded-2xl p-6 lg:p-8">
      <div class="mb-6">
        <h2 class="text-base font-semibold tracking-tight">${group.title}</h2>
        ${group.description ? `<p class="text-xs text-slate-500 mt-1">${group.description}</p>` : ''}
      </div>
      <div class="grid grid-cols-1 ${items.length > 4 ? 'md:grid-cols-2' : ''} gap-x-6 gap-y-5">
        ${items.map((it) => field(it.name, it.prop, state.context[it.name] ?? it.prop.default ?? '', required.has(it.name))).join('')}
      </div>
    </section>
  `;
}

function field(name, prop, value, isRequired) {
  const id = `field_${name}`;
  const label = `
    <label for="${id}" class="block text-sm font-medium text-slate-700 mb-1.5">
      ${escapeHtml(prop.title || name)}
      ${isRequired ? '<span class="text-rose-500 ml-0.5">*</span>' : ''}
    </label>
    ${prop.description ? `<p class="text-xs text-slate-500 mb-2">${escapeHtml(prop.description)}</p>` : ''}
  `;

  const baseInputCls = 'w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition-colors';
  const computed = prop['x-computed'];

  let control;
  if (prop.enum) {
    control = `
      <select id="${id}" name="${name}" class="${baseInputCls}" ${computed ? 'disabled' : ''}>
        ${!isRequired ? '<option value="">— bitte wählen —</option>' : ''}
        ${prop.enum.map((opt) => `<option value="${escapeHtml(opt)}" ${value === opt ? 'selected' : ''}>${escapeHtml(opt)}</option>`).join('')}
      </select>`;
  } else if (prop['x-input'] === 'textarea') {
    control = `<textarea id="${id}" name="${name}" rows="4" class="${baseInputCls} font-mono text-xs" placeholder="${escapeHtml(prop['x-example'] || '')}">${escapeHtml(value)}</textarea>`;
  } else if (prop.format === 'date') {
    control = `<input id="${id}" name="${name}" type="date" value="${escapeHtml(value)}" class="${baseInputCls}" ${computed ? 'disabled' : ''} />`;
  } else if (prop.format === 'email') {
    control = `<input id="${id}" name="${name}" type="email" value="${escapeHtml(value)}" placeholder="${escapeHtml(prop['x-example'] || '')}" class="${baseInputCls}" />`;
  } else {
    control = `<input id="${id}" name="${name}" type="text" value="${escapeHtml(value)}" placeholder="${escapeHtml(prop['x-example'] || '')}" class="${baseInputCls}" ${computed ? 'disabled' : ''} />`;
  }

  const isMultiCol = prop['x-input'] === 'textarea';
  return `
    <div class="${isMultiCol ? 'md:col-span-2' : ''}">
      ${label}
      ${control}
      ${computed ? '<p class="text-[10px] text-slate-400 mt-1">Automatisch berechnet</p>' : ''}
    </div>
  `;
}

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
