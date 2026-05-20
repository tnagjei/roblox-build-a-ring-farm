// input: advertising code scripts and container IDs
// output: deferred ad section below page content with 468x60 banner and native banner
// pos: components/AdBanner.tsx (更新规则：广告供应商变更或ID变更时修改此文件)

"use client";

import Script from "next/script";
import SmallBanner from "./SmallBanner";

export default function AdBanner() {
  return (
    <section className="ad-container my-10 flex flex-col items-center justify-center w-full min-h-[100px] gap-4">
      <SmallBanner placement="inline" />
      <span className="text-[10px] text-gray-400 mb-1 uppercase tracking-widest text-center block w-full">Advertisement</span>
      <div
        id="container-31e0ddb2852e4099df42447b213111ebee"
        className="w-full max-w-4xl mx-auto flex justify-center"
      />
      <Script
        src="https://pl29384218.profitablecpmratenetwork.com/31e0ddb2852e4099df42447b213111ebee/invoke.js"
        strategy="afterInteractive"
        data-cfasync="false"
      />
    </section>
  );
}
