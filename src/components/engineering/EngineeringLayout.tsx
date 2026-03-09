import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

interface Breadcrumb { label: string; href?: string }
interface Props { children: React.ReactNode; breadcrumbs: Breadcrumb[] }

export default function EngineeringLayout({ children, breadcrumbs }: Props) {
  return (
    <>
      <Header />
      <div className="pt-[68px]">
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-xs text-[#64748B]">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="text-gold/60">›</span>
                {b.href
                  ? <Link href={b.href} className="hover:text-gold transition-colors no-underline">{b.label}</Link>
                  : <span className="text-navy font-semibold">{b.label}</span>}
              </span>
            ))}
          </div>
        </div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
