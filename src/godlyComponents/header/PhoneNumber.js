// src/godlyComponents/header/PhoneNumber.js
import React from "react";
import { Phone } from "lucide-react";
import { useGodlyContext } from "@/context/godlyContext";
import { getPhoneNumber } from "../footer";

const PhoneNumber = () => {
  const { city } = useGodlyContext();
  const phoneNumber = getPhoneNumber(city);
  const formattedPhoneNumber = phoneNumber.replace(/-/g, "");

  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "phone_number_click", {
        event_category: "engagement",
        event_label: "Phone Number Click",
        phone_number: phoneNumber,
        city: city,
      });
    }
  };

  return (
    <div className="flex items-center gap-4 px-4 py-2 text-[#F3C99D]">
      <a
        href={`tel:${formattedPhoneNumber}`}
        onClick={handlePhoneClick}
        className="iconbox cursor-pointer rounded-md border-2 border-solid border-[#403830] bg-[#1e1c1b] p-2 transition-shadow duration-300 ease-in-out hover:shadow-[0px_3px_2px_0px_rgba(97,_80,_62,_0.20)_inset,_0px_1px_8.6px_0px_rgba(243,_202,_158,_0.70)] xl:p-3"
      >
        <Phone className="size-5 text-[#F3C99D] xl:size-7" strokeWidth={1.2} />
      </a>
      <a href={`tel:${formattedPhoneNumber}`} onClick={handlePhoneClick}>
        <p className="text-xs leading-none font-normal">CALL US</p>
        <p className="text-base font-normal xl:text-lg">{phoneNumber}</p>
      </a>
    </div>
  );
};

export default PhoneNumber;
