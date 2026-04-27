/**
 * Related service cards at bottom of city service pages — per current service slug.
 */

import service1 from "@/assets/serviceData/service1.webp";
import windowCleaningHero from "@/assets/serviceData/window-cleaning-new.jpeg";
import postConstructionHero from "@/assets/serviceData/post-construction.webp";
import service4 from "@/assets/serviceData/service4.webp";
import service5 from "@/assets/serviceData/service5.webp";
import roofWashingHero from "@/assets/serviceData/roof-washing.webp";
import service7 from "@/assets/serviceData/service7.webp";
import service8 from "@/assets/serviceData/service8.webp";
import service9 from "@/assets/serviceData/service9.webp";
import service10 from "@/assets/serviceData/service10.webp";
import service11 from "@/assets/serviceData/service11.webp";

export const IMAGE_BY_LINK = {
  "solar-panel-cleaning": service1,
  "exterior-window-cleaning": service7,
  "gutter-cleaning": service4,
  "house-washing": service5,
  "roof-washing": roofWashingHero,
  "pressure-washing": service7,
  "paver-sealing": service8,
  "light-fixture-cleaning": service9,
  "screen-cleaning": service10,
  "window-cleaning": windowCleaningHero,
  "post-construction-window-cleaning": postConstructionHero,
  "soft-washing": service5,
  "holiday-lighting": service11,
};

const TITLE_BY_LINK = {
  "solar-panel-cleaning": "Solar Panel Cleaning",
  "exterior-window-cleaning": "Exterior Window Cleaning",
  "gutter-cleaning": "Gutter Cleaning",
  "house-washing": "House Washing",
  "roof-washing": "Roof Washing",
  "pressure-washing": "Pressure Washing",
  "paver-sealing": "Paver Sealing",
  "light-fixture-cleaning": "Light Fixture Cleaning",
  "screen-cleaning": "Screen Cleaning",
  "window-cleaning": "Window Cleaning",
  "soft-washing": "Soft Washing",
  "holiday-lighting": "Holiday Lighting",
};

/** Explicit lists from client spec (order preserved) */
const PRESETS = {
  "window-cleaning": [
    "screen-cleaning",
    "exterior-window-cleaning",
    "post-construction-window-cleaning",
    "soft-washing",
    "holiday-lighting",
  ],
  "soft-washing": [
    "screen-cleaning",
    "exterior-window-cleaning",
    "roof-washing",
    "window-cleaning",
    "holiday-lighting",
  ],
  "holiday-lighting": [
    "window-cleaning",
    "soft-washing",
    "house-washing",
    "pressure-washing",
  ],
};

const DEFAULT_ORDER = [
  "window-cleaning",
  "soft-washing",
  "holiday-lighting",
  "exterior-window-cleaning",
  "screen-cleaning",
  "house-washing",
  "roof-washing",
  "pressure-washing",
  "gutter-cleaning",
  "solar-panel-cleaning",
  "paver-sealing",
  "light-fixture-cleaning",
];

function toSteps(links) {
  return links.map((link, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: TITLE_BY_LINK[link],
    link,
    Image: IMAGE_BY_LINK[link],
  }));
}

/** @param {string} currentSlug */
export function getRelatedServiceSteps(currentSlug) {
  if (PRESETS[currentSlug]) {
    return toSteps(PRESETS[currentSlug]);
  }
  const rest = DEFAULT_ORDER.filter((s) => s !== currentSlug);
  return toSteps(rest.slice(0, 5));
}
