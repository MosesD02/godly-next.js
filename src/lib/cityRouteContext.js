import { citiesMap } from "@/data/cities";

/**
 * Top-level path segments that are real app routes, not city slugs.
 * Defense-in-depth: never treat these as `/:city/...` when building links.
 */
export const RESERVED_TOP_LEVEL_SEGMENTS = new Set([
  "api",
  "blog",
  "blogs",
  "booking",
  "landing",
  "privacy-policy",
  "sanity",
  "terms-and-conditions",
]);

function firstPathSegment(pathname) {
  if (!pathname || typeof pathname !== "string") return "";
  return pathname.split("/").filter(Boolean)[0] ?? "";
}

/**
 * City slug for `/[city]/[service]` links from the header.
 * Uses the URL only when the first segment is a known city slug and not reserved.
 */
export function getCitySlugForServiceLinks(pathname, contextCityDisplayName) {
  const fallback =
    Object.keys(citiesMap).find(
      (key) => citiesMap[key] === contextCityDisplayName,
    ) || "south-florida";
  const first = firstPathSegment(pathname);
  if (first && !RESERVED_TOP_LEVEL_SEGMENTS.has(first) && citiesMap[first]) {
    return first;
  }
  return fallback;
}

/**
 * True when pathname looks like `/[validCity]/[something]` (e.g. service page).
 */
export function isLikelyCityServicePage(pathname) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length !== 3) return false;
  const [first] = parts;
  if (RESERVED_TOP_LEVEL_SEGMENTS.has(first)) return false;
  return citiesMap[first] !== undefined;
}
