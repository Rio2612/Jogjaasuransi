"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PENAWARAN, buildPesan, penawaranWaUrl, validHp, type ClusterKey } from "@/lib/penawaran";

interface Props {
  cluster: ClusterKey;
  defaultType: string;
  /** Path halaman asal, ikut dikirim di pesan WhatsApp. */
  path: string;
  onClose: () => void;
}

const inputCls =
  "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-[#64748b] outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20";

function Label({ htmlFor, children, optional }: { htmlFor: string; children: React.ReactNode; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#475569]">
      {children}
      {optional && <span className="font-medium normal-case tracking-normal text-[#64748b]">(opsional)</span>}
    </label>
  );
}

/**
 * Popup "Minta Penawaran" versi Jogja: satu langkah, panel naik dari bawah (bottom sheet) di HP,
 * pilihan jenis berupa chip, hasilnya pesan WhatsApp yang terisi otomatis.
 */
export default function PenawaranSheet({ cluster: key, defaultType, path, onClose }: Props) {
  const c = PENAWARAN[key];
  const uid = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLInputElement>(null);

  const [type, setType] = useState(c.types.some((t) => t.key === defaultType) ? defaultType : c.types[c.types.length - 1].key);
  const [values, setValues] = useState<Record<string, string>>({});
  const [nama, setNama] = useState("");
  const [hp, setHp] = useState("");
  const [catatan, setCatatan] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [waUrl, setWaUrl] = useState<string | null>(null);

  // Kunci scroll halaman, fokus ke bidang pertama, kembalikan fokus ke tombol pemicu saat ditutup.
  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      trigger?.focus?.();
    };
  }, []);

  // ESC menutup; Tab dijaga tetap di dalam dialog.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const f = panelRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled])'
      );
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

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    for (const f of c.fields) if (!f.optional && !(values[f.key] ?? "").trim()) err[f.key] = "Wajib diisi.";
    if (!nama.trim()) err.nama = "Isi nama Anda.";
    if (!validHp(hp)) err.hp = "Nomor WhatsApp belum valid (contoh: 08123456789).";
    setErrors(err);
    if (Object.keys(err).length) {
      const firstBad = panelRef.current?.querySelector<HTMLElement>("[aria-invalid='true']");
      firstBad?.focus();
      return;
    }
    const url = penawaranWaUrl(buildPesan(key, { type, values, nama, hp, catatan }, path));
    setWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const titleId = `${uid}-title`;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-navy/70 sm:items-center sm:p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-cream shadow-2xl sm:max-w-lg sm:rounded-3xl"
      >
        <div className="sticky top-0 z-10 bg-navy px-5 pb-4 pt-3 sm:px-6 sm:pt-5">
          <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-white/25 sm:hidden" aria-hidden="true" />
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[2px] text-gold2">
                {c.icon} {c.nama}
              </p>
              <h2 id={titleId} className="mt-1 font-heading text-xl font-bold text-white">
                Minta Penawaran
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-white/70">
                Isi data singkat. Pesan WhatsApp ke praktisi di Yogyakarta langsung terisi otomatis.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup"
              className="rounded-lg px-2.5 py-1 text-2xl leading-none text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              ×
            </button>
          </div>
        </div>

        {waUrl ? (
          <div className="px-5 py-8 text-center sm:px-6">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-2xl" aria-hidden="true">
              ✓
            </div>
            <p className="font-heading text-lg font-bold text-navy">WhatsApp sudah dibuka</p>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-[#475569]">
              Pesan permintaan penawaran sudah terisi. Tinggal tekan kirim di WhatsApp, lalu kami balas untuk analisa awal.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3 text-sm font-bold text-navy no-underline transition hover:bg-gold2"
              >
                Buka WhatsApp lagi
              </a>
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-black/15 px-6 py-3 text-sm font-semibold text-navy transition hover:border-gold"
              >
                Tutup
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="space-y-5 px-5 py-6 sm:px-6">
            <fieldset>
              <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-[#475569]">{c.typeLegend}</legend>
              <div role="radiogroup" aria-label={c.typeLegend} className="flex flex-wrap gap-2">
                {c.types.map((t) => {
                  const on = t.key === type;
                  return (
                    <button
                      key={t.key}
                      type="button"
                      role="radio"
                      aria-checked={on}
                      onClick={() => setType(t.key)}
                      className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition ${
                        on ? "border-navy bg-navy text-white" : "border-black/15 bg-white text-navy hover:border-gold"
                      }`}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {c.fields.map((f, i) => (
              <div key={f.key}>
                <Label htmlFor={`${uid}-${f.key}`} optional={f.optional}>
                  {f.label}
                </Label>
                <input
                  id={`${uid}-${f.key}`}
                  ref={i === 0 ? firstRef : undefined}
                  type="text"
                  value={values[f.key] ?? ""}
                  onChange={(e) => setValues({ ...values, [f.key]: e.target.value })}
                  placeholder={f.placeholder}
                  aria-invalid={!!errors[f.key]}
                  aria-describedby={errors[f.key] ? `${uid}-${f.key}-err` : undefined}
                  className={inputCls}
                />
                {errors[f.key] && (
                  <p id={`${uid}-${f.key}-err`} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
                    {errors[f.key]}
                  </p>
                )}
              </div>
            ))}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor={`${uid}-nama`}>Nama</Label>
                <input
                  id={`${uid}-nama`}
                  type="text"
                  autoComplete="name"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  aria-invalid={!!errors.nama}
                  aria-describedby={errors.nama ? `${uid}-nama-err` : undefined}
                  className={inputCls}
                />
                {errors.nama && (
                  <p id={`${uid}-nama-err`} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
                    {errors.nama}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor={`${uid}-hp`}>No. WhatsApp</Label>
                <input
                  id={`${uid}-hp`}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  placeholder="08xxxxxxxxxx"
                  aria-invalid={!!errors.hp}
                  aria-describedby={errors.hp ? `${uid}-hp-err` : undefined}
                  className={inputCls}
                />
                {errors.hp && (
                  <p id={`${uid}-hp-err`} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
                    {errors.hp}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor={`${uid}-catatan`} optional>
                Catatan tambahan
              </Label>
              <textarea
                id={`${uid}-catatan`}
                rows={2}
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                placeholder="Kondisi khusus, riwayat klaim, atau pertanyaan Anda"
                className={inputCls}
              />
            </div>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-relaxed text-[#475569] sm:max-w-[16rem]">
                Data dikirim langsung lewat WhatsApp dan tidak disimpan di server website.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-gold2 hover:shadow-lg active:translate-y-0"
              >
                Kirim via WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}
