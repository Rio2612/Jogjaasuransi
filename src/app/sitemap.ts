import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://asuransijogja.biz.id";
  const now = new Date();

  return [
    // Beranda
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },

    // Properti
    { url: `${base}/asuransi-properti`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/asuransi-properti/kebakaran`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/asuransi-properti/property-all-risk`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/asuransi-properti/hotel-vila`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/asuransi-properti/banjir-gempa`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/asuransi-properti/vila-homestay`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    // Kendaraan
    { url: `${base}/asuransi-kendaraan`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/asuransi-kendaraan/mobil`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/asuransi-kendaraan/dump-truk-niaga`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/asuransi-kendaraan/armada-fleet`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Liability
    { url: `${base}/asuransi-liability`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/asuransi-liability/public-liability`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/asuransi-liability/employer-liability`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/asuransi-liability/product-liability`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/asuransi-liability/limbah-b3`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    // Kargo
    { url: `${base}/asuransi-kargo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/asuransi-kargo/pengiriman-barang`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/asuransi-kargo/kargo-udara-laut`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/asuransi-kargo/ekspedisi-umkm`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Engineering
    { url: `${base}/asuransi-engineering`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/asuransi-engineering/contractor-all-risk`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/asuransi-engineering/erection-all-risk`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/asuransi-engineering/machinery-breakdown`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Surety Bond
    { url: `${base}/asuransi-surety-bond`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/asuransi-surety-bond/jaminan-penawaran`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/asuransi-surety-bond/jaminan-pelaksanaan`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/asuransi-surety-bond/jaminan-uang-muka`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/asuransi-surety-bond/jaminan-pemeliharaan`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Artikel Utama (Parent)
    { url: `${base}/artikel`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // Daftar Sub-Artikel (Urutan Sesuai Abjad Folder GitHub Anda)
    { url: `${base}/artikel/artikel_rental_mobil_wisata`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/artikel/asuransi-kendaraan-jogja`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/artikel/asuransi-kontraktor-proyek-jogja`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/artikel/asuransi-kos-jogja`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/artikel/asuransi-mesin-pabrik-jogja`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/artikel/asuransi-mobil-banjir`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/artikel/asuransi-mobil-bekas`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/artikel/asuransi-mobil-listrik`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/artikel/asuransi-rumah-tinggal-jogja`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/artikel/asuransi-umkm-jogja`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/artikel/asuransi-vila-homestay-jogja`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/artikel/bengkel-rekanan-asuransi-jogja`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/artikel/cara-klaim-asuransi-liability`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/artikel/cara-klaim-asuransi-mobil`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/artikel/cara-menghitung-nilai-asuransi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/artikel/cara-menghitung-premi-asuransi-mobil`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/artikel/cara-mengurus-jaminan-penawaran-jogja`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/artikel/contoh-kasus-gugatan-liability-bisnis`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/artikel/pentingnya-asuransi-dunia-usaha-jogja`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/artikel/perbedaan-all-risk-tlo`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/artikel/perbedaan-car-ear-asuransi-engineering`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/artikel/perbedaan-jenis-asuransi-liability`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/artikel/premi-asuransi-car-jogja`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/artikel/syarat-asuransi-tender-pemerintah-diy`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/artikel/perbedaan-surety-bond-bank-garansi`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/artikel/asuransi-kargo-umkm-jogja`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/artikel/cara-klaim-asuransi-kargo`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },

    
  ];
}
