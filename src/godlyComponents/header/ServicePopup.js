// src/godlyComponents/header/ServicePopup.js
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useGodlyContext } from "@/context/godlyContext";
import { getCitySlugForServiceLinks } from "@/lib/cityRouteContext";
import { usePathname } from "next/navigation";

// Service images — only loaded when this dynamically-imported chunk is fetched
import exteriorWindow from "@/assets/homepageServices/exterior_window.webp";
import interiorWindow from "@/assets/homepageServices/interior_window.webp";
import gutterCleaning from "@/assets/homepageServices/gutter_cleaning.webp";
import houseWashing from "@/assets/homepageServices/house_washing.webp";
import roofWashing from "@/assets/homepageServices/roof_washing.webp";
import pressureWashing from "@/assets/homepageServices/pressure_washing.webp";
import lightFixtures from "@/assets/homepageServices/light_fixtures.webp";
import screenCleans from "@/assets/homepageServices/screen_cleans.webp";
import solarPanels from "@/assets/homepageServices/solar_panels.webp";
import sealCoating from "@/assets/homepageServices/seal_coating.webp";
import santaBg from "@/assets/homepageServices/santa_bg.png";

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
    name: "Soft Washing",
    link: "soft-washing",
    image: houseWashing,
    description:
      "Custom low-pressure treatments for roofs, siding, and exteriors—safe chemistry that lifts algae without damage.",
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
    name: "Holiday Lighting",
    link: "holiday-lighting",
    image: santaBg,
    description:
      "Design, install, premium LEDs, maintenance, and removal—custom holiday displays without the ladder.",
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
];

const ServicePopup = ({ open, onOpenChange }) => {
  const { city } = useGodlyContext();
  // Add state to track active/touched item on mobile
  const [activeIndex, setActiveIndex] = useState(null);
  const pathname = usePathname();

  const cityKey = getCitySlugForServiceLinks(pathname, city);

  return (
    <Dialog open={open} onOpenChange={onOpenChange} className="">
      <DialogHeader>
        <DialogTitle className="hidden">Our Services</DialogTitle>
      </DialogHeader>
      <DialogContent
        hideCloseButton
        className="paper-bg-16 z-100 overflow-y-auto border-none bg-[#fff9f3] p-4 md:top-[280px] md:max-w-[1045px] md:p-6"
      >
        <div className="md:max-h-auto grid max-h-[calc(100vh-256px)] w-full grid-cols-2 sm:grid-cols-2 md:max-h-[calc(100vh-128px)] lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              href={`/${cityKey}/${service.link}`}
              key={index}
              className={cn(
                "group border-b-[1.5px] border-[#8d8477] hover:bg-[#2D2B2B] active:bg-[#2D2B2B]",
                index % 1 === 0 ? "md:mx-[20px]" : "",
                activeIndex === index ? "bg-[#2D2B2B]" : "",
              )}
              onClick={() => {
                onOpenChange(false);
              }}
              onTouchStart={() => setActiveIndex(index)}
              onTouchEnd={() => setActiveIndex(null)}
            >
              <div className="flex min-h-18 flex-row items-start gap-[6px] gap-y-0 p-2 text-[#2D2B2B] transition-all group-hover:text-[#FDE4C8] group-active:text-[#FDE4C8]">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={27}
                  height={27}
                  className={cn(
                    "size-[27px] object-contain group-hover:filter-[invert(1)]",
                    activeIndex === index ? "filter-[invert(1)]" : "",
                  )}
                />
                <div className="flex flex-col gap-[6px]">
                  <h3
                    className={cn(
                      "text-sm leading-tight font-normal",
                      activeIndex === index ? "text-[#FDE4C8]" : "",
                    )}
                  >
                    {service.name}
                  </h3>
                  <p
                    className={cn(
                      "font-['satoshi-light'] text-xs font-light",
                      activeIndex === index ? "text-[#FDE4C8]" : "",
                    )}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServicePopup;
