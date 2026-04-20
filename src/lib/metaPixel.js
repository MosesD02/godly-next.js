export const META_PIXEL_ID = "1387642532355071";

/** Fire after a successful quote / contact form submission. */
export function fireMetaPixelLead() {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", "Lead");
}
