import Image from "next/image";
import Link from "next/link";

const SHOTS = [
  {
    src: "/demo/01-home.png",
    title: "Home hub",
    body: "Start with the Claws you enabled, then open Settings whenever you want to change the stack.",
  },
  {
    src: "/demo/02-settings.png",
    title: "Settings",
    body: "Claws, local/frontier intelligence, OAuth sign-in for OpenAI, light or dark mode, and accent themes live in one place.",
  },
  {
    src: "/demo/03-capital-claw.png",
    title: "Capital Claw",
    body: "Paper-trading workspace with read-only portfolio status and live bridge-ready execution receipts.",
  },
  {
    src: "/demo/04-forge.png",
    title: "The Forge",
    body: "Describe a new digital employee in plain language and deploy it from the appliance itself.",
  },
  {
    src: "/demo/05-vital-claw.png",
    title: "Vital Claw",
    body: "Longevity desk — wearable vitals, medical reports, diet sync, and a local health protocol on your metal.",
  },
  {
    src: "/demo/06-kin-claw.png",
    title: "Kin Claw",
    body: "Household profiles — each member's devices, preferences, and shared context through the Claw Context mesh.",
  },
] as const;

export function ScreenshotGallery() {
  return (
    <section id="demo" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
              FLIGHT COMMAND
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Real Screens From the Appliance UI
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed tracking-wide text-white/40">
            No concept art — live dashboard captures across wealth, create, and
            life &amp; family verticals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SHOTS.map((shot) => (
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

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/pricing"
            className="border border-neon-purple/50 px-5 py-3 text-xs tracking-[0.2em] text-neon-purple transition-colors hover:bg-neon-purple/10"
          >
            VIEW UMA TIERS
          </Link>
          <p className="text-xs text-white/35">
            Local-first by default. Frontier LLMs are optional and bring-your-own-key.
          </p>
        </div>
      </div>
    </section>
  );
}
