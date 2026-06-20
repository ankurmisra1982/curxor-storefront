import Link from "next/link";
import { TrackedPreorderLink } from "@/components/TrackedPreorderLink";
export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="inline-block h-2 w-2 bg-neon-purple shadow-[0_0_8px_#BF5AF2]" />
          <span className="text-sm font-bold tracking-[0.3em] text-white">
            CURXOR
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-xs tracking-widest text-white/60 sm:flex">
          <a href="#specs" className="transition-colors hover:text-neon-purple">
            SPECS
          </a>
          <a href="#apps" className="transition-colors hover:text-neon-purple">
            APPS
          </a>
          <TrackedPreorderLink
            location="header"
            className="border border-neon-purple/50 px-4 py-2 text-neon-purple transition-all hover:bg-neon-purple/10 hover:shadow-[0_0_20px_rgba(191,90,242,0.3)]"
          >
            PRE-ORDER
          </TrackedPreorderLink>
        </nav>
      </div>
    </header>
  );
}
