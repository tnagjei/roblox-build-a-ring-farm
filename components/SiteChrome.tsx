// input: app children, site config, page registry, and shared site data
// output: locale-aware site navigation, sponsor CTA, and footer shell limited to completed pages
// pos: global chrome component

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSlugFromPath, getLocalizedPath } from "@/lib/i18n/routes";
import { localeMeta, type Locale } from "@/lib/i18n/locales";
import { gameConfig } from "@/lib/game-config";
import { completedCoreSlugs, completedEnglishOnlySlugs } from "@/lib/page-registry";
import { siteData } from "@/lib/site-data";
import AdBanner from "./AdBanner";
import SponsorCta from "./SponsorCta";
import SmallBanner from "./SmallBanner";

type SiteChromeProps = { children: React.ReactNode };
type FriendLink = { name: string; url: string; badgeUrl?: string };
type NavItem = { href: string; label: string };

const primaryNavSlugs = ["codes", "calculator", "beginners-guide", "money-farming"];
const guideMenuSlugs = ["rings", "update-3-status", "seeds", "crops", "upgrades", "gear-shop", "sprays", "mutations", "fertilizer", "offline-income", "farm-layout", "advanced-crops", "weather-events", "tier-list", "updates"];

function shortLocaleLabel(code: string): string {
  const labels: Record<string, string> = { en: "EN", "zh-tw": "繁中", th: "TH" };
  return labels[code] || code.toUpperCase();
}

const completedLocales = gameConfig.completedLocales.map((code) => ({ code: code as Locale, label: localeMeta[code as Locale]?.nativeName || code, shortLabel: shortLocaleLabel(code) }));
const englishHighIntentSlugs = completedEnglishOnlySlugs.map((slug) => ({ href: getLocalizedPath("en", slug), label: labelForSlug(slug) }));

function labelForSlug(slug: string): string {
  const page = siteData.pages.find((item) => item.key === slug);
  if (page?.focus) return page.focus;
  return slug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function pageForSlug(slug: string, locale: Locale): NavItem | null {
  const page = siteData.pages.find((item) => item.key === slug);
  if (!page) return null;
  return { href: getLocalizedPath(locale, page.path), label: page.focus };
}

function getCurrentLocale(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const matched = completedLocales.find((item) => item.code === firstSegment)?.code;
  return matched || (gameConfig.defaultLocale as Locale);
}

function normalizedCurrentSlug(pathname: string) {
  const slug = getSlugFromPath(pathname);
  return completedCoreSlugs.includes(slug as never) ? slug : "";
}

function brandMark(value: string): string {
  const initials = value.split(/\s+/).filter(Boolean).slice(0, 3).map((part) => part[0]?.toUpperCase()).join("");
  return initials || "GG";
}

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();
  const currentLocale = getCurrentLocale(pathname);
  const currentSlug = normalizedCurrentSlug(pathname);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);
  const coreNavKeys = completedCoreSlugs.filter((slug) => slug !== "");
  const footerNavItems = coreNavKeys.map((key) => siteData.pages.find((p) => p.key === key)).filter((p) => p !== undefined).map((p) => ({ href: getLocalizedPath(currentLocale, p.path), label: p.focus }));
  const primaryNavItems = primaryNavSlugs.filter((slug) => completedCoreSlugs.includes(slug as never)).map((slug) => pageForSlug(slug, currentLocale)).filter((item): item is NavItem => Boolean(item));
  const guideMenuItems = guideMenuSlugs.filter((slug) => completedCoreSlugs.includes(slug as never)).map((slug) => pageForSlug(slug, currentLocale)).filter((item): item is NavItem => Boolean(item));
  const currentLanguage = completedLocales.find((item) => item.code === currentLocale);
  const isEnglish = currentLocale === gameConfig.defaultLocale;
  const developerName = siteData.game.creator.name || "the game developer";
  const friendLinks = siteData.site.friendLinks as FriendLink[];
  const officialGroupLabel = gameConfig.creatorName || siteData.game.creator.name || "Developer group";

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" href={getLocalizedPath(currentLocale, "")} aria-label={`${siteData.site.name} home`}>
          <span className="brand-mark">{brandMark(siteData.site.shortName)}</span>
          <span><strong>{siteData.site.shortName}</strong><small>Roblox guide</small></span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {primaryNavItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <div className="guide-dropdown">
            <button type="button" className="guide-dropdown-trigger" aria-label="Open guide navigation" aria-expanded={isGuidesOpen} aria-haspopup="menu" onClick={() => setIsGuidesOpen((current) => !current)} onBlur={(event) => { if (!event.currentTarget.parentElement?.contains(event.relatedTarget as Node | null)) setIsGuidesOpen(false); }}>
              <span>Guides</span><strong>▾</strong>
            </button>
            {isGuidesOpen ? (
              <div className="guide-dropdown-menu" role="menu" aria-label="Guide navigation" onMouseDown={(event) => event.preventDefault()}>
                {guideMenuItems.map((item) => <Link key={item.href} href={item.href} role="menuitem" onClick={() => setIsGuidesOpen(false)}>{item.label}</Link>)}
                {isEnglish ? englishHighIntentSlugs.map((item) => <Link key={item.href} href={item.href} role="menuitem" onClick={() => setIsGuidesOpen(false)}>{item.label}</Link>) : null}
              </div>
            ) : null}
          </div>
          <div className="language-dropdown">
            <button type="button" className="language-dropdown-trigger" aria-label="Choose language" aria-expanded={isLanguageOpen} aria-haspopup="menu" onClick={() => setIsLanguageOpen((current) => !current)} onBlur={(event) => { if (!event.currentTarget.parentElement?.contains(event.relatedTarget as Node | null)) setIsLanguageOpen(false); }}>
              <span>Language</span><strong>{currentLanguage?.shortLabel || "EN"}</strong>
            </button>
            {isLanguageOpen ? (
              <div className="language-dropdown-menu" role="menu" aria-label="Language navigation" onMouseDown={(event) => event.preventDefault()}>
                {completedLocales.map((item) => <Link key={item.code} href={getLocalizedPath(item.code, currentSlug)} role="menuitem" onClick={() => setIsLanguageOpen(false)}><span>{item.shortLabel}</span><strong>{item.label}</strong></Link>)}
              </div>
            ) : null}
          </div>
          <SponsorCta className="sponsor-nav-cta" label="Sponsor" />
          <a className="nav-cta" href={siteData.game.robloxUrl} target="_blank" rel="noopener noreferrer">Open Game</a>
        </nav>
      </header>
      <div className="sponsor-hero-card" role="complementary" aria-label="Sponsored link">
        <div>
          <span>Sponsored</span>
          <strong>Roblox player offer</strong>
          <p>Optional sponsor link. The official game button stays in the header.</p>
        </div>
        <SponsorCta className="sponsor-card-cta" label="Visit Sponsor" />
      </div>
      <SmallBanner />
      {children}
      <div className="sponsor-mobile-bar" role="complementary" aria-label="Sponsored link">
        <span>Sponsored</span>
        <SponsorCta className="sponsor-mobile-cta" label="Visit Sponsor" />
      </div>
      <AdBanner />
      <footer className="site-footer">
        <div className="footer-clusters">
          <div className="footer-cluster">
            <h3>Guides</h3>
            {footerNavItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
            {isEnglish ? englishHighIntentSlugs.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>) : null}
          </div>
          <div className="footer-cluster">
            <h3>Languages</h3>
            {completedLocales.map((item) => <Link href={getLocalizedPath(item.code, currentSlug)} key={item.code}>{item.label}</Link>)}
          </div>
          <div className="footer-cluster">
            <h3>Official & Contact</h3>
            <a href={siteData.game.robloxUrl} target="_blank" rel="noopener noreferrer">Play on Roblox</a>
            {gameConfig.robloxGroupUrl ? <a href={gameConfig.robloxGroupUrl} target="_blank" rel="noopener noreferrer">{officialGroupLabel}</a> : null}
            <a href={`mailto:${siteData.site.contactEmail}`}>Contact</a>
            <Link href={getLocalizedPath(currentLocale, "codes")}>Code Safety</Link>
          </div>
        </div>
        {friendLinks.length > 0 && (
          <section className="friend-links-section"><div className="friend-links-container"><div className="friend-links-scroller">
            {[...friendLinks, ...friendLinks, ...friendLinks, ...friendLinks].map((link, i) => <a key={`${link.url}-${i}`} href={link.url} target="_blank" rel="noopener noreferrer" className="friend-link-item">{link.badgeUrl ? <img src={link.badgeUrl} alt={link.name} /> : <span className="friend-link-text">{link.name}</span>}</a>)}
          </div></div></section>
        )}
        <div className="footer-summary"><strong>{siteData.site.name}</strong><p>Independent fan guide. Not affiliated with Roblox Corporation or {developerName}.</p></div>
        <div className="footer-meta"><span>Contact: {siteData.site.contactEmail}</span><span>Last full check: {siteData.site.lastFullCheck}</span></div>
        <p className="copyright">© 2026 {siteData.site.copyrightOwner}. All Roblox trademarks belong to their respective owners.</p>
      </footer>
    </div>
  );
}
