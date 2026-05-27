// input: current page key and site page data
// output: grid of related internal links for SEO and navigation
// pos: reusable related links component（更新规则：文件变更需同步本注释与所属目录 README）

import Link from "next/link";
import { siteData, type SitePage } from "@/lib/site-data";

type RelatedGridProps = {
  currentPageKey: string;
  relatedKeys?: string[];
};

// 使用 relatedPages 字段或根据 currentPageKey 自动推荐相关页面
export function RelatedGrid({ currentPageKey, relatedKeys }: RelatedGridProps) {
  let relatedPages: SitePage[];

  if (relatedKeys && relatedKeys.length > 0) {
    relatedPages = relatedKeys
      .map((key) => siteData.pages.find((p) => p.key === key))
      .filter((p): p is SitePage => p !== undefined);
  } else {
    // 自动推荐：排除当前页面，最多展示 6 个
    relatedPages = siteData.pages
      .filter((p) => p.key !== currentPageKey && p.path !== "/")
      .slice(0, 6);
  }

  if (relatedPages.length === 0) return null;

  return (
    <section className="related-grid-section" aria-labelledby="related-pages-heading">
      <div className="section-heading">
        <p className="eyebrow">Related pages</p>
        <h2 id="related-pages-heading">Explore More Guides</h2>
      </div>
      <nav className="related-grid" aria-label="Related guides">
        {relatedPages.map((page) => (
          <Link prefetch={false} className="related-link" key={page.path} href={page.path}>
            <span>{page.focus}</span>
            <span className="link-arrow">→</span>
          </Link>
        ))}
      </nav>
    </section>
  );
}
