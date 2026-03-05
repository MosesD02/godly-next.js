"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import { getPhoneNumber } from "./footer";
import Link from "next/link";

const HallandaleBeachCta = () => {
  const { city } = useGodlyContext();

  if (city !== "HALLANDALE BEACH") return null;

  const phoneNumber = getPhoneNumber(city);
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");

  return (
    <div className="paper-bg-16 flex flex-col items-center justify-center gap-6 bg-[#262424] px-8 py-20">
      <div className="max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-[#FDE4C8] md:text-4xl lg:text-5xl">
          Coastal Window Cleaning Excellence in Hallandale Beach
        </h2>
        <p className="mb-8 text-lg text-white md:text-xl">
          Whether you live near the Intracoastal, in a gated community, or along
          Hallandale Beach Boulevard—{" "}
          <Link
            href="https://godlywindows.com/"
            className="underline decoration-current decoration-solid transition-colors hover:text-[#FDE4C8]"
          >
            Godly Windows
          </Link>{" "}
          is your trusted source for cleaner windows and beautiful exteriors.
        </p>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-[#FDE4C8]">
            Book online for a free, no pressure quote.
          </p>
          <a
            href={`tel:${formattedPhoneNumber}`}
            className="text-center font-['satoshi-regular'] text-base font-normal text-white! md:text-lg"
          >
            {phoneNumber}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HallandaleBeachCta;
