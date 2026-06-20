import { track } from "@vercel/analytics";

export type PreorderLocation = "hero" | "header" | "mobile-sticky";

export type ScrollDepth = 25 | 50 | 75 | 100;

export function trackPreorderClick(location: PreorderLocation) {
  track("preorder_click", { location });
}

export function trackScrollDepth(depth: ScrollDepth) {
  track("scroll_depth", { depth: `${depth}%` });
}

export function trackEmailSubscribe() {
  track("email_subscribe");
}
