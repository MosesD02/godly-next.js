// src/godlyComponents/header/CitySelector.js
// Display-only trigger for the city menu; safe /[city]/... URLs are built in
// CitiesPopup (navigation) and ServicePopup (service links).
import React from "react";
import { MapPinHouse, ChevronDown } from "lucide-react";
import { useGodlyContext } from "@/context/godlyContext";

const CitySelector = ({ onClick, isMobile = false }) => {
  const { city } = useGodlyContext();

  if (isMobile) {
    return (
      <button
        onClick={onClick}
        className="flex items-center gap-1 text-sm text-[#FDE4C8] hover:text-[#FFCA8F] xl:text-base"
      >
        <MapPinHouse strokeWidth={1.2} size={18} />
        <div className="border-b-1 border-solid border-[#FDE4C8] font-sans text-xs font-semibold">
          {city}
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
      <div className="border-b-1 border-solid border-[#FDE4C8] font-sans text-xs font-semibold">
        {city}
      </div>{" "}
      <span>
        <ChevronDown size={18} />
      </span>
    </button>
  );
};

export default CitySelector;
