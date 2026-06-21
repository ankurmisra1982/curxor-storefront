"use client";

import Link from "next/link";
import { useState } from "react";
import { TrackedPreorderLink } from "@/components/TrackedPreorderLink";

const navLinks = [
  { href: "/creator", label: "CREATOR" },
  { href: "/for/traders", label: "TRADERS" },
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
          <TrackedPreorderLink
            location="header"
            className="border border-neon-purple/50 px-4 py-2 text-neon-purple transition-all hover:bg-neon-purple/10 hover:shadow-[0_0_20px_rgba(191,90,242,0.3)]"
          >
            PRE-ORDER
          </TrackedPreorderLink>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <TrackedPreorderLink
            location="header"
            className="border border-neon-purple/50 px-3 py-2 text-[10px] tracking-widest text-neon-purple"
          >
            PRE-ORDER
          </TrackedPreorderLink>
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
          </div>
        </nav>
      )}
    </header>
  );
}
