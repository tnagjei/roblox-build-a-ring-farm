"use client";

// input: production ad script URLs and optional AdSense client id
// output: delayed ad scripts injected after scroll depth or timeout
// pos: shared ad script loader（更新规则：广告加载策略变化需同步本注释与所属目录 README）

import { useEffect } from "react";

type LazyAdLoaderProps = {
  adsenseClient?: string;
  thirdPartyAdScripts?: readonly string[];
  socialBarSrc?: string;
};

const ADSENSE_SCRIPT_ID = "lazy-adsense-script";
const SCROLL_THRESHOLD = 600;
const FALLBACK_DELAY_MS = 4000;

function injectScript(src: string, id?: string, crossOrigin?: string) {
  if (!src || (id && document.getElementById(id))) return;
  if (!id && document.querySelector(`script[src="${src}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  if (id) script.id = id;
  if (crossOrigin) script.crossOrigin = crossOrigin;
  document.body.appendChild(script);
}

export default function LazyAdLoader({ adsenseClient, thirdPartyAdScripts = [], socialBarSrc }: LazyAdLoaderProps) {
  useEffect(() => {
    const adSources = thirdPartyAdScripts.filter(Boolean);
    let loaded = false;

    function loadAds() {
      if (loaded) return;
      loaded = true;
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(timeoutId);

      if (adsenseClient) {
        injectScript(
          `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`,
          ADSENSE_SCRIPT_ID,
          "anonymous"
        );
      }

      adSources.forEach((src) => injectScript(src));
      if (socialBarSrc) injectScript(socialBarSrc, "lazy-social-bar-script");
    }

    function handleScroll() {
      if (window.scrollY >= SCROLL_THRESHOLD) loadAds();
    }

    const timeoutId = window.setTimeout(loadAds, FALLBACK_DELAY_MS);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(timeoutId);
    };
  }, [adsenseClient, thirdPartyAdScripts, socialBarSrc]);

  return null;
}
