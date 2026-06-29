import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js Image Optimization
  images: {
    domains: ["asuransijogja.biz.id"],
    formats: ["image/avif", "image/webp"],
  },

  // HAPUS redirect www — biarkan Vercel yang handle lewat Dashboard
  // Redirect di sini + Vercel redirect = ERR_TOO_MANY_REDIRECTS

  // Fix typo 404 dari sitemap lama
  async redirects() {
    return [
      {
        source: "/asuransi-surety-bond/jaminan-pemeliharan",
        destination: "/asuransi-surety-bond/jaminan-pemeliharaan",
        permanent: true,
      },
      {
        source: "/artikel/artikel_rental_mobil_wisata",
        destination: "/artikel/asuransi-rental-mobil-jogja",
        permanent: true,
      },
    ];
  },

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
