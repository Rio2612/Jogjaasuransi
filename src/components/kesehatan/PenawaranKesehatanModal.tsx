"use client";

import { useEffect, useState } from "react";
import { KONTAK } from "@/lib/data";

const PAKET = [
  { value: "hemat", label: "Hemat — IPS500 + OPS45" },
  { value: "menengah", label: "Menengah — IPS750 + OPS70" },
  { value: "lengkap", label: "Lengkap — IPS1000 + OPS100" },
  { value: "lainnya", label: "Paket lain / mohon dibantu rekomendasi" },
] as const;

type Channel = "wa" | "email";
type Status = "idle" | "loading" | "success" | "error";

interface Props {
  label?: string;
  className?: string;
  /** Paket yang terpilih otomatis saat modal dibuka */
  defaultPaket?: (typeof PAKET)[number]["value"];
}

export default function PenawaranKesehatanModal({
  label = "Minta Penawaran Gratis",
  className = "",
  defaultPaket = "lainnya",
}: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");
  const [paket, setPaket] = useState<string>(defaultPaket);
  const [peserta, setPeserta] = useState("");
  const [channel, setChannel] = useState<Channel>("wa");
  const [kontak, setKontak] = useState("");
  const [nama, setNama] = useState("");
  const [website, setWebsite] = useState(""); // honeypot

  // Kunci scroll body + tutup dengan Esc
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function reset() {
    setStatus("idle");
    setErrMsg("");
    setPeserta("");
    setKontak("");
    setNama("");
    setPaket(defaultPaket);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrMsg("");
    try {
      const res = await fetch("/api/penawaran-kesehatan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama,
          paket,
          peserta: Number(peserta),
          channel,
          kontak,
          website,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrMsg(json.error || "Terjadi kendala. Silakan coba lagi atau hubungi kami via WhatsApp.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrMsg("Koneksi bermasalah. Silakan coba lagi atau hubungi kami via WhatsApp.");
      setStatus("error");
    }
  }

  const input =
    "w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-sm text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30";
  const lbl = "mb-1 block text-xs font-bold text-navy";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          "inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-gold2 hover:shadow-lg " +
          className
        }
      >
        📩 {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-navy/70 p-0 sm:items-center sm:p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="penawaran-title"
        >
          <div
            className="max-h-[92vh] w-full overflow-y-auto rounded-t-2xl bg-cream p-5 shadow-2xl sm:max-w-md sm:rounded-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h2 id="penawaran-title" className="font-heading text-lg font-bold text-navy">
                  Minta Penawaran
                </h2>
                <p className="mt-1 text-xs text-[#475569]">
                  Asuransi Kesehatan Karyawan · Simas Sehat Corporate
                </p>
              </div>
              <button
                type="button"
                aria-label="Tutup"
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-1 text-xl leading-none text-[#475569] hover:bg-black/5"
              >
                ×
              </button>
            </div>

            {status === "success" ? (
              <div className="py-4 text-center">
                <div className="mb-2 text-4xl">✅</div>
                <p className="font-heading font-bold text-navy">Permintaan terkirim</p>
                <p className="mt-2 text-sm text-[#475569]">
                  Kami akan menyiapkan penawaran sesuai jumlah peserta Anda dan mengirimkannya via{" "}
                  {channel === "wa" ? "WhatsApp" : "email"}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    reset();
                  }}
                  className="mt-5 rounded-xl bg-navy px-5 py-2.5 text-sm font-bold text-white hover:bg-navy2"
                >
                  Tutup
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-3.5">
                <div>
                  <label className={lbl} htmlFor="pk-nama">Nama PIC / Perusahaan</label>
                  <input
                    id="pk-nama"
                    required
                    maxLength={120}
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Contoh: Budi / PT Maju Jaya"
                    className={input}
                  />
                </div>

                <div>
                  <label className={lbl} htmlFor="pk-paket">Pilihan paket</label>
                  <select
                    id="pk-paket"
                    value={paket}
                    onChange={(e) => setPaket(e.target.value)}
                    className={input}
                  >
                    {PAKET.map((p) => (
                      <option key={p.value} value={p.value}>{p.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={lbl} htmlFor="pk-peserta">Jumlah peserta (karyawan + keluarga)</label>
                  <input
                    id="pk-peserta"
                    type="number"
                    inputMode="numeric"
                    required
                    min={1}
                    max={5000}
                    value={peserta}
                    onChange={(e) => setPeserta(e.target.value)}
                    placeholder="Contoh: 25"
                    className={input}
                  />
                  <p className="mt-1 text-[11px] text-[#475569]">
                    Jumlah peserta memengaruhi premi dan ada ketentuan minimal dari asuransi. Kami konfirmasikan setelah menerima data Anda.
                  </p>
                </div>

                <fieldset>
                  <legend className={lbl}>Penawaran dikirim lewat</legend>
                  <div className="grid grid-cols-2 gap-2">
                    {(["wa", "email"] as const).map((c) => (
                      <label
                        key={c}
                        className={
                          "flex cursor-pointer items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-semibold " +
                          (channel === c
                            ? "border-gold bg-gold/15 text-navy"
                            : "border-black/15 bg-white text-[#475569]")
                        }
                      >
                        <input
                          type="radio"
                          name="pk-channel"
                          className="sr-only"
                          checked={channel === c}
                          onChange={() => {
                            setChannel(c);
                            setKontak("");
                          }}
                        />
                        {c === "wa" ? "WhatsApp" : "Email"}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label className={lbl} htmlFor="pk-kontak">
                    {channel === "wa" ? "Nomor WhatsApp" : "Alamat email"}
                  </label>
                  <input
                    id="pk-kontak"
                    required
                    type={channel === "wa" ? "tel" : "email"}
                    inputMode={channel === "wa" ? "tel" : "email"}
                    maxLength={120}
                    value={kontak}
                    onChange={(e) => setKontak(e.target.value)}
                    placeholder={channel === "wa" ? "08xxxxxxxxxx" : "nama@perusahaan.com"}
                    className={input}
                  />
                </div>

                {/* Honeypot anti-spam — disembunyikan dari pengguna */}
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  name="website"
                />

                {status === "error" && (
                  <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">
                    {errMsg}{" "}
                    <a
                      className="font-bold underline"
                      href={`https://wa.me/${KONTAK.wa}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat WhatsApp
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-xl bg-gold py-3 text-sm font-bold text-navy transition hover:bg-gold2 disabled:opacity-60"
                >
                  {status === "loading" ? "Mengirim…" : "Kirim Permintaan"}
                </button>
                <p className="text-center text-[11px] text-[#475569]">
                  Gratis dan tanpa kewajiban. Data hanya dipakai untuk menyiapkan penawaran.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
