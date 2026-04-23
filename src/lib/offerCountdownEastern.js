/** South Florida offer: calendar month is determined in America/New_York; deadline uses the same month-end pattern as before (local `Date` year/month from that calendar). */

const ET = "America/New_York";

/**
 * @param {Date} now
 * @returns {{ year: number, month0: number }}
 */
export function getEasternCalendarYearMonth(now) {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: ET,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const parts = dtf.formatToParts(now);
  const y = Number(parts.find((p) => p.type === "year")?.value);
  const m = Number(parts.find((p) => p.type === "month")?.value);
  return { year: y, month0: m - 1 };
}

/**
 * Last moment of the calendar month (Y, month0) in the local `Date` sense, matching legacy `new Date(y, m+1, 0, 23, 59, 59, 999)`.
 * @param {Date} now
 * @returns {Date}
 */
export function getEndOfMonthDeadlineFromEasternCalendar(now) {
  const { year, month0 } = getEasternCalendarYearMonth(now);
  return new Date(year, month0 + 1, 0, 23, 59, 59, 999);
}

/**
 * @param {number} day
 * @returns {"st"|"nd"|"rd"|"th"}
 */
export function dayOrdinalSuffix(day) {
  if (day === 1 || day === 21 || day === 31) return "st";
  if (day === 2 || day === 22) return "nd";
  if (day === 3 || day === 23) return "rd";
  return "th";
}

/**
 * e.g. "April 30th" for the popup body (month in ET, day from target `Date`).
 * @param {Date | null} targetDate
 * @returns {string}
 */
export function formatExpiryLineWithOrdinal(targetDate) {
  if (!targetDate) return "soon";
  const day = targetDate.getDate();
  const monthLong = targetDate.toLocaleDateString("en-US", {
    month: "long",
    timeZone: ET,
  });
  return `${monthLong} ${day}${dayOrdinalSuffix(day)}`;
}

/**
 * Long month name for "this {month}" line.
 * @param {Date | null} targetDate
 * @returns {string}
 */
export function formatLongMonthEastern(targetDate) {
  if (!targetDate) return "month";
  return targetDate.toLocaleDateString("en-US", { month: "long", timeZone: ET });
}
