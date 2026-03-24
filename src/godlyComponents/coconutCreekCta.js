"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import { getPhoneNumber } from "./footer";
import Link from "next/link";

const CoconutCreekCta = () => {
  const { city } = useGodlyContext();

  if (city !== "COCONUT CREEK") return null;

  const phoneNumber = getPhoneNumber(city);
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");

  return (
    <div className="paper-bg-16 flex flex-col items-center justify-center gap-6 bg-[#262424] px-8 py-20">
      <div className="max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-[#FDE4C8] md:text-4xl lg:text-5xl">
          Ready for Sparkling Clean Windows in Coconut Creek?
        </h2>
        <p className="mb-8 text-lg text-white md:text-xl">
          Join hundreds of satisfied Coconut Creek customers who trust{" "}
          <Link
            href="https://godlywindows.com/"
            className="underline decoration-current decoration-solid transition-colors hover:text-[#FDE4C8]"
          >
            Godly Windows
          </Link>{" "}
          for professional window cleaning and exterior services. Fast response,
          honest pricing, and guaranteed results.
        </p>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-[#FDE4C8]">
            Book online for a free, no pressure quote.
          </p>
          <a
            href={`tel:${formattedPhoneNumber}`}
            className="text-center font-['satoshi-regular'] text-base font-normal text-white! md:text-lg"
          >
            {phoneNumber}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoconutCreekCta;
