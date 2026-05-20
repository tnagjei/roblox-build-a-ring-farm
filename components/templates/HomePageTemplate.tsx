// input: typed localized homepage content and locale
// output: full homepage layout without embedded long-form translations
// pos: multilingual homepage template

import Link from "next/link";
import { HomeVideoGuides } from "@/components/HomeVideoGuides";
import { JsonLd } from "@/components/JsonLd";
import type { HomePageContent, StatItem } from "@/lib/content/page-types";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";
import { siteData } from "@/lib/site-data";
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildVideoGameJsonLd,
  buildWebsiteJsonLd
} from "@/lib/seo";

type HomePageTemplateProps = {
  content: HomePageContent;
  locale: Locale;
};

function statValue(stat: StatItem): string {
  switch (stat.valueKey) {
    case "playing":
      return siteData.game.playing.toLocaleString();
    case "visits":
      return siteData.game.visits.toLocaleString();
    case "favorites":
      return siteData.game.favorites.toLocaleString();
    case "approval":
      return siteData.game.approvalRate;
    case "lastFullCheck":
      return siteData.site.lastFullCheck;
    case "codesLastChecked":
      return siteData.codes.lastChecked;
    case "statsSnapshot":
      return siteData.game.liveStatsCheckedAt.split("T")[0];
    case "pageCount":
      return String(siteData.pages.length);
    default:
      return "";
  }
}

function actionHref(href: string): string {
  return href === "roblox" ? siteData.game.robloxUrl : href;
}

export function HomePageTemplate({ content, locale }: HomePageTemplateProps) {
  return (
    <main className="page-main">
      <JsonLd data={buildWebsiteJsonLd()} />
      <JsonLd data={buildVideoGameJsonLd()} />
      <JsonLd
        data={{
          ...buildArticleJsonLd({
            key: "home",
            path: getLocalizedPath(locale, ""),
            title: content.meta.title,
            description: content.meta.description,
            h1: content.hero.h1,
            lede: content.hero.lede,
            focus: content.hero.eyebrow,
            primaryKeyword: siteData.pages.find((page) => page.key === "home")?.primaryKeyword || siteData.game.name,
            faq: content.faq
          } as any),
          inLanguage: locale === "zh-tw" ? "zh-TW" : locale
        }}
      />
      <JsonLd data={buildFaqJsonLd({ faq: content.faq } as any)} />
      <JsonLd data={buildBreadcrumbJsonLd({ path: getLocalizedPath(locale, ""), h1: content.hero.h1 } as any)} />

      <section className="page-hero">
        <div className="hero-copy">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1>{content.hero.h1}</h1>
          <p className="lede">{content.hero.lede}</p>
          <div className="hero-actions">
            {content.hero.primaryAction ? (
              content.hero.primaryAction.external ? (
                <a className="primary-link" href={actionHref(content.hero.primaryAction.href)} target="_blank" rel="noopener noreferrer">
                  {content.hero.primaryAction.label}
                </a>
              ) : (
                <Link className="primary-link" href={content.hero.primaryAction.href}>{content.hero.primaryAction.label}</Link>
              )
            ) : null}
            {content.hero.secondaryAction ? (
              content.hero.secondaryAction.external ? (
                <a className="secondary-link" href={actionHref(content.hero.secondaryAction.href)} target="_blank" rel="noopener noreferrer">
                  {content.hero.secondaryAction.label}
                </a>
              ) : (
                <Link className="secondary-link" href={content.hero.secondaryAction.href}>{content.hero.secondaryAction.label}</Link>
              )
            ) : null}
          </div>
        </div>
        <img className="hero-image" src={siteData.assets.hero} alt={`${siteData.game.name} Roblox thumbnail`} />
      </section>

      <section className="stats-strip" aria-label={content.hero.eyebrow}>
        {content.stats.map((stat) => (
          <StatBox key={`${stat.valueKey}-${stat.label}`} value={statValue(stat)} label={stat.label} detail={stat.detail} />
        ))}
      </section>

      <section className="section-heading">
        <p className="eyebrow">{content.directory.eyebrow}</p>
        <h2>{content.directory.title}</h2>
      </section>
      <section className="route-grid" aria-label={content.directory.title}>
        {content.directory.cards.map((card) => (
          <Link className="route-card" href={card.href} key={card.href}>
            <span className="card-rule" />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </Link>
        ))}
      </section>

      <section className="section-heading">
        <p className="eyebrow">{content.research.eyebrow}</p>
        <h2>{content.research.title}</h2>
      </section>
      <section className="research-grid">
        {content.research.cards.map((card) => (
          <article className="research-card" key={card.title}>
            <span className="card-rule" />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="section-heading">
        <p className="eyebrow">{content.verification.eyebrow}</p>
        <h2>{content.verification.title}</h2>
      </section>
      <section className="confidence-grid" aria-label={content.verification.title}>
        {siteData.game.sourceConfidence.map((source: { label: string; level: string }) => (
          <div className="confidence-card" key={source.label}>
            <div className="confidence-label">{source.label}</div>
            <span className={`confidence-badge ${source.level.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
              {content.verification.labels[source.level] || source.level}
            </span>
          </div>
        ))}
      </section>

      <section className="section-heading">
        <p className="eyebrow">{content.freshness.eyebrow}</p>
        <h2>{content.freshness.title}</h2>
      </section>
      <section className="stats-strip" aria-label={content.freshness.title}>
        {content.freshness.stats.map((stat) => (
          <StatBox key={`${stat.valueKey}-${stat.label}`} value={statValue(stat)} label={stat.label} detail={stat.detail} />
        ))}
      </section>

      <HomeVideoGuides
        locale={locale}
        eyebrow={content.videos.eyebrow}
        title={content.videos.title}
        lede={content.videos.lede}
        note={content.videos.note}
        relatedLabel={content.videos.relatedLabel}
        openLabel={content.videos.openLabel}
      />

      <section className="section-heading">
        <p className="eyebrow">{content.popularSearchesMeta.eyebrow}</p>
        <h2>{content.popularSearchesMeta.title}</h2>
      </section>
      <section className="search-entrance-grid" aria-label={content.popularSearchesMeta.ariaLabel}>
        {content.popularSearches.map((card) => (
          <Link className="search-entrance-card" href={card.href} key={card.href}>
            <span className="card-rule" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <span className="covers-label">{card.coversLabel}</span>
            <span className="covers-list">{card.covers}</span>
          </Link>
        ))}
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <p className="eyebrow">{content.faqMeta.eyebrow}</p>
          <h2>{content.faqMeta.title}</h2>
        </div>
        <div className="faq-list">
          {content.faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

function StatBox({ value, label, detail }: { value: string; label: string; detail: string }) {
  return (
    <div className="stat-box">
      <strong>{value}</strong>
      <span>{label}</span>
      <small>{detail}</small>
    </div>
  );
}
