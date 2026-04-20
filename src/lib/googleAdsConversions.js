/**
 * Google Ads conversion tracking (gtag `send_to`: AW-XXXXXXXXX/LABEL).
 *
 * TODO: Add real conversion labels from Google Ads (Goals > Conversions > your
 * conversion > Tag setup). Use one label for phone clicks and one for form
 * submits, then set GOOGLE_ADS_CONVERSION_LABEL_PHONE and
 * GOOGLE_ADS_CONVERSION_LABEL_FORM below. Firing is skipped while labels are
 * empty so production does not send placeholder/invalid conversions.
 */
export const GOOGLE_ADS_ID = "AW-16971177751";
export const GOOGLE_ADS_CONVERSION_LABEL_PHONE = "";
export const GOOGLE_ADS_CONVERSION_LABEL_FORM = "r0CECJ3dmZwcEJe-vpw_";

/** Main business line (954) 852-5326 — digits only for matching tel: hrefs. */
export const MAIN_LINE_TEL_DIGITS = "9548525326";

/**
 * @param {string} href - e.g. tel:9548525326 or tel:+19548525326
 * @returns {string} digits only
 */
export function normalizeTelDigits(href) {
  if (!href || typeof href !== "string") return "";
  return href.replace(/^tel:/i, "").replace(/\D/g, "");
}

/**
 * US main line: 10 digits or 11 with leading 1.
 * @param {string} digits from normalizeTelDigits
 */
export function isMainLinePhoneDigits(digits) {
  if (digits === MAIN_LINE_TEL_DIGITS) return true;
  if (digits.length === 11 && digits.startsWith("1")) {
    return digits.slice(1) === MAIN_LINE_TEL_DIGITS;
  }
  return false;
}

export function fireGoogleAdsPhoneConversion() {
  if (!GOOGLE_ADS_CONVERSION_LABEL_PHONE) return;
  if (typeof window === "undefined" || typeof window.gtag !== "function")
    return;
  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL_PHONE}`,
  });
}

export function fireGoogleAdsFormConversion() {
  if (!GOOGLE_ADS_CONVERSION_LABEL_FORM) return;
  if (typeof window === "undefined" || typeof window.gtag !== "function")
    return;
  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL_FORM}`,
    value: 1.0,
    currency: "USD",
  });
}
