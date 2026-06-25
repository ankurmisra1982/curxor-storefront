"use client";

import { FormEvent, useState } from "react";
import { trackEmailSubscribe } from "@/lib/analytics";
import { siteConfig } from "@/lib/config";

type SubscribeFormProps = {
  variant?: "default" | "hero";
  className?: string;
};

export function SubscribeForm({ variant = "default", className = "" }: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage(null);
    try {
      const res = await fetch(siteConfig.emailEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const payload = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(payload?.error ?? "Subscribe failed");
      }
      trackEmailSubscribe();
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      if (
        error instanceof Error &&
        error.message === "Email service is not configured"
      ) {
        setErrorMessage(
          "Waitlist signup is temporarily offline. Email hello@curxor.ai and we'll add you."
        );
      } else {
        setErrorMessage("Something went wrong. Try again or reach us on social.");
      }
    }
  }

  const isHero = variant === "hero";

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className={
          isHero
            ? "flex max-w-md flex-col gap-3 sm:flex-row"
            : "flex max-w-md flex-col gap-3 sm:flex-row"
        }
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@domain.com"
          aria-label="Email address"
          className={
            isHero
              ? "flex-1 border-industrial bg-black px-4 py-4 text-sm text-white placeholder:text-white/30 focus:border-neon-purple/50 focus:outline-none"
              : "flex-1 border-industrial bg-black px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-neon-purple/50 focus:outline-none"
          }
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={
            isHero
              ? "bg-neon-purple px-8 py-4 text-sm font-bold tracking-[0.2em] text-black transition-all hover:bg-neon-glow disabled:opacity-50"
              : "border border-neon-purple/50 px-6 py-3 text-xs font-bold tracking-[0.2em] text-neon-purple transition-all hover:bg-neon-purple/10 disabled:opacity-50"
          }
        >
          {status === "loading" ? "..." : isHero ? "JOIN WAITLIST" : "SUBSCRIBE"}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-3 text-xs text-neon-purple">✓ You&apos;re on the list.</p>
      )}
      {status === "error" && (
        <p className="mt-3 text-xs text-white/50">
          {errorMessage ?? "Something went wrong. Try again or reach us on social."}
        </p>
      )}
    </div>
  );
}
