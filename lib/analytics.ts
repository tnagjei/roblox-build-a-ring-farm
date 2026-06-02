// input: event name and optional parameters
// output: optional GA4 tracking event sent in production
// pos: lib/analytics.ts (更新规则：文件变更需同步本注释与所属目录 README)

const isProduction = process.env.NODE_ENV === "production";

export function sendGAEvent(eventName: string, params: Record<string, any> = {}) {
  if (!isProduction) {
    console.log("[GA4 Dev Event]", eventName, params);
    return;
  }

  if (typeof window !== "undefined" && (window as any).gtag) {
    try {
      (window as any).gtag("event", eventName, {
        ...params,
        page_path: typeof window !== "undefined" ? window.location.pathname : ""
      });
    } catch (e) {
      console.error("[GA4 Track Error]", e);
    }
  }
}
