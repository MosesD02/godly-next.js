import { BASE_URL } from "./lib/constants";

/** @returns {import('next').MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Next static assets + opengraph-image routes: block to save crawl budget;
      // OG responses also send X-Robots-Tag: noindex in next.config.ts
      disallow: ["/private/", "/landing/", "/*opengraph-image*"],
    },
    sitemap: `${BASE_URL.replace(/\/$/, "")}/sitemap.xml`,
  };
}
