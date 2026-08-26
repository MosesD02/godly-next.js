import { holidayLightingContent } from "./holiday-lighting";
import { softWashingContent } from "./soft-washing";
import { windowCleaningContent } from "./window-cleaning";

const serviceContentModules = [
  windowCleaningContent,
  holidayLightingContent,
  softWashingContent,
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
