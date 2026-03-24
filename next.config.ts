import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable image optimization
    formats: ["image/webp", "image/avif"],

    // Optimize for performance
    minimumCacheTTL: 31536000, // 1 year cache

    // Responsive image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Domains for external images (if needed)
    domains: [],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],

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

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["@/components", "@/godlyComponents"],
  },
};

export default nextConfig;
