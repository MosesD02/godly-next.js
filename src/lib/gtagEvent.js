/**
 * @param {string} eventName
 * @param {Record<string, string | number | boolean>} [params]
 */
export function sendGtagEvent(eventName, params = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, params);
}
