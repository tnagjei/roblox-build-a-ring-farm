// input: Next.js runtime configuration
// output: framework config for App Router build and legacy asset redirects
// pos: project root config（更新规则：文件变更需同步本注释与根目录 README）

/** @type {import('next').NextConfig} */
const legacyAssetRedirects = [
  { source: "/icon", destination: "/icon.png", permanent: true },
  { source: "/icon/", destination: "/icon.png", permanent: true },
  { source: "/official-hero-image", destination: "/images/official-hero-image.webp", permanent: true },
  { source: "/official-hero-image/", destination: "/images/official-hero-image.webp", permanent: true },
  { source: "/opengraph-image", destination: "/images/official-hero-image.webp", permanent: true }
];

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return legacyAssetRedirects;
  }
};

export default nextConfig;
