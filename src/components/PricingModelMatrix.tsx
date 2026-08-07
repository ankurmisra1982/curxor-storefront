"use client";

import { useState } from "react";

import { pricingModels, pricingTiers } from "@/lib/generated/pricing-sync";

function roleLabel(role: string): string {
  if (role === "vla") return "vision + action";
  return role;
}

function isLegacyModel(name: string): boolean {
  return /\(legacy\)/i.test(name);
}

/** Catalog entries sized for the 128 GB SKU — a Standard 64 buyer must not read them as included. */
function needsPro128(description: string): boolean {
  return /128 GB/i.test(description);
}

/** Buyer overlay — appliance sync may still carry internal role names or third-party bench labels. */
function publicModelDescription(description: string): string {
  return description
    .replace(/\bBuild Plane\b/gi, "heavy agent")
    .replace(
      /\bStrix Halo coding leader\s*[—-]\s*~?\d+%?\s*SWE-mini on pi-bench;?\s*/gi,
      "Strong local coding model — ",
    )
    .replace(/\bpi-bench sweet spot\b/gi, "strong local coding fit")
    .replace(/\bon pi-bench\b/gi, "for local coding workloads")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export function PricingModelMatrix() {
  const [showLegacy, setShowLegacy] = useState(false);
  const legacyCount = pricingModels.filter((m) => isLegacyModel(m.name)).length;

  return (
    <div className="mt-14">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <p className="text-[10px] tracking-[0.25em] text-neon-purple">
          MODEL BUDGETS BY UMA TIER
        </p>
        <button
          type="button"
          onClick={() => setShowLegacy((v) => !v)}
          className="border border-white/15 px-3 py-2 text-[10px] tracking-[0.2em] text-white/60 transition-colors hover:border-neon-purple/40 hover:text-neon-purple"
          aria-pressed={showLegacy}
        >
          {showLegacy ? "HIDE LEGACY MODELS" : `SHOW FULL MATRIX · ${legacyCount} LEGACY`}
        </button>
      </div>

      <div className="grid gap-px border border-white/10 bg-white/10 lg:grid-cols-3">
        {pricingTiers.map((tier) => {
          const models = pricingModels.filter(
            (model) =>
              model.tiers.some((supportedTier) => supportedTier === tier.id) &&
              (showLegacy || !isLegacyModel(model.name)),
          );
          return (
            <article key={tier.id} className="bg-black p-8">
              <p className="mb-3 text-[10px] tracking-[0.25em] text-neon-purple">
                {tier.label.toUpperCase()}
              </p>
              <h2 className="text-3xl font-bold text-white">{tier.umaCapGb} GB UMA</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{tier.description}</p>
              <ul className="mt-8 space-y-4">
                {models.map((model) => (
                  <li key={model.id} className="border-t border-white/10 pt-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-bold text-white/90">
                        {model.name}
                        {isLegacyModel(model.name) ? (
                          <span className="ml-2 text-[9px] font-normal tracking-widest text-white/55">
                            LEGACY
                          </span>
                        ) : null}
                        {needsPro128(model.description) ? (
                          <span className="ml-2 border border-white/20 px-1.5 py-0.5 text-[9px] font-normal tracking-widest text-white/60">
                            NEEDS PRO 128
                          </span>
                        ) : null}
                      </span>
                      <span className="text-[10px] tracking-[0.25em] text-white/60">
                        {model.tokensPerSec} TOK/S
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-white/55">
                      {roleLabel(model.role)} · {model.umaGb} GB UMA ·{" "}
                      {publicModelDescription(model.description)}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-white/60">
        Everything without a badge runs on the Standard 64 appliance you can buy
        today. Entries marked <span className="text-white/70">NEEDS PRO 128</span>{" "}
        are catalog headroom for the 128 GB SKU — listed so you can see where the
        stack goes, not included at $3,999.
      </p>
    </div>
  );
}
