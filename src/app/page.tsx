import { CapitalFlowGallery } from "@/components/CapitalFlowGallery";
import { CreatorFlowGallery } from "@/components/CreatorFlowGallery";
import { PersonaCards } from "@/components/PersonaCards";
import { PriceIncludes } from "@/components/PriceIncludes";
import { TcoSection } from "@/components/TcoSection";
import { TrustStrip } from "@/components/TrustStrip";
import { AppEcosystem } from "@/components/AppEcosystem";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ComputePower } from "@/components/ComputePower";
import { CreateToEarn } from "@/components/CreateToEarn";
import { DayOneHub } from "@/components/DayOneHub";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { PricingPreview } from "@/components/PricingPreview";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { SpecMatrix } from "@/components/SpecMatrix";

export default function Home() {
  return (
    <main className="relative">
      <div className="pointer-events-none fixed inset-0 grid-industrial opacity-40" />
      <Header />
      <Hero />
      <TrustStrip />
      <ScreenshotGallery />
      <PersonaCards />
      <ComparisonTable />
      <ComputePower />
      <DayOneHub />
      <AppEcosystem />
      <PricingPreview />
      <PriceIncludes />
      <SpecMatrix />
      <TcoSection />
      <CreatorFlowGallery />
      <CapitalFlowGallery />
      <CreateToEarn />
      <Faq />
      <Footer />
      <MobileStickyCta />
    </main>
  );
}
