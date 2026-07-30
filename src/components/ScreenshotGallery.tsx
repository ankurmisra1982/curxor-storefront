import Image from "next/image";
import Link from "next/link";

import { g3Honesty, g3Screenshots } from "@/lib/g3-demo";
import { actOneStory } from "@/lib/home-story";

const SHOTS = [
  {
    src: g3Screenshots.home,
    title: "Home hub",
    body: "Grouped desk crew. Chat or tap skills. Demo capture from MS-S1 box.",
  },
  {
    src: g3Screenshots.capitalPaper,
    title: "Capital",
    body: "Practice mode · paper book. Rules and cafe proof on metal.",
    href: "/capital",
    honesty: g3Honesty.capitalPractice,
  },
  {
    src: g3Screenshots.creatorQueue,
    title: "Creator",
    body: "Create queue · sovereign copy · schedule with approval gates.",
    href: "/creator",
  },
  {
    src: g3Screenshots.workPipeline,
    title: "Outreach",
    body: "Pipeline · sequences · pause-on-reply. UI real; sends when bridges wired.",
    href: "/outreach",
    honesty: g3Honesty.workPipeline,
  },
  {
    src: g3Screenshots.cafeRuleFired,
    title: "Crew Cafe proof",
    body: "RULE FIRED from real Capital activity — not a cloud alert toy.",
  },
] as const;

export function ScreenshotGallery() {
  return (
    <section id="demo" className="relative scroll-mt-24 border-t border-white/10 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
              FLIGHT COMMAND · DEMO
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Three crewmates you&apos;ll run in week one
            </h2>
          </div>
          <p className="max-w-sm text-xs text-white/40">
            Desk captures from MS-S1 metal — Capital, Creator, Outreach.{" "}
            {g3Honesty.deskCapture}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  {"honesty" in shot && shot.honesty ? (
                    <p className="mt-2 text-[10px] leading-relaxed text-amber-200/70">
                      {shot.honesty}
                    </p>
                  ) : null}
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

        <p className="mt-6 text-center text-xs leading-relaxed text-white/40">
          {actOneStory.honestyFooter}
        </p>
      </div>
    </section>
  );
}
