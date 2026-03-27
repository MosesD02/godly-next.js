import { isValidPhoneNumber } from "libphonenumber-js";

const DEFAULT_COUNTRY = "US";

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
