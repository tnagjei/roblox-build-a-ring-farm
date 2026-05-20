// input: GET request for full AI crawler summary
// output: llms-full.txt plain text response
// pos: `/llms-full.txt` route

import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export function GET() {
  const routeLines = siteData.pages.map(
    (page) => `- [${page.h1}](${absoluteUrl(page.path)}): ${page.description}`
  );
  const keywordLines = siteData.pages
    .map((page) => page.primaryKeyword)
    .filter(Boolean)
    .map((keyword) => `- ${keyword}`);

  const lines = [
    `# ${siteData.site.name}`,
    "",
    `> ${siteData.site.description}`,
    "",
    "## Game identity",
    `- Game: ${siteData.game.name}`,
    `- Developer: ${siteData.game.creator.name}`,
    `- Roblox URL: ${siteData.game.robloxUrl}`,
    `- Universe ID: ${siteData.game.universeId ?? "pending"}`,
    `- Place ID: ${siteData.game.rootPlaceId ?? "pending"}`,
    `- Last full check: ${siteData.site.lastFullCheck}`,
    "",
    "## Codes policy",
    `- ${siteData.codes.verifiedCountLabel}`,
    `- ${siteData.codes.officialStatus}`,
    `- ${siteData.codes.verificationPolicy}`,
    "",
    "## Pages",
    ...routeLines,
    "",
    "## Keyword candidates",
    ...keywordLines,
    "",
    "## Contact",
    `- ${siteData.site.contactEmail}`
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8"
    }
  });
}
