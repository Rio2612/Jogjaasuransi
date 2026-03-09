# Asuransi Jogja — Website Next.js 15

Website konsultan asuransi kerugian Rio Mardiansyah, dibangun dengan Next.js 15 + TypeScript + Tailwind CSS.

## Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **ESLint** (next/core-web-vitals)

## Setup & Deploy ke Vercel

### 1. Clone / push ke GitHub
```bash
git init
git add .
git commit -m "init: asuransi jogja website"
git remote add origin https://github.com/USERNAME/asuransi-jogja.git
git push -u origin main
```

### 2. Deploy ke Vercel
- Buka [vercel.com](https://vercel.com) → New Project
- Import repo GitHub di atas
- Framework: **Next.js** (auto-detected)
- Klik Deploy ✅

### 3. Environment Variables di Vercel
Tambahkan di Settings → Environment Variables:
```
NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
```

### 4. Google Search Console
Setelah domain terhubung di Vercel, daftarkan di [search.google.com/search-console](https://search.google.com/search-console).
Uncomment baris `verification` di `src/app/layout.tsx` dan isi token verifikasi.

### 5. Google Analytics
1. Buat property di [analytics.google.com](https://analytics.google.com)
2. Salin Measurement ID (format: G-XXXXXXXXXX)
3. Tambahkan ke Environment Variables Vercel

## Struktur Folder
```
src/
├── app/
│   ├── layout.tsx      # SEO metadata, font, GA4
│   ├── page.tsx        # Halaman utama
│   ├── globals.css     # Tailwind + custom animations
│   ├── sitemap.ts      # Sitemap otomatis
│   └── robots.ts       # robots.txt otomatis
├── components/
│   └── sections/       # Header, Hero, Produk, Kalkulator, dll
└── lib/
    └── data.ts         # Semua data: produk, rate OJK, FAQ, testimoni
```

## Update Konten
Semua konten terpusat di `src/lib/data.ts`:
- Nomor WA, email → `KONTAK`
- Produk asuransi → `CLUSTERS`
- Rate OJK kalkulator → `RATE`
- FAQ → `FAQS`
- Testimoni → `TESTIMONI`

## Foto Rio Mardiansyah
Simpan foto di `public/rio-mardiansyah.jpg`, lalu di `About.tsx` ganti placeholder dengan:
```tsx
import Image from "next/image";
<Image src="/rio-mardiansyah.jpg" alt="Rio Mardiansyah" fill className="object-cover" />
```
