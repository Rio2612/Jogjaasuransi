import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export default function ArtikelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="pt-[68px]">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
