"use client";

import { useState } from "react";

import { faqItems } from "@/lib/config";

const FAQ_PREVIEW_COUNT = 7;

export function Faq() {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll
    ? faqItems
    : faqItems.slice(0, FAQ_PREVIEW_COUNT);

  return (
    <section id="faq" className="relative border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pre-order questions
          </h2>
        </div>

        <div className="space-y-px border border-white/10 bg-white/10">
          {visibleItems.map((item) => (
            <details
              key={item.question}
              className="group bg-black px-6 py-5 open:bg-white/[0.02]"
            >
              <summary className="cursor-pointer list-none text-sm font-bold tracking-wide text-white/90 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-neon-purple transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-white/50">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        {!showAll && faqItems.length > FAQ_PREVIEW_COUNT ? (
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="border border-white/10 px-5 py-3 text-xs tracking-[0.2em] text-white/50 transition-colors hover:border-neon-purple/40 hover:text-neon-purple"
            >
              SHOW ALL {faqItems.length} QUESTIONS
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
