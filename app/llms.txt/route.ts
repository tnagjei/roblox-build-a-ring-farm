// input: GET request for AI crawler summary
// output: llms.txt plain text response
// pos: `/llms.txt` route

import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

const corePageKeys = [
  "codes",
  "beginners-guide",
  "crops",
  "seeds",
  "gear-shop",
  "sprays",
  "mutations",
  "fertilizer",
  "offline-income",
  "farm-layout",
  "tier-list",
  "advanced-crops",
  "weather-events",
  "upgrades",
  "money-farming",
  "updates"
];

function pageLine(key: string) {
  const page = siteData.pages.find((item) => item.key === key);
  if (!page) return null;
  return `- [${page.h1}](${absoluteUrl(page.path)}): ${page.description}`;
}

export function GET() {
  const coreLines = corePageKeys.map(pageLine).filter(Boolean);

  const lines = [
    `# ${siteData.site.name}`,
    "",
    `> ${siteData.site.description}`,
    "",
    "This site is an independent, verification-aware Roblox guide. It separates official Roblox facts from community reported claims and does not publish active codes, prices, values, multipliers, or event behavior as official unless evidence is available.",
    "",
    "## Game identity",
    `- Game: ${siteData.game.name}`,
    `- Developer: ${siteData.game.creator.name}`,
    `- Roblox URL: ${siteData.game.robloxUrl}`,
    `- Last full check: ${siteData.site.lastFullCheck}`,
    "",
    "## Verification policy",
    `- Codes: ${siteData.codes.verifiedCountLabel}; ${siteData.codes.officialStatus}.`,
    "- Community reported data must remain labeled as Community reported, Pending, or Needs verification.",
    "- Unverified spray effects, mutation stacking, fertilizer behavior, offline rare effects, weather event odds, and crop values should not be described as official.",
    "",
    "## Core content",
    ...coreLines,
    "",
    "## Common resources",
    `- [Scripts Safety](${absoluteUrl("/scripts/")}): risks and safe alternatives for script-related searches.`,
    `- [Roblox Game](${siteData.game.robloxUrl}): official Roblox page.`,
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
