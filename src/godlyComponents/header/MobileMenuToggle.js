// src/godlyComponents/header/MobileMenuToggle.js
import { cn } from "@/lib/utils";
import React from "react";

const MobileMenuToggle = ({ isOpen, onClick, hidden }) => {
  return (
    <button
      className={cn(
        "flex size-7 items-center justify-center rounded-full text-[#FDE4C8] lg:hidden",
        isOpen ? "mb-4 bg-[#FDE4C8] text-black" : "",
        hidden ? "hidden" : "block",
      )}
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  );
};

export default MobileMenuToggle;
