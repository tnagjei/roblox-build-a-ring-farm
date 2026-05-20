// input: locale, slug, title, description, and page localization scope
// output: Next.js metadata alternates and social metadata for localized or English-only pages
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

function buildSocialMetadata({
  title,
  description,
  canonical,
  type = "website"
}: {
  title: string;
  description: string;
  canonical: string;
  type?: "website" | "article";
}) {
  const socialImage = absoluteUrl("/opengraph-image");

  return {
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: gameConfig.siteName,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: `${gameConfig.gameName} social guide image`
        }
      ],
      type
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage]
    }
  };
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
  const canonical = absoluteUrl(getLocalizedPath(locale, slug));

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: localizedLanguages(slug)
    },
    ...buildSocialMetadata({ title, description, canonical })
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
  const canonical = absoluteUrl(getLocalizedPath(gameConfig.defaultLocale as Locale, slug));

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: canonical,
        "x-default": canonical
      }
    },
    ...buildSocialMetadata({ title, description, canonical })
  };
}
