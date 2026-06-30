"use client";
import React, { useState, useEffect } from "react";

// Import the new components (adjust paths if necessary)
import Logo from "@/godlyComponents/header/Logo";
import PhoneNumber from "@/godlyComponents/header/PhoneNumber";
import ServicePopup from "@/godlyComponents/header/ServicePopup";
import CitiesPopup from "@/godlyComponents/header/CitiesPopup";
import FormPopup from "@/godlyComponents/header/FormPopup";
import { cn } from "@/lib/utils";

// Keep data definitions or move to a separate file
import exteriorWindow from "@/assets/homepageServices/exterior_window.webp";
import gutterCleaning from "@/assets/homepageServices/gutter_cleaning.webp";
import houseWashing from "@/assets/homepageServices/house_washing.webp";
import roofWashing from "@/assets/homepageServices/roof_washing.webp";
import pressureWashing from "@/assets/homepageServices/pressure_washing.webp";
import sealCoating from "@/assets/homepageServices/seal_coating.webp";
import santaBg from "@/assets/homepageServices/santa_bg.webp";

const services = [
  {
    name: "Window Cleaning",
    link: "window-cleaning",
    image: exteriorWindow,
    description:
      "RO/DI purified water, hand scrubbing, and streak-free glass—residential and commercial—with our 7-day sparkle guarantee.",
  },
  {
    name: "Gutter Cleaning",
    link: "gutter-cleaning",
    image: gutterCleaning,
    description:
      "A thorough cleaning that is guaranteed to keep them flowing freely.",
  },
  {
    name: "House Washing",
    link: "house-washing",
    image: houseWashing,
    description:
      "Wash away years of pollen, mold, rust, and dirt – bringing that shine back to your property's exterior.",
  },
  {
    name: "Roof Cleaning",
    link: "roof-cleaning",
    image: roofWashing,
    description:
      "Removing all the debris from your roof is the easiest way to increase its longevity.",
  },
  {
    name: "Pressure & Soft Washing",
    link: "pressure-washing",
    image: pressureWashing,
    description:
      "Get rid of the slippery film and gunk on your driveway, walkways, porches, pool areas, and more.",
  },
  {
    name: "Soft Washing",
    link: "soft-washing",
    image: houseWashing,
    description:
      "Custom low-pressure treatments for roofs, siding, and exteriors—safe chemistry that lifts algae without damage.",
  },
  {
    name: "Holiday Lighting",
    link: "holiday-lighting",
    image: santaBg,
    description:
      "Design, install, premium LEDs, maintenance, and removal—custom holiday displays without the ladder.",
  },
  {
    name: "Paver Sealing",
    link: "paver-sealing",
    image: sealCoating,
    description:
      "Add a protective coating to your driveway/parking lot that protects against water, oils, and other damaging elements.",
  },
  {
    name: "Travertine Sealing",
    link: "travertine-sealing",
    image: sealCoating,
    description:
      "Clean and seal travertine pool decks, driveways, and patios — gloss, matte, or natural finish with a 2-year warranty.",
  },
  {
    name: "Concrete Sealing",
    link: "concrete-sealing",
    image: sealCoating,
    description:
      "Pressure wash and seal concrete driveways, pool decks, and sidewalks — built for South Florida weather, 2-year warranty.",
  },
];

const Header = () => {
  // Keep state definitions
  const [servicesOpen, setServicesOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formPopupOpen, setFormPopupOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      {mobileMenuOpen && (
        <div
          className="inset-0 z-30 bg-[rgba(45,43,43,0.85)] backdrop-blur-[2px] lg:hidden" // z-30, hidden on medium screens and up
          onClick={toggleMobileMenu} // Close menu when overlay is clicked
        ></div>
      )}{" "}
      <div className="godlyheader w-full bg-[#252323] text-white">
        {" "}
        <div className="gradient-bg relative items-center justify-center bg-[#9B4531]! p-4 text-center text-sm font-semibold text-white md:text-lg">
          <p className="relative z-10 font-light">
            Get Spotless Windows + FREE RainShield Treatment this{" "}
            {new Date(
              new Date().toLocaleString("en-US", {
                timeZone: "America/New_York",
              }),
            ).toLocaleString("en-US", { month: "long" })}{" "}
            Only.
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-4 bg-[#252323] p-4 lg:flex-row lg:px-6 lg:py-0">
          {/* Left side: Logo, Mobile Toggle, Desktop Nav */}
          <div
            className={cn(
              "flex w-full items-center justify-between bg-[#252323] lg:max-h-20 lg:w-auto lg:justify-start lg:gap-7.5",
              mobileMenuOpen ? "justify-center" : "",
            )}
          >
            <Logo />
            <span className="lg:hidden">
              <PhoneNumber />
            </span>
          </div>

          {/* Right side: Desktop Contact Info & Quote Button */}
          <div className="hidden items-center lg:flex lg:gap-5">
            <div className="flex items-center gap-1">
              {/* Use CitySelector component */}
              {/* <CitySelector onClick={handleCitiesClick} /> */}
              {/* Use PhoneNumber component */}
              <PhoneNumber />
            </div>
            {/* Use HeaderButton component */}
            {/* <HeaderButton onClick={handleQuoteClick} /> */}
          </div>
        </div>
      </div>
      {/* Render Popups */}
      <ServicePopup
        open={servicesOpen}
        onOpenChange={setServicesOpen}
        services={services}
      />
      <CitiesPopup open={citiesOpen} onOpenChange={setCitiesOpen} />
      <FormPopup open={formPopupOpen} onOpenChange={setFormPopupOpen} />
    </>
  );
};

export default Header;
