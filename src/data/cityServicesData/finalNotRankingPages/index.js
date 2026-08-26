import { gutterCleaningContent } from "./gutter-cleaning";
import { holidayLightingContent } from "./holiday-lighting";
import { houseWashingContent } from "./house-washing";
import { paverSealingContent } from "./paver-sealing";
import { softWashingContent } from "./soft-washing";
import { windowCleaningContent } from "./window-cleaning";

const serviceContentModules = [
  windowCleaningContent,
  holidayLightingContent,
  softWashingContent,
  houseWashingContent,
  paverSealingContent,
  gutterCleaningContent,
];

export const finalNotRankingPages = serviceContentModules.reduce(
  (cities, serviceContent) => {
    for (const [citySlug, services] of Object.entries(serviceContent)) {
      cities[citySlug] = { ...(cities[citySlug] ?? {}), ...services };
    }
    return cities;
  },
  {},
);
