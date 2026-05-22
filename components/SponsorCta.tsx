"use client";

// input: NEXT_PUBLIC_SPONSOR_URL
// output: reusable labeled outbound CTA
// pos: components/SponsorCta.tsx

export const sponsorUrl = process.env.NEXT_PUBLIC_SPONSOR_URL || "";

export default function SponsorCta({
  label = "Visit Sponsor",
  className = "",
  ariaLabel = "Visit sponsor"
}: {
  label?: string;
  className?: string;
  ariaLabel?: string;
}) {
  if (!sponsorUrl) return null;

  return (
    <a
      href={sponsorUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
    >
      {label}
    </a>
  );
}
