const DEFAULT_MAX = 160;
const MIN_WORD_BREAK = 100;

/**
 * Truncates meta description to max length on a word boundary when sensible.
 */
export function clampMetaDescription(text, max = DEFAULT_MAX) {
  if (!text || typeof text !== "string") return "";
  const t = text.trim().replace(/\s+/g, " ");
  if (t.length <= max) return t;

  const slice = t.slice(0, max);
  const lastSpace = slice.lastIndexOf(" ");
  const end =
    lastSpace >= MIN_WORD_BREAK ? lastSpace : max;
  const out = slice.slice(0, end).trim().replace(/[,;:–—-]+$/, "");
  return out.endsWith("…") ? out : `${out}…`;
}
