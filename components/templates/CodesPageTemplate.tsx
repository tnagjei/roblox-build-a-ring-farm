// input: typed localized codes page content and locale
// output: full codes page layout without embedded long-form translations
// pos: multilingual codes page template

import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import type { CodesPageContent } from "@/lib/content/page-types";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

type CodesPageTemplateProps = {
  content: CodesPageContent;
  locale: Locale;
};

type CommunityReportedCode = {
  code: string;
  status: string;
  reportedBy: string;
};

type PendingCode = {
  code: string;
  seenOn: string;
  status: string;
};

type ConflictClaim = {
  source: string;
  verdict: string;
};

type ConflictRow = {
  code: string;
  claims: ConflictClaim[];
};

function actionHref(href: string): string {
  return href === "roblox" ? siteData.game.robloxUrl : href;
}

function statusText(status: string, labels: Record<string, string>) {
  const lower = status.toLowerCase();
  if (lower.includes("community reported")) return labels["community reported"] || status;
  if (lower.includes("not verified")) return labels["not verified"] || status;
  if (lower.includes("pending")) return labels.pending || status;
  if (lower.includes("verified")) return labels.verified || status;
  return labels[status] || status;
}

function articleJsonLd(content: CodesPageContent, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.hero.h1,
    description: content.meta.description,
    inLanguage: locale === "zh-tw" ? "zh-TW" : locale,
    dateModified: siteData.codes.lastChecked,
    mainEntityOfPage: absoluteUrl(getLocalizedPath(locale, content.slug))
  };
}

function faqJsonLd(content: CodesPageContent, locale: Locale) {
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

export function CodesPageTemplate({ content, locale }: CodesPageTemplateProps) {
  const communityReportedCodes = siteData.codes.communityReportedCodes as CommunityReportedCode[];
  const pendingCodes = siteData.codes.pendingCodes as PendingCode[];
  const conflictMatrix = siteData.codes.conflictMatrix as ConflictRow[];

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

      <section className="status-band" aria-labelledby="verified-codes-heading">
        <div>
          <p className="eyebrow">{content.verifiedCodes.eyebrow}</p>
          <h2 id="verified-codes-heading">{content.verifiedCodes.title}</h2>
          <p>{content.verifiedCodes.description}</p>
        </div>
        <div className="status-table" role="table" aria-label={content.verifiedCodes.title}>
          <div role="row" className="status-row status-head">
            <span role="columnheader">{locale === "zh-tw" ? "代碼" : "Code"}</span>
            <span role="columnheader">{locale === "zh-tw" ? "獎勵" : "Reward"}</span>
            <span role="columnheader">{locale === "zh-tw" ? "來源" : "Source"}</span>
          </div>
          <div role="row" className="status-row empty-row">
            <span role="cell">{content.verifiedCodes.emptyCode}</span>
            <span role="cell">{content.verifiedCodes.emptyReward}</span>
            <span role="cell">{content.verifiedCodes.emptySource}</span>
          </div>
        </div>
      </section>

      {communityReportedCodes.length > 0 ? (
        <section className="pending-codes-section" aria-labelledby="community-codes-heading">
          <div className="section-heading">
            <p className="eyebrow">{content.communityCodes.eyebrow}</p>
            <h2 id="community-codes-heading">{content.communityCodes.title}</h2>
          </div>
          <p className="pending-codes-disclaimer">{content.communityCodes.description}</p>
          <div className="pending-codes-table community-code-table" role="table" aria-label={content.communityCodes.title}>
            <div role="row" className="status-row status-head">
              <span role="columnheader">{locale === "zh-tw" ? "代碼" : "Code"}</span>
              <span role="columnheader">{locale === "zh-tw" ? "狀態" : "Status"}</span>
              <span role="columnheader">{locale === "zh-tw" ? "回報來源" : "Reported by"}</span>
              <span role="columnheader">{locale === "zh-tw" ? "建議動作" : "Action"}</span>
            </div>
            {communityReportedCodes.map((item) => (
              <div role="row" className="status-row" key={item.code}>
                <span role="cell"><code>{item.code}</code></span>
                <span role="cell">{statusText(item.status, content.communityCodes.statusLabels)}</span>
                <span role="cell">{item.reportedBy}</span>
                <span role="cell">{content.communityCodes.actionLabel}</span>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {pendingCodes.length > 0 ? (
        <section className="pending-codes-section" aria-labelledby="pending-codes-heading">
          <div className="section-heading">
            <p className="eyebrow">{content.pendingCodes.eyebrow}</p>
            <h2 id="pending-codes-heading">{content.pendingCodes.title}</h2>
          </div>
          <p className="pending-codes-disclaimer">{content.pendingCodes.description}</p>
          <div className="pending-codes-table" role="table" aria-label={content.pendingCodes.title}>
            <div role="row" className="status-row status-head">
              <span role="columnheader">{locale === "zh-tw" ? "候選代碼" : "Candidate code"}</span>
              <span role="columnheader">{locale === "zh-tw" ? "出現位置" : "Seen on"}</span>
              <span role="columnheader">{locale === "zh-tw" ? "狀態" : "Status"}</span>
              <span role="columnheader">{content.pendingCodes.reasonLabel}</span>
            </div>
            {pendingCodes.map((pending) => (
              <div role="row" className="status-row" key={pending.code}>
                <span role="cell"><code>{pending.code}</code></span>
                <span role="cell">{pending.seenOn}</span>
                <span role="cell">{statusText(pending.status, content.pendingCodes.statusLabels)}</span>
                <span role="cell">{content.pendingCodes.defaultReason}</span>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {conflictMatrix.length > 0 ? (
        <section className="pending-codes-section" aria-labelledby="code-conflict-heading">
          <div className="section-heading">
            <p className="eyebrow">{content.conflictMatrix.eyebrow}</p>
            <h2 id="code-conflict-heading">{content.conflictMatrix.title}</h2>
          </div>
          <p className="pending-codes-disclaimer">{content.conflictMatrix.description}</p>
          <div className="pending-codes-table conflict-matrix" role="table" aria-label={content.conflictMatrix.title}>
            <div role="row" className="status-row status-head">
              <span role="columnheader">{locale === "zh-tw" ? "候選代碼" : "Candidate code"}</span>
              <span role="columnheader">{content.conflictMatrix.siteStatusLabel}</span>
              <span role="columnheader">{content.conflictMatrix.externalClaimsLabel}</span>
              <span role="columnheader">{content.conflictMatrix.reasonLabel}</span>
            </div>
            {conflictMatrix.map((row) => (
              <div role="row" className="status-row" key={row.code}>
                <span role="cell"><code>{row.code}</code></span>
                <span role="cell">{content.conflictMatrix.notVerifiedLabel}</span>
                <span role="cell">
                  {row.claims.map((claim) => (
                    <span className="claim-chip" key={`${row.code}-${claim.source}`}>{claim.source}: {claim.verdict}</span>
                  ))}
                </span>
                <span role="cell">{content.conflictMatrix.defaultReason}</span>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="redeem-guide-section" aria-labelledby="verification-workflow-heading">
        <div className="section-heading">
          <p className="eyebrow">{content.verificationWorkflow.eyebrow}</p>
          <h2 id="verification-workflow-heading">{content.verificationWorkflow.title}</h2>
        </div>
        <div className="evidence-grid">
          {content.verificationWorkflow.cards.map((card) => (
            <article className="guide-card" key={card.title}>
              <span className="card-rule" />
              <h3>{card.title}</h3>
              {card.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {card.list && card.list.length > 0 ? <ul>{card.list.map((item) => <li key={item}>{item}</li>)}</ul> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="redeem-guide-section" aria-labelledby="redeem-guide-heading">
        <div className="section-heading">
          <p className="eyebrow">{content.redeemGuide.eyebrow}</p>
          <h2 id="redeem-guide-heading">{content.redeemGuide.title}</h2>
        </div>
        <ol className="redeem-steps">
          {content.redeemGuide.steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <p className="redeem-note">{content.redeemGuide.note}</p>
      </section>

      <section className="content-grid">
        {content.sections.map((section) => (
          <article className="guide-card" key={section.heading}>
            <span className="card-rule" />
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.list && section.list.length > 0 ? <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul> : null}
          </article>
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
