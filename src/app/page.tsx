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
import { SpecMatrix } from "@/components/SpecMatrix";

export default function Home() {
  return (
    <main className="relative">
      <div className="pointer-events-none fixed inset-0 grid-industrial opacity-40" />
      <Header />
      <Hero />
      <ComputePower />
      <CreateToEarn />
      <DayOneHub />
      <ComparisonTable />
      <SpecMatrix />
      <AppEcosystem />
      <Faq />
      <Footer />
      <MobileStickyCta />
    </main>
  );
}
