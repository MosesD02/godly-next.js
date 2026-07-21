import { isValidPhoneNumber } from "libphonenumber-js";

const DEFAULT_COUNTRY = "US";

const FORT_LAUDERDALE_PHONE = "954-852-5326";
const BOCA_RATON_PHONE = "561-826-4461";
const WESTON_PHONE = "954-738-3421";

/**
 * Formats the national (10-digit) part only. The UI shows +1 separately, so we use
 * XXX-XXX-XXXX instead of parentheses national format from AsYouType.
 */
export function formatUsPhoneInput(value) {
  const digits = value.replace(/\D/g, "");
  let national = digits;
  if (national.length > 10 && national.startsWith("1")) {
    national = national.slice(1);
  }
  national = national.slice(0, 10);
  const a = national.slice(0, 3);
  const b = national.slice(3, 6);
  const c = national.slice(6, 10);
  if (national.length === 0) return "";
  if (national.length <= 3) return a;
  if (national.length <= 6) return `${a}-${b}`;
  return `${a}-${b}-${c}`;
}

export function isUsPhoneValid(value) {
  return isValidPhoneNumber(value, DEFAULT_COUNTRY);
}

/** Return a canonical U.S. E.164 number, or an empty string when invalid. */
export function toUsE164(value) {
  if (typeof value !== "string") return "";

  let digits = value.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) {
    digits = digits.slice(1);
  }

  return digits.length === 10 ? `+1${digits}` : "";
}

/** Build a standards-compliant click-to-call href without changing display text. */
export function toUsTelHref(value) {
  const e164 = toUsE164(value);
  return e164 ? `tel:${e164}` : undefined;
}

/**
 * Click-to-call routing is URL-based so the initial HTML is correct even before
 * the city context hydrates. Visible phone text remains owned by each caller.
 */
export function getClickToCallPhone(pathname) {
  if (/^\/boca-raton(?:\/|$)/.test(pathname || "")) return BOCA_RATON_PHONE;
  if (/^\/weston(?:\/|$)/.test(pathname || "")) return WESTON_PHONE;
  return FORT_LAUDERDALE_PHONE;
}
