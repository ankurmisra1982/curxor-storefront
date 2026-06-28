"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { CurXorLogo } from "@/components/brand/CurXorLogo";
import { TrackedPreorderLink } from "@/components/TrackedPreorderLink";
import { navGroups, navTopLinks } from "@/lib/site-nav";

function NavLinkItem({
  href,
  label,
  description,
  onNavigate,
  className = "",
}: {
  href: string;
  label: string;
  description?: string;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={onNavigate}
      className={`block transition-colors hover:text-neon-purple ${className}`}
    >
      <span className="font-medium text-white/80">{label}</span>
      {description ? (
        <span className="mt-0.5 block text-[10px] normal-case tracking-normal text-white/35">
          {description}
        </span>
      ) : null}
    </a>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>("claws");
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!openGroup) return;

    function handlePointerDown(event: MouseEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenGroup(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenGroup(null);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openGroup]);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  function toggleGroup(id: string) {
    setOpenGroup((current) => (current === id ? null : id));
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <CurXorLogo variant="mark" className="h-7 w-7 sm:hidden" />
          <CurXorLogo variant="lockup" className="hidden h-7 sm:block" />
        </Link>

        <nav
          ref={navRef}
          aria-label="Primary"
          className="hidden items-center gap-3 text-xs tracking-widest text-white/60 lg:flex xl:gap-4"
        >
          {navGroups.map((group) => {
            const isOpen = openGroup === group.id;

            return (
              <div key={group.id} className="relative">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => toggleGroup(group.id)}
                  className={`flex items-center gap-1 transition-colors hover:text-neon-purple ${
                    isOpen ? "text-neon-purple" : ""
                  }`}
                >
                  {group.label}
                  <span aria-hidden className="text-[10px] text-white/30">
                    ▾
                  </span>
                </button>

                {isOpen ? (
                  <div className="absolute left-0 top-full z-50 min-w-[15rem] pt-2">
                    <div className="border border-white/10 bg-black p-4 shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
                      <p className="mb-3 text-[9px] tracking-[0.3em] text-neon-purple">
                        {group.label}
                      </p>
                      <ul className="space-y-3">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <NavLinkItem
                              href={item.href}
                              label={item.label}
                              description={item.description}
                              onNavigate={() => setOpenGroup(null)}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}

          {navTopLinks.map((link) => (
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
            className="ml-1 border border-neon-purple bg-neon-purple/10 px-3 py-2 font-bold text-neon-purple transition-all hover:bg-neon-purple/20 hover:shadow-[0_0_20px_rgba(191,90,242,0.3)] xl:px-4"
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
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="border border-white/10 px-3 py-2 text-xs tracking-widest text-white/60"
          >
            {mobileOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav aria-label="Mobile primary" className="border-t border-white/10 bg-black px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-2 text-xs tracking-widest text-white/60">
            {navGroups.map((group) => {
              const expanded = mobileSection === group.id;

              return (
                <div key={group.id} className="border-b border-white/10 pb-2">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setMobileSection(expanded ? null : group.id)}
                    className="flex w-full items-center justify-between py-2 text-left transition-colors hover:text-neon-purple"
                  >
                    {group.label}
                    <span aria-hidden className="text-white/30">
                      {expanded ? "−" : "+"}
                    </span>
                  </button>

                  {expanded ? (
                    <ul className="space-y-3 pb-2 pl-1 normal-case tracking-normal">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <NavLinkItem
                            href={item.href}
                            label={item.label}
                            description={item.description}
                            onNavigate={closeMobileMenu}
                          />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}

            {navTopLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="py-2 transition-colors hover:text-neon-purple"
              >
                {link.label}
              </a>
            ))}

            <Link
              href="/#subscribe"
              onClick={closeMobileMenu}
              className="pt-2 font-bold text-neon-purple transition-colors hover:text-neon-glow"
            >
              JOIN WAITLIST
            </Link>
            <TrackedPreorderLink
              location="header"
              className="pb-2 text-white/45 transition-colors hover:text-neon-purple"
              onClick={closeMobileMenu}
            >
              PRE-ORDER
            </TrackedPreorderLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
