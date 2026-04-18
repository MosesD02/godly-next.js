import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

  // Webpack configuration for better image handling
  webpack: (config) => {
    // Add custom webpack rules for image optimization if needed
    return config;
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
      // Malformed URLs like /privacy-policy/holiday-light-installation → canonical policy page
      {
        source: "/privacy-policy/:path+",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/:city/holiday-light-installation",
        destination: "/:city/holiday-lighting",
        permanent: true,
      },
      {
        source: "/:city/skylight-cleaning",
        destination: "/:city/window-cleaning",
        permanent: true,
      },
      {
        source: "/:city/high-dusting",
        destination: "/:city/window-cleaning",
        permanent: true,
      },
    ];
  },

  // Add X-Robots-Tag: noindex to opengraph-image routes
  async headers() {
    return [
      {
        source: "/:path*/opengraph-image",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        source: "/opengraph-image",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["@/components", "@/godlyComponents"],
  },
};

export default nextConfig;
