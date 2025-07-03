
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoHeroSection } from "@/components/VideoHeroSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { UseCasesCarousel } from "@/components/UseCasesCarousel";
import { BenefitsFeatures } from "@/components/BenefitsFeatures";
import { StatsSection } from "@/components/StatsSection";
import { BenefitsComparison } from "@/components/BenefitsComparison";
import { InteractiveDemo } from "@/components/InteractiveDemo";

const Beneficios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <VideoHeroSection />
        <WorkflowSection />
        <InteractiveDemo />
        <UseCasesCarousel />
        <BenefitsFeatures />
        <StatsSection />
        <BenefitsComparison />
      </main>
      <Footer />
    </div>
  );
};

export default Beneficios;
