import type { NextConfig } from "next";

const CITY_SLUGS = [
  "boca-raton",
  "coconut-creek",
  "cooper-city",
  "coral-springs",
  "davie",
  "deerfield-beach",
  "delray-beach",
  "fort-lauderdale",
  "hallandale-beach",
  "hillsboro-beach",
  "hollywood",
  "lauderdale-by-the-sea",
  "lighthouse-point",
  "margate",
  "miramar",
  "oakland-park",
  "parkland",
  "pembroke-pines",
  "plantation",
  "pompano-beach",
  "royal-palm-beach",
  "south-florida",
  "southwest-ranches",
  "sunrise",
  "tamarac",
  "west-park",
  "weston",
];

const CITY_REDIRECT_PATTERN = CITY_SLUGS.join("|");

const UNDERSCORE_CITY_REDIRECTS = CITY_SLUGS.filter((city) =>
  city.includes("-"),
).map((city) => ({
  source: `/${city.replace(/-/g, "_")}/:path*`,
  destination: `/${city}/:path*`,
  permanent: true,
}));

const nextConfig: NextConfig = {
  // Next.js 16.3 instant navigations: prerender a reusable App Shell and
  // prefetch that shell for visible links while dynamic content streams in.
  cacheComponents: true,
  partialPrefetching: true,

  reactCompiler: true,

  images: {
    // Enable image optimization
    formats: ["image/webp", "image/avif"],

    // Optimize for performance
    minimumCacheTTL: 31536000, // 1 year cache

    // Responsive image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    /** Allowed `quality` values on `<Image />` (Next.js 15+). */
    qualities: [75, 80, 85, 90, 95, 100],

    // Domains for external images (if needed)
    domains: [],
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],

    // Disable static optimization for better performance
    unoptimized: false,
  },

  // Performance optimizations
  compress: true,

  // Redirect /blogs and /sanity to /blog (canonical blog index)
  async redirects() {
    return [
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/sanity",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/sanity/:path*",
        destination: "/blog/:path*",
        permanent: true,
      },
      // Legal pages are single static pages; collapse malformed subpaths to canonical URLs.
      {
        source: "/privacy-policy/:path+",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms-and-conditions/:path+",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      // Legacy snake_case city segments in URLs → canonical kebab-case (GSC 404s)
      ...UNDERSCORE_CITY_REDIRECTS,
      // No WPB city hub; nearest existing service area page
      {
        source: "/west-palm-beach",
        destination: "/royal-palm-beach",
        permanent: true,
      },
      {
        source: "/west-palm-beach/:path*",
        destination: "/royal-palm-beach/:path*",
        permanent: true,
      },
      {
        source: `/:city(${CITY_REDIRECT_PATTERN})/holiday-light-installation`,
        destination: "/:city/holiday-lighting",
        permanent: true,
      },
      {
        source: `/:city(${CITY_REDIRECT_PATTERN})/skylight-cleaning`,
        destination: "/:city/window-cleaning",
        permanent: true,
      },
      {
        source: `/:city(${CITY_REDIRECT_PATTERN})/high-dusting`,
        destination: "/:city/window-cleaning",
        permanent: true,
      },
      {
        source: `/:city(${CITY_REDIRECT_PATTERN})/interior-window-cleaning`,
        destination: "/:city/window-cleaning",
        permanent: true,
      },
      {
        source: "/interior-window-cleaning",
        destination: "/window-cleaning",
        permanent: true,
      },
      {
        source: `/:city(${CITY_REDIRECT_PATTERN})/exterior-window-cleaning`,
        destination: "/:city/window-cleaning",
        permanent: true,
      },
      {
        source: "/exterior-window-cleaning",
        destination: "/window-cleaning",
        permanent: true,
      },
      // Roof Washing → Roof Cleaning (slug rename, June 2026)
      {
        source: `/:city(${CITY_REDIRECT_PATTERN})/roof-washing`,
        destination: "/:city/roof-cleaning",
        permanent: true,
      },
      // Retired services → city hub (Solar Panel Cleaning, Light Fixture Cleaning)
      {
        source: `/:city(${CITY_REDIRECT_PATTERN})/solar-panel-cleaning`,
        destination: "/:city",
        permanent: true,
      },
      {
        source: `/:city(${CITY_REDIRECT_PATTERN})/light-fixture-cleaning`,
        destination: "/:city",
        permanent: true,
      },
      // Legacy city Rain Shield URLs → single hub (SEO punch list P1.2)
      {
        source: "/boca-raton/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/coconut-creek/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/cooper-city/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/coral-springs/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/davie/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/deerfield-beach/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/delray-beach/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/fort-lauderdale/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/hallandale-beach/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/hillsboro-beach/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/hollywood/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/lauderdale-by-the-sea/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/lighthouse-point/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/margate/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/miramar/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/oakland-park/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/parkland/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/pembroke-pines/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/plantation/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/pompano-beach/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/royal-palm-beach/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/southwest-ranches/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/sunrise/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/tamarac/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/west-park/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      {
        source: "/weston/rain-shield-tech",
        destination: "/rain-shield",
        permanent: true,
      },
      // Blog: legacy Sanity slugs with duplicated city segments (-fl-city or -city-city) → canonical slug
      {
        source: "/blog/house-washing-coconut-creek-fl-coconut-creek",
        destination: "/blog/house-washing-coconut-creek",
        permanent: true,
      },
      {
        source: "/blog/house-washing-cooper-city-fl-cooper-city",
        destination: "/blog/house-washing-cooper-city",
        permanent: true,
      },
      {
        source: "/blog/house-washing-coral-springs-fl-coral-springs",
        destination: "/blog/house-washing-coral-springs",
        permanent: true,
      },
      {
        source: "/blog/house-washing-davie-fl-davie",
        destination: "/blog/house-washing-davie",
        permanent: true,
      },
      {
        source: "/blog/house-washing-deerfield-beach-fl-deerfield-beach",
        destination: "/blog/house-washing-deerfield-beach",
        permanent: true,
      },
      {
        source: "/blog/house-washing-hollywood-fl-hollywood",
        destination: "/blog/house-washing-hollywood",
        permanent: true,
      },
      {
        source: "/blog/paver-sealing-pompano-beach-fl-pompano-beach",
        destination: "/blog/paver-sealing-pompano-beach",
        permanent: true,
      },
      {
        source: "/blog/pressure-washing-fort-lauderdale-fort-lauderdale",
        destination: "/blog/pressure-washing-fort-lauderdale",
        permanent: true,
      },
      {
        source: "/blog/pressure-washing-weston-weston",
        destination: "/blog/pressure-washing-weston",
        permanent: true,
      },
      {
        source: "/blog/roof-cleaning-coconut-creek-fl-coconut-creek",
        destination: "/blog/roof-cleaning-coconut-creek",
        permanent: true,
      },
      {
        source: "/blog/roof-cleaning-cooper-city-fl-cooper-city",
        destination: "/blog/roof-cleaning-cooper-city",
        permanent: true,
      },
      {
        source: "/blog/roof-cleaning-coral-springs-fl-coral-springs",
        destination: "/blog/roof-cleaning-coral-springs",
        permanent: true,
      },
      {
        source: "/blog/roof-cleaning-davie-fl-davie",
        destination: "/blog/roof-cleaning-davie",
        permanent: true,
      },
      {
        source: "/blog/soft-wash-tamarac-tamarac",
        destination: "/blog/soft-washing-tamarac",
        permanent: true,
      },
      {
        source: "/blog/soft-wash-tamarac",
        destination: "/blog/soft-washing-tamarac",
        permanent: true,
      },
      {
        source: "/blog/window-cleaning-coconut-creek-fl-coconut-creek",
        destination: "/blog/window-cleaning-coconut-creek",
        permanent: true,
      },
      {
        source: "/blog/window-cleaning-cooper-city-fl-cooper-city",
        destination: "/blog/window-cleaning-cooper-city",
        permanent: true,
      },
      {
        source: "/blog/window-cleaning-coral-springs-fl-coral-springs",
        destination: "/blog/window-cleaning-coral-springs",
        permanent: true,
      },
      {
        source: "/blog/window-cleaning-davie-fl-davie",
        destination: "/blog/window-cleaning-davie",
        permanent: true,
      },
      {
        source: "/blog/window-cleaning-weston-weston",
        destination: "/blog/hard-water-window-stains-weston",
        permanent: true,
      },
      {
        source: "/blog/window-cleaning-weston",
        destination: "/blog/hard-water-window-stains-weston",
        permanent: true,
      },
      {
        source: "/blog/window-cleaning-near-me-fort-lauderdale",
        destination: "/blog/how-often-clean-windows-fort-lauderdale",
        permanent: true,
      },
      {
        source: "/blog/holiday-lighting-boca-raton-boca-raton",
        destination: "/blog/boca-raton-holiday-lighting",
        permanent: true,
      },
    ];
  },

  // Add X-Robots-Tag: noindex to opengraph-image routes
  async headers() {
    return [
      {
        source: "/:path*/opengraph-image",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/opengraph-image",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["@/components", "@/godlyComponents"],
  },
};

export default nextConfig;
