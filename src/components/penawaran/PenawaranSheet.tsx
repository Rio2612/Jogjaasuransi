"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  PENAWARAN,
  buildPesan,
  compactRupiah,
  formatDigits,
  initialValues,
  isVisible,
  missingFields,
  penawaranWaUrl,
  validHp,
  type ClusterKey,
  type FieldDef,
} from "@/lib/penawaran";

interface Props {
  cluster: ClusterKey;
  defaultType: string;
  /** Path halaman asal, ikut dikirim di pesan WhatsApp. */
  path: string;
  onClose: () => void;
}

const inputCls =
  "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-[#64748b] outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20 aria-[invalid=true]:border-red-500";

const goldBtn =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-gold2 hover:shadow-lg active:translate-y-0 motion-reduce:transition-none";
const ghostBtn =
  "inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-gold";

function Label({ htmlFor, children, optional }: { htmlFor?: string; children: React.ReactNode; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 flex flex-wrap items-center gap-x-2 text-xs font-bold uppercase tracking-wider text-[#475569]">
      {children}
      {optional && <span className="font-medium normal-case tracking-normal text-[#64748b]">(opsional)</span>}
    </label>
  );
}

function ErrorText({ id, children }: { id: string; children?: string }) {
  if (!children) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
      {children}
    </p>
  );
}

/** Satu kolom form, dirender sesuai jenisnya (teks, angka, rupiah, periode, pilihan, segmented). */
function FieldControl({
  f,
  id,
  values,
  set,
  invalid,
  describedBy,
}: {
  f: FieldDef;
  id: string;
  values: Record<string, string>;
  set: (key: string, v: string) => void;
  invalid: boolean;
  describedBy?: string;
}) {
  const v = values[f.key] ?? "";
  const aria = { "aria-invalid": invalid, "aria-describedby": describedBy } as const;
  const digits = (s: string) => s.replace(/\D/g, "");

  switch (f.kind) {
    case "text":
      return <input id={id} type="text" value={v} onChange={(e) => set(f.key, e.target.value)} placeholder={f.placeholder} className={inputCls} {...aria} />;
    case "number":
      return (
        <div className="relative">
          <input
            id={id}
            type="text"
            inputMode="numeric"
            value={v}
            onChange={(e) => set(f.key, digits(e.target.value))}
            placeholder={f.placeholder}
            className={`${inputCls} ${f.suffix ? "pr-16" : ""}`}
            {...aria}
          />
          {f.suffix && <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs font-semibold text-[#64748b]">{f.suffix}</span>}
        </div>
      );
    case "money": {
      const hint = compactRupiah(v);
      return (
        <div>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm font-bold text-[#64748b]">Rp</span>
            <input
              id={id}
              type="text"
              inputMode="numeric"
              value={formatDigits(v)}
              onChange={(e) => set(f.key, digits(e.target.value))}
              placeholder={f.placeholder}
              className={`${inputCls} pl-11`}
              {...aria}
            />
          </div>
          {hint && <p className="mt-1 text-xs font-semibold text-goldtext">{hint}</p>}
        </div>
      );
    }
    case "period": {
      const unit = values[`${f.key}_unit`] ?? "month";
      return (
        <div className="flex gap-2">
          <input
            id={id}
            type="text"
            inputMode="numeric"
            value={v}
            onChange={(e) => set(f.key, digits(e.target.value))}
            placeholder={f.placeholder}
            className={inputCls}
            {...aria}
          />
          <div role="group" aria-label="Satuan periode" className="flex shrink-0 overflow-hidden rounded-xl border border-black/15 bg-white">
            {(
              [
                ["month", "Bulan"],
                ["day", "Hari"],
              ] as const
            ).map(([u, text]) => (
              <button
                key={u}
                type="button"
                aria-pressed={unit === u}
                onClick={() => set(`${f.key}_unit`, u)}
                className={`px-3 text-xs font-bold transition ${unit === u ? "bg-navy text-white" : "text-navy hover:bg-gold/10"}`}
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      );
    }
    case "select":
      return (
        <select id={id} value={v} onChange={(e) => set(f.key, e.target.value)} className={inputCls} {...aria}>
          <option value="">{f.placeholder}</option>
          {f.options.map((op) => (
            <option key={op.value} value={op.value}>
              {op.label}
            </option>
          ))}
        </select>
      );
    case "segmented":
      return (
        <div id={id} role="radiogroup" aria-label={f.label} className="grid grid-cols-2 gap-2">
          {f.options.map((op) => {
            const on = v === op.value;
            return (
              <button
                key={op.value}
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => set(f.key, op.value)}
                className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${on ? "border-navy bg-navy text-white" : "border-black/15 bg-white text-navy hover:border-gold"}`}
              >
                {op.label}
              </button>
            );
          })}
        </div>
      );
  }
}

/**
 * Popup "Minta Penawaran" versi Jogja: panel naik dari bawah di HP, dua langkah
 * (1. Kebutuhan, 2. Data & Analisa), jenis produk berupa kartu pilihan, checklist dokumen
 * yang bisa dibuka, dan hasil akhirnya pesan WhatsApp yang terisi otomatis.
 */
export default function PenawaranSheet({ cluster: key, defaultType, path, onClose }: Props) {
  const c = PENAWARAN[key];
  const uid = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState<1 | 2>(1);
  const [type, setType] = useState(c.types.some((t) => t.key === defaultType) ? defaultType : c.types[c.types.length - 1].key);
  const [values, setValues] = useState<Record<string, string>>(() => initialValues(c));
  const [targetDate, setTargetDate] = useState("");
  const [client, setClient] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [flags, setFlags] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [docsOpen, setDocsOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [waUrl, setWaUrl] = useState<string | null>(null);

  const fields = useMemo(() => c.fields.filter((f) => isVisible(f, type)), [c, type]);
  const visibleFlags = useMemo(() => c.flags.filter((f) => isVisible(f, type)), [c, type]);
  const docs = useMemo(
    () => ({
      general: c.general.filter((d) => isVisible(d, type)),
      specific: c.specific[type] ?? [],
    }),
    [c, type]
  );
  const companyOptional = !!c.companyOptionalFor?.includes(type);
  const typeMeta = c.types.find((t) => t.key === type);

  const setVal = (k: string, v: string) => {
    setValues((prev) => ({ ...prev, [k]: v }));
    setErrors((prev) => (prev[k] ? { ...prev, [k]: "" } : prev));
  };
  const toggleFlag = (k: string) => setFlags((prev) => (prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]));

  // Kunci scroll halaman; kembalikan fokus ke tombol pemicu saat ditutup.
  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      trigger?.focus?.();
    };
  }, []);

  // Fokus ke isi langkah saat langkah berganti, dan gulir panel ke atas.
  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0 });
    bodyRef.current?.querySelector<HTMLElement>("input, select, textarea, button[role='radio']")?.focus({ preventScroll: true });
  }, [step, waUrl]);

  // ESC menutup; Tab dijaga tetap di dalam dialog.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab" || !panelRef.current) return;
      const f = panelRef.current.querySelectorAll<HTMLElement>("button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])");
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const focusFirstInvalid = () => requestAnimationFrame(() => panelRef.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus());

  const next = () => {
    const err: Record<string, string> = {};
    for (const k of missingFields(c, type, values)) err[k] = "Wajib diisi.";
    setErrors(err);
    if (Object.keys(err).length) return focusFirstInvalid();
    setStep(2);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!name.trim()) err.name = "Isi nama Anda.";
    if (!companyOptional && !company.trim()) err.company = `Isi ${c.copy.companyLabel.toLowerCase()}.`;
    if (!validHp(phone)) err.phone = "Nomor WhatsApp belum valid (contoh: 08123456789).";
    setErrors(err);
    if (Object.keys(err).length) return focusFirstInvalid();
    const url = penawaranWaUrl(buildPesan(key, { type, values, name, company, phone, targetDate, client, flags, note }, path));
    setWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const titleId = `${uid}-title`;
  const err = (k: string) => errors[k] || undefined;
  const errId = (k: string) => `${uid}-${k}-err`;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-navy/70 sm:items-center sm:p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div ref={panelRef} role="dialog" aria-modal="true" aria-labelledby={titleId} className="max-h-[94vh] w-full overflow-y-auto rounded-t-3xl bg-cream shadow-2xl sm:max-w-xl sm:rounded-3xl">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-navy px-5 pb-4 pt-3 sm:px-7 sm:pt-5">
          <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-white/25 sm:hidden" aria-hidden="true" />
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[2px] text-gold2">
                {c.icon} Minta Penawaran
              </p>
              <h2 id={titleId} className="mt-1 font-heading text-lg font-bold leading-snug text-white sm:text-xl">
                {c.judul}
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-white/70">{c.subjudul}</p>
            </div>
            <button type="button" onClick={onClose} aria-label="Tutup" className="rounded-lg px-2.5 py-1 text-2xl leading-none text-white/80 transition hover:bg-white/10 hover:text-white">
              ×
            </button>
          </div>
          {!waUrl && (
            <ol className="mt-4 flex items-center gap-3 text-xs font-bold" aria-label="Langkah pengisian">
              {(
                [
                  [1, "Kebutuhan"],
                  [2, "Data & Analisa"],
                ] as const
              ).map(([n, text]) => (
                <li key={n} aria-current={step === n ? "step" : undefined} className={`flex flex-1 items-center gap-2 ${step >= n ? "text-white" : "text-white/50"}`}>
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] ${step >= n ? "bg-gold text-navy" : "bg-white/15 text-white/70"}`}>{n}</span>
                  <span>{text}</span>
                  <span className={`h-0.5 flex-1 rounded-full ${n === 1 ? (step > 1 ? "bg-gold" : "bg-white/20") : "hidden"}`} aria-hidden="true" />
                </li>
              ))}
            </ol>
          )}
        </div>

        <div ref={bodyRef}>
          {waUrl ? (
            <div className="px-5 py-10 text-center sm:px-7">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-2xl text-goldtext" aria-hidden="true">
                ✓
              </div>
              <p className="font-heading text-lg font-bold text-navy">WhatsApp sudah dibuka</p>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-[#475569]">
                Pesan permintaan penawaran sudah terisi otomatis. Tinggal tekan kirim di WhatsApp, lalu kami balas untuk analisa awal.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className={`${goldBtn} no-underline`}>
                  Buka WhatsApp lagi
                </a>
                <button type="button" onClick={onClose} className={ghostBtn}>
                  Tutup
                </button>
              </div>
            </div>
          ) : step === 1 ? (
            <div className="space-y-6 px-5 py-6 sm:px-7">
              {/* Jenis produk */}
              <fieldset>
                <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-[#475569]">{c.typeLegend}</legend>
                <div role="radiogroup" aria-label={c.typeLegend} className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {c.types.map((t) => {
                    const on = t.key === type;
                    return (
                      <button
                        key={t.key}
                        type="button"
                        role="radio"
                        aria-checked={on}
                        onClick={() => {
                          setType(t.key);
                          setErrors({});
                        }}
                        className={`rounded-xl border p-3 text-left transition ${on ? "border-navy bg-navy text-white shadow-md" : "border-black/15 bg-white text-navy hover:border-gold"}`}
                      >
                        <span className="block text-sm font-bold">{t.label}</span>
                        <span className={`mt-0.5 block text-xs leading-snug ${on ? "text-white/75" : "text-[#475569]"}`}>{t.hint}</span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* Kolom sesuai jenis */}
              {fields.length > 0 && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {fields.map((f) => {
                    const wide = f.kind === "text" || f.kind === "money" || f.kind === "segmented" || f.kind === "period";
                    const id = `${uid}-${f.key}`;
                    return (
                      <div key={f.key} className={wide ? "sm:col-span-2" : ""}>
                        <Label htmlFor={f.kind === "segmented" ? undefined : id} optional={f.optional}>
                          {f.label}
                        </Label>
                        <FieldControl f={f} id={id} values={values} set={setVal} invalid={!!err(f.key)} describedBy={err(f.key) ? errId(f.key) : undefined} />
                        <ErrorText id={errId(f.key)}>{err(f.key)}</ErrorText>
                      </div>
                    );
                  })}
                  <div className="sm:col-span-2">
                    <Label htmlFor={`${uid}-date`} optional>
                      {c.copy.dateLabel}
                    </Label>
                    <input id={`${uid}-date`} type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} className={inputCls} />
                  </div>
                </div>
              )}

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button type="button" onClick={onClose} className={ghostBtn}>
                  Batal
                </button>
                <button type="button" onClick={next} className={goldBtn}>
                  Lanjut →
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-6 px-5 py-6 sm:px-7">
              {/* Ringkasan pilihan */}
              <div className="flex items-center justify-between gap-3 rounded-xl border border-gold/30 bg-white px-4 py-3">
                <p className="text-sm text-navy">
                  <span className="font-bold">{typeMeta?.label}</span>
                  <span className="text-[#475569]"> · {c.nama}</span>
                </p>
                <button type="button" onClick={() => setStep(1)} className="shrink-0 text-xs font-bold text-goldtext underline underline-offset-2">
                  Ubah
                </button>
              </div>

              {/* Data pemohon */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label htmlFor={`${uid}-client`} optional>
                    {c.copy.clientLabel.replace(/\s*\(opsional\)/i, "")}
                  </Label>
                  <input id={`${uid}-client`} type="text" value={client} onChange={(e) => setClient(e.target.value)} placeholder={c.copy.clientPh} className={inputCls} />
                </div>
                <div>
                  <Label htmlFor={`${uid}-name`}>Nama lengkap</Label>
                  <input
                    id={`${uid}-name`}
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrors((p) => ({ ...p, name: "" }));
                    }}
                    aria-invalid={!!err("name")}
                    aria-describedby={err("name") ? errId("name") : undefined}
                    className={inputCls}
                  />
                  <ErrorText id={errId("name")}>{err("name")}</ErrorText>
                </div>
                <div>
                  <Label htmlFor={`${uid}-phone`}>No. WhatsApp</Label>
                  <input
                    id={`${uid}-phone`}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setErrors((p) => ({ ...p, phone: "" }));
                    }}
                    placeholder="08xxxxxxxxxx"
                    aria-invalid={!!err("phone")}
                    aria-describedby={err("phone") ? errId("phone") : undefined}
                    className={inputCls}
                  />
                  <ErrorText id={errId("phone")}>{err("phone")}</ErrorText>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor={`${uid}-company`} optional={companyOptional}>
                    {c.copy.companyLabel}
                  </Label>
                  <input
                    id={`${uid}-company`}
                    type="text"
                    autoComplete="organization"
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value);
                      setErrors((p) => ({ ...p, company: "" }));
                    }}
                    aria-invalid={!!err("company")}
                    aria-describedby={err("company") ? errId("company") : undefined}
                    className={inputCls}
                  />
                  <ErrorText id={errId("company")}>{err("company")}</ErrorText>
                </div>
              </div>

              {/* Bahan analisa awal */}
              {visibleFlags.length > 0 && (
                <fieldset>
                  <legend className="text-xs font-bold uppercase tracking-wider text-[#475569]">Bahan analisa awal</legend>
                  <p className="mb-2 mt-1 text-xs leading-relaxed text-[#475569]">Centang yang sesuai. Semakin lengkap informasinya, semakin cepat kami bisa memberi gambaran awal.</p>
                  <div className="grid grid-cols-1 gap-2">
                    {visibleFlags.map((fl) => {
                      const on = flags.includes(fl.key);
                      return (
                        <label
                          key={fl.key}
                          className={`flex cursor-pointer items-start gap-3 rounded-xl border px-3.5 py-2.5 text-sm transition ${on ? "border-gold bg-gold/10 text-navy" : "border-black/10 bg-white text-[#334155] hover:border-gold/60"}`}
                        >
                          <input type="checkbox" checked={on} onChange={() => toggleFlag(fl.key)} className="mt-0.5 h-4 w-4 shrink-0 accent-gold" />
                          <span className="leading-snug">{fl.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              )}

              {/* Checklist dokumen */}
              {(docs.general.length > 0 || docs.specific.length > 0) && (
                <div className="rounded-xl border border-black/10 bg-white">
                  <button
                    type="button"
                    aria-expanded={docsOpen}
                    aria-controls={`${uid}-docs`}
                    onClick={() => setDocsOpen((o) => !o)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                  >
                    <span>
                      <span className="block text-sm font-bold text-navy">Dokumen yang disiapkan</span>
                      <span className="block text-xs text-[#475569]">Tidak wajib dikirim sekarang, tapi mempercepat proses penerbitan.</span>
                    </span>
                    <span aria-hidden="true" className={`text-lg text-goldtext transition-transform ${docsOpen ? "rotate-180" : ""}`}>
                      ⌄
                    </span>
                  </button>
                  {docsOpen && (
                    <div id={`${uid}-docs`} className="space-y-4 border-t border-black/10 px-4 py-4">
                      {[
                        ["Dokumen umum", docs.general],
                        [`Khusus ${typeMeta?.label ?? ""}`, docs.specific],
                      ].map(([title, list]) =>
                        (list as typeof docs.general).length ? (
                          <div key={title as string}>
                            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#475569]">{title as string}</p>
                            <ul className="space-y-2">
                              {(list as typeof docs.general).map((d) => (
                                <li key={d.doc} className="flex items-start gap-2.5 text-sm">
                                  <span className={`mt-0.5 shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${d.must ? "bg-navy text-white" : "bg-black/5 text-[#475569]"}`}>{d.must ? "Wajib" : "Disarankan"}</span>
                                  <span>
                                    <span className="font-semibold text-navy">{d.doc}</span>
                                    <span className="block text-xs leading-snug text-[#475569]">{d.note}</span>
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null
                      )}
                      <p className="text-xs italic leading-relaxed text-[#475569]">{c.disclaimer}</p>
                    </div>
                  )}
                </div>
              )}

              <div>
                <Label htmlFor={`${uid}-note`} optional>
                  Catatan tambahan
                </Label>
                <textarea id={`${uid}-note`} rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder={c.copy.notePh} className={inputCls} />
              </div>

              <div className="space-y-3">
                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <button type="button" onClick={() => setStep(1)} className={ghostBtn}>
                    ← Kembali
                  </button>
                  <button type="submit" className={goldBtn}>
                    Kirim via WhatsApp
                  </button>
                </div>
                <p className="text-xs leading-relaxed text-[#475569] sm:text-right">Data dikirim langsung lewat WhatsApp dan tidak disimpan di server website.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
