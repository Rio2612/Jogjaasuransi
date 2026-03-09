import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asuransi Jogja – Konsultan Asuransi Kerugian Terpercaya di Yogyakarta",
  description:
    "Asuransi Jogja – Konsultan asuransi kerugian independen di Yogyakarta. Melayani asuransi kendaraan, properti, engineering, kargo, liability, dan surety bond untuk personal dan korporasi.",
  keywords:
    "asuransi jogja, asuransi kerugian yogyakarta, konsultan asuransi jogja, asuransi mobil jogja, asuransi kebakaran jogja, asuransi properti jogja, asuransi kos jogja",
  authors: [{ name: "Rio Mardiansyah" }],
  openGraph: {
    title: "Asuransi Jogja – Konsultan Asuransi Kerugian Terpercaya",
    description:
      "Konsultan asuransi kerugian independen di Yogyakarta. Konsultasi GRATIS, 10+ tahun pengalaman.",
    url: "https://asuransijogja.com",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asuransi Jogja – Konsultan Asuransi Kerugian Yogyakarta",
    description: "Konsultasi asuransi kerugian gratis. Kendaraan, properti, kargo, engineering, liability, surety bond.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Google Search Console verification — ganti dengan token asli Anda
  // verification: { google: "YOUR_GOOGLE_VERIFICATION_TOKEN" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        {/* Google Analytics GA4 — ganti G-XXXXXXXXXX dengan ID asli */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
