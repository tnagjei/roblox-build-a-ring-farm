// input: locale and slug/path values
// output: canonical localized paths and slug parsing helpers
// pos: i18n route helpers

import { gameConfig } from "@/lib/game-config";
import type { Locale } from "./locales";

const localePattern = new RegExp(`^/(${gameConfig.completedLocales.join("|")})(?=/|$)`);

export function getLocalizedPath(locale: Locale, slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");

  if (locale === gameConfig.defaultLocale) {
    return cleanSlug ? `/${cleanSlug}/` : "/";
  }

  return cleanSlug ? `/${locale}/${cleanSlug}/` : `/${locale}/`;
}

export function getSlugFromPath(pathname: string) {
  return pathname.replace(localePattern, "").replace(/^\/+|\/+$/g, "");
}

export function switchLocalePath(pathname: string, nextLocale: Locale) {
  return getLocalizedPath(nextLocale, getSlugFromPath(pathname));
}
