// input: page-level localized content objects
// output: shared TypeScript contracts for multilingual SEO pages
// pos: content type contracts（更新规则：文件变更需同步本注释与所属目录 README）

export type SeoMeta = {
  title: string;
  description: string;
};

export type HeroBlock = {
  eyebrow: string;
  h1: string;
  lede: string;
  primaryAction?: {
    label: string;
    href: string;
    external?: boolean;
  };
  secondaryAction?: {
    label: string;
    href: string;
    external?: boolean;
  };
};

export type TextSection = {
  heading: string;
  subheading?: string;
  body: string[];
  list?: string[];
};

export type FaqItem = {
  q: string;
  a: string;
};

export type StatItem = {
  valueKey: "playing" | "visits" | "favorites" | "approval" | "lastFullCheck" | "codesLastChecked" | "statsSnapshot" | "pageCount";
  label: string;
  detail: string;
};

export type HomeHubTable = {
  eyebrow: string;
  title: string;
  rows: Array<{
    label: string;
    value: string;
    detail: string;
    status: string;
  }>;
};

export type HomePageContent = {
  meta: SeoMeta;
  slug: "";
  hero: HeroBlock;
  stats: StatItem[];
  overviewSections: TextSection[];
  snapshotTables: HomeHubTable[];
  directory: {
    eyebrow: string;
    title: string;
    cards: Array<{
      href: string;
      title: string;
      description: string;
    }>;
  };
  research: {
    eyebrow: string;
    title: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
  verification: {
    eyebrow: string;
    title: string;
    labels: Record<string, string>;
  };
  freshness: {
    eyebrow: string;
    title: string;
    stats: StatItem[];
  };
  videos: {
    eyebrow: string;
    title: string;
    openLabel: string;
    viewsLabel: string;
    lede?: string;
    note?: string;
    relatedLabel?: string;
  };
  popularSearchesMeta: {
    eyebrow: string;
    title: string;
    ariaLabel: string;
  };
  popularSearches: Array<{
    href: string;
    title: string;
    description: string;
    coversLabel: string;
    covers: string;
  }>;
  faqMeta: {
    eyebrow: string;
    title: string;
  };
  faq: FaqItem[];
};

export type CodesPageContent = {
  meta: SeoMeta;
  slug: "codes";
  hero: HeroBlock;
  verifiedCodes: {
    eyebrow: string;
    title: string;
    description: string;
    emptyCode: string;
    emptyReward: string;
    emptySource: string;
  };
  communityCodes: {
    eyebrow: string;
    title: string;
    description: string;
    actionLabel: string;
    statusLabels: Record<string, string>;
  };
  pendingCodes: {
    eyebrow: string;
    title: string;
    description: string;
    reasonLabel: string;
    defaultReason: string;
    statusLabels: Record<string, string>;
  };
  conflictMatrix: {
    eyebrow: string;
    title: string;
    description: string;
    siteStatusLabel: string;
    externalClaimsLabel: string;
    reasonLabel: string;
    notVerifiedLabel: string;
    defaultReason: string;
  };
  verificationWorkflow: {
    eyebrow: string;
    title: string;
    cards: Array<{
      title: string;
      body?: string[];
      list?: string[];
    }>;
  };
  redeemGuide: {
    eyebrow: string;
    title: string;
    steps: string[];
    note: string;
  };
  sections: TextSection[];
  faq: FaqItem[];
};

export type StrategyPageContent = {
  meta: SeoMeta;
  slug: "updates" | "beginners-guide" | "scripts" | "crops" | "upgrades" | "advanced-crops";
  hero: HeroBlock;
  summaryCards: Array<{
    title: string;
    description: string;
  }>;
  sections: TextSection[];
  relatedLinks: Array<{
    href: string;
    title: string;
    description: string;
  }>;
  faq: FaqItem[];
};
