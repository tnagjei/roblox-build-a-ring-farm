// input: Next.js runtime configuration
// output: framework config for App Router build, legacy asset redirects, and static asset cache headers
// pos: project root config（更新规则：文件变更需同步本注释与根目录 README）

/** @type {import('next').NextConfig} */
const legacyAssetRedirects = [
  { source: "/icon", destination: "/icon.png", permanent: true },
  { source: "/icon/", destination: "/icon.png", permanent: true },
  { source: "/official-hero-image", destination: "/images/official-hero-image.webp", permanent: true },
  { source: "/official-hero-image/", destination: "/images/official-hero-image.webp", permanent: true },
  { source: "/opengraph-image", destination: "/images/official-hero-image.webp", permanent: true }
];

const longLivedStaticAssetHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=31536000, immutable"
  }
];

const manifestHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=3600, stale-while-revalidate=86400"
  }
];

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return legacyAssetRedirects;
  },
  async headers() {
    return [
      { source: "/favicon.ico", headers: longLivedStaticAssetHeaders },
      { source: "/icon.png", headers: longLivedStaticAssetHeaders },
      { source: "/apple-touch-icon.png", headers: longLivedStaticAssetHeaders },
      { source: "/images/:path*", headers: longLivedStaticAssetHeaders },
      { source: "/manifest.webmanifest", headers: manifestHeaders }
    ];
  }
};

export default nextConfig;
