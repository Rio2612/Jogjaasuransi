"use client";
import { useState } from "react";
import Link from "next/link";
import { CLUSTERS } from "@/lib/data";

const PILLAR_HREFS: Record<string, string> = {
  kendaraan: "/asuransi-kendaraan",
  properti: "/asuransi-properti",
  engineering: "/asuransi-engineering",
  kargo: "/asuransi-kargo",
  liability: "/asuransi-liability",
  surety: "/asuransi-surety-bond",
};

export default function Produk() {
  const [activeId, setActiveId] = useState("kendaraan");
  const active = CLUSTERS.find(c => c.id === activeId)!;
  const pillarHref = PILLAR_HREFS[activeId];

  return (
    <section id="produk" className="py-[5.5rem] px-[5vw] bg-white">
      <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Unggulan</div>
          <h2 className="font-heading text-[clamp(1.9rem,3vw,2.9rem)] leading-[1.22] text-navy">Solusi Perlindungan<br />untuk Setiap Kebutuhan</h2>
          <p className="text-[0.95rem] leading-[1.8] text-[#64748B] max-w-[560px] mt-3">Kami menyediakan seluruh lini produk asuransi kerugian — dari kebutuhan personal sehari-hari hingga perlindungan skala industri di Yogyakarta.</p>
        </div>
      </div>

      {/* CLUSTER TABS */}
      <div className="flex gap-2 flex-wrap mb-8">
        {CLUSTERS.map(c => (
          <button
            key={c.id}
            onClick={() => setActiveId(c.id)}
            className={`px-[18px] py-2 rounded-full border text-[0.92rem] font-semibold cursor-pointer transition-all ${
              activeId === c.id ? "bg-navy text-white border-navy" : "bg-white text-[#64748B] border-black/10 hover:bg-navy hover:text-white hover:border-navy"
            }`}
          >
            {c.icon} {c.label}
          </button>
        ))}
      </div>

      {/* PRODUK CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        {active.produk.map(p => (
          <div key={p.name} className="border border-black/7 rounded-card p-6 hover:shadow-[0_10px_35px_rgba(13,33,55,0.1)] hover:-translate-y-1 hover:border-gold/25 transition-all relative overflow-hidden group bg-white">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <div className="text-[1.6rem] mb-3">{p.icon}</div>
            <div className="font-heading text-lg font-bold text-navy mb-2">{p.name}</div>
            <p className="text-[1rem] leading-[1.7] text-[#64748B]">{p.desc}</p>
            <a href={p.href} className="inline-flex items-center gap-1 text-gold text-[0.92rem] font-semibold mt-3 hover:gap-2 transition-all no-underline">
              {p.href.startsWith("#") ? "Hitung premi →" : "Konsultasi →"}
            </a>
          </div>
        ))}
      </div>

      {/* PILLAR PAGE LINK */}
      <div className="flex justify-end">
        <Link
          href={pillarHref}
          className="inline-flex items-center gap-2 bg-cream border border-gold/30 text-navy font-semibold text-[0.95rem] px-5 py-2.5 rounded-full hover:bg-gold/10 hover:border-gold transition-all no-underline group"
        >
          Lihat semua produk {active.icon} {active.label}
          <span className="text-gold group-hover:translate-x-1 transition-transform inline-block">→</span>
        </Link>
      </div>

      {/* ALL CLUSTER QUICK LINKS */}
      <div className="mt-12 pt-10 border-t border-black/6">
        <div className="text-xs font-bold tracking-[2.5px] uppercase text-[#94A3B8] mb-5">Semua Cluster Produk</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {Object.entries(PILLAR_HREFS).map(([id, href]) => {
            const cluster = CLUSTERS.find(c => c.id === id)!;
            return (
              <Link
                key={id}
                href={href}
                className="flex flex-col items-center gap-2 p-4 bg-cream rounded-xl border border-black/6 hover:border-gold/40 hover:bg-gold/5 transition-all no-underline group text-center"
              >
                <span className="text-2xl">{cluster.icon}</span>
                <span className="text-navy text-xs font-semibold leading-tight group-hover:text-gold transition-colors">{cluster.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
