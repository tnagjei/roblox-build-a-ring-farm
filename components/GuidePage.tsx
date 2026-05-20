// input: one page definition from site data
// output: guide article with verification-aware sections and schemas
// pos: reusable route template

import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { RelatedGrid } from "@/components/RelatedGrid";
import { siteData, type SitePage } from "@/lib/site-data";
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildThingJsonLd
} from "@/lib/seo";

type GuidePageProps = { page: SitePage };
type GuideSubsection = { heading: string; body?: string | string[]; list?: string[] };
type GuideSection = { heading: string; body?: string | string[]; subsections?: GuideSubsection[] };
type UnitDetail = { slug: string; name: string; role: string; sourceConfidence: Array<{ label: string; level: string; note: string }> };

function statusClassName(status: string) {
  return status.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function statusLabel(status: string) {
  const labels: Record<string, string> = {
    "needs verification": "Needs verification",
    pending: "Pending",
    rejected: "Not verified",
    "research-only": "Needs verification",
    verified: "Verified"
  };
  return labels[status] || status;
}

export function GuidePage({ page }: GuidePageProps) {
  const sections: GuideSection[] = "sections" in page ? ((page.sections || []) as GuideSection[]) : [];
  const thingJsonLd = buildThingJsonLd(page);

  return (
    <main className="page-main">
      <JsonLd data={buildArticleJsonLd(page)} />
      <JsonLd data={buildFaqJsonLd(page)} />
      <JsonLd data={buildBreadcrumbJsonLd(page)} />
      {thingJsonLd ? <JsonLd data={thingJsonLd} /> : null}

      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">{page.focus}</p>
          <h1>{page.h1}</h1>
          <p className="lede">{page.lede}</p>
          <div className="hero-actions">
            <a className="primary-link" href={siteData.game.robloxUrl} target="_blank" rel="noopener noreferrer">
              Open Roblox page
            </a>
            <Link className="secondary-link" href="/">Back to hub</Link>
          </div>
        </div>
        <img className="hero-image" src={siteData.assets.hero} alt={`${siteData.game.name} Roblox thumbnail`} />
      </section>

      {"unit" in page && page.unit ? <UnitSourcePanel unit={page.unit as UnitDetail} /> : null}

      <section className="content-grid">
        {sections.map((section) => {
          const sectionBody = Array.isArray(section.body) ? section.body : section.body ? [section.body] : [];
          return (
            <article className="guide-card" key={section.heading}>
              <span className="card-rule" />
              <h2>{section.heading}</h2>
              {sectionBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.subsections?.map((subsection) => {
                const subsectionBody = Array.isArray(subsection.body) ? subsection.body : subsection.body ? [subsection.body] : [];
                return (
                  <div className="guide-subsection" key={subsection.heading}>
                    <h3>{subsection.heading}</h3>
                    {subsectionBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {subsection.list && subsection.list.length > 0 ? <ul>{subsection.list.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                  </div>
                );
              })}
            </article>
          );
        })}
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>{page.h1} FAQ</h2>
        </div>
        <div className="faq-list">
          {page.faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <RelatedGrid currentPageKey={page.key} relatedKeys={"relatedPages" in page ? (page as SitePage & { relatedPages?: string[] }).relatedPages : undefined} />
    </main>
  );
}

function UnitSourcePanel({ unit }: { unit: UnitDetail }) {
  return (
    <section className="status-band source-confidence-band" aria-labelledby="unit-verification-heading">
      <div>
        <p className="eyebrow">Verification status</p>
        <h2 id="unit-verification-heading">{unit.name} Evidence</h2>
        <p>The {unit.role} label is useful for planning, but exact stats stay pending until official or in-game checks are available.</p>
      </div>
      <div className="status-table" role="table" aria-label={`${unit.name} verification status`}>
        <div role="row" className="status-row status-head">
          <span role="columnheader">Source</span>
          <span role="columnheader">Level</span>
          <span role="columnheader">Note</span>
        </div>
        {unit.sourceConfidence.map((source) => (
          <div role="row" className="status-row" key={source.label}>
            <span role="cell">{source.label}</span>
            <span role="cell" className={`status-tag ${statusClassName(source.level)}`}>{statusLabel(source.level)}</span>
            <span role="cell">{source.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
