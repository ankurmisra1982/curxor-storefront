import Image from "next/image";
import Link from "next/link";

import { capitalFlowShots } from "@/lib/capital-page";

export function CapitalFlowGallery() {
  return (
    <section id="capital-flows" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
              CAPITAL CLAW
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Sovereign Trading Desk
            </h2>
          </div>
          <Link
            href="/capital"
            className="text-xs tracking-[0.2em] text-neon-purple hover:underline"
          >
            FULL CAPITAL PAGE →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
          {capitalFlowShots.map((shot) => (
            <article key={shot.src} className="border-industrial bg-black p-4">
              <div className="overflow-hidden border border-white/10">
                <Image
                  src={shot.src}
                  alt={shot.title}
                  width={1024}
                  height={640}
                  className="h-auto w-full"
                />
              </div>
              <h3 className="mt-4 text-sm font-bold tracking-wide text-white/90">
                {shot.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/50">
                {shot.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
