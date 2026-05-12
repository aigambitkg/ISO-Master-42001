/**
 * Loads the static data assets at boot time.
 * After load, they are cached on the `ctx` export.
 */

export const ctx = {
  controlsIndex: null,   // controls/_index.json
  policySchema: null,    // policies/AI-Policy-Template.schema.json
  policyTemplate: null,  // policies/AI-Policy-Template.md (raw markdown)
};

async function fetchJson(path) {
  const r = await fetch(path, { cache: 'no-store' });
  if (!r.ok) throw new Error(`${path}: HTTP ${r.status}`);
  return r.json();
}

async function fetchText(path) {
  const r = await fetch(path, { cache: 'no-store' });
  if (!r.ok) throw new Error(`${path}: HTTP ${r.status}`);
  return r.text();
}

export async function loadControlsIndex() {
  if (ctx.controlsIndex) return ctx.controlsIndex;
  ctx.controlsIndex = await fetchJson('./controls/_index.json');
  return ctx.controlsIndex;
}

export async function loadPolicySchema() {
  if (ctx.policySchema) return ctx.policySchema;
  ctx.policySchema = await fetchJson('./policies/AI-Policy-Template.schema.json');
  return ctx.policySchema;
}

export async function loadPolicyTemplate() {
  if (ctx.policyTemplate) return ctx.policyTemplate;
  ctx.policyTemplate = await fetchText('./policies/AI-Policy-Template.md');
  return ctx.policyTemplate;
}

/**
 * Convenience getters used across components — keeps the rest of the code
 * free from null-checking.
 */
export function getControls() { return ctx.controlsIndex?.controls || []; }
export function getCategories() { return ctx.controlsIndex?.categories || {}; }
export function getControlById(id) { return getControls().find((c) => c.id === id); }
export function getControlsByCategory(category) {
  return getControls().filter((c) => c.category === category);
}
export function getPolicySchema() { return ctx.policySchema; }
export function getPolicyTemplate() { return ctx.policyTemplate; }

/**
 * Fetch the body of a single control file. Lazy — used by the export module.
 */
export async function fetchControlBody(file) {
  return fetchText(`./controls/${file}`);
}
