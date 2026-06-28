import Link from "next/link";

export function LegalDocument({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-2 text-[10px] tracking-[0.3em] text-neon-purple">
        {eyebrow}
      </p>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-4 text-xs tracking-wide text-white/40">
        Last updated: {updated}
      </p>
      <div className="prose-legal mt-12 space-y-8 text-sm leading-relaxed text-white/70">
        {children}
      </div>
      <p className="mt-12">
        <Link href="/" className="text-sm text-neon-purple hover:underline">
          ← Back to home
        </Link>
      </p>
    </article>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 text-base font-bold tracking-wide text-white/90">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
