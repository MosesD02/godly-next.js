/**
 * Blog taxonomy — service categories.
 * Maps service page slugs to blog post categories for related posts.
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
  "window-cleaning": "window-cleaning",
  "pressure-washing": "pressure-washing",
  "house-washing": "house-washing",
  "roof-washing": "roof-cleaning",
  "paver-sealing": "paver-sealing",
  "holiday-lighting": "christmas-lights",
};
