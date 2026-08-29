// src/godlyComponents/header/ServicePopup.js
import React, { useState } from "react";
import Link from "next/link";
import Image from "@/components/Image";
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
import gutterCleaning from "@/assets/homepageServices/gutter_cleaning.webp";
import houseWashing from "@/assets/homepageServices/house_washing.webp";
import roofWashing from "@/assets/homepageServices/roof_washing.webp";
import pressureWashing from "@/assets/homepageServices/pressure_washing.webp";
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
    name: "Post-Construction Window Cleaning",
    link: "post-construction-window-cleaning",
    image: exteriorWindow,
    description:
      "Pro-grade scraping and RO/DI purified water to remove stucco, paint, and construction residue — move-in ready every time.",
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
    name: "Pressure Washing",
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

const ServicePopup = ({ open, onOpenChange }) => {
  const { city } = useGodlyContext();
  // Add state to track active/touched item on mobile
  const [activeIndex, setActiveIndex] = useState(null);
  const pathname = usePathname();

  const cityKey = getCitySlugForServiceLinks(pathname, city);

  return (
    <Dialog open={open} onOpenChange={onOpenChange} className="">
      <DialogHeader>
        <DialogTitle asChild>
          <span className="sr-only">Our Services</span>
        </DialogTitle>
      </DialogHeader>
      <DialogContent
        hideCloseButton
        className="paper-bg-16 overflow-y-auto border-none bg-[#fff9f3] p-4 max-sm:scale-95 md:top-45 md:max-w-261.25 md:p-2 md:py-3 lg:top-20 lg:translate-y-0"
      >
        <div className="md:max-h-auto grid max-h-[calc(100vh-256px)] w-full grid-cols-2 sm:grid-cols-2 md:max-h-[calc(100vh-128px)] lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              href={`/${cityKey}/${service.link}`}
              key={service.link}
              className={cn(
                "group border-b-[1.5px] border-[#8d8477] hover:bg-[#2D2B2B] active:bg-[#2D2B2B]",
                index % 1 === 0 ? "md:mx-5" : "",
                activeIndex === index ? "bg-[#2D2B2B]" : "",
              )}
              onClick={() => {
                onOpenChange(false);
              }}
              onTouchStart={() => setActiveIndex(index)}
              onTouchEnd={() => setActiveIndex(null)}
            >
              <div className="flex flex-row items-start gap-1.5 gap-y-0 p-2 text-[#2D2B2B] transition-all group-hover:text-[#FDE4C8] group-active:text-[#FDE4C8]">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={27}
                  height={27}
                  className={cn(
                    "size-6.75 object-contain group-hover:filter-[invert(1)]",
                    activeIndex === index ? "filter-[invert(1)]" : "",
                  )}
                />
                <div className="flex flex-col gap-1.5">
                  <h3
                    className={cn(
                      "text-sm/tight font-normal",
                      activeIndex === index ? "text-[#FDE4C8]" : "",
                    )}
                  >
                    {service.name}
                  </h3>
                  {/* <p
                    className={cn(
                      "font-['satoshi-light'] text-xs font-light",
                      activeIndex === index ? "text-[#FDE4C8]" : "",
                    )}
                  >
                    {service.description}
                  </p>*/}
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
