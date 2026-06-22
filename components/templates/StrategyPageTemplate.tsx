// input: typed localized strategy page content and locale
// output: generic strategy guide page layout with optional source tables and video sections
// pos: multilingual strategy page template（更新规则：文件变更需同步本注释与所属目录 README）

import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import type { StrategyPageContent } from "@/lib/content/page-types";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

type StrategyPageTemplateProps = {
  content: StrategyPageContent;
  locale: Locale;
};

function actionHref(href: string): string {
  return href === "roblox" ? siteData.game.robloxUrl : href;
}

function youtubeEmbedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}`;
}

function youtubeWatchUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

function rowClassName(fieldCount: number): string {
  if (fieldCount <= 3) return "data-row three-field-row";
  if (fieldCount <= 4) return "data-row four-field-row";
  return "data-row dynamic-field-row";
}

function StatusBadge({ status }: { status: string }) {
  return <span className="source-badge">{status}</span>;
}

function articleJsonLd(content: StrategyPageContent, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.hero.h1,
    description: content.meta.description,
    inLanguage: locale === "zh-tw" ? "zh-TW" : locale,
    dateModified: siteData.site.lastFullCheck,
    mainEntityOfPage: absoluteUrl(getLocalizedPath(locale, content.slug))
  };
}

function faqJsonLd(content: StrategyPageContent, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale === "zh-tw" ? "zh-TW" : locale,
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };
}

export function StrategyPageTemplate({ content, locale }: StrategyPageTemplateProps) {
  return (
    <main className="page-main">
      <JsonLd data={articleJsonLd(content, locale)} />
      <JsonLd data={faqJsonLd(content, locale)} />

      <section className="page-hero compact-hero">
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
                <Link prefetch={false} className="primary-link" href={content.hero.primaryAction.href}>{content.hero.primaryAction.label}</Link>
              )
            ) : null}
            {content.hero.secondaryAction ? (
              content.hero.secondaryAction.external ? (
                <a className="secondary-link" href={actionHref(content.hero.secondaryAction.href)} target="_blank" rel="noopener noreferrer">
                  {content.hero.secondaryAction.label}
                </a>
              ) : (
                <Link prefetch={false} className="secondary-link" href={content.hero.secondaryAction.href}>{content.hero.secondaryAction.label}</Link>
              )
            ) : null}
          </div>
        </div>
        <img className="hero-image" src={siteData.assets.hero} alt={`${siteData.game.name} Roblox thumbnail`} />
      </section>

      <section className="research-grid" aria-label={content.hero.eyebrow}>
        {content.summaryCards.map((card) => (
          <article className="research-card" key={card.title}>
            <span className="card-rule" />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="content-grid">
        {content.sections.map((section) => (
          <article className="guide-card" key={section.heading}>
            <span className="card-rule" />
            <h2>{section.heading}</h2>
            {section.subheading ? <h3>{section.subheading}</h3> : null}
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.list && section.list.length > 0 ? <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul> : null}
          </article>
        ))}
      </section>

      {content.dataTables && content.dataTables.length > 0 ? (
        <section className="content-grid single-column-grid">
          {content.dataTables.map((table) => (
            <article className="guide-card data-card" key={table.title}>
              <span className="card-rule" />
              <p className="eyebrow">{table.eyebrow}</p>
              <h2>{table.title}</h2>
              {table.description ? <p>{table.description}</p> : null}
              <div className="data-list">
                {table.rows.map((row) => (
                  <div className={rowClassName(row.fields.length)} key={row.key}>
                    {row.fields.map((field) => (
                      <div key={`${row.key}-${field.label}`}>
                        <span>{field.label}</span>
                        <strong>{field.value}</strong>
                        {field.status ? <StatusBadge status={field.status} /> : null}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>
      ) : null}

      {content.videoSections && content.videoSections.length > 0 ? (
        <>
          {content.videoSections.map((videoSection) => (
            <section key={videoSection.title}>
              <div className="section-heading">
                <p className="eyebrow">{videoSection.eyebrow}</p>
                <h2>{videoSection.title}</h2>
                <p>{videoSection.description}</p>
              </div>
              <div className="video-grid">
                {videoSection.videos.map((video) => (
                  <article className="video-card" key={video.id}>
                    <div className="video-frame">
                      <iframe
                        src={youtubeEmbedUrl(video.id)}
                        title={video.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-meta">
                      <h3>{video.title}</h3>
                      <p>{video.description}</p>
                      <a href={youtubeWatchUrl(video.id)} target="_blank" rel="noopener noreferrer">
                        {video.fallbackLabel}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </>
      ) : null}

      <section className="section-heading">
        <p className="eyebrow">{locale === "zh-tw" ? "相關攻略" : "Related guides"}</p>
        <h2>{locale === "zh-tw" ? "下一步可以看什麼" : "What to read next"}</h2>
      </section>
      <section className="route-grid" aria-label="Related guides">
        {content.relatedLinks.map((link) => (
          <Link prefetch={false} className="route-card" href={link.href} key={link.href}>
            <span className="card-rule" />
            <h2>{link.title}</h2>
            <p>{link.description}</p>
          </Link>
        ))}
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>{content.hero.h1} FAQ</h2>
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
