"use client";
import { useState } from "react";
import { FAQS } from "@/lib/data";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="py-[5.5rem] px-[5vw] bg-cream">
      <div className="text-center mb-12">
        <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
        <h2 className="font-heading text-[clamp(1.9rem,3vw,2.9rem)] leading-[1.22] text-navy">Pertanyaan yang<br />Sering Ditanyakan</h2>
      </div>
      <div className="max-w-[700px] mx-auto">
        {FAQS.map((faq, i) => (
          <div key={i} className="border-b border-black/8">
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex justify-between items-center py-4 cursor-pointer font-semibold text-[1rem] text-navy gap-4 text-left bg-transparent border-none"
            >
              {faq.q}
              <span className={`text-gold text-[1.1rem] flex-shrink-0 transition-transform duration-300 ${openIdx === i ? "rotate-45" : ""}`}>+</span>
            </button>
            <div className={`text-[1rem] leading-[1.78] text-[#64748B] overflow-hidden transition-all duration-400 ${openIdx === i ? "max-h-[300px] pb-4" : "max-h-0"}`}>
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
