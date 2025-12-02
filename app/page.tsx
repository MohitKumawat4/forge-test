import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { Features } from "@/components/Features";
import { GlobalMapSection } from "@/components/GlobalMapSection";
import { UseCases } from "@/components/IndustryExpertise";
import { BenefitsSection } from "@/components/BenefitsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <StatsSection />
      <Features />
      <GlobalMapSection />
      <UseCases />
      <BenefitsSection />
      <Footer />
    </main>
  );
}
