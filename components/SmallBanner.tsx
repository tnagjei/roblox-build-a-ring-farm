"use client";

// input: optional inline placement flag for small banner slot
// output: rendered 468x60 iframe ad in production after scroll depth or timeout
// pos: components/SmallBanner.tsx（更新规则：广告 ID 或加载策略变更需同步更新此文件）

import { useEffect, useRef } from "react";

type SmallBannerProps = {
  placement?: "inline";
};

const isProduction = process.env.NODE_ENV === "production";
const SCROLL_THRESHOLD = 600;
const FALLBACK_DELAY_MS = 4000;

export default function SmallBanner(_props: SmallBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isProduction || !containerRef.current) return;
    let loaded = false;

    function loadBanner() {
      if (loaded || !containerRef.current || containerRef.current.hasChildNodes()) return;
      loaded = true;
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(timeoutId);

      const confScript = document.createElement("script");
      confScript.type = "text/javascript";
      confScript.innerHTML = `
        atOptions = {
          'key' : 'a2fef08300b2d12d4c60b7d3203071e2',
          'format' : 'iframe',
          'height' : 60,
          'width' : 468,
          'params' : {}
        };
      `;

      const drawScript = document.createElement("script");
      drawScript.type = "text/javascript";
      drawScript.async = true;
      drawScript.src = "https://www.highperformanceformat.com/a2fef08300b2d12d4c60b7d3203071e2/invoke.js";

      containerRef.current.appendChild(confScript);
      containerRef.current.appendChild(drawScript);
    }

    function handleScroll() {
      if (window.scrollY >= SCROLL_THRESHOLD) loadBanner();
    }

    const timeoutId = window.setTimeout(loadBanner, FALLBACK_DELAY_MS);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(timeoutId);
    };
  }, []);

  if (!isProduction) return null;

  return (
    <div className="flex justify-center items-center my-4 w-full overflow-hidden min-h-[60px]">
      <div ref={containerRef} id="container-a2fef08300b2d12d4c60b7d3203071e2" />
    </div>
  );
}
