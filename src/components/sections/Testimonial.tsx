import { TESTIMONI } from "@/lib/data";

export default function Testimonial() {
  return (
    <section id="testimonial" className="py-[5.5rem] px-[5vw] bg-white">
      <div className="text-center mb-12">
        <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Testimoni Klien</div>
        <h2 className="font-heading text-[clamp(1.9rem,3vw,2.9rem)] leading-[1.22] text-navy">Apa Kata Mereka?</h2>
        <p className="text-[0.95rem] leading-[1.8] text-[#64748B] max-w-[560px] mx-auto mt-3">Kepercayaan klien adalah motivasi terbesar kami untuk terus memberikan pelayanan yang terbaik.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {TESTIMONI.map(t => (
          <div key={t.nama} className="bg-cream rounded-card p-7 border border-black/5">
            <div className="text-gold text-[0.85rem] mb-3">★★★★★</div>
            <p className="text-[0.88rem] leading-[1.75] text-[#64748B] italic mb-4">&ldquo;{t.teks}&rdquo;</p>
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center font-heading text-gold text-[0.95rem] font-bold flex-shrink-0">
                {t.inisial}
              </div>
              <div>
                <div className="font-semibold text-[0.88rem] text-navy">{t.nama}</div>
                <div className="text-xs text-[#64748B]">{t.peran}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
