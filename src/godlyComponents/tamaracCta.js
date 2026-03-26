"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import { getPhoneNumber } from "./footer";
import Link from "next/link";

const TamaracCta = () => {
  const { city } = useGodlyContext();

  if (city !== "TAMARAC") return null;

  const phoneNumber = getPhoneNumber(city);
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");

  return (
    <div className="paper-bg-16 flex flex-col items-center justify-center gap-6 bg-[#262424] px-8 py-20">
      <div className="max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-[#FDE4C8] md:text-4xl lg:text-5xl">
          Expert Window & Exterior Cleaning in Tamarac
        </h2>
        <p className="mb-8 text-lg text-white md:text-xl">
          Whether you&apos;re in Woodmont, Westwood, or along Commercial Boulevard—{" "}
          <Link
            href="https://godlywindows.com/"
            className="underline decoration-current decoration-solid transition-colors hover:text-[#FDE4C8]"
          >
            Godly Windows
          </Link>{" "}
          is your trusted local team for expert window cleaning and exterior
          services in Tamarac.
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

export default TamaracCta;
