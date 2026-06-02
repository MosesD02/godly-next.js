// Dedicated phone number for Fort Lauderdale LANDING pages ONLY.
//
// Applies to /landing/fort-lauderdale and /landing/<service>/fort-lauderdale.
// Non-landing pages (e.g. /fort-lauderdale and /fort-lauderdale/<service>) keep
// the shared cityPhoneMap number from metaTitles.js — do NOT use this there.

export const LANDING_FORT_LAUDERDALE_PHONE = "954-787-1554";

// Route slug used to detect the Fort Lauderdale landing pages.
export const FORT_LAUDERDALE_SLUG = "fort-lauderdale";

// True when the current pathname is a Fort Lauderdale landing page.
// `cityDisplayName` is the context city value (citiesMap value, e.g. "FORT LAUDERDALE").
export function isFortLauderdaleLandingPath(pathname, cityDisplayName) {
  return (
    typeof pathname === "string" &&
    pathname.startsWith("/landing") &&
    cityDisplayName === "FORT LAUDERDALE"
  );
}
