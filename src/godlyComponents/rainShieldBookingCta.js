import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function RainShieldBookingCta({ text }) {
  if (!text) return null;

  return (
    <div
      className={cn(
        "paper-bg-16 flex flex-col items-center gap-8 bg-[#ebded1] bg-cover bg-center bg-no-repeat px-6 py-12",
      )}
    >
      <p className="max-w-2xl text-center font-['satoshi-regular'] text-base/7 text-[#2D2B2B] md:text-lg/8">
        {text}
      </p>
      <Link href="/booking" className="free-button">
        <span>Book Window Cleaning →</span>
      </Link>
    </div>
  );
}
