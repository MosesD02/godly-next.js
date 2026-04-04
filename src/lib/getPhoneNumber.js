import { getPhoneForCityDisplayName } from "@/data/metaTitles";

/**
 * Local display phone for UI (footer, header, CTAs) from city label or slug-style name.
 */
export const getPhoneNumber = (city) =>
  getPhoneForCityDisplayName(
    typeof city === "string" && city.trim() ? city : "SOUTH FLORIDA",
  );
