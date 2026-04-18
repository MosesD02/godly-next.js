/**
 * Map Sanity image asset `metadata.lqip` to Next.js Image `blurDataURL`.
 * @see https://www.sanity.io/docs/image-url
 */
export function sanityLqipToBlurDataURL(lqip) {
  if (!lqip || typeof lqip !== "string") return undefined;
  const trimmed = lqip.trim();
  if (trimmed.startsWith("data:")) return trimmed;
  return `data:image/jpeg;base64,${trimmed}`;
}
