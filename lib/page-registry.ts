// input: site config route groups, completion flags, and trust page slugs
// output: canonical route lists for sitemap, robots, footer, and hreflang
// pos: site route registry（更新规则：路由注册变化需同步 app/README 与相关测试）

import { gameConfig } from "@/lib/game-config";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export type RouteEntry = {
  locale: string;
  slug: string;
  path: string;
  scope: "core" | "english-only" | "trust";
  changeFrequency: ChangeFrequency;
  priority: number;
};

export const completedLocales = [...gameConfig.completedLocales];
export const coreSlugs = [...gameConfig.coreSlugs];
export const completedCoreSlugs = [...gameConfig.completedCoreSlugs];
export const englishOnlySlugs = [...gameConfig.englishOnlySlugs];
export const completedEnglishOnlySlugs = [...gameConfig.completedEnglishOnlySlugs];

export function getSiteLocalizedPath(locale: string, slug: string): string {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");

  if (locale === gameConfig.defaultLocale) {
    return cleanSlug ? `/${cleanSlug}/` : "/";
  }

  return cleanSlug ? `/${locale}/${cleanSlug}/` : `/${locale}/`;
}

function coreRoutePriority(locale: string, slug: string): number {
  const isDefaultLocale = locale === gameConfig.defaultLocale;
  const isHome = slug === "";
  const isCodes = slug === "codes";

  if (isHome) {
    return isDefaultLocale ? 1 : 0.9;
  }

  if (isCodes) {
    return 0.85;
  }

  return isDefaultLocale ? 0.8 : 0.75;
}

function coreRouteFrequency(slug: string): ChangeFrequency {
  return slug === "" || slug === "codes" ? "daily" : "weekly";
}

function englishOnlyPriority(slug: string): number {
  if (slug === "scripts") {
    return 0.82;
  }

  return 0.78;
}

export const completedCoreRoutes: RouteEntry[] = completedLocales.flatMap((locale) =>
  completedCoreSlugs.map((slug) => ({
    locale,
    slug,
    path: getSiteLocalizedPath(locale, slug),
    scope: "core" as const,
    changeFrequency: coreRouteFrequency(slug),
    priority: coreRoutePriority(locale, slug)
  }))
);

export const englishOnlyRoutes: RouteEntry[] = completedEnglishOnlySlugs.map((slug) => ({
  locale: gameConfig.defaultLocale,
  slug,
  path: getSiteLocalizedPath(gameConfig.defaultLocale, slug),
  scope: "english-only" as const,
  changeFrequency: "weekly",
  priority: englishOnlyPriority(slug)
}));

export const trustPageRoutes: RouteEntry[] = [
  { locale: gameConfig.defaultLocale, slug: "about", path: "/about/", scope: "trust", changeFrequency: "monthly", priority: 0.45 },
  { locale: gameConfig.defaultLocale, slug: "contact", path: "/contact/", scope: "trust", changeFrequency: "monthly", priority: 0.45 },
  { locale: gameConfig.defaultLocale, slug: "privacy", path: "/privacy/", scope: "trust", changeFrequency: "monthly", priority: 0.4 },
  { locale: gameConfig.defaultLocale, slug: "terms", path: "/terms/", scope: "trust", changeFrequency: "monthly", priority: 0.35 }
];

export const sitemapRoutes: RouteEntry[] = [...completedCoreRoutes, ...englishOnlyRoutes, ...trustPageRoutes];
export const robotsAllowedRoutes = sitemapRoutes.map((route) => route.path);

export function isCompletedLocale(locale: string): boolean {
  return completedLocales.includes(locale as never);
}

export function isCoreSlug(slug: string): boolean {
  return coreSlugs.includes(slug as never);
}

export function isCompletedCoreSlug(slug: string): boolean {
  return completedCoreSlugs.includes(slug as never);
}

export function isEnglishOnlySlug(slug: string): boolean {
  return englishOnlySlugs.includes(slug as never);
}

export function isCompletedEnglishOnlySlug(slug: string): boolean {
  return completedEnglishOnlySlugs.includes(slug as never);
}

export function isCompletedSlug(slug: string): boolean {
  return isCompletedCoreSlug(slug) || isCompletedEnglishOnlySlug(slug);
}
