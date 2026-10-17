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

  const clear = () => {
    markerRef.current?.remove();
    markerRef.current = null;
    setStatus("");
    onChange(null);
  };

  return (
    <div className="mt-2 space-y-2 rounded-xl border border-gold/30 bg-white p-3">
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" onClick={locate} disabled={loading} className={smallBtn}>
          {loading ? "Mencari lokasi…" : "📍 Gunakan lokasi saya"}
        </button>
        {value && (
          <button type="button" onClick={clear} className={smallBtn}>
            Hapus titik
          </button>
        )}
      </div>
      <div ref={elRef} role="application" aria-label="Peta untuk memilih titik lokasi properti" className="relative isolate z-0 h-56 w-full overflow-hidden rounded-lg border border-black/10" />
      <p aria-live="polite" className="text-xs leading-relaxed text-[#475569]">
        {status ||
          (value
            ? `Titik terpilih: ${value.lat.toFixed(5)}, ${value.lng.toFixed(5)}. Seret pin untuk menyesuaikan.`
            : "Ketuk peta untuk menaruh pin, atau pakai tombol lokasi di atas.")}
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
