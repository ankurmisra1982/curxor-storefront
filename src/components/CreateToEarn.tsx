import { forgeExamplePrompt, siteConfig } from "@/lib/config";

const forgeBeats = [
  {
    step: "01",
    title: "Buy the box",
    body: "$3,999 once · 126 TOPS · 64 GB UMA · no token meter.",
  },
  {
    step: "02",
    title: "Forge a Claw",
    body: "One sentence in The Forge → deployed on your metal, wired to eno2.",
  },
  {
    step: "03",
    title: "Post the desk",
    body: `Screenshot your setup. Tag ${siteConfig.twitterHandle}. Pull an operator line if you want.`,
  },
] as const;

export function CreateToEarn() {
  return (
    <section id="forge-loop" className="relative border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-xl">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
            THE FORGE LOOP
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Mint your own operator
          </h2>
          <p className="mt-2 text-sm text-white/45">
            The frontier moment is local — own the silicon, ship the story.
          </p>
        </div>

        <div className="mb-8 border border-neon-purple/30 bg-neon-purple/[0.03] p-5 sm:p-6">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
            EXAMPLE FORGE PROMPT
          </p>
          <p className="text-sm leading-relaxed text-white/80">
            &ldquo;{forgeExamplePrompt}&rdquo;
          </p>
        </div>

        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
          {forgeBeats.map((item) => (
            <div key={item.step} className="bg-black p-6">
              <p className="text-[10px] tracking-[0.3em] text-neon-purple">
                {item.step}
              </p>
              <h3 className="mt-3 text-sm font-bold tracking-wide">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/50">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
