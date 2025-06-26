"use client";
import React, { useState, useEffect } from "react";

// Import the new components (adjust paths if necessary)
import Logo from "./header/Logo";
import PhoneNumber from "./header/PhoneNumber";
import ServicePopup from "./header/ServicePopup";
import CitiesPopup from "./header/CitiesPopup";
import FormPopup from "./header/FormPopup";
import { cn } from "@/lib/utils";

// Keep data definitions or move to a separate file
import exteriorWindow from "@/assets/homepageServices/exterior_window.webp";
import interiorWindow from "@/assets/homepageServices/interior_window.webp";
import gutterCleaning from "@/assets/homepageServices/gutter_cleaning.webp";
import houseWashing from "@/assets/homepageServices/house_washing.webp";
import roofWashing from "@/assets/homepageServices/roof_washing.webp";
import pressureWashing from "@/assets/homepageServices/pressure_washing.webp";
import highDusting from "@/assets/homepageServices/high_dusting.webp";
import lightFixtures from "@/assets/homepageServices/light_fixtures.webp";
import screenCleans from "@/assets/homepageServices/screen_cleans.webp";
import skylights from "@/assets/homepageServices/sky_light.webp";
import solarPanels from "@/assets/homepageServices/solar_panels.webp";
import sealCoating from "@/assets/homepageServices/seal_coating.webp";

const services = [
  {
    name: "Exterior Window Cleaning",
    link: "exterior-window-cleaning",
    image: exteriorWindow,
    description:
      "It's what we do best! Get rid of that nasty build-up of nature's mildew and grime.",
  },
  {
    name: "Interior Window Cleaning",
    link: "interior-window-cleaning",
    image: interiorWindow,
    description:
      "Pet slobber, fingerprints, and so much more can leave residue that is tricky to get off.",
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
    name: "Roof Washing",
    link: "roof-washing",
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
    name: "High Dusting",
    link: "high-dusting",
    image: highDusting,
    description:
      "Eliminate the cobwebs and dust in those hard to reach corners.",
  },
  {
    name: "Light Fixture Cleaning",
    link: "light-fixture-cleaning",
    image: lightFixtures,
    description:
      "Keep both your interior and exterior lighting bright with thorough cleanings of your lanterns, sconces, and more.",
  },
  {
    name: "Screen Cleaning",
    link: "screen-cleaning",
    image: screenCleans,
    description:
      "We'll happily remove, clean, and even replace your screens if necessary.",
  },
  {
    name: "Skylight Cleaning",
    link: "skylight-cleaning",
    image: skylights,
    description:
      "Nearly impossible and slightly dangerous to reach, leave it to Godly to keep your skylights in top-notch shape.",
  },
  {
    name: "Solar Panel Cleaning",
    link: "solar-panel-cleaning",
    image: solarPanels,
    description:
      "Dirty solar panels lead to less efficient energy absorption – keep them clean and running to their full potential. ",
  },
  {
    name: "Paver Sealing",
    link: "paver-sealing",
    image: sealCoating,
    description:
      "Add a protective coating to your driveway/parking lot that protects against water, oils, and other damaging elements.",
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
    setIsClient(true);
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
        <div className="gradient-bg relative items-center justify-center !bg-[#9B4531] p-4 text-center text-sm font-semibold text-white md:text-lg">
          <p className="relative z-10 font-light">
            Get Spotless Windows + a FREE RainShield Treatment this June Only.
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-4 bg-[#252323] p-4 lg:flex-row lg:px-6 lg:py-0">
          {/* Left side: Logo, Mobile Toggle, Desktop Nav */}
          <div
            className={cn(
              "flex w-full items-center justify-between bg-[#252323] lg:max-h-[80px] lg:w-auto lg:justify-start lg:gap-[30px]",
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
