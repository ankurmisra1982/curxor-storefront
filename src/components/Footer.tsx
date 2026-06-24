"use client";

import Link from "next/link";
import { CurXorLogo } from "@/components/brand/CurXorLogo";
import { SocialLinks } from "@/components/SocialLinks";
import { SubscribeForm } from "@/components/SubscribeForm";
import { footerLinks } from "@/lib/legal";

export function Footer() {
  return (
    <footer id="subscribe" className="relative scroll-mt-24 border-t border-white/10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.3em] text-neon-purple">
              STAY IN ORBIT
            </p>
            <h3 className="mb-2 text-xl font-bold tracking-tight">
              Get launch updates
            </h3>
            <p className="mb-6 max-w-sm text-xs leading-relaxed text-white/40">
              Forge updates, Claw vertical drops, and pre-order availability —
              delivered to your inbox.
            </p>

            <SubscribeForm />

          </div>

          <div className="flex flex-col items-start md:items-end">
            <SocialLinks
              className="mb-8 flex flex-wrap justify-start gap-x-4 gap-y-2 md:justify-end"
              linkClassName="text-[10px] tracking-widest text-white/40 transition-colors hover:text-neon-purple"
            />

            <div className="text-right">
              <div className="flex flex-col items-start md:items-end">
                <CurXorLogo variant="wordmark" className="h-6 opacity-90" />
                <p className="mt-4 text-2xl font-bold tracking-tight text-white/90">
                  126 TOPS. $0 API. Infinite Claws.
                </p>
              </div>
              <nav
                aria-label="Legal and resources"
                className="mt-6 flex flex-wrap justify-start gap-x-4 gap-y-2 md:justify-end"
              >
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[10px] tracking-widest text-white/30 transition-colors hover:text-neon-purple"
                  >
                    {link.label.toUpperCase()}
                  </Link>
                ))}
              </nav>
              <p className="mt-4 text-[10px] tracking-[0.3em] text-white/30">
                © {new Date().getFullYear()} CURXOR SYSTEMS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
