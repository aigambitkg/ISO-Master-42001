/**
 * Policy live preview.
 *
 * Two viewing modes:
 *  - "Vorschau" (default): substitutions applied AND highlighted (green = resolved,
 *    yellow = unresolved) — best for seeing what's still missing.
 *  - "Druckansicht": resolved markdown only, clean rendering.
 *
 * Download as `.md` and copy-to-clipboard are wired here.
 */

import { getPolicyTemplate, getPolicySchema } from '../data.js';
import { renderTemplatePreview, renderResolved, stripFrontmatter } from '../services/markdown.js';
import { substitute, extractVariables } from '../services/template-engine.js';
import { toast } from '../state.js';

export function renderPolicyPreview(host, state) {
  const tpl = getPolicyTemplate();
  const schema = getPolicySchema();
  const vars = state.context || {};
  const allVarsInTpl = extractVariables(tpl);
  const resolvedCount = allVarsInTpl.filter((n) => !!vars[n]).length;
  const company = vars.Unternehmensname || '_(noch nicht gesetzt)_';

  host.innerHTML = `
    <header class="mb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
      <div>
        <p class="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">Schritt 2 von 4</p>
        <h1 class="text-3xl font-semibold mt-2 tracking-tight">AI Ethics & Governance Policy</h1>
        <p class="text-sm text-slate-500 mt-1.5">
          ${escapeHtml(company)} · ${resolvedCount} / ${allVarsInTpl.length} Variablen aufgelöst
        </p>
      </div>

      <div class="flex gap-2 flex-wrap">
        <div class="inline-flex bg-white border border-slate-200/70 rounded-lg p-1">
          <button data-mode="preview" class="mode-btn text-xs px-3 py-1.5 rounded-md font-medium">Vorschau</button>
          <button data-mode="resolved" class="mode-btn text-xs px-3 py-1.5 rounded-md font-medium">Druckansicht</button>
        </div>
        <button data-action="copy" class="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200/70 hover:bg-slate-50 transition-colors">Markdown kopieren</button>
        <button data-action="download" class="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">Download .md</button>
      </div>
    </header>

    <!-- Variable status banner -->
    ${variableBanner(allVarsInTpl, vars)}

    <!-- Live document -->
    <article id="policy-doc" class="bg-white border border-slate-200/70 rounded-2xl p-8 lg:p-12 prose"></article>

    <footer class="mt-6 flex items-center justify-between text-xs text-slate-500">
      <span>Quelle: <code class="bg-slate-100 px-1.5 py-0.5 rounded font-mono">policies/AI-Policy-Template.md</code></span>
      <a href="#/soa" class="hover:text-slate-900 transition-colors">Weiter zum SoA →</a>
    </footer>
  `;

  // State for mode
  let mode = 'preview';
  const doc = host.querySelector('#policy-doc');

  const repaint = () => {
    if (mode === 'preview') {
      doc.innerHTML = renderTemplatePreview(tpl, vars);
    } else {
      doc.innerHTML = renderResolved(tpl, vars);
    }
    host.querySelectorAll('.mode-btn').forEach((b) => {
      if (b.dataset.mode === mode) {
        b.classList.add('bg-slate-900', 'text-white');
        b.classList.remove('text-slate-600');
      } else {
        b.classList.remove('bg-slate-900', 'text-white');
        b.classList.add('text-slate-600');
      }
    });
  };

  host.querySelectorAll('.mode-btn').forEach((b) => {
    b.addEventListener('click', () => { mode = b.dataset.mode; repaint(); });
  });

  host.querySelector('[data-action="copy"]')?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(substitute(tpl, vars));
      toast('Markdown in Zwischenablage kopiert', 'success');
    } catch {
      toast('Konnte nicht kopieren', 'error');
    }
  });

  host.querySelector('[data-action="download"]')?.addEventListener('click', () => {
    const body = substitute(tpl, vars);
    const blob = new Blob([body], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AI-Policy.md';
    a.click();
    URL.revokeObjectURL(url);
    toast('AI-Policy.md heruntergeladen', 'success');
  });

  repaint();
}

/* ------------------------------------------------------------------ */

function variableBanner(allVarsInTpl, vars) {
  const missing = allVarsInTpl.filter((n) => !vars[n]);
  if (missing.length === 0) {
    return `
      <div class="mb-6 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 text-sm text-emerald-800 flex items-center gap-3">
        <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
        <span>Alle Variablen sind ausgefüllt. Die Policy ist export-bereit.</span>
      </div>
    `;
  }
  return `
    <div class="mb-6 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-900">
      <div class="flex items-start gap-3">
        <svg class="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 4h.01M4.93 19h14.14a2 2 0 001.74-3l-7.07-12a2 2 0 00-3.48 0l-7.07 12a2 2 0 001.74 3z"></path></svg>
        <div class="flex-1">
          <p class="font-medium mb-1">${missing.length} Variable${missing.length === 1 ? '' : 'n'} noch leer:</p>
          <div class="flex flex-wrap gap-1.5">
            ${missing.slice(0, 8).map((n) => `<code class="text-[11px] bg-amber-100 px-1.5 py-0.5 rounded font-mono">{${n}}</code>`).join('')}
            ${missing.length > 8 ? `<span class="text-[11px] text-amber-700">+${missing.length - 8} weitere</span>` : ''}
          </div>
          <a href="#/context" class="text-xs text-amber-800 underline mt-2 inline-block hover:text-amber-900">→ Kontext-Formular öffnen</a>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
