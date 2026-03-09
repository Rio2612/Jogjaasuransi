import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://asuransijogja.com";
  const now = new Date();
  return [
    { url: base,                                          lastModified: now, changeFrequency: "monthly",  priority: 1    },
    { url: `${base}/asuransi-properti`,                   lastModified: now, changeFrequency: "monthly",  priority: 0.9  },
    { url: `${base}/asuransi-properti/kebakaran`,         lastModified: now, changeFrequency: "monthly",  priority: 0.8  },
    { url: `${base}/asuransi-properti/property-all-risk`, lastModified: now, changeFrequency: "monthly",  priority: 0.8  },
    { url: `${base}/asuransi-properti/banjir-gempa`,      lastModified: now, changeFrequency: "monthly",  priority: 0.8  },
  ];
}
