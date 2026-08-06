import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/SiteShell";
import { SubscribeFirstCtas } from "@/components/SubscribeFirstCtas";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Page not found — ${siteConfig.name}`,
  description:
    "That page does not exist on curxor.ai. Jump to the desk crew tours, pricing, or the appliance architecture.",
  robots: { index: false, follow: true },
};

const DESTINATIONS = [
  { href: "/", label: "Home", note: "The appliance, the desk crew, the price." },
  { href: "/pricing", label: "Pricing", note: "$3,999 once — what is in the box." },
  { href: "/capital", label: "Capital", note: "Rules-bound trading desk tour." },
  { href: "/creator", label: "Creator", note: "Content pipeline desk tour." },
  { href: "/outreach", label: "Outreach", note: "Pipeline to send desk tour." },
  { href: "/architecture", label: "Architecture", note: "Four pillars and the eno2 kill switch." },
  { href: "/compare", label: "Compare", note: "Cloud, DIY, and assistant boxes." },
  { href: "/journal", label: "Journal", note: "Essays, updates, and releases." },
];

export default function NotFound() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <p className="text-[10px] tracking-[0.3em] text-neon-purple">ERROR 404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          That page is not on this box.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
          The link is broken or the page has moved. Nothing is wrong with your
          appliance — this one is on us. Pick a destination below, or get launch
          updates and we will mail you when there is something new to read.
        </p>

        <div className="mt-8">
          <SubscribeFirstCtas
            preorderLocation="not-found"
            secondaryHref="/journal"
            secondaryLabel="Read the journal"
          />
        </div>

        <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
          {DESTINATIONS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-black p-5 transition-colors hover:bg-neon-purple/[0.06]"
            >
              <p className="text-sm font-bold text-white/90 group-hover:text-neon-purple">
                {item.label} →
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/55">
                {item.note}
              </p>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-xs leading-relaxed text-white/55">
          Still stuck? Mail{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-neon-purple hover:underline"
          >
            {siteConfig.contactEmail}
          </a>{" "}
          and tell us which link sent you here.
        </p>
      </div>
    </SiteShell>
  );
}
