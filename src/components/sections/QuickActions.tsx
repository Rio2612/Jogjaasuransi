import { KONTAK } from "@/lib/data";

/** Kartu aksi cepat di homepage (menggantikan tombol WhatsApp & Hitung Premi Mobil yang sebelumnya ada di Hero). */
export default function QuickActions() {
  return (
    <section id="aksi-cepat" aria-label="Konsultasi dan kalkulator premi" className="bg-cream pb-10 px-[5vw]">
      <div className="max-w-4xl mx-auto bg-white border border-gold/30 rounded-card shadow-[0_12px_40px_rgba(13,33,55,0.08)] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-goldtext mb-1">Mulai dari sini</div>
          <h2 className="font-heading text-navy font-bold text-[1.25rem] leading-snug">
            Konsultasi gratis atau hitung estimasi premi mobil Anda
          </h2>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a
            href={`https://wa.me/${KONTAK.wa}`}
            className="bg-gold text-navy px-6 py-3 rounded-lg font-bold text-[0.92rem] hover:bg-gold2 hover:-translate-y-0.5 transition-all no-underline"
          >
            💬 Konsultasi via WhatsApp
          </a>
          <a
            href="#kalkulator"
            className="border border-navy/25 text-navy px-6 py-3 rounded-lg font-semibold text-[0.92rem] hover:border-gold hover:bg-gold/10 transition-all no-underline"
          >
            🧮 Hitung Premi Mobil
          </a>
        </div>
      </div>
    </section>
  );
}
