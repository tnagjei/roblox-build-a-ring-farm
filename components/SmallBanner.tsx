// input: optional inline placement flag for small banner slot
// output: disabled banner container to avoid sponsored placeholder text
// pos: components/SmallBanner.tsx（更新规则：广告 ID 变更需同步更新此文件）

"use client";

type SmallBannerProps = {
  placement?: "inline";
};

export default function SmallBanner(_props: SmallBannerProps) {
  return null;
}
