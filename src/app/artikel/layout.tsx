import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PenawaranCTA from "@/components/penawaran/PenawaranCTA";
import ClusterLinks from "@/components/ui/ClusterLinks";
import KalkulatorCTA from "@/components/ui/KalkulatorCTA";
import Link from "next/link";

export default function ArtikelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="pt-[68px]">
        <main>{children}</main>
      </div>
      <PenawaranCTA />
      <KalkulatorCTA />
      <ClusterLinks />
      <Footer />
    </>
  );
}
