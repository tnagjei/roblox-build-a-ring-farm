import { siteData } from "@/lib/site-data";
import { siteUrl } from "@/lib/seo";

export function BrandIdentity() {
  const siteName = siteData.site.name;

  return (
    <section className="p2-hub-section brand-identity-section" aria-labelledby="brand-identity-heading">
      <div className="section-heading">
        <p className="eyebrow">Brand assets</p>
        <h2 id="brand-identity-heading">Brand Identity</h2>
      </div>
      
      <article className="guide-card brand-card">
        <span className="card-rule" />
        <div className="brand-display">
          <div className="logo-preview-box">
            <img src="/logo.svg" alt={`${siteName} logo`} className="official-logo-img" />
          </div>
          <div className="brand-copy">
            <h3 style={{ marginTop: 0 }}>Identity Statement</h3>
            <p>
              <strong>{siteName}</strong> ({siteUrl}) is an independent fan guide and should only claim official identity when ownership is verified.
            </p>
            <div className="download-grid">
              <a href="/favicon.svg" download="favicon.svg" className="status-tag verified">
                Download SVG
              </a>
              <a href="/logo.png" download="logo.png" className="status-tag verified">
                Download PNG
              </a>
              <a href="/logo.webp" download="logo.webp" className="status-tag verified">
                Download WebP
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
