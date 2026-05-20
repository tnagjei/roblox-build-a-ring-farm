// input: guide slug and completed locale config
// output: visible language alternate links for completed localized pages
// pos: multilingual internal linking component

import Link from "next/link";
import { gameConfig } from "@/lib/game-config";
import { localeMeta, type Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";
import { siteData } from "@/lib/site-data";

type LanguageAlternatesProps = {
  slug: string;
  title?: string;
  description?: string;
};

function pageTitle(slug: string) {
  const page = siteData.pages.find((item) => item.path === getLocalizedPath(gameConfig.defaultLocale as Locale, slug));
  return page?.h1 || siteData.game.name;
}

export function LanguageAlternates({
  slug,
  title = "Available language versions",
  description = "Use a localized version when you want translated guidance while keeping original game terms."
}: LanguageAlternatesProps) {
  const pages = gameConfig.completedLocales.map((locale) => {
    const typedLocale = locale as Locale;
    return {
      path: getLocalizedPath(typedLocale, slug),
      hreflang: localeMeta[typedLocale]?.hreflang || locale,
      nativeName: localeMeta[typedLocale]?.nativeName || locale,
      title: pageTitle(slug)
    };
  });

  if (pages.length === 0) {
    return null;
  }

  return (
    <section className="language-alternates-section" aria-labelledby={`language-alternates-${slug || "home"}`}>
      <div className="section-heading language-switcher-heading">
        <p className="eyebrow">Languages</p>
        <h2 id={`language-alternates-${slug || "home"}`}>{title}</h2>
        <p className="language-alternates-description">{description}</p>
      </div>
      <div className="language-alternates-grid" aria-label="Language versions">
        {pages.map((page) => (
          <Link className="language-alternate-card" href={page.path} key={page.path} hrefLang={page.hreflang}>
            <span className="language-code">{page.hreflang}</span>
            <strong>{page.nativeName}</strong>
            <small>{page.title}</small>
          </Link>
        ))}
      </div>
    </section>
  );
}
