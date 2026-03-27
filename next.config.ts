import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Domain baru untuk Next.js Image Optimization
  images: {
    domains: ["asuransijogja.biz.id"],
    formats: ["image/avif", "image/webp"],
  },

  // Canonical domain — redirect www ke non-www
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.asuransijogja.biz.id" }],
        destination: "https://asuransijogja.biz.id/:path*",
        permanent: true,
      },
    ];
  },

  // Security & performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },

  // Compress output
  compress: true,

  // Trailing slash — konsisten tanpa slash di akhir URL
  trailingSlash: false,

  // Power by header off
  poweredByHeader: false,
};

export default nextConfig;
