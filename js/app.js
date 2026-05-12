/**
 * AIMS Starter Kit – App Bootstrap
 *
 * Verantwortlich für: Modul-Registrierung, Router-Initialisierung, Sidebar-Rendering,
 * globale Event-Bindings (mobile menu, toast lifecycle).
 *
 * Keine Geschäftslogik – das ist Sache der Sektion-Komponenten.
 */

import { state, subscribe } from './state.js';
import { loadControlsIndex, loadPolicySchema, loadPolicyTemplate } from './data.js';
import { initRouter, navigate, getCurrentSection } from './router.js';
import { renderSidebar } from './components/sidebar.js';
import { renderOverview } from './components/overview.js';
import { renderContextForm } from './components/context-form.js';
import { renderPolicyPreview } from './components/policy-preview.js';
import { renderSoaBuilder } from './components/soa-builder.js';
import { renderAiiaBuilder } from './components/aiia-builder.js';
import { renderExportPanel } from './components/export-panel.js';

const SECTIONS = {
  overview: { title: 'Übersicht',          render: renderOverview },
  context:  { title: 'Kontext',            render: renderContextForm },
  policy:   { title: 'AI Policy',          render: renderPolicyPreview },
  soa:      { title: 'Statement of Applicability', render: renderSoaBuilder },
  aiia:     { title: 'Impact Assessments', render: renderAiiaBuilder },
  export:   { title: 'Export',             render: renderExportPanel },
};

const mainEl = document.getElementById('main');

/**
 * Render the current section based on the route.
 */
function renderCurrent() {
  const section = getCurrentSection();
  const def = SECTIONS[section] || SECTIONS.overview;

  // Smooth swap
  mainEl.classList.remove('fade-in');
  void mainEl.offsetWidth;
  mainEl.innerHTML = '';
  mainEl.classList.add('fade-in');

  def.render(mainEl, state);
  document.title = `${def.title} · AIMS Starter Kit`;

  // Re-render sidebar so the active item updates
  renderAllSidebars();
}

function renderAllSidebars() {
  renderSidebar(document.getElementById('sidebar'), SECTIONS, getCurrentSection(), state);
  renderSidebar(document.getElementById('mobile-sidebar'), SECTIONS, getCurrentSection(), state, { mobile: true });
}

/**
 * Mobile sidebar toggle wiring.
 */
function wireMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const overlay = document.getElementById('mobile-overlay');
  const mobileSidebar = document.getElementById('mobile-sidebar');

  const open = () => {
    overlay.classList.remove('hidden');
    mobileSidebar.classList.remove('hidden');
    mobileSidebar.classList.add('flex');
  };
  const close = () => {
    overlay.classList.add('hidden');
    mobileSidebar.classList.add('hidden');
    mobileSidebar.classList.remove('flex');
  };

  btn?.addEventListener('click', open);
  overlay?.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  window.addEventListener('hashchange', close);
}

/**
 * Boot sequence.
 */
async function boot() {
  // 1) Load static data (controls index, policy schema, template)
  try {
    await Promise.all([
      loadControlsIndex(),
      loadPolicySchema(),
      loadPolicyTemplate(),
    ]);
  } catch (err) {
    mainEl.innerHTML = `<div class="bg-amber-50 border border-amber-200 rounded-xl p-6 text-amber-900">
      <p class="font-semibold mb-2">Daten konnten nicht geladen werden.</p>
      <p class="text-sm">Stelle sicher, dass diese Anwendung über einen Web-Server geöffnet wird (z. B. <code class="bg-amber-100 px-1.5 py-0.5 rounded text-xs">python -m http.server</code> oder GitHub Pages). Direkt aus dem Dateisystem (file://) funktionieren ES-Module nicht.</p>
      <p class="text-xs mt-3 text-amber-700">Fehler: ${err.message}</p>
    </div>`;
    return;
  }

  // 2) Router
  initRouter(renderCurrent);

  // 3) State subscriptions
  subscribe(() => { renderAllSidebars(); });

  // 4) Mobile menu
  wireMobileMenu();

  // 5) First paint
  renderCurrent();
}

// Expose a tiny navigation helper for inline event handlers if needed
window.__aims = { navigate };

boot();
