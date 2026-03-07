import createImageUrlBuilder from "@sanity/image-url";

/**
 * Standalone image URL builder — uses only project config so it can run in
 * client components without pulling in @sanity/client (which uses Node streams).
 */
const builder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "4f9qrkpa",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
});

/**
 * Build a Sanity image URL for the given source.
 * @param {import('@sanity/image-url').SanityImageSource} source
 * @returns {import('@sanity/image-url').SanityImageBuilder}
 */
export function urlFor(source) {
  return builder.image(source);
}
