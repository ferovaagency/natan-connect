declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

type GAEvent =
  | { name: 'chat_opened' }
  | { name: 'chat_message_sent' }
  | { name: 'whatsapp_escalated' }
  | { name: 'newsletter_signup'; source: string }
  | { name: 'blog_read'; slug: string }
  | { name: 'lead_submitted'; source: string };

export function trackEvent(event: GAEvent) {
  if (typeof window === 'undefined' || !window.gtag) return;
  const { name, ...params } = event;
  window.gtag('event', name, params);
}

export function trackPageView(path: string) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('config', 'G-DZSQXVHJJF', { page_path: path });
}
