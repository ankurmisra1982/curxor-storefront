"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch(siteConfig.emailEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Subscribe failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="relative border-t border-white/10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.3em] text-neon-purple">
              STAY IN ORBIT
            </p>
            <h3 className="mb-2 text-xl font-bold tracking-tight">
              Get launch updates
            </h3>
            <p className="mb-6 max-w-sm text-xs leading-relaxed text-white/40">
              Ship dates, firmware drops, and pre-order availability — delivered
              to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                aria-label="Email address"
                className="flex-1 border-industrial bg-black px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-neon-purple/50 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="border border-neon-purple/50 px-6 py-3 text-xs font-bold tracking-[0.2em] text-neon-purple transition-all hover:bg-neon-purple/10 disabled:opacity-50"
              >
                {status === "loading" ? "..." : "SUBSCRIBE"}
              </button>
            </form>

            {status === "success" && (
              <p className="mt-3 text-xs text-neon-purple">
                ✓ You&apos;re on the list.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-xs text-white/50">
                Something went wrong. Try again or reach us on X.
              </p>
            )}
          </div>

          <div className="flex flex-col items-start md:items-end">
            <a
              href={siteConfig.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 inline-flex items-center gap-2 text-xs tracking-widest text-white/60 transition-colors hover:text-neon-purple"
            >
              <span className="text-neon-purple">𝕏</span>
              {siteConfig.twitterHandle}
            </a>

            <div className="text-right">
              <p className="text-2xl font-bold tracking-tight text-white/90">
                Designed for the edge.
              </p>
              <p className="mt-2 text-[10px] tracking-[0.3em] text-white/30">
                © {new Date().getFullYear()} CURXOR SYSTEMS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
