import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HeroSpecStrip } from "@/components/HeroSpecStrip";
import { JsonLd } from "@/components/JsonLd";
import { TrustStrip } from "@/components/TrustStrip";
import { WhatIsThisStrip } from "@/components/WhatIsThisStrip";

const PersonaGrid = dynamic(() =>
  import("@/components/PersonaGrid").then((m) => ({ default: m.PersonaGrid }))
);
const HowItWorks = dynamic(() =>
  import("@/components/HowItWorks").then((m) => ({ default: m.HowItWorks }))
);
const ScreenshotGallery = dynamic(() =>
  import("@/components/ScreenshotGallery").then((m) => ({ default: m.ScreenshotGallery }))
);
const VisionBand = dynamic(() =>
  import("@/components/VisionBand").then((m) => ({ default: m.VisionBand }))
);
const ComparisonTable = dynamic(() =>
  import("@/components/ComparisonTable").then((m) => ({ default: m.ComparisonTable }))
);
const AppEcosystem = dynamic(() =>
  import("@/components/AppEcosystem").then((m) => ({ default: m.AppEcosystem }))
);
const PricingPreview = dynamic(() =>
  import("@/components/PricingPreview").then((m) => ({ default: m.PricingPreview }))
);
const Faq = dynamic(() =>
  import("@/components/Faq").then((m) => ({ default: m.Faq }))
);
const Footer = dynamic(() =>
  import("@/components/Footer").then((m) => ({ default: m.Footer }))
);
const MobileStickyCta = dynamic(() =>
  import("@/components/MobileStickyCta").then((m) => ({ default: m.MobileStickyCta }))
);

export default function Home() {
  return (
    <main className="relative">
      <JsonLd product faq organization={false} />
      <div className="pointer-events-none fixed inset-0 grid-industrial opacity-40" />
      <Header />
      <Hero />
      <HeroSpecStrip />
      <TrustStrip />
      <WhatIsThisStrip />
      <HowItWorks />
      <ScreenshotGallery />
      <PersonaGrid />
      <VisionBand />
      <ComparisonTable />
      <AppEcosystem variant="featured" />
      <PricingPreview />
      <Faq />
      <Footer />
      <MobileStickyCta />
    </main>
  );
}
