import Image from "next/image";
import Link from "next/link";

import { g3Honesty, g3Screenshots } from "@/lib/g3-demo";
import { actOneStory } from "@/lib/home-story";

const SHOTS = [
  {
    src: g3Screenshots.home,
    title: "Home hub",
    body: "Grouped desk crew. Chat or tap skills.",
  },
  {
    src: g3Screenshots.capitalPaper,
    title: "Capital",
    body: g3Honesty.capitalPractice,
    href: "/capital",
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
    body: g3Honesty.workPipeline,
    href: "/outreach",
  },
] as const;

export function ScreenshotGallery() {
  return (
    <section id="demo" className="band relative scroll-mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
              FLIGHT COMMAND · DEMO
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Three crewmates you&apos;ll run in week one
            </h2>
          </div>
          <p className="max-w-sm text-xs text-white/55">
            Desk captures from MS-S1 metal — Capital, Creator, Outreach.{" "}
            {g3Honesty.deskCapture}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {SHOTS.map((shot) => (
            <article key={shot.src} className="surface p-3">
              <div className="overflow-hidden border border-white/10">
                <Image
                  src={shot.src}
                  alt={`Flight Command ${shot.title} screen captured on the MS-S1 appliance`}
                  width={1024}
                  height={640}
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="h-auto w-full"
                />
              </div>
              <div className="flex items-start justify-between gap-3 px-1 pt-3">
                <div>
                  <h3 className="text-sm font-bold text-white/90">{shot.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">{shot.body}</p>
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

        <p className="mt-6 text-center text-xs leading-relaxed text-white/55">
          {actOneStory.honestyFooter}
        </p>
      </div>
    </section>
  );
}
