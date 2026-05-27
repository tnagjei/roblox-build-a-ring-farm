// input: configured YouTube video IDs and localized homepage video copy
// output: optional no-cookie video guide section with ItemList / VideoObject JSON-LD
// pos: reusable homepage video module

import Link from "next/link";
import { gameConfig } from "@/lib/game-config";
import type { Locale } from "@/lib/i18n/locales";

type HomeVideoGuidesProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  lede?: string;
  note?: string;
  relatedLabel?: string;
  openLabel: string;
  videoIds?: readonly string[];
};

type VideoItem = {
  id: string;
  title: string;
  description: string;
  tag: string;
};

function embedUrl(id: string) {
  return `https://www.youtube-nocookie.com/embed/${id}`;
}

function watchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}

function thumbnailUrl(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function localizedBeginnerHref(locale: Locale) {
  return locale === gameConfig.defaultLocale ? "/beginners-guide/" : `/${locale}/beginners-guide/`;
}

function buildVideoItems(ids: readonly string[], title: string, locale: Locale): VideoItem[] {
  return ids.map((id, index) => ({
    id,
    title: `${title} ${index + 1}`,
    description:
      locale === "zh-tw"
        ? "用影片輔助理解玩法、介面、代碼、戰鬥或新手流程。影片不等於本站已驗證所有數值或排名。"
        : locale === "th"
          ? "ใช้วิดีโอช่วยดู gameplay, UI, codes, combat หรือ beginner flow แต่ไม่ได้ยืนยันทุก stat หรือ tier"
          : "Use this video to visually inspect gameplay, UI, codes, combat, or beginner flow. Videos do not verify every stat or tier by themselves.",
    tag: ["codes", "guide", "progression", "combat", "walkthrough"][index] || "guide"
  }));
}

function videoListJsonLd(title: string, videos: VideoItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    itemListElement: videos.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VideoObject",
        name: video.title,
        description: video.description,
        thumbnailUrl: [thumbnailUrl(video.id)],
        embedUrl: embedUrl(video.id),
        contentUrl: watchUrl(video.id)
      }
    }))
  };
}

export function HomeVideoGuides({
  locale,
  eyebrow,
  title,
  lede,
  note,
  relatedLabel,
  openLabel,
  videoIds = gameConfig.homeVideoIds
}: HomeVideoGuidesProps) {
  const safeIds = videoIds.filter((id) => /^[a-zA-Z0-9_-]{6,}$/.test(id));

  if (safeIds.length === 0) {
    return null;
  }

  const videos = buildVideoItems(safeIds, title, locale);

  return (
    <section className="home-video-section" aria-label={title}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoListJsonLd(title, videos)) }}
      />
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {lede ? <p className="home-video-lede">{lede}</p> : null}
      <div className="home-video-grid video-embed-grid">
        {videos.map((video) => (
          <article className="home-video-card video-embed-card" key={video.id}>
            <span>{video.tag}</span>
            <div className="home-video-frame video-embed-frame">
              <iframe
                src={embedUrl(video.id)}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <a href={watchUrl(video.id)} target="_blank" rel="noopener noreferrer">
              {openLabel}
            </a>
          </article>
        ))}
      </div>
      {note ? <p className="home-video-note">{note}</p> : null}
      {relatedLabel ? (
        <Link prefetch={false} className="home-video-related" href={localizedBeginnerHref(locale)}>
          {relatedLabel}
        </Link>
      ) : null}
    </section>
  );
}
