// input: homepage route request
// output: English homepage rendered from typed site content
// pos: `/` route

import type { Metadata } from "next";
import { HomePageTemplate } from "@/components/templates/HomePageTemplate";
import { enHomePage } from "@/content/i18n/en/home";
import { buildLocalizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildLocalizedMetadata({
  locale: "en",
  slug: enHomePage.slug,
  title: enHomePage.meta.title,
  description: enHomePage.meta.description
});

export default function HomePage() {
  return <HomePageTemplate content={enHomePage} locale="en" />;
}
