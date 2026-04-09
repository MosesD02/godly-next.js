import { BASE_URL } from "./lib/constants";

/** @returns {import('next').MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/private/",
        "/*/opengraph-image",
        "/opengraph-image",
        "/landing/",
      ],
    },
    sitemap: `${BASE_URL.replace(/\/$/, "")}/sitemap.xml`,
  };
}
