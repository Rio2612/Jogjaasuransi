import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js Image Optimization
  images: {
    domains: ["asuransijogja.biz.id"],
    formats: ["image/avif", "image/webp"],
  },

  // HAPUS redirect www — biarkan Vercel yang handle lewat Dashboard
  // Redirect di sini + Vercel redirect = ERR_TOO_MANY_REDIRECTS

  // Security headers
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

  compress: true,
  trailingSlash: false,
  poweredByHeader: false,
};

export default nextConfig;
