"use client";

import { useState } from "react";

type CopyLinkButtonProps = {
  url: string;
  className?: string;
};

export function CopyLinkButton({
  url,
  className = "text-neon-purple transition-colors hover:text-white/80",
}: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button type="button" onClick={handleCopy} className={className}>
      {copied ? "COPIED" : "COPY LINK →"}
    </button>
  );
}
