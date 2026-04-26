/**
 * Godly Windows brand mark — single file path for header, footers, and OG.
 * To update: replace `src/assets/logo-new.png`, then run `npm run preconvert-og-paper`
 * so `public/og-assets/{BRAND_LOGO_FILENAME}` matches for serverless readFile fallbacks.
 */
import brandLogo from "@/assets/logo-new.png";

export const BRAND_LOGO_FILENAME = "logo-new.png";

export { brandLogo };
