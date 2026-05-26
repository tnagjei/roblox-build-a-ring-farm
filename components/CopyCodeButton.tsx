"use client";

// input: code string and optional label
// output: accessible copy button for reported Roblox code candidates
// pos: components/CopyCodeButton.tsx

import { useState } from "react";

type CopyCodeButtonProps = {
  code: string;
  label?: string;
};

export default function CopyCodeButton({ code, label = "Copy" }: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button type="button" className="copy-code-button" onClick={copyCode} aria-label={`Copy ${code}`}>
      {copied ? "Copied" : label}
    </button>
  );
}
