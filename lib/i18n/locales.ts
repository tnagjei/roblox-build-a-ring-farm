// input: supported locale codes and site completion config
// output: locale labels and hreflang metadata
// pos: canonical i18n locale config

export const locales = ["en", "zh-tw", "th"] as const;

export type Locale = (typeof locales)[number];

export const localeMeta = {
  en: {
    label: "English",
    nativeName: "English",
    hreflang: "en"
  },
  "zh-tw": {
    label: "Traditional Chinese",
    nativeName: "繁體中文",
    hreflang: "zh-TW"
  },
  th: {
    label: "Thai",
    nativeName: "ไทย",
    hreflang: "th"
  }
} satisfies Record<Locale, { label: string; nativeName: string; hreflang: string }>;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
