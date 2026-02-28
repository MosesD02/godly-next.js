"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import { getPhoneNumber } from "./footer";
import Link from "next/link";

const PembrokePinesCta = () => {
  const { city } = useGodlyContext();

  if (city !== "PEMBROKE PINES") return null;

  const phoneNumber = getPhoneNumber(city);
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");

  return (
    <div className="paper-bg-16 bg-[#262424] flex flex-col items-center justify-center gap-6 py-20 px-8">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-[#FDE4C8] mb-6 md:text-4xl lg:text-5xl">
          Trusted Window & Exterior Cleaning in Pembroke Pines
        </h2>
        <p className="text-lg text-white mb-8 md:text-xl">
          From SilverLakes to Towngate, we proudly serve every neighborhood in Pembroke Pines with top-quality{" "}
          <Link href="https://godlywindows.com/" className="underline decoration-solid decoration-current hover:text-[#FDE4C8] transition-colors">
            window and exterior cleaning services
          </Link>.
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

export default PembrokePinesCta;