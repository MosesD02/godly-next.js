"use client";

import React from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { toUsTelHref } from "@/lib/usPhone";

/**
 * Tel link with inline phone icon — used under estimate CTAs on city pages.
 */
export default function CtaPhoneLink({ phoneNumber, className }) {
  return (
    <a
      href={toUsTelHref(phoneNumber)}
      aria-label={phoneNumber ? `Call ${phoneNumber}` : undefined}
      suppressHydrationWarning
      className={cn(
        "inline-flex items-center justify-center gap-2 font-['satoshi-regular'] text-base font-normal text-white! transition-colors hover:text-[#FDE4C8]! md:text-lg",
        className,
      )}
    >
      <Phone
        className="size-4 shrink-0 text-[#FDE4C8] md:size-4.5"
        aria-hidden
      />
      <span className="tracking-wide tabular-nums" suppressHydrationWarning>
        {phoneNumber}
      </span>
    </a>
  );
}
