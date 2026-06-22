import Image from "next/image";
import Link from "next/link";

const SHOTS = [
  {
    src: "/demo/01-home.png",
    title: "Home hub",
    body: "Grouped Claws. Chat or tap skills. Settings when you want more.",
  },
  {
    src: "/demo/03-capital-claw.png",
    title: "Capital Claw",
    body: "Demo tour · rules · simulated fills · Go Live without broker keys.",
    href: "/capital",
  },
  {
    src: "/demo/08-creator-claw.png",
    title: "Creator Claw",
    body: "Draft local · schedule · simulated publish · 10 bridges when you scale.",
    href: "/creator",
  },
  {
    src: "/demo/07-unified-inbox.png",
    title: "Outreach Claw",
    body: "Pipeline · A/B sequences · pause-on-reply · SMTP on eno2.",
    href: "/outreach",
  },
  {
    src: "/demo/04-forge.png",
    title: "The Forge",
    body: "One prompt → custom Claw deployed on your appliance.",
  },
] as const;

export function ScreenshotGallery() {
  return (
    <section id="demo" className="relative border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
              FLIGHT COMMAND
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              See the desk
            </h2>
          </div>
          <p className="max-w-sm text-xs text-white/40">
            Live OS captures — not concept art.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SHOTS.map((shot, index) => (
            <article
              key={shot.src}
              className={`border-industrial bg-black p-3 ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="overflow-hidden border border-white/10">
                <Image
                  src={shot.src}
                  alt={shot.title}
                  width={1024}
                  height={640}
                  className="h-auto w-full"
                />
              </div>
              <div className="flex items-start justify-between gap-3 px-1 pt-3">
                <div>
                  <h3 className="text-sm font-bold text-white/90">{shot.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/45">
                    {shot.body}
                  </p>
                </div>
                {"href" in shot && shot.href ? (
                  <Link
                    href={shot.href}
                    className="shrink-0 text-[10px] tracking-[0.2em] text-neon-purple hover:underline"
                  >
                    TOUR →
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
