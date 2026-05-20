// input: site data and Build A Ring Farm visual identity
// output: 1200x630 PNG social sharing image for Open Graph and Twitter cards
// pos: App Router opengraph image route（更新规则：文件变更需同步本注释与所属目录 README）

import { ImageResponse } from "next/og";
import { siteData } from "@/lib/site-data";

export const alt = `${siteData.site.name} social image`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #faf2d4 0%, #88bf6b 46%, #1d6244 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
          padding: "70px 82px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -120,
            width: 520,
            height: 520,
            border: "44px solid rgba(255, 247, 205, 0.52)",
            borderRadius: "50%"
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 112,
            top: 132,
            width: 168,
            height: 168,
            borderRadius: 42,
            background: "linear-gradient(180deg, #fff2b0 0%, #e9a928 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1e563c",
            fontSize: 96,
            fontWeight: 900,
            boxShadow: "0 30px 60px rgba(22, 64, 40, 0.28)"
          }}
        >
          R
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 790 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#2a5737",
              fontSize: 30,
              fontWeight: 800,
              marginBottom: 24
            }}
          >
            <span
              style={{
                width: 52,
                height: 52,
                borderRadius: 16,
                background: "#1f6b43",
                color: "#ffdb5d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 18,
                fontWeight: 900
              }}
            >
              R
            </span>
            {siteData.site.shortName} Wiki
          </div>
          <h1 style={{ fontSize: 86, color: "#16351f", fontWeight: 900, margin: 0, lineHeight: 0.98 }}>
            {siteData.game.name}
          </h1>
          <p style={{ fontSize: 34, color: "#31543d", margin: "30px 0 0", lineHeight: 1.28 }}>
            Codes status, crops, upgrades, updates, and source-checked Roblox guide notes.
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 82,
            background: "rgba(32, 98, 58, 0.82)"
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: 82,
            right: 82,
            height: 18,
            background: "#f7e3a0",
            borderRadius: 999
          }}
        />
        <div style={{ display: "flex", gap: 18 }}>
          {["Codes", "Crops", "Upgrades", "Guides"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "16px 28px",
                background: "rgba(255,255,255,0.72)",
                border: "2px solid rgba(31, 86, 49, 0.22)",
                borderRadius: 999,
                color: "#214b31",
                fontSize: 28,
                fontWeight: 800
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
