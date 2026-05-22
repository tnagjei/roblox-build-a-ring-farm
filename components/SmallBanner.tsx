// input: optional inline placement flag for small banner slot
// output: rendered 468x60 iframe ad in production
// pos: components/SmallBanner.tsx（更新规则：广告 ID 变更需同步更新此文件）

"use client";

import { useEffect, useRef } from "react";

type SmallBannerProps = {
  placement?: "inline";
};

const isProduction = process.env.NODE_ENV === "production";

export default function SmallBanner(_props: SmallBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 仅在生产环境下加载广告，且容器存在
    if (!isProduction || !containerRef.current) return;
    
    // 避免重复挂载
    if (containerRef.current.hasChildNodes()) return;

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
    drawScript.src = "https://www.highperformanceformat.com/a2fef08300b2d12d4c60b7d3203071e2/invoke.js";

    containerRef.current.appendChild(confScript);
    containerRef.current.appendChild(drawScript);
  }, []);

  if (!isProduction) return null;

  return (
    <div className="flex justify-center items-center my-4 w-full overflow-hidden min-h-[60px]">
      <div ref={containerRef} id="container-a2fef08300b2d12d4c60b7d3203071e2" />
    </div>
  );
}
