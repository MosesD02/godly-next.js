"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import { getPhoneNumber } from "./footer";
import Link from "next/link";
import CtaPhoneLink from "./CtaPhoneLink";

const PembrokePinesCta = () => {
  const { city } = useGodlyContext();

  if (city !== "PEMBROKE PINES") return null;

  const phoneNumber = getPhoneNumber(city);

  return (
    <div className="paper-bg-16 flex flex-col items-center justify-center gap-6 bg-[#262424] px-8 py-20">
      <div className="max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-[#FDE4C8] md:text-4xl lg:text-5xl">
          Trusted Window & Exterior Cleaning in Pembroke Pines
        </h2>
        <p className="mb-8 text-lg text-white md:text-xl">
          From SilverLakes to Towngate, we proudly serve every neighborhood in
          Pembroke Pines with top-quality{" "}
          <Link
            href="https://godlywindows.com/"
            className="underline decoration-current decoration-solid transition-colors hover:text-[#FDE4C8]"
          >
            window and exterior cleaning services
          </Link>
          .
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

export default PembrokePinesCta;
