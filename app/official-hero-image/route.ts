// input: request for official Roblox thumbnail
// output: redirect to Roblox-hosted game thumbnail image or local fallback
// pos: reusable official visual asset bridge

import { NextResponse } from "next/server";
import { siteData } from "@/lib/site-data";

function fallbackUrl() {
  return new URL("/opengraph-image", siteData.site.defaultBaseUrl);
}

export async function GET() {
  const universeId = siteData.game.universeId;

  if (!universeId) {
    return NextResponse.redirect(fallbackUrl());
  }

  const apiUrl = new URL("https://thumbnails.roblox.com/v1/games/multiget/thumbnails");
  apiUrl.searchParams.set("universeIds", String(universeId));
  apiUrl.searchParams.set("countPerUniverse", "1");
  apiUrl.searchParams.set("size", "768x432");
  apiUrl.searchParams.set("format", "Png");
  apiUrl.searchParams.set("isCircular", "false");

  try {
    const response = await fetch(apiUrl, { next: { revalidate: 86400 } });

    if (!response.ok) {
      return NextResponse.redirect(fallbackUrl());
    }

    const payload = await response.json();
    const imageUrl = payload?.data?.[0]?.thumbnails?.[0]?.imageUrl;

    if (typeof imageUrl !== "string" || !imageUrl.startsWith("https://")) {
      return NextResponse.redirect(fallbackUrl());
    }

    return NextResponse.redirect(imageUrl);
  } catch {
    return NextResponse.redirect(fallbackUrl());
  }
}
