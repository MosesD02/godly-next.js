/**
 * Blog taxonomy — service categories.
 *
 * Each blog post should have:
 *   citySlug       — location tag  (e.g. "fort-lauderdale")
 *   serviceCategory — service tag  (e.g. "window-cleaning")
 *
 * Add the serviceCategory field to every post in posts/.
 */

/** All valid service categories */
export const SERVICE_CATEGORIES = {
  "window-cleaning": "Window Cleaning",
  "pressure-washing": "Pressure Washing",
  "house-washing": "House Washing",
  "roof-cleaning": "Roof Cleaning",
  "paver-sealing": "Paver Sealing",
  "christmas-lights": "Christmas Lights",
};

/**
 * Maps service page slugs (from [city]/[slug] routes) to a service category.
 * Services not listed here have no blog category and will show no related posts.
 */
export const SERVICE_SLUG_TO_CATEGORY = {
  "exterior-window-cleaning": "window-cleaning",
  "interior-window-cleaning": "window-cleaning",
  "pressure-washing": "pressure-washing",
  "house-washing": "house-washing",
  "roof-washing": "roof-cleaning",
  "paver-sealing": "paver-sealing",
  "holiday-light-installation": "christmas-lights",
};
