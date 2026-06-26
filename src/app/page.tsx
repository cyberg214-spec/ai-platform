import Navbar   from "@/components/navbar/Navbar";
import Hero     from "@/components/hero/Hero";
import Social   from "@/components/social/Social";
import Features from "@/components/features/Features";
import Pricing  from "@/components/pricing/Pricing";
import CTA      from "@/components/cta/CTA";
import Footer   from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Social />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}