import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function SiteShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative min-h-screen ${className}`}>
      <div className="pointer-events-none fixed inset-0 grid-industrial opacity-40" />
      <Header />
      <main className="relative pt-24">{children}</main>
      <Footer />
    </div>
  );
}
