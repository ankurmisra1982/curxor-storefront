import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { WhatIsThisStrip } from "@/components/WhatIsThisStrip";

const WhatYouBuySection = dynamic(() =>
  import("@/components/WhatYouBuySection").then((m) => ({ default: m.WhatYouBuySection }))
);
const HowItWorks = dynamic(() =>
  import("@/components/HowItWorks").then((m) => ({ default: m.HowItWorks }))
);
const NeuralLinkTeaser = dynamic(() =>
  import("@/components/NeuralLinkTeaser").then((m) => ({ default: m.NeuralLinkTeaser }))
);
const ScreenshotGallery = dynamic(() =>
  import("@/components/ScreenshotGallery").then((m) => ({ default: m.ScreenshotGallery }))
);
const MeetTheOperators = dynamic(() =>
  import("@/components/MeetTheOperators").then((m) => ({ default: m.MeetTheOperators }))
);
const HorizonSection = dynamic(() =>
  import("@/components/HorizonSection").then((m) => ({ default: m.HorizonSection }))
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
const CreateToEarn = dynamic(() =>
  import("@/components/CreateToEarn").then((m) => ({ default: m.CreateToEarn }))
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
      <div className="pointer-events-none fixed inset-0 grid-industrial opacity-40" />
      <Header />
      <Hero />
      <TrustStrip />
      <WhatIsThisStrip />
      <WhatYouBuySection />
      <HowItWorks />
      <NeuralLinkTeaser />
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
