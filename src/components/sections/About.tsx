import Image from "next/image";
import { KONTAK } from "@/lib/data";
import CareerTimeline from "@/components/CareerTimeline";
import LinkedInCard from "@/components/LinkedInCard";

export default function About() {
  return (
    <section id="about" className="py-[5.5rem] px-[5vw] bg-cream">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[4.5rem] items-center">

        {/* FOTO */}
        <div className="relative rounded-[20px] overflow-hidden h-[460px] bg-navy shadow-[0_24px_64px_rgba(13,33,55,0.18)]">
          {/* Gradient overlay bawah agar nama terbaca */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent z-10" />

          <Image
            src="/rio-mardiansyah.jpg"
            alt="Rio Mardiansyah – Praktisi Asuransi Yogyakarta"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />

          {/* Badge nama di atas foto */}
          <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-6 pt-10">
            <div className="font-heading text-white text-[1.3rem] font-bold leading-tight">Rio Mardiansyah</div>
            <div className="text-gold2 text-sm font-medium mt-0.5">Praktisi Asuransi</div>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">📍 Yogyakarta, DIY</span>
              <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full">9+ Tahun</span>
            </div>
          </div>
        </div>

        {/* TEKS */}
        <div>
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-goldtext mb-2">Tentang Praktisi</div>
          <h2 className="font-heading text-[clamp(1.9rem,3vw,2.9rem)] leading-[1.22] text-navy">
            Kenali Rio Mardiansyah,<br />Praktisi Asuransi Anda
          </h2>
          <p className="text-lg leading-[1.85] text-[#475569] max-w-[560px] mt-3">
            Lebih dari sembilan tahun berkecimpung di dunia asuransi kerugian — dari Account Officer hingga Branch Manager — mengajarkan Rio satu hal: klien butuh mitra yang berpihak pada mereka, bukan agen yang sekadar mengejar komisi penjualan polis.
          </p>
          <ul className="flex flex-col gap-3 mt-5">
            {[
              "9+ tahun pengalaman langsung di lini asuransi kerugian, dari Account Officer hingga Branch Manager",
              "Klien dari kalangan pribadi, pelaku usaha kecil, hingga perusahaan skala menengah",
              "Familiar dengan hampir semua produk asuransi kerugian — dari kendaraan hingga surety bond",
              "Setiap konsultasi disampaikan apa adanya, termasuk hal-hal yang sering disembunyikan agen lain",
              "Hadir mendampingi klien tidak hanya saat membeli, tapi juga saat proses klaim berlangsung",
            ].map(li => (
              <li key={li} className="flex gap-2.5 items-start text-[1rem] leading-[1.75] text-[#475569]">
                <span className="text-goldtext font-bold flex-shrink-0 mt-0.5">✓</span>{li}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 mt-6 pt-5 border-t border-black/8 mb-5">
            <a href={`https://wa.me/${KONTAK.wa}`} className="flex items-center gap-2 text-[1rem] text-navy2 font-medium no-underline hover:text-gold transition-colors">
              📱 {KONTAK.waDisplay} (WhatsApp)
            </a>
            <a href={`mailto:${KONTAK.email}`} className="flex items-center gap-2 text-[1rem] text-navy2 font-medium no-underline hover:text-gold transition-colors">
              ✉️ {KONTAK.email}
            </a>
            <span className="flex items-center gap-2 text-[1rem] text-navy2 font-medium">
              📍 {KONTAK.kota}
            </span>
          </div>
          <LinkedInCard />
        </div>

      </div>

      {/* PERJALANAN KARIER */}
      <div className="max-w-3xl mx-auto mt-24">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-goldtext mb-2">Perjalanan Karier</div>
          <h2 className="font-heading text-[clamp(1.7rem,2.6vw,2.4rem)] leading-[1.22] text-navy mb-3">
            Dari Account Officer hingga Praktisi Digital
          </h2>
          <p className="text-[#475569] max-w-xl mx-auto">
            Setiap jenjang karier ini membentuk cara Rio memahami risiko dan mendampingi klien hari ini.
          </p>
        </div>
        <CareerTimeline />
      </div>
    </section>
  );
}
