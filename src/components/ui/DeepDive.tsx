import type { DeepDiveContent } from "@/lib/deepDive";

/** Bagian konten pendalaman (heading, paragraf, daftar, contoh skenario) dengan gaya konsisten. */
export default function DeepDive({ content, variant = "article" }: { content: DeepDiveContent; variant?: "article" | "section" }) {
  const body = (
    <>
      {content.kicker && <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">{content.kicker}</div>}
      <h2 className="font-heading text-[clamp(1.4rem,2.2vw,1.9rem)] text-navy leading-[1.25] mb-5">{content.title}</h2>
      {content.intro && <p className="text-base leading-[1.85] text-[#475569] mb-6">{content.intro}</p>}
      {content.sections.map((s) => (
        <div key={s.h} className="mb-8">
          <h3 className="font-heading text-navy font-bold text-[1.05rem] mb-3">{s.h}</h3>
          {s.p?.map((t, i) => (
            <p key={i} className="text-base leading-[1.85] text-[#475569] mb-4">{t}</p>
          ))}
          {s.ul && (
            <ul className="list-disc pl-6 mb-4 space-y-2">
              {s.ul.map((t, i) => (
                <li key={i} className="text-base leading-[1.75] text-[#475569]">{t}</li>
              ))}
            </ul>
          )}
          {s.note && (
            <div className="bg-gold/8 border border-gold/25 rounded-card p-5 mb-2">
              <div className="text-gold text-xs font-bold uppercase tracking-wider mb-1">{s.noteLabel ?? "Contoh Skenario (Ilustrasi)"}</div>
              <p className="text-sm leading-[1.8] text-[#475569]">{s.note}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );

  if (variant === "section") {
    return (
      <section className="py-16 px-[5vw] bg-white">
        <div className="max-w-3xl mx-auto">{body}</div>
      </section>
    );
  }
  return <div className="mb-10">{body}</div>;
}
