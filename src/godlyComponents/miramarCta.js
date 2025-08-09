"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import { getPhoneNumber } from "./footer";
import Link from "next/link";

const MiramarCta = () => {
  const { city } = useGodlyContext();

  if (city !== "MIRAMAR") return null;

  const phoneNumber = getPhoneNumber(city);
  const formattedPhoneNumber = phoneNumber.replace(/-/g, "");

  return (
    <div className="paper-bg-16 bg-[#262424] flex flex-col items-center justify-center gap-6 py-20 px-8">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-[#FDE4C8] mb-6 md:text-4xl lg:text-5xl">
          Expert Window & Exterior Cleaning in Miramar
        </h2>
        <p className="text-lg text-white mb-8 md:text-xl">
          From Riviera Isles to Monarch Lakes, {" "}
          <Link href="https://godlywindows.com/" className="underline decoration-solid decoration-current hover:text-[#FDE4C8] transition-colors">
            Godly Windows
          </Link>{" "}
          is Miramar's go-to team for spotless windows and top-tier exterior cleaning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`tel:${formattedPhoneNumber}`}
            className="bg-[#FDE4C8] text-[#2D2B2B] px-8 py-3 rounded-md font-bold hover:bg-[#f1d4a6] transition-colors"
          >
            📞 Call {phoneNumber}
          </a>
          <p className="text-[#FDE4C8] text-sm">
            Call now or book online for a free, no-pressure quote
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiramarCta;