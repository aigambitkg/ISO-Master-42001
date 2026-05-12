/**
 * Hash-based routing. GitHub-Pages-friendly: no server config required.
 *
 * URLs look like:  #/overview, #/context, #/soa, etc.
 */

const VALID = ['overview', 'context', 'policy', 'soa', 'aiia', 'export'];

let onChangeCb = null;

export function initRouter(onChange) {
  onChangeCb = onChange;
  window.addEventListener('hashchange', () => onChangeCb && onChangeCb());
  // Normalize empty hash to #/overview
  if (!window.location.hash) window.location.hash = '#/overview';
}

export function getCurrentSection() {
  const hash = window.location.hash.replace(/^#\/?/, '').trim();
  const sect = hash.split('/')[0];
  return VALID.includes(sect) ? sect : 'overview';
}

export function navigate(section) {
  if (!VALID.includes(section)) return;
  window.location.hash = `#/${section}`;
}
