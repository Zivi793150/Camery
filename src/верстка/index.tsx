import { BusinessSolutionsSection } from "./BusinessSolutionsSection";
import { CatalogSection } from "./CatalogSection";
import { FooterSection } from "./FooterSection";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { InstallationAdvantagesSection } from "./InstallationAdvantagesSection";
import { PricingPlansSection } from "./PricingPlansSection";
import { SecurityBenefitsSection } from "./SecurityBenefitsSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="bg-[#0e0f0a] w-full min-h-screen">
      <Header />
      <div className="pt-[88px]">
        <HeroSection />
      </div>
      <InstallationAdvantagesSection />
      <PricingPlansSection />
      <SecurityBenefitsSection />
      <BusinessSolutionsSection />
      <CatalogSection />
      <FooterSection />
    </div>
  );
};
