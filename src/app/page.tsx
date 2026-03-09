import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Produk from "@/components/sections/Produk";
import Kalkulator from "@/components/sections/Kalkulator";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Why from "@/components/sections/Why";
import About from "@/components/sections/About";
import Testimonial from "@/components/sections/Testimonial";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <Produk />
        <Kalkulator />
        <ProblemSolution />
        <Why />
        <About />
        <Testimonial />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
