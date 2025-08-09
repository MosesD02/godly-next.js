"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import SectionButton from "@/components/sectionButton";

const ParklandCta = () => {
  const { city } = useGodlyContext();

  // Only show for Parkland
  if (city !== "PARKLAND") {
    return null;
  }

  return (
    <div className="paper-bg-16 bg-[#262424]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-[20px] px-6 py-[60px] md:gap-[30px] md:px-16 md:py-[100px]">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="max-w-[600px] text-center font-['satoshi-regular'] text-lg leading-[140%] font-normal text-white/90 md:text-[24px] lg:text-[26px]">
            Whether you're in{" "}
            <span className="font-['satoshi-bold'] text-[#FDE4C8]">
              Heron Bay
            </span>
            ,{" "}
            <span className="font-['satoshi-bold'] text-[#FDE4C8]">
              MiraLago
            </span>
            , or a quiet cul-de-sac, our Parkland team is here to make your
            property shine.
          </p>
          <p className="text-center font-['satoshi-regular'] text-base font-normal text-white/80 md:text-lg">
            Call now or book online for a free, no-pressure quote.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          <a
            href="tel:(954) 852-5326"
            className="flex items-center justify-center rounded-[6px] bg-[#FDE4C8] px-6 py-3 font-['satoshi-bold'] text-sm font-bold text-[#262424] transition-all duration-300 hover:bg-[#f5d7a8] md:px-8 md:py-4 md:text-base"
          >
            Call Now: (954) 852-5326
          </a>
          <SectionButton>Get a Free Estimate</SectionButton>
        </div>
      </div>
    </div>
  );
};

export default ParklandCta;
