
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { OwnerSection } from "@/components/OwnerSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-pattern">
      <div className="bg-grid min-h-screen">
        <Header />
        <Hero />
        <StatsSection />
        <AboutSection />
        <OwnerSection />
        <FeaturesSection />
        <ServicesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
