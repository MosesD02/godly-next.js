"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import SectionButton from "@/components/sectionButton";

const MiamiCta = () => {
  const { city } = useGodlyContext();

  // Only show for Miami
  if (city !== "MIAMI") {
    return null;
  }

  return (
    <div className="bg-[#312E2C]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-[20px] px-6 py-[60px] md:gap-[30px] md:px-16 md:py-[100px]">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="max-w-[600px] text-center font-['satoshi-regular'] text-lg font-normal leading-[140%] text-white/90 md:text-[24px] lg:text-[26px]">
            Whether you're in a{" "}
            <span className="font-['satoshi-bold'] text-[#FDE4C8]">condo</span>,{" "}
            <span className="font-['satoshi-bold'] text-[#FDE4C8]">townhouse</span>, or classic Miami bungalow; Godly Windows team is ready to make your home shine.
          </p>
          <p className="text-center font-['satoshi-regular'] text-base font-normal text-white/80 md:text-lg">
            Call now or book online for a free, no-pressure quote.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          <a 
            href="tel:(954) 738-3421"
            className="flex items-center justify-center rounded-[6px] bg-[#FDE4C8] px-6 py-3 font-['satoshi-bold'] text-sm font-bold text-[#262424] transition-all duration-300 hover:bg-[#f5d7a8] md:px-8 md:py-4 md:text-base"
          >
            Call Now: (954) 738-3421
          </a>
          <SectionButton>Get a Free Estimate</SectionButton>
        </div>
      </div>
    </div>
  );
};

export default MiamiCta;