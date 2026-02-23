/**
 * Canonical site URL for metadata, OG images, sitemaps, etc.
 * Set NEXT_PUBLIC_SITE_URL in production if different from godlywindows.com.
 * Ensures OG image URLs never use localhost.
 */
export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://godlywindows.com";
