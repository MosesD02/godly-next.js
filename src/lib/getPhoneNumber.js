import { getPhoneForCityDisplayName } from "@/data/metaTitles";
import { citiesMap } from "@/data/cities";

/**
 * Local display phone for UI (footer, header, CTAs). A city slug in the URL
 * wins so the first server-rendered HTML already has the correct regional NAP.
 */
export const getPhoneNumber = (city, pathname) => {
  const routeCitySlug =
    typeof pathname === "string"
      ? pathname
          .split("/")
          .filter(Boolean)
          .find((segment) => citiesMap[segment])
      : null;
  const displayName = routeCitySlug
    ? citiesMap[routeCitySlug]
    : typeof city === "string" && city.trim()
      ? city
      : "SOUTH FLORIDA";

  return getPhoneForCityDisplayName(displayName);
};
