"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import SectionButton from "@/components/sectionButton";
import { getPhoneNumber } from "./footer";
import CtaPhoneLink from "./CtaPhoneLink";

const ParklandCta = () => {
  const { city } = useGodlyContext();

  if (city !== "PARKLAND") return null;

  const phoneNumber = getPhoneNumber(city);

  return (
    <div className="paper-bg-16 bg-[#262424]">
      <div className="mx-auto flex max-w-360 flex-col items-center justify-center gap-5 px-6 py-15 md:gap-7.5 md:px-16 md:py-25">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="max-w-150 text-center font-['satoshi-regular'] text-lg leading-[140%] font-normal text-white/90 md:text-[24px] lg:text-[26px]">
            Whether you&apos;re in{" "}
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
            Book online for a free, no pressure quote.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <SectionButton>Get a Free Estimate</SectionButton>
            <CtaPhoneLink phoneNumber={phoneNumber} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParklandCta;
