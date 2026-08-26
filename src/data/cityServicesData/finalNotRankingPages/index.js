import { windowCleaningContent } from "./window-cleaning";

const serviceContentModules = [windowCleaningContent];

export const finalNotRankingPages = serviceContentModules.reduce(
  (cities, serviceContent) => {
    for (const [citySlug, services] of Object.entries(serviceContent)) {
      cities[citySlug] = { ...(cities[citySlug] ?? {}), ...services };
    }
    return cities;
  },
  {},
);
