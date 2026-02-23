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
import { citiesMap } from "./CitiesPopup";
import { usePathname } from "next/navigation";

const ServicePopup = ({ open, onOpenChange, services }) => {
  const { city } = useGodlyContext();
  // Add state to track active/touched item on mobile
  const [activeIndex, setActiveIndex] = useState(null);
  const pathname = usePathname();

  // Get city from URL only when on a city or city/service page; otherwise use context
  const getCityFromUrl = () => {
    const fallback =
      Object.keys(citiesMap).find((key) => citiesMap[key] === city) ||
      "south-florida";
    if (!pathname) return fallback;
    const pathSegments = pathname.split("/").filter(Boolean);
    const firstSegment = pathSegments[0];
    // First segment must be a valid city slug (not blog, landing, etc.)
    if (firstSegment && citiesMap[firstSegment]) {
      return firstSegment;
    }
    return fallback;
  };

  const cityKey = getCityFromUrl();

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
