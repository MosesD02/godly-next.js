"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import { getPhoneNumber } from "./footer";
import Link from "next/link";
import CtaPhoneLink from "./CtaPhoneLink";

const DavieCta = () => {
  const { city } = useGodlyContext();

  if (city !== "DAVIE") return null;

  const phoneNumber = getPhoneNumber(city);

  return (
    <div className="paper-bg-16 flex flex-col items-center justify-center gap-6 bg-[#262424] px-8 py-20">
      <div className="max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-[#FDE4C8] md:text-4xl lg:text-5xl">
          Reliable Window & Exterior Cleaning in Davie
        </h2>
        <p className="mb-8 text-lg text-white md:text-xl">
          From Shenandoah to Forest Ridge,{" "}
          <Link
            href="https://godlywindows.com/"
            className="underline decoration-current decoration-solid transition-colors hover:text-[#FDE4C8]"
          >
            Godly Windows
          </Link>{" "}
          proudly serves every corner of Davie with top-rated window and
          exterior cleaning services you can count on.
        </p>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-[#FDE4C8]">
            Book online for a free, no pressure quote.
          </p>
          <CtaPhoneLink phoneNumber={phoneNumber} />
        </div>
      </div>
    </div>
  );
};

export default DavieCta;
