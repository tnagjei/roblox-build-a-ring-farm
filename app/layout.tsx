// input: Next.js App Router children, site config, and site data
// output: root HTML layout with shared chrome and optional integrations
// pos: app root layout

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import "./language.css";
import { SiteChrome } from "@/components/SiteChrome";
import { gameConfig } from "@/lib/game-config";
import { siteData } from "@/lib/site-data";
import { siteUrl } from "@/lib/seo";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID || gameConfig.analytics.googleAnalyticsId;
const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || gameConfig.analytics.adsenseClient;
const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID || gameConfig.analytics.clarityId;
const yandexVerification = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || gameConfig.analytics.yandexVerification;
const thirdPartyAdScripts = gameConfig.analytics.thirdPartyAdScripts;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${gameConfig.siteName} | Codes, Tier List, Units, Updates`,
    template: "%s"
  },
  description: siteData.site.description,
  applicationName: siteData.site.name,
  authors: [{ name: siteData.site.name }],
  alternates: {
    canonical: siteUrl
  },
  verification: yandexVerification ? { yandex: yandexVerification } : undefined
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17241f"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={gameConfig.defaultLocale}>
      <body>
        {adsenseClient ? (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        ) : null}
        {googleAnalyticsId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        ) : null}
        {clarityId ? (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </Script>
        ) : null}
        {thirdPartyAdScripts.map((src) => (
          <Script key={src} src={src} strategy="lazyOnload" />
        ))}
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
