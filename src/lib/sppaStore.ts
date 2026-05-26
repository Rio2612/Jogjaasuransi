// src/lib/sppaStore.ts
// In-memory store untuk SPPA submissions.
// Untuk production, ganti dengan DB (Vercel KV / Supabase / Prisma).

export interface SPPASubmission {
  id: string;
  product: string;
  productLabel: string;
  nama: string;
  whatsapp: string;
  email: string | null;
  fields: Record<string, string | string[]>;
  fieldLabels: Record<string, string>;
  submittedAt: string;
  status: "baru" | "diproses" | "selesai";
}

declare global {
  // eslint-disable-next-line no-var
  var __sppaSubmissions: SPPASubmission[] | undefined;
}

if (!global.__sppaSubmissions) global.__sppaSubmissions = [];

export function getSubmissions(): SPPASubmission[] {
  return global.__sppaSubmissions ?? [];
}

export function addSubmission(sub: SPPASubmission): void {
  global.__sppaSubmissions = [...(global.__sppaSubmissions ?? []), sub];
}

export function updateSubmissionStatus(
  id: string,
  status: SPPASubmission["status"]
): SPPASubmission | null {
  const subs = global.__sppaSubmissions ?? [];
  const idx = subs.findIndex((s) => s.id === id);
  if (idx === -1) return null;
  subs[idx] = { ...subs[idx], status };
  global.__sppaSubmissions = subs;
  return subs[idx];
}
