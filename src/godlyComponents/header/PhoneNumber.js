// src/godlyComponents/header/PhoneNumber.js
import React from "react";
import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useGodlyContext } from "@/context/godlyContext";
import { getPhoneNumber } from "@/lib/getPhoneNumber";
import { toUsTelHref } from "@/lib/usPhone";

const PhoneNumber = ({ cityOverride }) => {
  const { city } = useGodlyContext();
  const pathname = usePathname();
  const displayCity = cityOverride ?? city;
  const phoneNumber = getPhoneNumber(displayCity, pathname);
  const phoneHref = toUsTelHref(phoneNumber);

  const handlePhoneClick = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "phone_number_click",
        event_category: "engagement",
        event_label: "Phone Number Click",
        city: displayCity,
      });
    }
  };

  return (
    <div className="flex items-center gap-4 px-4 py-2 text-[#F3C99D]">
      <a
        href={phoneHref}
        onClick={handlePhoneClick}
        suppressHydrationWarning
        className="iconbox cursor-pointer rounded-md border-2 border-solid border-[#403830] bg-[#1e1c1b] p-2 transition-shadow duration-300 ease-in-out hover:shadow-[0px_3px_2px_0px_rgba(97,80,62,0.20)_inset,0px_1px_8.6px_0px_rgba(243,202,158,0.70)] xl:p-3"
      >
        <Phone className="size-5 text-[#F3C99D] xl:size-7" strokeWidth={1.2} />
      </a>
      <a href={phoneHref} onClick={handlePhoneClick} suppressHydrationWarning>
        <p className="text-xs leading-none font-normal">CALL US</p>
        <p
          className="text-base font-normal xl:text-lg"
          suppressHydrationWarning
        >
          {phoneNumber}
        </p>
      </a>
    </div>
  );
};

export default PhoneNumber;
