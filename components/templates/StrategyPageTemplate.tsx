// input: typed localized strategy page content and locale
// output: generic strategy guide page layout for updates, beginner guide, and safety pages
// pos: multilingual strategy page template

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

      <section className="section-heading">
        <p className="eyebrow">{locale === "zh-tw" ? "相關攻略" : "Related guides"}</p>
        <h2>{locale === "zh-tw" ? "下一步可以看什麼" : "What to read next"}</h2>
      </section>
      <section className="route-grid" aria-label="Related guides">
        {content.relatedLinks.map((link) => (
          <Link className="route-card" href={link.href} key={link.href}>
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
