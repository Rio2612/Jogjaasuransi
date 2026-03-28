import { KONTAK } from "@/lib/data";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 px-[5vw] bg-navy text-center relative overflow-hidden">
      <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
      <div className="relative z-10">
        <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold2 mb-3">Hubungi Kami</div>
        <h2 className="font-heading text-[clamp(1.9rem,3vw,2.9rem)] leading-[1.22] text-white">Siap Mendapat<br />Perlindungan yang Tepat?</h2>
        <p className="text-white/90 text-base leading-[1.78] max-w-[540px] mx-auto mt-3 mb-10">
          Konsultasikan kebutuhan asuransi kerugian Anda sekarang. Gratis, tanpa tekanan, dan kami bantu temukan solusi terbaik — untuk pribadi maupun bisnis Anda di Yogyakarta.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-[13px] rounded-lg font-bold text-[0.92rem] flex items-center gap-2 no-underline hover:opacity-90 hover:-translate-y-0.5 transition-all">
            💬 Chat WhatsApp Sekarang
          </a>
          <a href={`mailto:${KONTAK.email}`} className="bg-white/8 border border-white/20 text-white px-7 py-[13px] rounded-lg font-medium text-[0.92rem] flex items-center gap-2 no-underline hover:bg-white/12 transition-all">
            ✉️ {KONTAK.email}
          </a>
        </div>
      </div>
    </section>
  );
}
