import { createToEarnSteps, forgeExamplePrompt, shareLines, siteConfig } from "@/lib/config";

export function CreateToEarn() {
  return (
    <section id="forge-loop" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
              THE FORGE LOOP
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Create-to-Earn in 30 Days
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed tracking-wide text-white/40">
            64GB of local inference. One prompt. A Claw that runs while you sleep.
            Post your setup on X — tag {siteConfig.twitterHandle}.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {shareLines.map((line) => (
            <p
              key={line}
              className="border border-white/10 px-4 py-2 text-[11px] tracking-wide text-white/50"
            >
              &ldquo;{line}&rdquo;
            </p>
          ))}
        </div>

        <div className="mb-12 border border-neon-purple/30 bg-neon-purple/[0.03] p-6 sm:p-8">
          <p className="mb-3 text-[10px] tracking-[0.3em] text-neon-purple">
            EXAMPLE FORGE PROMPT — COPY &amp; PASTE ON X
          </p>
          <p className="text-sm leading-relaxed text-white/80 sm:text-base">
            &ldquo;{forgeExamplePrompt}&rdquo;
          </p>
        </div>

        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {createToEarnSteps.map((item) => (
            <div key={item.step} className="bg-black p-8">
              <p className="mb-4 text-[10px] tracking-[0.3em] text-neon-purple">
                STEP {item.step}
              </p>
              <h3 className="mb-3 text-sm font-bold tracking-wide">{item.title}</h3>
              <p className="text-xs leading-relaxed text-white/50">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
