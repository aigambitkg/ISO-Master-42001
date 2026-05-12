/**
 * Simple template engine for `{Variable}` style placeholders.
 *
 * - `substitute(template, vars)` — plain string substitution.
 * - `substituteWithMarkup(template, vars)` — wraps each placeholder in a
 *   <span> indicating resolved (green) vs. unresolved (yellow) status,
 *   for live preview. Returns a string of HTML-safe text WITH spans —
 *   intended to be processed by the markdown renderer afterwards in a
 *   pass that preserves these spans.
 */

const PLACEHOLDER_RE = /\{([A-Za-zÀ-ž][A-Za-z0-9_ÀÄÖÜäöüß]*)\}/g;

/**
 * Plain substitution. Unresolved variables stay as-is (`{Name}`).
 */
export function substitute(template, vars = {}) {
  if (!template) return '';
  return template.replace(PLACEHOLDER_RE, (full, name) => {
    const v = vars[name];
    return v !== undefined && v !== null && v !== '' ? String(v) : full;
  });
}

/**
 * Substitution with HTML markup. Used in the live-preview to visually
 * separate resolved from unresolved tokens. We escape the surrounding
 * markdown body MINIMALLY — only the placeholder context.
 */
export function substituteWithMarkup(template, vars = {}) {
  if (!template) return '';
  return template.replace(PLACEHOLDER_RE, (full, name) => {
    const v = vars[name];
    if (v !== undefined && v !== null && v !== '') {
      const safe = escapeHtml(String(v));
      return `<span class="var-resolved" data-var="${name}">${safe}</span>`;
    }
    return `<span class="var-token" data-var="${name}">{${name}}</span>`;
  });
}

/**
 * Extract the unique variable names used in a template.
 */
export function extractVariables(template) {
  if (!template) return [];
  const names = new Set();
  let m;
  PLACEHOLDER_RE.lastIndex = 0;
  while ((m = PLACEHOLDER_RE.exec(template)) !== null) names.add(m[1]);
  return Array.from(names);
}

/**
 * Compute the next review date based on `Inkrafttreten` and `ReviewFrequenz`.
 * Used for the x-computed field in the schema.
 */
export function computeNextReview(inkrafttreten, frequenz) {
  if (!inkrafttreten) return '';
  const d = new Date(inkrafttreten);
  if (isNaN(d.getTime())) return '';
  const monthsMap = {
    'jährlich': 12,
    'halbjährlich': 6,
    'alle 18 Monate': 18,
    'alle 24 Monate': 24,
  };
  const months = monthsMap[frequenz] || 12;
  d.setMonth(d.getMonth() + months);
  return d.toISOString().split('T')[0];
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
