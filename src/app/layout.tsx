import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const BASE_URL = "https://asuransijogja.biz.id";

// Heading font: Syne — dipakai di semua h1–h3, label section, nama brand
const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

// Body font: DM Sans — dipakai di semua teks konten, navigasi, footer
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Asuransi Jogja – Konsultan Asuransi Kerugian Terpercaya di Yogyakarta",
    template: "%s | Asuransi Jogja",
  },
  description:
    "Asuransi Jogja – Konsultan asuransi kerugian independen di Yogyakarta. Melayani asuransi kendaraan, properti, engineering, kargo, liability, dan surety bond untuk personal dan korporasi.",
  keywords:
    "asuransi jogja, asuransi kerugian yogyakarta, konsultan asuransi jogja, asuransi mobil jogja, asuransi kebakaran jogja, asuransi properti jogja, asuransi kos jogja",
  authors: [{ name: "Rio MD" }],
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Asuransi Jogja – Konsultan Asuransi Kerugian Terpercaya",
    description: "Konsultan asuransi kerugian independen di Yogyakarta. Konsultasi GRATIS, 10+ tahun pengalaman.",
    url: BASE_URL,
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Asuransi Jogja – Konsultan Asuransi Kerugian Yogyakarta" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asuransi Jogja – Konsultan Asuransi Kerugian Yogyakarta",
    description: "Konsultasi asuransi kerugian gratis. Kendaraan, properti, kargo, engineering, liability, surety bond.",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  // verification: { google: "YOUR_GOOGLE_VERIFICATION_TOKEN" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "InsuranceAgency"],
        "@id": `${BASE_URL}/#organization`,
        "name": "Asuransi Jogja",
        "alternateName": "AsuransiJogja.biz.id",
        "description": "Konsultan asuransi kerugian independen di Yogyakarta dengan pengalaman 10+ tahun.",
        "url": BASE_URL,
        "telephone": "+628778165823",
        "email": "marketing.btm@gmail.com",
        "founder": { "@type": "Person", "name": "Rio MD" },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Yogyakarta",
          "addressRegion": "Daerah Istimewa Yogyakarta",
          "addressCountry": "ID",
        },
        "geo": { "@type": "GeoCoordinates", "latitude": -7.7971, "longitude": 110.3688 },
        "areaServed": [
          { "@type": "City", "name": "Yogyakarta" },
          { "@type": "AdministrativeArea", "name": "Daerah Istimewa Yogyakarta" },
        ],
        "openingHours": "Mo-Sa 08:00-17:00",
        "priceRange": "Rp",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Produk Asuransi Kerugian",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Asuransi Kendaraan", "url": `${BASE_URL}/asuransi-kendaraan` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Asuransi Properti", "url": `${BASE_URL}/asuransi-properti` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Asuransi Engineering", "url": `${BASE_URL}/asuransi-engineering` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Asuransi Kargo", "url": `${BASE_URL}/asuransi-kargo` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Asuransi Liability", "url": `${BASE_URL}/asuransi-liability` } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Surety Bond", "url": `${BASE_URL}/asuransi-surety-bond` } },
          ],
        },
        "sameAs": [`https://wa.me/628778165823`],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": BASE_URL,
        "name": "Asuransi Jogja",
        "publisher": { "@id": `${BASE_URL}/#organization` },
        "inLanguage": "id-ID",
      },
    ],
  };

  return (
    <html lang="id" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}',{page_path:window.location.pathname});` }} />
          </>
        )}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
