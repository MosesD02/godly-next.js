// src/godlyComponents/header/CitySelector.js
// Display-only trigger for the city menu; safe /[city]/... URLs are built in
// CitiesPopup (navigation) and ServicePopup (service links).
import React from "react";
import { MapPinHouse, ChevronDown } from "lucide-react";
import { useGodlyContext } from "@/context/godlyContext";
import { titleCaseCityName } from "@/lib/utils";

const CitySelector = ({ onClick, isMobile = false, cityOverride }) => {
  const { city } = useGodlyContext();
  const displayCity = cityOverride ?? city;

  if (isMobile) {
    return (
      <button
        onClick={onClick}
        className="flex items-center gap-1 text-sm text-[#FDE4C8] hover:text-[#FFCA8F] xl:text-base"
      >
        <MapPinHouse strokeWidth={1.2} size={18} />
        <div className="border-b border-solid border-[#FDE4C8] font-sans text-xs font-semibold uppercase">
          {titleCaseCityName(displayCity)}
        </div>{" "}
        <ChevronDown size={18} />
      </button>
    );
  }

  // Desktop version
  return (
    <button
      onClick={onClick}
      className="flex items-end gap-1 text-sm text-[#FDE4C8] hover:text-[#FFCA8F] xl:text-base"
    >
      <MapPinHouse strokeWidth={1.2} size={18} />
      <div className="border-b border-solid border-[#FDE4C8] font-sans text-xs font-semibold uppercase">
        {titleCaseCityName(displayCity)}
      </div>{" "}
      <span>
        <ChevronDown size={18} />
      </span>
    </button>
  );
};

export default CitySelector;
