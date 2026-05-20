// input: GET request for AI crawler summary
// output: llms.txt plain text response
// pos: `/llms.txt` route

import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export function GET() {
  const lines = [
    `# ${siteData.site.name}`,
    "",
    `> ${siteData.site.description}`,
    "",
    "This site is an independent, verification-aware Roblox guide. It does not publish active codes until they are officially or in-game verified.",
    "",
    "## Core content",
    `- [Codes](${absoluteUrl("/codes/")}): ${siteData.codes.verifiedCountLabel}; ${siteData.codes.officialStatus}.`,
    `- [Beginner Guide](${absoluteUrl("/beginners-guide/")}): first-session strategy without exploit scripts.`,
    "",
    "## Common resources",
    `- [Updates](${absoluteUrl("/updates/")}): update tracker and recheck points.`,
    `- [Scripts Safety](${absoluteUrl("/scripts/")}): risks and safe alternatives.`,
    `- [Roblox Game](${siteData.game.robloxUrl}): official Roblox page.`
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8"
    }
  });
}
