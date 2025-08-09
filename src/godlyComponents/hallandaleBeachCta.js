"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import Link from "next/link";

const HallandaleBeachCta = () => {
  const { city } = useGodlyContext();

  if (city !== "HALLANDALE BEACH") return null;

  return (
    <div className="paper-bg-16 bg-[#262424] flex flex-col items-center justify-center gap-6 py-20 px-8">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-[#FDE4C8] mb-6 md:text-4xl lg:text-5xl">
          Coastal Window Cleaning Excellence in Hallandale Beach
        </h2>
        <p className="text-lg text-white mb-8 md:text-xl">
          Whether you live near the Intracoastal, in a gated community, or along Hallandale Beach Boulevard—{" "}
          <Link href="https://godlywindows.com/" className="underline decoration-solid decoration-current hover:text-[#FDE4C8] transition-colors">
            Godly Windows
          </Link>{" "}
          is your trusted source for cleaner windows and beautiful exteriors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:(954) 852-5326"
            className="bg-[#FDE4C8] text-[#2D2B2B] px-8 py-3 rounded-md font-bold hover:bg-[#f1d4a6] transition-colors"
          >
            📞 Call (954) 852-5326
          </a>
          <p className="text-[#FDE4C8] text-sm">
            Call now or book online for a free, no-pressure quote
          </p>
        </div>
      </div>
    </div>
  );
};

export default HallandaleBeachCta;