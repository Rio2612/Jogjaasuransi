"use client";
import { useState } from "react";
import { CLUSTERS } from "@/lib/data";

export default function Produk() {
  const [activeId, setActiveId] = useState("kendaraan");
  const active = CLUSTERS.find(c => c.id === activeId)!;

  return (
    <section id="produk" className="py-[5.5rem] px-[5vw] bg-white">
      <div className="mb-12">
        <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Unggulan</div>
        <h2 className="font-heading text-[clamp(1.9rem,3vw,2.9rem)] leading-[1.22] text-navy">Solusi Perlindungan<br />untuk Setiap Kebutuhan</h2>
        <p className="text-[0.95rem] leading-[1.8] text-[#64748B] max-w-[560px] mt-3">Kami menyediakan seluruh lini produk asuransi kerugian — dari kebutuhan personal sehari-hari hingga perlindungan skala industri di Yogyakarta.</p>
      </div>

      <div className="flex gap-2 flex-wrap mb-10">
        {CLUSTERS.map(c => (
          <button
            key={c.id}
            onClick={() => setActiveId(c.id)}
            className={`px-[18px] py-2 rounded-full border text-[0.82rem] font-semibold cursor-pointer transition-all ${
              activeId === c.id ? "bg-navy text-white border-navy" : "bg-white text-[#64748B] border-black/10 hover:bg-navy hover:text-white hover:border-navy"
            }`}
          >
            {c.icon} {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {active.produk.map(p => (
          <div key={p.name} className="border border-black/7 rounded-card p-6 hover:shadow-[0_10px_35px_rgba(13,33,55,0.1)] hover:-translate-y-1 hover:border-gold/25 transition-all relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <div className="text-[1.6rem] mb-3">{p.icon}</div>
            <div className="font-heading text-[1.05rem] font-bold text-navy mb-2">{p.name}</div>
            <p className="text-[0.85rem] leading-[1.65] text-[#64748B]">{p.desc}</p>
            <a href={p.href} className="inline-flex items-center gap-1 text-gold text-[0.82rem] font-semibold mt-3 hover:gap-2 transition-all no-underline">
              {p.href.startsWith("#") ? "Hitung premi →" : "Konsultasi →"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
