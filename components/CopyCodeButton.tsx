"use client";

// input: code string and optional label
// output: accessible copy button for reported Roblox code candidates
// pos: components/CopyCodeButton.tsx（更新规则：文件变更需同步本注释与所属目录 README）

import { useState } from "react";
import { sendGAEvent } from "@/lib/analytics";

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
      sendGAEvent("copy_code", {
        event_source: "copy_code_button",
        code: code
      });
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
