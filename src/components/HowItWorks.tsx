const beats = [
  {
    step: "01",
    title: "Pick your Claws",
    body: "Capital, Creator, Outreach — or the full stack. Change anytime in Settings.",
  },
  {
    step: "02",
    title: "Chat or tap",
    body: "Flight Command, Telegram, Slack — one local router, same operators.",
  },
  {
    step: "03",
    title: "Local by default",
    body: "Reasoning on your metal. Trades and posts egress only through eno2.",
  },
  {
    step: "04",
    title: "Pull the plug",
    body: "Unplug eno2 — outbound stops cold. Intelligence can stay fully offline.",
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="day-one"
      aria-label="How CurXor works"
      className="border-t border-white/10 bg-white/[0.02] py-12 sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {beats.map((beat) => (
            <article key={beat.step} className="bg-black px-5 py-6 sm:px-6">
              <p className="text-[10px] tracking-[0.3em] text-neon-purple">
                {beat.step}
              </p>
              <h3 className="mt-2 text-sm font-bold tracking-wide text-white/90">
                {beat.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/45">
                {beat.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
