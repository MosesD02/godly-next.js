"use client";

import React from "react";
import Link from "next/link";
import { useGodlyContext } from "@/context/godlyContext";
import { normalizeCityDisplayName } from "@/data/cities";
import { getPhoneNumber } from "./footer";
import CtaPhoneLink from "./CtaPhoneLink";
import CtaEstimateLink from "./CtaEstimateLink";
import {
  cityCtaSection,
  cityCtaInner,
  cityCtaHeadline,
  cityCtaBody,
  cityCtaBookLine,
  cityCtaActions,
  cityCtaBodyLink,
} from "./cityCtaStyles";

/** Cities that have a dedicated `*Cta.js` on the homepage (see `home.js`). */
const CITY_CTA_LABELS = new Set(
  [
    "PARKLAND",
    "COCONUT CREEK",
    "COOPER CITY",
    "WEST PARK",
    "FORT LAUDERDALE",
    "WESTON",
    "LIGHTHOUSE POINT",
    "SOUTHWEST RANCHES",
    "CORAL SPRINGS",
    "HALLANDALE BEACH",
    "MARGATE",
    "PEMBROKE PINES",
    "SUNRISE",
    "DAVIE",
    "DELRAY BEACH",
    "HILLSBORO BEACH",
    "PLANTATION",
    "TAMARAC",
    "DEERFIELD BEACH",
    "HOLLYWOOD",
    "MIRAMAR",
    "POMPANO BEACH",
    "LAUDERDALE-BY-THE-SEA",
    "OAKLAND PARK",
    "ROYAL PALM BEACH",
  ].map((s) => normalizeCityDisplayName(s)),
);

/**
 * Shown on the homepage when the selected city does not have a dedicated
 * city CTA block (e.g. South Florida hub, Boca Raton, Lauderhill).
 */
export default function RegionalFallbackCta() {
  const { city } = useGodlyContext();
  const label = normalizeCityDisplayName(city);
  if (label && CITY_CTA_LABELS.has(label)) return null;

  const phoneNumber = getPhoneNumber(city);

  return (
    <div className={cityCtaSection}>
      <div className={cityCtaInner}>
        <h2 className={cityCtaHeadline}>
          Ready for Sparkling Windows and Exteriors?
        </h2>
        <p className={cityCtaBody}>
          <Link href="https://godlywindows.com/" className={cityCtaBodyLink}>
            Godly Windows
          </Link>{" "}
          serves homeowners and businesses across South Florida with professional
          window cleaning, pressure washing, and exterior care.
        </p>
        <p className={cityCtaBookLine}>
          Book online for a free, no pressure quote.
        </p>
        <div className={cityCtaActions}>
          <CtaEstimateLink href="/booking" />
          <CtaPhoneLink phoneNumber={phoneNumber} />
        </div>
      </div>
    </div>
  );
}
