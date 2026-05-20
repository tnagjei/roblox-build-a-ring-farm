// input: locale, slug, title, description, and page localization scope
// output: Next.js metadata alternates for localized or English-only pages
// pos: i18n metadata helper

import { gameConfig } from "@/lib/game-config";
import { absoluteUrl } from "@/lib/seo";
import { localeMeta, type Locale } from "./locales";
import { getLocalizedPath } from "./routes";

function localizedLanguages(slug: string) {
  const languages: Record<string, string> = {
    "x-default": absoluteUrl(getLocalizedPath(gameConfig.defaultLocale as Locale, slug))
  };

  gameConfig.completedLocales.forEach((locale) => {
    const typedLocale = locale as Locale;
    const hreflang = localeMeta[typedLocale]?.hreflang || locale;
    languages[hreflang] = absoluteUrl(getLocalizedPath(typedLocale, slug));
  });

  return languages;
}

export function buildLocalizedMetadata({
  locale,
  slug,
  title,
  description
}: {
  locale: Locale;
  slug: string;
  title: string;
  description: string;
}) {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(getLocalizedPath(locale, slug)),
      languages: localizedLanguages(slug)
    }
  };
}

export function buildEnglishOnlyMetadata({
  slug,
  title,
  description
}: {
  slug: string;
  title: string;
  description: string;
}) {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(getLocalizedPath(gameConfig.defaultLocale as Locale, slug)),
      languages: {
        en: absoluteUrl(getLocalizedPath(gameConfig.defaultLocale as Locale, slug)),
        "x-default": absoluteUrl(getLocalizedPath(gameConfig.defaultLocale as Locale, slug))
      }
    }
  };
}
