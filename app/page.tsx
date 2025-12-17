import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { Features } from "@/components/Features";
import { ProcessStages } from "@/components/ProcessStages";
import { SecuritySection } from "@/components/SecuritySection";
import { AICapabilitiesSection } from "@/components/AICapabilitiesSection";
import { ParallaxPromo } from "@/components/ParallaxPromo";
import { GlobalMapSection } from "@/components/GlobalMapSection";
import { UseCases } from "@/components/IndustryExpertise";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ROISection } from "@/components/ROISection";
import { Footer } from "@/components/Footer";
import { ParallaxDivider } from "@/components/ParallaxDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      <div className="relative z-10 bg-white">
        <Navbar />
        <Hero />


        <ParallaxPromo />
        <Features />
        <ProcessStages />
        <SecuritySection />
        <AICapabilitiesSection />
        {/* <GlobalMapSection /> */}
        {/* <UseCases /> */}
        <BenefitsSection />
        <ROISection />
        <ParallaxDivider />
      </div>
    </main>
  );
}
