import Link from "next/link";
import LinkedInCard from "@/components/LinkedInCard";
import PenawaranKesehatanModal from "@/components/kesehatan/PenawaranKesehatanModal";

export const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mt-10 mb-4">{children}</h2>
);
export const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[#475569] text-base leading-[1.85] mb-4">{children}</p>
);
export const UL = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-6 mb-5 space-y-1.5">
    {items.map((t) => <li key={t} className="text-[#475569] text-base leading-[1.75]">{t}</li>)}
  </ul>
);
export const Box = ({ label, children, tone = "gold" }: { label: string; children: React.ReactNode; tone?: "gold" | "red" }) => (
  <div className={`rounded-card p-5 my-6 border ${tone === "red" ? "bg-red-50 border-red-200" : "bg-gold/8 border-gold/25"}`}>
    <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${tone === "red" ? "text-red-700" : "text-gold"}`}>{label}</div>
    <div className="text-sm leading-[1.75] text-[#475569]">{children}</div>
  </div>
);
export const Tabel = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="overflow-x-auto my-6">
    <table className="w-full min-w-[480px] text-left text-sm">
      <thead className="bg-navy text-white"><tr>{head.map((h) => <th key={h} className="px-3 py-2 font-semibold">{h}</th>)}</tr></thead>
      <tbody>{rows.map((r, i) => (
        <tr key={i} className="border-b border-black/10">{r.map((c, j) => <td key={j} className={`px-3 py-2 align-top ${j === 0 ? "font-bold text-navy" : "text-[#475569]"}`}>{c}</td>)}</tr>
      ))}</tbody>
    </table>
  </div>
);

type Related = { href: string; icon: string; judul: string; desc: string };
interface Props {
  schema: object;
  crumb: string;
  badge: string;
  title: React.ReactNode;
  lead: string;
  meta: string;
  sumber: { t: string; u: string }[];
  related: Related[];
  ctaTitle: string;
  children: React.ReactNode;
}

export default function ArtikelShell({ schema, crumb, badge, title, lead, meta, sumber, related, ctaTitle, children }: Props) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb" className="bg-cream border-b border-black/8 px-[5vw] py-3">
        <div className="flex items-center gap-2 text-sm text-[#475569] flex-wrap">
          <Link href="/" className="hover:text-gold no-underline">Beranda</Link><span className="text-gold/60">›</span>
          <Link href="/artikel" className="hover:text-gold no-underline">Artikel</Link><span className="text-gold/60">›</span>
          <Link href="/asuransi-kesehatan-karyawan" className="hover:text-gold no-underline">Kesehatan Karyawan</Link><span className="text-gold/60">›</span>
          <span className="text-navy font-semibold">{crumb}</span>
        </div>
      </nav>

      <section className="bg-navy py-16 px-[5vw]">
        <div className="max-w-3xl">
          <Link href="/asuransi-kesehatan-karyawan" className="inline-flex bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline mb-5">🏥 {badge}</Link>
          <h1 className="font-heading text-[clamp(1.9rem,3.5vw,2.9rem)] text-white leading-[1.2] mb-5">{title}</h1>
          <p className="text-white/80 text-base leading-[1.85] max-w-[560px] mb-6">{lead}</p>
          <div className="text-xs text-white/60">✍️ Rio Mardiansyah, Praktisi Asuransi · {meta}</div>
        </div>
      </section>

      <article className="py-14 px-[5vw] max-w-[780px] mx-auto">
        {children}

        <div className="bg-gold/8 border border-gold/25 rounded-card p-6 my-10 text-center">
          <p className="font-heading text-navy font-bold mb-2">{ctaTitle}</p>
          <p className="text-sm text-[#475569] mb-4">Isi jumlah peserta dan paket yang diminati. Penawaran dikirim via WhatsApp atau email.</p>
          <PenawaranKesehatanModal />
        </div>

        <div className="border-t border-black/8 pt-8 mt-10">
          <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-4">Tentang Penulis</p>
          <LinkedInCard />
          <p className="text-sm text-[#475569] leading-relaxed mt-4">
            Rio Mardiansyah adalah praktisi asuransi independen di Yogyakarta. Kami membantu pengajuan penawaran Simas Sehat Corporate
            (PT Asuransi Sinar Mas). BPJS Kesehatan adalah program pemerintah dan tidak kami pasarkan. Artikel ini bersifat edukasi,
            bukan nasihat hukum atau medis; ketentuan yang berlaku mengikuti polis dan peraturan terbaru.
          </p>
        </div>

        <div className="mt-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-3">Sumber</p>
          <ul className="list-disc pl-5 space-y-1">
            {sumber.map((s) => (
              <li key={s.u} className="text-xs text-[#475569]">
                <a href={s.u} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gold">{s.t}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-black/8 pt-8 mt-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-4">Baca Juga</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((a) => (
              <Link key={a.href} href={a.href} className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 no-underline hover:border-gold/40 transition-all group">
                <span className="text-xl">{a.icon}</span>
                <div>
                  <div className="font-semibold text-navy text-sm group-hover:text-gold">{a.judul}</div>
                  <div className="text-xs text-[#475569]">{a.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
