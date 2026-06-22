import Image from "next/image";
import Link from "next/link";

import { OperatorQuote } from "@/components/OperatorQuote";
import { TrackedPreorderLink } from "@/components/TrackedPreorderLink";
import { getOperatorByPersonaSlug } from "@/lib/claw-operators";
import { siteConfig } from "@/lib/config";
import type { PersonaPage } from "@/lib/persona-pages";

export function PersonaPageContent({ page }: { page: PersonaPage }) {
  const operator = getOperatorByPersonaSlug(page.slug);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
        {page.eyebrow}
      </p>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {page.headline}
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
        {page.lead}
      </p>

      {operator ? (
        <div className="mt-8">
          <OperatorQuote operator={operator} />
        </div>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-4">
        <TrackedPreorderLink
          location="persona"
          className="inline-flex bg-neon-purple px-6 py-4 text-xs font-bold tracking-[0.2em] text-black"
        >
          PRE-ORDER {siteConfig.preOrderPrice}
        </TrackedPreorderLink>
        {operator ? (
          <Link
            href={operator.tourHref}
            className="border-industrial px-6 py-4 text-xs tracking-[0.2em] text-white/60 hover:text-neon-purple"
          >
            {operator.claw.split(" ")[0].toUpperCase()} TOUR →
          </Link>
        ) : (
          <Link
            href="/#operators"
            className="border-industrial px-6 py-4 text-xs tracking-[0.2em] text-white/60 hover:text-neon-purple"
          >
            MEET OPERATORS
          </Link>
        )}
      </div>

      <div className="mt-12 overflow-hidden border border-white/10">
        <Image
          src={page.demoSrc}
          alt={page.demoAlt}
          width={1440}
          height={900}
          className="h-auto w-full"
          priority
        />
      </div>

      <section className="mt-14">
        <p className="mb-4 text-[10px] tracking-[0.25em] text-white/35">
          WHY OPERATORS SWITCH
        </p>
        <ul className="space-y-2">
          {page.painPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-sm text-white/60"
            >
              <span className="mt-2 h-1 w-1 shrink-0 bg-neon-purple" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
        {page.claws.map((claw) => (
          <article key={claw.name} className="bg-black p-6">
            <h2 className="text-sm font-bold text-neon-purple">{claw.name}</h2>
            <p className="mt-2 text-xs leading-relaxed text-white/50">
              {claw.body}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-12">
        <p className="mb-4 text-[10px] tracking-[0.25em] text-white/35">
          OUTCOMES
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {page.outcomes.map((outcome) => (
            <li
              key={outcome}
              className="border-industrial p-4 text-xs leading-relaxed text-white/55"
            >
              {outcome}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <div className="flex flex-wrap gap-3">
          {page.compareLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border border-white/10 px-4 py-2 text-[10px] tracking-widest text-white/50 hover:border-neon-purple/40 hover:text-neon-purple"
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </div>
      </section>

      <p className="mt-12 text-[10px] text-white/30">
        Composite operator storytelling — pre-launch, not paid endorsements.
      </p>

      <p className="mt-6">
        <Link href="/" className="text-sm text-neon-purple hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
