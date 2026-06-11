export const BLOG_SLUG_ALIASES = {
  "house-washing-davie": "house-washing-davie-fl-davie",
  "roof-cleaning-davie": "roof-cleaning-davie-fl-davie",
};

export const BLOG_CANONICAL_SLUGS = Object.fromEntries(
  Object.entries(BLOG_SLUG_ALIASES).map(([canonical, source]) => [
    source,
    canonical,
  ]),
);

export const NOINDEX_BLOG_SLUGS = new Set([
  "pressure-washing-cost-boca-raton",
  "pressure-washing-fort-lauderdale",
  "window-wash-boca-raton",
  "window-washers-fort-lauderdale",
]);

export function getSanitySlugForBlogRoute(slug) {
  return BLOG_SLUG_ALIASES[slug] || slug;
}

export function getCanonicalBlogSlug(slug) {
  return BLOG_CANONICAL_SLUGS[slug] || slug;
}

export function isNoindexBlogSlug(slug) {
  return NOINDEX_BLOG_SLUGS.has(getCanonicalBlogSlug(slug));
}

export function withCanonicalBlogSlug(post) {
  if (!post?.slug) return post;
  const canonicalSlug = getCanonicalBlogSlug(post.slug);
  if (canonicalSlug === post.slug) return post;
  return {
    ...post,
    sanitySlug: post.slug,
    slug: canonicalSlug,
  };
}

export function canonicalizeInternalBlogHref(href) {
  if (typeof href !== "string") return href;

  const siteUrl = "https://godlywindows.com";
  const isAbsolute = href.startsWith(siteUrl);
  const path = isAbsolute ? href.slice(siteUrl.length) : href;
  const match = path.match(/^\/blog\/([^/?#]+)(.*)$/);

  if (!match) return href;

  const canonicalSlug = getCanonicalBlogSlug(match[1]);
  if (canonicalSlug === match[1]) return href;

  const canonicalPath = `/blog/${canonicalSlug}${match[2] || ""}`;
  return isAbsolute ? `${siteUrl}${canonicalPath}` : canonicalPath;
}
