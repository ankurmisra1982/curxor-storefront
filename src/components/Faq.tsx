import { faqItems } from "@/lib/config";

export function Faq() {
  return (
    <section id="faq" className="relative border-t border-white/10 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pre-Order Questions
          </h2>
        </div>

        <div className="space-y-px border border-white/10 bg-white/10">
          {faqItems.map((item) => (
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
      </div>
    </section>
  );
}
