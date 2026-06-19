import { Hero } from "@/components/Hero";
import { SpecMatrix } from "@/components/SpecMatrix";
import { AppEcosystem } from "@/components/AppEcosystem";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="relative">
      <div className="pointer-events-none fixed inset-0 grid-industrial opacity-40" />
      <Header />
      <Hero />
      <SpecMatrix />
      <AppEcosystem />
      <Footer />
    </main>
  );
}
