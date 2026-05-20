// input: typed localized homepage content and locale
// output: full homepage layout without embedded long-form translations
// pos: multilingual homepage template（更新规则：文件变更需同步本注释与所属目录 README）

import Link from "next/link";
import { HomeVideoGuides } from "@/components/HomeVideoGuides";
import { JsonLd } from "@/components/JsonLd";
import type { HomeHubTable, HomePageContent, StatItem, TextSection } from "@/lib/content/page-types";
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

function HubSection({ section }: { section: TextSection }) {
  return (
    <article className="guide-card hub-section-card">
      <span className="card-rule" />
      <h2>{section.heading}</h2>
      {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.list ? <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul> : null}
    </article>
  );
}

function SnapshotTable({ table }: { table: HomeHubTable }) {
  return (
    <article className="guide-card data-card">
      <span className="card-rule" />
      <p className="eyebrow">{table.eyebrow}</p>
      <h2>{table.title}</h2>
      <div className="data-list">
        {table.rows.map((row) => (
          <div className="data-row four-field-row" key={`${table.title}-${row.label}-${row.value}`}>
            <div><span>Name</span><strong>{row.label}</strong></div>
            <div><span>Value</span><strong>{row.value}</strong></div>
            <div><span>Detail</span><strong>{row.detail}</strong></div>
            <div><span>Status</span><span className="source-badge">{row.status}</span></div>
          </div>
        ))}
      </div>
    </article>
  );
}

export function HomePageTemplate({ content, locale }: HomePageTemplateProps) {
  const spraysPath = getLocalizedPath(locale, "sprays");
  const tierListPath = getLocalizedPath(locale, "tier-list");
  const directoryCards = [
    ...content.directory.cards,
    ...(content.directory.cards.some((card) => card.href === spraysPath || card.href === "/sprays/")
      ? []
      : [{
          href: spraysPath,
          title: "Sprays",
          description: "Compare community reported spray effects, rare crop routes, gear shop use, weather events, and ROI without treating any spray claim as official."
        }]),
    ...(content.directory.cards.some((card) => card.href === tierListPath || card.href === "/tier-list/")
      ? []
      : [{
          href: tierListPath,
          title: "Tier List",
          description: "Compare community reported effects, gear shop routes, weather events, and farming value without treating any tier as official."
        }])
  ];
  const popularSearches = [
    ...content.popularSearches,
    ...(content.popularSearches.some((card) => card.href === "/sprays/" || card.href === spraysPath)
      ? []
      : [{
          href: spraysPath,
          title: `${siteData.game.name} Sprays`,
          description: "Compare community reported spray effects, gear shop use, rare crop value, and weather event alternatives.",
          coversLabel: "Covers",
          covers: "Sprays · Effects · ROI"
        }]),
    ...(content.popularSearches.some((card) => card.href === "/tier-list/" || card.href === tierListPath)
      ? []
      : [{
          href: tierListPath,
          title: `${siteData.game.name} Tier List`,
          description: "Compare community reported rare effects, event boosts, sprays, and farming routes.",
          coversLabel: "Covers",
          covers: "Effects · Sprays · Routes"
        }])
  ];
  const faqItems = [
    ...content.faq,
    ...(content.faq.some((item) => item.q.toLowerCase().includes("spray"))
      ? []
      : [{
          q: "Are Build A Ring Farm sprays official on this site?",
          a: "No. Spray names, prices, effects, and stacking behavior are treated as community reported until official notes or in-game evidence confirms them."
        }]),
    ...(content.faq.some((item) => item.q.toLowerCase().includes("tier list"))
      ? []
      : [{
          q: "Is there an official Build A Ring Farm tier list?",
          a: "No verified official tier list has been confirmed. The tier list page organizes community reported effects and route logic only."
        }])
  ];

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
            faq: faqItems
          } as any),
          inLanguage: locale === "zh-tw" ? "zh-TW" : locale
        }}
      />
      <JsonLd data={buildFaqJsonLd({ faq: faqItems } as any)} />
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
        <p className="eyebrow">Wiki hub</p>
        <h2>Build A Ring Farm guide overview</h2>
      </section>
      <section className="content-grid">
        {content.overviewSections.map((section) => <HubSection key={section.heading} section={section} />)}
      </section>

      <section className="section-heading">
        <p className="eyebrow">Quick data</p>
        <h2>Build A Ring Farm snapshots</h2>
      </section>
      <section className="content-grid single-column-grid">
        {content.snapshotTables.map((table) => <SnapshotTable key={table.title} table={table} />)}
      </section>

      <section className="section-heading">
        <p className="eyebrow">{content.directory.eyebrow}</p>
        <h2>{content.directory.title}</h2>
      </section>
      <section className="route-grid" aria-label={content.directory.title}>
        {directoryCards.map((card) => (
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
        {popularSearches.map((card) => (
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
          {faqItems.map((item) => (
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