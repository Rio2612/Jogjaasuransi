import type { Metadata } from "next";
import AdminSPPAPage from "@/components/admin/AdminSPPAPage";

export const metadata: Metadata = {
  title: "Admin SPPA | Asuransi Jogja",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminSPPAPage />;
}
