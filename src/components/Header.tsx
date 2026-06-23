"use client";

import Link from "next/link";
import { useState } from "react";
import { TrackedPreorderLink } from "@/components/TrackedPreorderLink";

const navLinks = [
  { href: "/capital", label: "CAPITAL" },
  { href: "/creator", label: "CREATOR" },
  { href: "/outreach", label: "OUTREACH" },
  { href: "/#operators", label: "OPERATORS" },
  { href: "/pricing", label: "PRICING" },
  { href: "/#demo", label: "DEMO" },
  { href: "/compare", label: "WHY CURXOR" },
  { href: "/architecture", label: "STACK" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="inline-block h-2 w-2 bg-neon-purple shadow-[0_0_8px_#BF5AF2]" />
          <span className="text-sm font-bold tracking-[0.3em] text-white">
            CURXOR
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-xs tracking-widest text-white/60 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-neon-purple"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/#subscribe"
            className="border border-neon-purple bg-neon-purple/10 px-4 py-2 font-bold text-neon-purple transition-all hover:bg-neon-purple/20 hover:shadow-[0_0_20px_rgba(191,90,242,0.3)]"
          >
            JOIN WAITLIST
          </Link>
          <TrackedPreorderLink
            location="header"
            className="text-white/45 transition-colors hover:text-neon-purple"
          >
            PRE-ORDER
          </TrackedPreorderLink>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/#subscribe"
            className="border border-neon-purple/50 px-3 py-2 text-[10px] font-bold tracking-widest text-neon-purple"
          >
            WAITLIST
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="border border-white/10 px-3 py-2 text-xs tracking-widest text-white/60"
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-black px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4 text-xs tracking-widest text-white/60">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-neon-purple"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/#subscribe"
              onClick={() => setOpen(false)}
              className="font-bold text-neon-purple transition-colors hover:text-neon-glow"
            >
              JOIN WAITLIST
            </Link>
            <TrackedPreorderLink
              location="header"
              className="text-white/45 transition-colors hover:text-neon-purple"
              onClick={() => setOpen(false)}
            >
              PRE-ORDER
            </TrackedPreorderLink>
          </div>
        </nav>
      )}
    </header>
  );
}
