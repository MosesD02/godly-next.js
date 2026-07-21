export const ATTRIBUTION_PARAMS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

export const ATTRIBUTION_FIELDS = [
  ...ATTRIBUTION_PARAMS,
  "landing_page",
  "submitted_at",
];

const STORAGE_KEY = "gw_attribution";
const TTL_MS = 90 * 864e5;

export function readStoredAttribution() {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};

    const stored = JSON.parse(raw);
    if (
      !stored ||
      typeof stored.ts !== "number" ||
      !stored.v ||
      typeof stored.v !== "object" ||
      Date.now() - stored.ts >= TTL_MS
    ) {
      window.localStorage.removeItem(STORAGE_KEY);
      return {};
    }

    return stored.v;
  } catch {
    return {};
  }
}

export function captureCurrentAttribution() {
  if (typeof window === "undefined") return {};

  const data = { ...readStoredAttribution() };
  const query = new URLSearchParams(window.location.search);
  let hasNew = false;

  ATTRIBUTION_PARAMS.forEach((param) => {
    const value = query.get(param);
    if (value) {
      data[param] = value;
      hasNew = true;
    }
  });

  if (hasNew) {
    data.landing_page = window.location.pathname;
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ts: Date.now(), v: data }),
      );
    } catch {
      // Storage can be blocked; forms remain usable with empty fields.
    }
  }

  return data;
}

export function getAttributionValues(submittedAt = new Date().toISOString()) {
  const stored = captureCurrentAttribution();

  return ATTRIBUTION_FIELDS.reduce((values, field) => {
    values[field] =
      field === "submitted_at" ? submittedAt : String(stored[field] || "");
    return values;
  }, {});
}

export function getAttributionForSubmission(form) {
  const values = getAttributionValues();

  ATTRIBUTION_FIELDS.forEach((field) => {
    const input = form?.elements?.namedItem(field);
    if (input && "value" in input) input.value = values[field];
  });

  return values;
}
