import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { Features } from "@/components/Features";
import { GlobalMapSection } from "@/components/GlobalMapSection";
import { UseCases } from "@/components/IndustryExpertise";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ROISection } from "@/components/ROISection";
import { Footer } from "@/components/Footer";
import { ParallaxFooter } from "@/components/ParallaxFooter";
import { ParallaxDivider } from "@/components/ParallaxDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      <div className="relative z-10 bg-white shadow-xl shadow-black/20">
        <Preloader />
        <Navbar />
        <Hero />
        <StatsSection />
        <Features />
        <GlobalMapSection />
        <UseCases />
        <BenefitsSection />
        <ROISection />
        <ParallaxDivider />
      </div>
      <ParallaxFooter>
        <Footer />
      </ParallaxFooter>
    </main>
  );
}
