// input: NEXT_PUBLIC_SOCIAL_BAR_SRC
// output: optional social bar ad script loaded after interaction
// pos: components/SocialBarAd.tsx

import Script from "next/script";

const isProduction = process.env.NODE_ENV === "production";
const socialBarSrc = isProduction ? process.env.NEXT_PUBLIC_SOCIAL_BAR_SRC || "" : "";

export default function SocialBarAd() {
  if (!socialBarSrc) return null;

  return <Script src={socialBarSrc} strategy="afterInteractive" />;
}
