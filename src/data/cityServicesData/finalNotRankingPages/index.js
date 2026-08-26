import { holidayLightingContent } from "./holiday-lighting";
import { windowCleaningContent } from "./window-cleaning";

const serviceContentModules = [
  windowCleaningContent,
  holidayLightingContent,
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
