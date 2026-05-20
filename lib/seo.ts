// input: page data, route paths, and environment site URL
// output: Next metadata and schema.org JSON-LD objects
// pos: SEO contract layer

import type { Metadata } from "next";
import { siteData, type SitePage } from "@/lib/site-data";

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL || siteData.site.defaultBaseUrl
);

type UnitSchemaData = {
  name: string;
};

function hasUnitSchemaData(value: unknown): value is UnitSchemaData {
  return typeof value === "object" && value !== null && "name" in value && typeof (value as { name?: unknown }).name === "string";
}

export function absoluteUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

export function buildMetadata(page: SitePage): Metadata {
  const canonical = absoluteUrl(page.path);

  return {
    metadataBase: new URL(siteUrl),
    title: page.title,
    description: page.description,
    alternates: {
      canonical
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical,
      siteName: siteData.site.name,
      images: [
        {
          url: siteData.assets.hero,
          width: 768,
          height: 432,
          alt: `${siteData.game.name} Roblox thumbnail`
        }
      ],
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [siteData.assets.hero]
    }
  };
}

export function buildArticleJsonLd(page: SitePage) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.h1,
    description: page.description,
    image: [siteData.assets.hero],
    datePublished: siteData.site.lastFullCheck,
    dateModified: siteData.site.lastFullCheck,
    author: {
      "@type": "Organization",
      name: siteData.site.name,
      email: siteData.site.contactEmail
    },
    publisher: {
      "@type": "Organization",
      name: siteData.site.name,
      logo: {
        "@type": "ImageObject",
        url: siteData.assets.icon
      }
    },
    mainEntityOfPage: absoluteUrl(page.path)
  };
}

export function buildFaqJsonLd(page: SitePage) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };
}

export function buildBreadcrumbJsonLd(page: SitePage) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/")
    }
  ];

  if (page.path !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: page.h1,
      item: absoluteUrl(page.path)
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items
  };
}

export function buildThingJsonLd(page: SitePage) {
  const unit = "unit" in page ? page.unit : null;

  if (!hasUnitSchemaData(unit)) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Thing",
    name: unit.name,
    alternateName: page.primaryKeyword,
    description: page.description,
    url: absoluteUrl(page.path),
    isPartOf: {
      "@type": "VideoGame",
      name: siteData.game.name,
      url: siteData.game.robloxUrl
    },
    additionalType: "Roblox game unit",
    subjectOf: {
      "@type": "Article",
      headline: page.h1,
      url: absoluteUrl(page.path)
    }
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteData.site.name,
    url: siteUrl,
    email: siteData.site.contactEmail,
    description: siteData.site.description,
    sameAs: siteData.game.officialLinks
      .filter((link: { status: string; url: string }) => link.status === "verified" && link.url)
      .map((link: { url: string }) => link.url)
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteData.site.name,
    alternateName: siteData.site.aliases,
    url: siteUrl,
    description: siteData.site.description,
    publisher: {
      "@type": "Organization",
      name: siteData.site.name,
      email: siteData.site.contactEmail
    }
  };
}

export function buildVideoGameJsonLd() {
  const sameAs: string[] = siteData.game.officialLinks
    .filter((link: { status: string; url: string }) => link.status === "verified" && link.url)
    .map((link: { url: string }) => link.url);

  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: siteData.game.name,
    alternateName: siteData.game.alternateNames,
    description: siteData.game.descriptionSummary,
    genre: siteData.game.genre,
    url: siteData.game.robloxUrl,
    image: siteData.assets.hero,
    publisher: {
      "@type": "Organization",
      name: siteData.game.creator.name
    },
    gamePlatform: "Roblox",
    applicationCategory: "Game",
    operatingSystem: "Web, Windows, macOS, iOS, Android",
    sameAs
  };
}

export function normalizeSiteUrl(value: string): string {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}
