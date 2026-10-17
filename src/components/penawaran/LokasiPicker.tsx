"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export interface Geo {
  lat: number;
  lng: number;
}

const DIY: [number, number] = [-7.7956, 110.3695]; // Yogyakarta

const pinIcon = L.divIcon({
  className: "",
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  html: '<svg width="30" height="40" viewBox="0 0 30 40" aria-hidden="true"><path d="M15 1C7.3 1 1 7.2 1 14.8 1 25 15 39 15 39s14-14 14-24.2C29 7.2 22.7 1 15 1z" fill="#C8963E" stroke="#0D2137" stroke-width="2"/><circle cx="15" cy="15" r="5.5" fill="#0D2137"/></svg>',
});

type Hasil = { name: string; lat: number; lng: number };

const searchCls =
  "min-w-[11rem] flex-1 rounded-lg border border-black/15 bg-white px-3 py-2 text-xs text-navy placeholder:text-[#64748b] outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20";

const smallBtn =
  "inline-flex items-center justify-center rounded-lg border border-black/15 bg-white px-3 py-2 text-xs font-bold text-navy transition hover:border-gold disabled:opacity-60";

/**
 * Pemilih titik lokasi: tombol "Gunakan lokasi saya" (GPS) dan peta yang bisa diketuk / pin yang bisa digeser.
 * Dimuat hanya saat opsi "bagikan titik lokasi" dicentang (lihat PenawaranSheet).
 */
export default function LokasiPicker({ value, onChange }: { value: Geo | null; onChange: (g: Geo | null) => void }) {
  const elRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const changeRef = useRef(onChange);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Hasil[]>([]);
  const [searching, setSearching] = useState(false);
  const reqRef = useRef(0);

  useEffect(() => {
    changeRef.current = onChange;
  });

  const place = (lat: number, lng: number, opts: { fly?: boolean; emit?: boolean } = {}) => {
    const map = mapRef.current;
    if (!map) return;
    const ll = L.latLng(lat, lng);
    if (!markerRef.current) {
      const m = L.marker(ll, { draggable: true, icon: pinIcon, keyboard: false });
      m.on("dragend", () => {
        const p = m.getLatLng();
        changeRef.current({ lat: p.lat, lng: p.lng });
      });
      m.addTo(map);
      markerRef.current = m;
    } else {
      markerRef.current.setLatLng(ll);
    }
    if (opts.fly) map.setView(ll, Math.max(map.getZoom(), 17));
    if (opts.emit !== false) changeRef.current({ lat, lng });
  };

  useEffect(() => {
    if (!elRef.current || mapRef.current) return;
    const map = L.map(elRef.current, {
      center: value ? [value.lat, value.lng] : DIY,
      zoom: value ? 17 : 12,
      scrollWheelZoom: false, // supaya scroll halaman tidak "tertangkap" peta
    });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>',
    }).addTo(map);
    map.on("click", (e: L.LeafletMouseEvent) => place(e.latlng.lat, e.latlng.lng));
    mapRef.current = map;
    if (value) place(value.lat, value.lng, { emit: false });
    return () => {
      map.remove();
      mapRef.current = null;
      markerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const locate = () => {
    if (!navigator.geolocation) {
      setStatus("Peramban Anda tidak mendukung lokasi. Tandai titik langsung di peta.");
      return;
    }
    setLoading(true);
    setStatus("");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLoading(false);
        place(pos.coords.latitude, pos.coords.longitude, { fly: true });
        setStatus(`Lokasi terdeteksi (akurasi ±${Math.round(pos.coords.accuracy)} m). Geser pin bila kurang tepat.`);
      },
      (err) => {
        setLoading(false);
        setStatus(
          err.code === 1
            ? "Izin lokasi ditolak. Anda tetap bisa menandai titik langsung di peta."
            : "Lokasi belum terdeteksi. Coba lagi, atau tandai titik langsung di peta."
        );
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  };

  // Cari alamat / nama tempat lewat Nominatim (data OpenStreetMap), diprioritaskan di sekitar DIY.
  const search = async () => {
    const q = query.trim();
    if (q.length < 3) {
      setStatus("Ketik minimal 3 huruf: nama jalan, desa, atau nama tempat / usaha.");
      return;
    }
    const id = ++reqRef.current;
    setSearching(true);
    setStatus("");
    setResults([]);
    try {
      const params = new URLSearchParams({
        format: "jsonv2",
        q,
        countrycodes: "id",
        limit: "5",
        "accept-language": "id",
        viewbox: "109.8,-7.4,111.0,-8.3",
        bounded: "0",
      });
      const res = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, { headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      const data: { display_name: string; lat: string; lon: string }[] = await res.json();
      if (id !== reqRef.current) return;
      const list = data
        .map((d) => ({ name: d.display_name, lat: parseFloat(d.lat), lng: parseFloat(d.lon) }))
        .filter((d) => Number.isFinite(d.lat) && Number.isFinite(d.lng));
      setResults(list);
      setStatus(list.length ? "Pilih hasil yang sesuai, lalu geser pin bila kurang tepat." : "Alamat tidak ditemukan. Coba nama jalan / desa lain, atau ketuk langsung di peta.");
    } catch {
      if (id === reqRef.current) setStatus("Pencarian alamat gagal. Periksa koneksi, atau ketuk langsung di peta.");
    } finally {
      if (id === reqRef.current) setSearching(false);
    }
  };

  const pick = (h: Hasil) => {
    place(h.lat, h.lng, { fly: true });
    setResults([]);
    setStatus(`Pin diletakkan di: ${h.name.split(",").slice(0, 3).join(",")}. Geser pin bila kurang tepat.`);
  };

  const clear = () => {
    markerRef.current?.remove();
    markerRef.current = null;
    setStatus("");
    onChange(null);
  };

  return (
    <div className="mt-2 space-y-2 rounded-xl border border-gold/30 bg-white p-3">
      <div className="flex flex-wrap items-center gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              search();
            }
          }}
          enterKeyHint="search"
          aria-label="Cari alamat atau nama tempat di peta"
          placeholder="Ketik alamat atau nama tempat / usaha"
          className={searchCls}
        />
        <button type="button" onClick={search} disabled={searching} className="inline-flex items-center justify-center rounded-lg bg-gold px-3 py-2 text-xs font-bold text-navy transition hover:bg-gold2 disabled:opacity-60">
          {searching ? "Mencari…" : "Cari"}
        </button>
        <button type="button" onClick={locate} disabled={loading} className={smallBtn}>
          {loading ? "Mencari lokasi…" : "📍 Gunakan lokasi saya"}
        </button>
        {value && (
          <button type="button" onClick={clear} className={smallBtn}>
            Hapus titik
          </button>
        )}
      </div>
      {results.length > 0 && (
        <ul aria-label="Hasil pencarian alamat" className="max-h-44 divide-y divide-black/5 overflow-y-auto rounded-lg border border-black/10 bg-cream text-xs">
          {results.map((h, i) => (
            <li key={`${h.lat},${h.lng},${i}`}>
              <button type="button" onClick={() => pick(h)} className="w-full px-3 py-2 text-left leading-snug text-navy transition hover:bg-gold/10">
                {h.name}
              </button>
            </li>
          ))}
        </ul>
      )}
      <div ref={elRef} role="application" aria-label="Peta untuk memilih titik lokasi properti" className="relative isolate z-0 h-56 w-full overflow-hidden rounded-lg border border-black/10" />
      <p aria-live="polite" className="text-xs leading-relaxed text-[#475569]">
        {status ||
          (value
            ? `Titik terpilih: ${value.lat.toFixed(5)}, ${value.lng.toFixed(5)}. Seret pin untuk menyesuaikan.`
            : "Cari alamat di atas, pakai tombol lokasi, atau ketuk peta untuk menaruh pin.")}
      </p>
      {value && (
        <a
          href={`https://maps.google.com/?q=${value.lat.toFixed(6)},${value.lng.toFixed(6)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs font-bold text-goldtext underline underline-offset-2"
        >
          Cek di Google Maps
        </a>
      )}
    </div>
  );
}
