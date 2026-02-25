"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import SectionButton from "@/components/sectionButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SouthwestRanchesCta = () => {
  const { city } = useGodlyContext();

  // Only show for Southwest Ranches
  if (city !== "SOUTHWEST RANCHES") {
    return null;
  }

  return (
    <div className="paper-bg-16 bg-[#262424]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-[20px] px-6 py-[60px] md:gap-[30px] md:px-16 md:py-[100px]">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="max-w-[600px] text-center font-['satoshi-regular'] text-lg leading-[140%] font-normal text-white/90 md:text-[24px] lg:text-[26px]">
            Whether you're on{" "}
            <span className="font-['satoshi-bold'] text-[#FDE4C8]">
              Hancock Road
            </span>
            ,{" "}
            <span className="font-['satoshi-bold'] text-[#FDE4C8]">
              Mustang Trail
            </span>
            , or in a quiet corner of Southwest Ranches—
            <Link
              href="https://godlywindows.com/"
              className="font-['satoshi-bold'] text-[#FDE4C8] underline decoration-current decoration-solid transition-colors hover:text-white"
            >
              Godly Windows
            </Link>{" "}
            is your trusted partner for clear windows and polished exteriors.
          </p>
          <p className="text-center font-['satoshi-regular'] text-base font-normal text-white/80 md:text-lg">
            📞 Call now or book online for a free, no-pressure quote.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <a
            href="tel:(954) 738-3421"
            className="text-center font-['satoshi-regular'] text-base font-normal text-white! md:text-lg"
          >
            Call Now: (954) 738-3421
          </a>
          <SectionButton>Get a Free Estimate</SectionButton>
        </div>
      </div>
    </div>
  );
};

export default SouthwestRanchesCta;
