// input: site brand colors and Build A Ring Farm identity
// output: 512px PNG app icon for browser tabs, bookmarks, and install surfaces
// pos: App Router icon route（更新规则：文件变更需同步本注释与所属目录 README）

import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(145deg, #f8d57e 0%, #54a15d 54%, #1c5a3f 100%)",
          borderRadius: "112px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 34,
            border: "18px solid rgba(255, 251, 224, 0.88)",
            borderRadius: "50%",
            boxShadow: "inset 0 18px 34px rgba(42, 72, 48, 0.28), 0 20px 44px rgba(14, 55, 33, 0.34)"
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 158,
            height: 158,
            borderRadius: 40,
            background: "linear-gradient(180deg, #fff3b4 0%, #f0b23d 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1f4f35",
            fontSize: 92,
            fontWeight: 900,
            boxShadow: "0 22px 34px rgba(22, 54, 31, 0.32)"
          }}
        >
          R
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 74,
            left: 94,
            width: 324,
            height: 58,
            background: "rgba(31, 86, 49, 0.72)",
            borderRadius: 999
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 92,
            left: 160,
            width: 192,
            height: 24,
            background: "#f5e7a7",
            borderRadius: 999
          }}
        />
      </div>
    ),
    { ...size }
  );
}
