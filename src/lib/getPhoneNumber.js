import { getPhoneForCityDisplayName } from "@/data/metaTitles";
import { citiesMap } from "@/data/cities";

/**
 * Local display phone for UI (footer, header, CTAs). The route takes
 * precedence so regional NAP is correct in server-rendered HTML; context is
 * the fallback for route-independent UI.
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
