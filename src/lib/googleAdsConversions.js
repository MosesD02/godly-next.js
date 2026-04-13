/** Google Ads conversion IDs — replace placeholder labels in Ads Manager when ready. */
export const GOOGLE_ADS_ID = "AW-16971177751";
export const GOOGLE_ADS_CONVERSION_LABEL_PHONE = "PHONE_CLICK_LABEL";
export const GOOGLE_ADS_CONVERSION_LABEL_FORM = "FORM_SUBMIT_LABEL";

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
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL_PHONE}`,
  });
}

export function fireGoogleAdsFormConversion() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL_FORM}`,
  });
}
