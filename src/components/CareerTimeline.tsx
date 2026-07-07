import Image from "next/image";

type Stop = {
  role: string;
  org: string;
  period: string;
  duration: string;
  location: string;
  desc: string;
  logo?: string;
  current?: boolean;
};

const stops: Stop[] = [
  {
    role: "Account Officer",
    org: "PT Asuransi Umum Bumida 1967",
    period: "Feb 2013 – Agu 2016",
    duration: "3 thn 7 bln",
    location: "Batam, Kepulauan Riau",
    desc: "Mengawali karier langsung di lapangan — akuisisi nasabah dan pemahaman risiko dasar industri asuransi kerugian.",
    logo: "/logos/bumida.png",
  },
  {
    role: "Sales & Marketing Specialist",
    org: "PT Asuransi Purna Artanugraha (ASPAN)",
    period: "Sep 2016 – Agu 2021",
    duration: "4 thn 11 bln",
    location: "Bengkulu",
    desc: "Memperdalam sisi pemasaran produk asuransi kerugian lintas segmen, dari ritel hingga korporat.",
    logo: "/logos/aspan.png",
  },
  {
    role: "Branch Manager",
    org: "PT Asuransi Purna Artanugraha (ASPAN)",
    period: "Sep 2021 – Agu 2022",
    duration: "11 bln",
    location: "Bengkulu",
    desc: "Memimpin operasional cabang — target penjualan, manajemen tim, hingga penyelesaian klaim nasabah.",
    logo: "/logos/aspan.png",
  },
  {
    role: "Praktisi Asuransi Digital",
    org: "Asuransi Jogja",
    period: "Agu 2022 – Sekarang",
    duration: "4 thn",
    location: "Yogyakarta",
    desc: "Melanjutkan pengalaman lapangan ke ranah digital — membantu klien Jogja memilih & mengurus polis secara transparan.",
    current: true,
  },
];

export default function CareerTimeline() {
  return (
    <div className="relative">
      {/* garis vertikal */}
      <div
        className="absolute left-8 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-[#C8963E] via-[#E8B96A]/60 to-[#F5D99A]/30"
        aria-hidden="true"
      />

      <ol className="space-y-10">
        {stops.map((s) => (
          <li key={s.role + s.period} className="relative pl-20">
            {/* node */}
            <div
              className={`absolute left-0 top-0 w-16 h-16 rounded-full flex items-center justify-center overflow-hidden border-4 ${
                s.current
                  ? "bg-navy border-[#C8963E]"
                  : "bg-white border-[#C8963E]"
              } shadow-md`}
            >
              {s.logo ? (
                <Image
                  src={s.logo}
                  alt={`Logo ${s.org}`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              ) : (
                <span className="text-[#E8B96A] font-heading font-bold text-lg">R</span>
              )}
            </div>

            <div
              className={`rounded-card p-5 border ${
                s.current
                  ? "bg-navy border-[#E8B96A]/40"
                  : "bg-cream border-black/5"
              }`}
            >
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3
                  className={`font-heading font-bold text-lg ${
                    s.current ? "text-white" : "text-navy"
                  }`}
                >
                  {s.role}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#C8963E] text-white">
                  {s.duration}
                </span>
              </div>
              <p className={`text-sm font-medium mb-1 ${s.current ? "text-[#F5D99A]" : "text-navy2"}`}>
                {s.org}
              </p>
              <p className={`text-xs mb-2 ${s.current ? "text-white/50" : "text-[#94a3b8]"}`}>
                {s.period} · {s.location}
              </p>
              <p className={`text-sm leading-relaxed ${s.current ? "text-white/80" : "text-[#64748B]"}`}>
                {s.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
