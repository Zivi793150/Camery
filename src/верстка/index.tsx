import { BusinessSolutionsSection } from "./BusinessSolutionsSection";
import { CatalogSection } from "./CatalogSection";
import { FooterSection } from "./FooterSection";
import { HeroSection } from "./HeroSection";
import { InstallationAdvantagesSection } from "./InstallationAdvantagesSection";
import { PricingPlansSection } from "./PricingPlansSection";
import { SecurityBenefitsSection } from "./SecurityBenefitsSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="bg-[#0e0f0a] w-full min-h-screen">
      <HeroSection />
      <InstallationAdvantagesSection />
      <PricingPlansSection />
      <SecurityBenefitsSection />
      <BusinessSolutionsSection />
      <CatalogSection />
      <FooterSection />
    </div>
  );
};
