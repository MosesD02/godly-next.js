"use client";

import { useEffect } from "react";
import {
  fireGoogleAdsPhoneConversion,
  isMainLinePhoneDigits,
  normalizeTelDigits,
} from "@/lib/googleAdsConversions";

/**
 * Delegated capture-phase listener: fires Google Ads phone conversion for main-line tel: links.
 */
export default function GoogleAdsTelClickTracker() {
  useEffect(() => {
    const handler = (event) => {
      const a = event.target.closest?.('a[href^="tel:"]');
      if (!a) return;
      const digits = normalizeTelDigits(a.getAttribute("href") || "");
      if (isMainLinePhoneDigits(digits)) {
        fireGoogleAdsPhoneConversion();
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
}
