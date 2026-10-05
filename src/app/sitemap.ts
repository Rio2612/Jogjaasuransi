import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://asuransijogja.biz.id";

  return [
    // ─── BERANDA ─────────────────────────────────────────────────────────────
    { url: base, lastModified: new Date("2026-07-07"), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/sppa`, lastModified: new Date("2026-07-13"), changeFrequency: "monthly", priority: 0.6 },

    // ─── PROPERTI ────────────────────────────────────────────────────────────
    { url: `${base}/asuransi-properti`,                        lastModified: new Date("2026-08-12"), changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/asuransi-properti/kebakaran`,              lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/asuransi-properti/property-all-risk`,      lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/asuransi-properti/hotel-vila`,             lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/asuransi-properti/banjir-gempa`,           lastModified: new Date("2026-08-12"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/asuransi-properti/vila-homestay`,          lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.85 },

    // ─── KENDARAAN ───────────────────────────────────────────────────────────
    { url: `${base}/asuransi-kendaraan`,                       lastModified: new Date("2026-08-13"), changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/asuransi-kendaraan/mobil`,                 lastModified: new Date("2026-08-12"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/asuransi-kendaraan/dump-truk-niaga`,       lastModified: new Date("2026-08-13"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/asuransi-kendaraan/armada-fleet`,          lastModified: new Date("2026-08-12"), changeFrequency: "monthly", priority: 0.8  },

    // ─── LIABILITY ───────────────────────────────────────────────────────────
    { url: `${base}/asuransi-liability`,                       lastModified: new Date("2026-09-21"), changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/asuransi-liability/public-liability`,      lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/asuransi-liability/employer-liability`,    lastModified: new Date("2026-08-13"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/asuransi-liability/product-liability`,     lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/asuransi-liability/limbah-b3`,             lastModified: new Date("2026-08-13"), changeFrequency: "monthly", priority: 0.85 },

    // ─── EVENT ───────────────────────────────────────────────────────────────
    { url: `${base}/asuransi-event`,                           lastModified: new Date("2026-08-25"), changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/asuransi-event/konser-festival-musik`,     lastModified: new Date("2026-08-25"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/asuransi-event/motocross-grasstrack`,      lastModified: new Date("2026-08-25"), changeFrequency: "monthly", priority: 0.85 },

    // ─── KARGO ───────────────────────────────────────────────────────────────
    { url: `${base}/asuransi-kargo`,                           lastModified: new Date("2026-08-13"), changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/asuransi-kargo/pengiriman-barang`,         lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/asuransi-kargo/kargo-udara-laut`,          lastModified: new Date("2026-10-03"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/asuransi-kargo/ekspedisi-umkm`,            lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.8  },

    // ─── ENGINEERING ─────────────────────────────────────────────────────────
    { url: `${base}/asuransi-engineering`,                           lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/asuransi-engineering/contractor-all-risk`,       lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/asuransi-engineering/erection-all-risk`,         lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/asuransi-engineering/machinery-breakdown`,       lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.8  },

    // ─── SURETY BOND ─────────────────────────────────────────────────────────
    { url: `${base}/asuransi-surety-bond`,                           lastModified: new Date("2026-10-02"), changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/asuransi-surety-bond/jaminan-penawaran`,         lastModified: new Date("2026-10-03"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/asuransi-surety-bond/jaminan-pelaksanaan`,       lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/asuransi-surety-bond/jaminan-uang-muka`,         lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/asuransi-surety-bond/jaminan-pemeliharaan`,     lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.8  },

    // ─── KESEHATAN KARYAWAN ──────────────────────────────────────────────────
    { url: `${base}/asuransi-kesehatan-karyawan`,                    lastModified: new Date("2026-10-05"), changeFrequency: "monthly", priority: 0.9  },

    // ─── ARTIKEL — INDUK ─────────────────────────────────────────────────────
    { url: `${base}/artikel`, lastModified: new Date("2026-10-02"), changeFrequency: "weekly", priority: 0.8 },

    // ─── ARTIKEL — ENGINEERING CLUSTER ───────────────────────────────────────
    { url: `${base}/artikel/perbedaan-car-ear-asuransi-engineering`,  lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/artikel/premi-asuransi-car-jogja`,                lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/artikel/asuransi-mesin-pabrik-jogja`,             lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/artikel/asuransi-kontraktor-proyek-jogja`,        lastModified: new Date("2026-10-02"), changeFrequency: "monthly", priority: 0.90 },

    // ─── ARTIKEL — SURETY BOND CLUSTER ───────────────────────────────────────
    { url: `${base}/artikel/syarat-asuransi-tender-pemerintah-diy`,   lastModified: new Date("2026-10-02"), changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/artikel/perbedaan-surety-bond-bank-garansi`,      lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/artikel/cara-mengurus-jaminan-penawaran-jogja`,   lastModified: new Date("2026-08-12"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/artikel/jaminan-pelaksanaan-pemeliharaan-uang-muka`, lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.85 },

    // ─── ARTIKEL — UMKM & KARGO CLUSTER ──────────────────────────────────────
    { url: `${base}/artikel/asuransi-umkm-jogja`,                     lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/artikel/asuransi-kargo-umkm-jogja`,               lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/artikel/cara-klaim-asuransi-kargo`,               lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.78 },
    { url: `${base}/artikel/asuransi-kargo-ekspor-impor-jogja`,       lastModified: new Date("2026-10-03"), changeFrequency: "monthly", priority: 0.80 },

    // ─── ARTIKEL — LIABILITY CLUSTER ─────────────────────────────────────────
    { url: `${base}/artikel/perbedaan-jenis-asuransi-liability`,      lastModified: new Date("2026-09-22"), changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/artikel/cara-klaim-asuransi-liability`,           lastModified: new Date("2026-09-22"), changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/artikel/contoh-kasus-gugatan-liability-bisnis`,   lastModified: new Date("2026-09-22"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/artikel/employer-liability-panduan-jogja`,        lastModified: new Date("2026-10-03"), changeFrequency: "monthly", priority: 0.80 },
    { url: `${base}/artikel/limbah-b3-liability-jogja`,               lastModified: new Date("2026-10-03"), changeFrequency: "monthly", priority: 0.80 },

    // ─── ARTIKEL — KENDARAAN CLUSTER ─────────────────────────────────────────
    { url: `${base}/artikel/perbedaan-all-risk-tlo`,                  lastModified: new Date("2026-08-12"), changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/artikel/cara-klaim-asuransi-mobil`,               lastModified: new Date("2026-08-12"), changeFrequency: "monthly", priority: 0.83 },
    { url: `${base}/artikel/cara-menghitung-premi-asuransi-mobil`,    lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.80 },
    { url: `${base}/artikel/asuransi-mobil-banjir`,                   lastModified: new Date("2026-10-03"), changeFrequency: "monthly", priority: 0.80 },
    { url: `${base}/artikel/asuransi-mobil-bekas`,                    lastModified: new Date("2026-08-12"), changeFrequency: "monthly", priority: 0.78 },
    { url: `${base}/artikel/asuransi-mobil-listrik`,                  lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.78 },
    { url: `${base}/artikel/asuransi-rental-mobil-jogja`,             lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.78 },
    { url: `${base}/artikel/asuransi-armada-fleet-jogja`,             lastModified: new Date("2026-10-03"), changeFrequency: "monthly", priority: 0.80 },
    { url: `${base}/artikel/asuransi-truk-niaga-jogja`,               lastModified: new Date("2026-10-03"), changeFrequency: "monthly", priority: 0.80 },

    // ─── ARTIKEL — PROPERTI CLUSTER ──────────────────────────────────────────
    { url: `${base}/artikel/asuransi-rumah-tinggal-jogja`,            lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.82 },
    // Vila + Hotel digabung → satu artikel definitif (mencegah kanibalisasi)
    { url: `${base}/artikel/asuransi-vila-homestay-jogja`,            lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/artikel/asuransi-kos-jogja`,                      lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.78 },

    // ─── ARTIKEL — EVENT CLUSTER ──────────────────────────────────────────────
    { url: `${base}/artikel/syarat-dokumen-asuransi-event-musik-jogja`, lastModified: new Date("2026-08-11"), changeFrequency: "monthly", priority: 0.85 },

    // ─── ARTIKEL — EDUKASI & HOW-TO ──────────────────────────────────────────
    { url: `${base}/artikel/cara-menghitung-nilai-asuransi`,          lastModified: new Date("2026-07-13"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/artikel/bengkel-rekanan-asuransi-jogja`,          lastModified: new Date("2026-08-12"), changeFrequency: "monthly", priority: 0.72 },
    { url: `${base}/artikel/pentingnya-asuransi-dunia-usaha-jogja`,   lastModified: new Date("2026-07-17"), changeFrequency: "monthly", priority: 0.72 },

    // ─── ARTIKEL — EXISTING (dari sitemap lama, konten belum disentuh) ────────
    { url: `${base}/artikel/asuransi-kendaraan-jogja`,                lastModified: new Date("2026-08-12"), changeFrequency: "monthly", priority: 0.75 },
  ];
}
