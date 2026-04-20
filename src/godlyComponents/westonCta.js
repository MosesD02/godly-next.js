"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import SectionButton from "@/components/sectionButton";
import Link from "next/link";
import { getPhoneNumber } from "./footer";
import CtaPhoneLink from "./CtaPhoneLink";

const WestonCta = () => {
  const { city } = useGodlyContext();

  if (city !== "WESTON") return null;

  const phoneNumber = getPhoneNumber(city);

  return (
    <div className="paper-bg-16 bg-[#262424]">
      <div className="mx-auto flex max-w-360 flex-col items-center justify-center gap-5 px-6 py-15 md:gap-7.5 md:px-16 md:py-25">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="max-w-150 text-center font-['satoshi-regular'] text-lg leading-[140%] font-normal text-white/90 md:text-[24px] lg:text-[26px]">
            Whether you&apos;re in{" "}
            <span className="font-['satoshi-bold'] text-[#FDE4C8]">
              Bonaventure
            </span>
            ,{" "}
            <span className="font-['satoshi-bold'] text-[#FDE4C8]">
              Windmill Ranch
            </span>
            , or{" "}
            <span className="font-['satoshi-bold'] text-[#FDE4C8]">
              Sector 7
            </span>
            —{" "}
            <Link
              href="https://godlywindows.com/"
              className="font-['satoshi-bold'] text-[#FDE4C8] underline decoration-current decoration-solid transition-colors hover:text-white"
            >
              Godly Windows
            </Link>{" "}
            knows exactly what Weston homes need: impact windows, pool screen
            enclosures, or a full exterior wash.
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

export default WestonCta;
