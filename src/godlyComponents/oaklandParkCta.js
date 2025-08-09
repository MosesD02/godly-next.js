"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import { getPhoneNumber } from "./footer";
import Link from "next/link";

const OaklandParkCta = () => {
  const { city } = useGodlyContext();

  if (city !== "OAKLAND PARK") {
    return null;
  }

  const phoneNumber = getPhoneNumber(city);

  return (
    <div className="paper-bg-16 bg-[#262424] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-6 font-marlton text-3xl font-normal tracking-wide text-white md:text-5xl">
          Ready to Transform Your Oakland Park Property?
        </h2>
        <p className="mx-auto mb-8 max-w-3xl font-['satoshi-regular'] text-lg text-white/80 md:text-xl">
          From quiet residential blocks to busy commercial areas, trust{" "}
          <Link 
            href="https://godlywindows.com/" 
            className="underline decoration-solid decoration-current hover:text-[#FDE4C8] transition-colors"
          >
            Godly Windows
          </Link>{" "}
          for professional window cleaning and pressure washing in Oakland Park. We deliver streak-free results and reliable service every time.
        </p>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <a
            href={`tel:${phoneNumber}`}
            className="rounded-md bg-[#FDE4C8] px-8 py-4 font-['satoshi-bold'] text-lg font-bold text-[#1F1D1D] transition-colors hover:bg-[#F3CA9E]"
          >
            Call {phoneNumber}
          </a>
          <Link
            href="/oakland-park/quote"
            className="rounded-md border-2 border-[#FDE4C8] px-8 py-4 font-['satoshi-bold'] text-lg font-bold text-[#FDE4C8] transition-colors hover:bg-[#FDE4C8] hover:text-[#1F1D1D]"
          >
            Get Free Estimate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OaklandParkCta;