"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import { getPhoneNumber } from "./footer";
import Link from "next/link";

const DelrayBeachCta = () => {
  const { city } = useGodlyContext();

  if (city !== "DELRAY BEACH") return null;

  const phoneNumber = getPhoneNumber(city);
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");

  return (
    <div className="paper-bg-16 bg-[#262424] flex flex-col items-center justify-center gap-6 py-20 px-8">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-[#FDE4C8] mb-6 md:text-4xl lg:text-5xl">
          Reliable Window & Exterior Cleaning in Delray Beach
        </h2>
        <p className="text-lg text-white mb-8 md:text-xl">
          Whether you're in Tropic Isle, Kings Point, or Delray Shores—{" "}
          <Link href="https://godlywindows.com/" className="underline decoration-solid decoration-current hover:text-[#FDE4C8] transition-colors">
            Godly Windows
          </Link>{" "}
          is your trusted local partner for expert window cleaning and exterior restoration.
        </p>
        <div className="flex flex-col items-center gap-2">
          <p className="text-[#FDE4C8] text-sm">
            Book online for a free, no pressure quote.
          </p>
          <a href={`tel:${formattedPhoneNumber}`} className="text-center font-['satoshi-regular'] text-base font-normal text-white! md:text-lg">
            {phoneNumber}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DelrayBeachCta;