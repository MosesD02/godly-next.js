import { ATTRIBUTION_FIELDS } from "@/lib/attribution";
import { toUsE164 } from "@/lib/usPhone";

/**
 * n8n lead tracking webhook URLs for automated lead management.
 * Each form sends the lead's contact details plus attribution as JSON on submit.
 *
 * Form mapping:
 * - /landing/[city], /landing/[service]/[city] → All landing city pages (Fort Lauderdale, Boca Raton, Weston, etc.)
 * - / (homepage) → Main website
 * - /fort-lauderdale, /fort-lauderdale/* → Fort Lauderdale GBP
 * - /boca-raton, /boca-raton/* → Boca Raton GBP
 * - /weston, /weston/* → Weston GBP
 */
export const LEAD_WEBHOOKS = {
  /** /landing - All landing city pages (/landing/fort-lauderdale, /landing/boca-raton, /landing/[service]/[city], etc.) */
  GOOGLE_ADS:
    "https://removedfast.app.n8n.cloud/webhook/72feec39-8655-40da-8886-52a44f21fe5a",
  /** Fort Lauderdale GBP city pages */
  FORT_LAUDERDALE:
    "https://removedfast.app.n8n.cloud/webhook/8567e870-bc81-4461-9b42-41900d6e9607",
  /** Boca Raton GBP city pages */
  BOCA_RATON:
    "https://removedfast.app.n8n.cloud/webhook/7f5ca51a-6c0b-476a-8acd-5fb642eb7529",
  /** Weston GBP city pages */
  WESTON:
    "https://removedfast.app.n8n.cloud/webhook/cfd84135-65a6-4fcf-803d-22706be9b73e",
  /** / (homepage) - Main website contact form */
  MAIN_WEBSITE:
    "https://removedfast.app.n8n.cloud/webhook/85e43544-463b-4464-8409-4a235f297d26",
};

/**
 * Send lead to n8n webhook. Fires and forgets (non-blocking).
 * @param {string} url - Webhook URL
 * @param {string} name - Lead name
 * @param {string} phone - Phone (will be normalized to U.S. E.164)
 * @param {string} email - Lead email
 * @param {string} [pageUrl] - Optional page URL for workflow routing (e.g. godlywindows.com/landing/fort-lauderdale)
 * @param {object} [attribution] - The ten attribution fields, including empty optional values
 */
export async function sendLeadWebhook(
  url,
  name,
  phone,
  email,
  pageUrl,
  attribution = {},
) {
  const payload = {
    name: (name || "").trim(),
    phone: toUsE164(phone),
    email: (email || "").trim(),
  };
  if (pageUrl) payload.pageUrl = pageUrl;
  ATTRIBUTION_FIELDS.forEach((field) => {
    payload[field] = attribution[field] || "";
  });
  if (!payload.name || !payload.phone || !payload.email) return;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("[Lead Webhook] Failed to send:", err);
  }
}
