import Link from "next/link";

import { InfoTip } from "@/components/InfoTip";

const beats = [
  {
    step: "01",
    title: "Pick your desk crew",
    body: "Capital, Creator, Outreach — or the full stack. Change anytime in Settings.",
  },
  {
    step: "02",
    title: "Chat or tap",
    body: "Flight Command, Telegram, Slack — one local router, same crewmates.",
  },
  {
    step: "03",
    title: "Local by default",
    body: "The AI runs on your box — installed on your metal, not in a cloud tab. No internet required to think.",
  },
  {
    step: "04",
    title: "Pull the plug",
    body: "Unplug eno2 — outbound stops. Intelligence can stay fully offline.",
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="band scroll-mt-24 border-t border-white/10 bg-white/[0.02]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow mb-2">How it works</p>
          <h2
            id="how-it-works-heading"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Day one on your desk
          </h2>
          <p className="mt-3 text-sm text-white/60">
            Pick your desk crew, chat or tap, stay local — pull eno2 when you want outbound off.
          </p>
        </div>
        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {beats.map((beat) => (
            <article key={beat.step} className="bg-black px-5 py-5 sm:px-6">
              <p className="text-[10px] tracking-[0.3em] text-neon-purple">
                {beat.step}
              </p>
              <h3 className="mt-2 flex items-center gap-1.5 text-sm font-bold tracking-wide text-white/90">
                {beat.title}
                {beat.step === "04" ? <InfoTip tipId="eno2" /> : null}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/55">
                {beat.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-white/55">
          Deeper context:{" "}
          <Link
            href="/journal/working-product-on-real-metal"
            className="text-neon-purple hover:underline"
          >
            working product on real metal
          </Link>
          {" · "}
          <Link href="/journal" className="text-neon-purple hover:underline">
            journal
          </Link>
        </p>
      </div>
    </section>
  );
}
