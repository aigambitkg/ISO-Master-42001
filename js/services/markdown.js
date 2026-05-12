/**
 * Markdown rendering using marked.js (loaded via CDN in index.html).
 *
 * `renderMarkdown(text)` — standard render.
 *
 * `renderTemplatePreview(template, vars)` — substitutes placeholders, then
 * renders. Resolved/unresolved tokens are wrapped in spans by the
 * template-engine BEFORE markdown parses; marked's option `xhtml: false`
 * keeps inline HTML through.
 */

import { substitute, substituteWithMarkup } from './template-engine.js';

// Configure marked once
if (window.marked) {
  window.marked.setOptions({
    breaks: false,
    gfm: true,
    headerIds: false,
    mangle: false,
  });
}

export function renderMarkdown(md) {
  if (!window.marked) return `<pre>${escape(md)}</pre>`;
  return window.marked.parse(md || '');
}

/**
 * Strip YAML frontmatter (--- ... ---) at the start.
 */
export function stripFrontmatter(md) {
  if (!md) return '';
  return md.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '');
}

export function renderTemplatePreview(template, vars) {
  if (!template) return '';
  const body = stripFrontmatter(template);
  const withMarkup = substituteWithMarkup(body, vars);
  return renderMarkdown(withMarkup);
}

export function renderResolved(template, vars) {
  const body = stripFrontmatter(template);
  return renderMarkdown(substitute(body, vars));
}

function escape(s) {
  return (s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
