"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import { getPhoneNumber } from "./footer";
import Link from "next/link";
import CtaPhoneLink from "./CtaPhoneLink";
import CtaEstimateLink from "./CtaEstimateLink";
import { cityCtaActions } from "./cityCtaStyles";

const RoyalPalmBeachCta = () => {
  const { city } = useGodlyContext();

  if (city !== "ROYAL PALM BEACH") {
    return null;
  }

  const phoneNumber = getPhoneNumber(city);

  return (
    <div className="paper-bg-16 bg-[#262424] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="font-marlton mb-6 text-3xl font-normal tracking-wide text-white md:text-5xl">
          Whether you&apos;re in Madison Green, Counterpoint Estates, or La
          Mancha
        </h2>
        <p className="mx-auto mb-8 max-w-3xl font-['satoshi-regular'] text-lg text-white/80 md:text-xl">
          <Link
            href="https://godlywindows.com/"
            className="underline decoration-current decoration-solid transition-colors hover:text-[#FDE4C8]"
          >
            Godly Windows
          </Link>{" "}
          is your trusted provider for clean windows and beautifully restored
          exteriors in Royal Palm Beach.
        </p>
        <p className="mx-auto mb-2 max-w-3xl font-['satoshi-regular'] text-base text-white/80 md:text-lg">
          Book online for a free, no pressure quote.
        </p>
        <div className={cityCtaActions}>
          <CtaEstimateLink href="/royal-palm-beach/quote">
            Get Free Estimate
          </CtaEstimateLink>
          <CtaPhoneLink phoneNumber={phoneNumber} />
        </div>
      </div>
    </div>
  );
};

export default RoyalPalmBeachCta;
