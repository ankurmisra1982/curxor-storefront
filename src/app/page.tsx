import { AppEcosystem } from "@/components/AppEcosystem";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CreateToEarn } from "@/components/CreateToEarn";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HorizonSection } from "@/components/HorizonSection";
import { HowItWorks } from "@/components/HowItWorks";
import { MeetTheOperators } from "@/components/MeetTheOperators";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { PricingPreview } from "@/components/PricingPreview";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { TrustStrip } from "@/components/TrustStrip";
import { WhatYouBuySection } from "@/components/WhatYouBuySection";

export default function Home() {
  return (
    <main className="relative">
      <div className="pointer-events-none fixed inset-0 grid-industrial opacity-40" />
      <Header />
      <Hero />
      <TrustStrip />
      <WhatYouBuySection />
      <HowItWorks />
      <ScreenshotGallery />
      <MeetTheOperators />
      <HorizonSection />
      <ComparisonTable />
      <AppEcosystem variant="featured" />
      <PricingPreview />
      <CreateToEarn />
      <Faq />
      <Footer />
      <MobileStickyCta />
    </main>
  );
}
