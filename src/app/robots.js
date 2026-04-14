import { BASE_URL } from "./lib/constants";

/** @returns {import('next').MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // opengraph-image URLs use X-Robots-Tag: noindex in next.config.ts; do not
      // disallow here or Google reports "indexed though blocked by robots.txt".
      disallow: ["/private/", "/landing/"],
    },
    sitemap: `${BASE_URL.replace(/\/$/, "")}/sitemap.xml`,
  };
}
