"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

const INLINE =
  `
  (function () {
    const params = new URLSearchParams(window.location.search);
    const utms = {};
    ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(k => {
      const v = params.get(k);
      if (v) utms[k] = v;
    });
    if (Object.keys(utms).length) {
      sessionStorage.setItem('utms', JSON.stringify(utms));
    }
    window.__getUtms = () => JSON.parse(sessionStorage.getItem('utms') || '{}');
  })();

  (function () {
    if (window.__godlyLandingClickTrackingBound) return;
    window.__godlyLandingClickTrackingBound = true;
    document.addEventListener('click', function (e) {
      if (typeof gtag !== 'function') return;
      const el = e.target.closest('a.cta, button.cta, a[href^="tel:"]');
      if (!el) return;
      const isCall = el.getAttribute('href')?.startsWith('tel:');
      gtag('event', isCall ? 'call_click' : 'cta_click', Object.assign({
        label: el.innerText.trim().slice(0, 50),
        page_path: location.pathname
      }, window.__getUtms()));
    }, true);
  })();
`.trim();

export default function LandingAbConversionScript() {
  const pathname = usePathname();
  const enabled = pathname?.startsWith("/landing");
  if (!enabled) return null;

  return (
    <Script id="landing-ab-conversion-tracking" strategy="afterInteractive">
      {INLINE}
    </Script>
  );
}
