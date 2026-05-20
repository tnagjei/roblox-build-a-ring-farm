// input: optional inline placement flag for 468x60 banner
// output: 468x60 banner only when explicitly rendered inline, not in the top header slot
// pos: components/SmallBanner.tsx (更新规则：广告 ID 变更需同步更新此文件)

"use client";

import { useEffect, useRef } from "react";

type SmallBannerProps = {
  placement?: "inline";
};

export default function SmallBanner({ placement }: SmallBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (placement !== "inline") return;
    if (typeof window === "undefined" || !bannerRef.current) return;

    (window as any).atOptions = {
      key: "2b724caac0e693d73173f940d7280f5a",
      format: "iframe",
      height: 60,
      width: 468,
      params: {}
    };

    const script = document.createElement("script");
    script.src = "https://www.highperformanceformat.com/2b724caac0e693d73173f940d7280f5a/invoke.js";
    script.async = true;
    script.id = "small-banner-script-inline";

    bannerRef.current.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [placement]);

  if (placement !== "inline") {
    return null;
  }

  return (
    <div className="small-banner-wrapper flex flex-col items-center justify-center w-full py-4 bg-gray-50/50 border-y border-gray-100 min-h-[90px]">
      <span className="text-[9px] text-gray-400 mb-1 uppercase tracking-tighter">Sponsored</span>
      <div ref={bannerRef} className="flex justify-center w-full overflow-hidden" style={{ minHeight: "60px" }} />
    </div>
  );
}
