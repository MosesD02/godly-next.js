/** Hub + spoke window cleaning URLs (pillar + three specialized pages). */

export const WINDOW_CLUSTER_SLUGS = [
  "window-cleaning",
  "post-construction-window-cleaning",
];

export function isWindowClusterSlug(slug) {
  return WINDOW_CLUSTER_SLUGS.includes(slug);
}

/**
 * @param {string | undefined} citySlug — URL city segment; omit or `south-florida` for regional hub paths (`/window-cleaning`).
 * @param {string} serviceSlug
 */
export function windowClusterPath(citySlug, serviceSlug) {
  if (!citySlug || citySlug === "south-florida") {
    return `/${serviceSlug}`;
  }
  return `/${citySlug}/${serviceSlug}`;
}
