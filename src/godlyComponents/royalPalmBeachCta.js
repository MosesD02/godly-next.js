"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import { getPhoneNumber } from "./footer";
import Link from "next/link";

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
          Whether you're in Madison Green, Counterpoint Estates, or La Mancha
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
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <a
            href={`tel:${phoneNumber}`}
            className="rounded-md bg-[#FDE4C8] px-8 py-4 font-['satoshi-bold'] text-lg font-bold text-[#1F1D1D] transition-colors hover:bg-[#F3CA9E]"
          >
            Call {phoneNumber}
          </a>
          <Link
            href="/royal-palm-beach/quote"
            className="rounded-md border-2 border-[#FDE4C8] px-8 py-4 font-['satoshi-bold'] text-lg font-bold text-[#FDE4C8]! transition-colors hover:bg-[#FDE4C8] hover:text-[#1F1D1D]"
          >
            Get Free Estimate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoyalPalmBeachCta;
