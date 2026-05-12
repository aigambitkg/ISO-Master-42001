/**
 * Central state store with localStorage persistence and pub/sub.
 *
 * Shape:
 * {
 *   context:    { Unternehmensname, KIZweck, ... }        // policy template variables
 *   controls:   { 'A.2.2': 'todo'|'in-progress'|'done', ... }
 *   assessments: [{ id, system, status, fields: {...} }]
 *   meta:       { lastUpdate, version }
 * }
 *
 * Two ways to mutate:
 *   - setContext(partial)
 *   - setControlStatus(id, status)
 *   - upsertAssessment(item)
 *   - removeAssessment(id)
 *   - resetAll()
 *
 * Subscribers are called after every mutation.
 */

const STORAGE_KEY = 'aims-starter-kit-state-v1';
const SCHEMA_VERSION = 1;

const defaultState = () => ({
  context: {},
  controls: {},
  assessments: [],
  meta: { lastUpdate: null, version: SCHEMA_VERSION },
});

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return { ...defaultState(), ...parsed };
  } catch (e) {
    console.warn('State load failed, using default:', e);
    return defaultState();
  }
}

function persist() {
  try {
    state.meta.lastUpdate = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('State persist failed:', e);
  }
}

const subscribers = new Set();

function notify() {
  subscribers.forEach((fn) => {
    try { fn(state); } catch (e) { console.error('Subscriber error:', e); }
  });
}

export const state = load();

export function subscribe(fn) {
  subscribers.add(fn);
  return () => subscribers.delete(fn);
}

export function setContext(partial) {
  state.context = { ...state.context, ...partial };
  persist();
  notify();
}

export function setControlStatus(id, status) {
  if (!['todo', 'in-progress', 'done'].includes(status)) return;
  state.controls[id] = status;
  persist();
  notify();
}

export function bulkSetControls(map) {
  state.controls = { ...state.controls, ...map };
  persist();
  notify();
}

export function upsertAssessment(item) {
  const idx = state.assessments.findIndex((a) => a.id === item.id);
  if (idx >= 0) state.assessments[idx] = item;
  else state.assessments.push(item);
  persist();
  notify();
}

export function removeAssessment(id) {
  state.assessments = state.assessments.filter((a) => a.id !== id);
  persist();
  notify();
}

export function resetAll() {
  const fresh = defaultState();
  Object.keys(state).forEach((k) => delete state[k]);
  Object.assign(state, fresh);
  persist();
  notify();
}

/* ------------------------------------------------------------------ */
/* Derived getters                                                     */
/* ------------------------------------------------------------------ */

/**
 * Weighted progress over the controls list passed in.
 * done=2, in-progress=1, todo=0.
 */
export function progressOf(controls) {
  if (!controls?.length) return 0;
  const max = controls.length * 2;
  const sum = controls.reduce((acc, c) => {
    const s = state.controls[c.id] || 'todo';
    return acc + (s === 'done' ? 2 : s === 'in-progress' ? 1 : 0);
  }, 0);
  return Math.round((sum / max) * 100);
}

export function countsOf(controls) {
  return controls.reduce(
    (acc, c) => {
      const s = state.controls[c.id] || 'todo';
      acc[s] = (acc[s] || 0) + 1;
      return acc;
    },
    { todo: 0, 'in-progress': 0, done: 0 }
  );
}

/**
 * High-level section status — used by the sidebar to color the status dots.
 */
export function sectionStatus(section, ctx) {
  switch (section) {
    case 'overview':
      return 'done'; // always available
    case 'context': {
      const required = ctx.policySchema?.required || [];
      if (required.length === 0) return 'todo';
      const filled = required.filter((k) => !!state.context[k]).length;
      if (filled === 0) return 'todo';
      if (filled < required.length) return 'in-progress';
      return 'done';
    }
    case 'policy': {
      // Done if all required context filled
      return sectionStatus('context', ctx);
    }
    case 'soa': {
      const total = ctx.controlsIndex?.controls?.length || 0;
      if (total === 0) return 'todo';
      const touched = Object.values(state.controls).filter((v) => v !== 'todo').length;
      if (touched === 0) return 'todo';
      if (touched < total) return 'in-progress';
      return 'done';
    }
    case 'aiia': {
      if (state.assessments.length === 0) return 'todo';
      const allDone = state.assessments.every((a) => a.status === 'done');
      return allDone ? 'done' : 'in-progress';
    }
    case 'export': {
      const ctxStatus = sectionStatus('context', ctx);
      const soaStatus = sectionStatus('soa', ctx);
      if (ctxStatus === 'done' && soaStatus !== 'todo') return 'done';
      if (Object.keys(state.context).length > 0) return 'in-progress';
      return 'todo';
    }
    default:
      return 'todo';
  }
}

/* ------------------------------------------------------------------ */
/* Toast helper (shared with all components)                           */
/* ------------------------------------------------------------------ */

export function toast(message, tone = 'default') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const tones = {
    default: 'bg-slate-900 text-white',
    success: 'bg-emerald-600 text-white',
    error:   'bg-rose-600 text-white',
    warn:    'bg-amber-500 text-white',
  };
  const el = document.createElement('div');
  el.className = `toast pointer-events-auto px-4 py-2.5 rounded-lg shadow-lg text-sm font-medium ${tones[tone] || tones.default}`;
  el.textContent = message;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}
