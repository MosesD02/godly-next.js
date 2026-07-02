import React from "react";
import Link from "next/link";

/**
 * Inline body-copy anchor to /rain-shield for the glass-touching service pages.
 * Rendered ONCE per page inside real prose — not in nav, footer, sidebar or CTA
 * blocks — so Google and LLMs weight it as an in-body internal link.
 *
 * The anchor text is chosen deterministically from `citySlug/slug` so the same
 * page always renders the same phrase (stable for caching and diffing) but the
 * full set of ~130 glass-touching pages spreads evenly across four phrasings.
 */

const ANCHORS = [
  "our RainShield hydrophobic coating",
  "the 7-day rain guarantee we include",
  "how we keep your windows cleaner for longer",
  "RainShield, our invisible water-repelling treatment",
];

/**
 * Per-page phrasing overrides, keyed by `${citySlug}/${slug}`. Use when a page's
 * copy is dictated by the source content doc rather than the rotating anchor pool.
 * `anchor` is the linked text; `suffix` is the (unlinked) text after the link.
 */
const PHRASE_OVERRIDES = {
  // /window-cleaning regional hub — doc copy ends "Ask us about RainShield too."
  "south-florida/window-cleaning": { anchor: "RainShield", suffix: " too." },
};

/** Service slugs that get the inline RainShield link (window-cleaning pages only). */
export const RAIN_SHIELD_INLINE_LINK_SLUGS = new Set([
  "window-cleaning",
  "post-construction-window-cleaning",
]);

export function hasInlineRainShieldLink(slug) {
  return RAIN_SHIELD_INLINE_LINK_SLUGS.has(slug);
}

// FNV-1a 32-bit — small, stable, no dependencies.
function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export default function RainShieldLink({
  citySlug = "",
  slug = "",
  className,
}) {
  const override = PHRASE_OVERRIDES[`${citySlug}/${slug}`];
  const idx = hashSeed(`${citySlug}/${slug}`) % ANCHORS.length;
  const anchor = override ? override.anchor : ANCHORS[idx];
  const suffix = override ? override.suffix : ".";

  return (
    <>
      {" "}
      Ask us about{" "}
      <Link
        href="/rain-shield"
        className={
          className ??
          "font-medium text-[#FDE4C8]! underline! underline-offset-2 hover:text-white!"
        }
      >
        {anchor}
      </Link>
      {suffix}
    </>
  );
}
