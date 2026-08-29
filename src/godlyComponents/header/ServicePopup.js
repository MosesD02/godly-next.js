// src/godlyComponents/header/ServicePopup.js
import React, { useState } from "react";
import Link from "next/link";
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
import {
  GutterIcon,
  HolidayLightIcon,
  HouseWashingIcon,
  PressureWashingIcon,
  RoofWashingIcon,
  WindowIcon,
} from "@/godlyComponents/servicesIcons";
import {
  ConcreteSealingIcon,
  PaverSealingIcon,
  PostConstructionWindowIcon,
  SoftWashingIcon,
  TravertineSealingIcon,
} from "./ServicePopupIcons";

// Ordered row-by-row so similar service names are distributed across columns.
const services = [
  {
    name: "Window Cleaning",
    link: "window-cleaning",
    icon: WindowIcon,
  },
  {
    name: "House Washing",
    link: "house-washing",
    icon: HouseWashingIcon,
  },
  {
    name: "Paver Sealing",
    link: "paver-sealing",
    icon: PaverSealingIcon,
  },
  {
    name: "Holiday Lighting",
    link: "holiday-lighting",
    icon: HolidayLightIcon,
  },
  {
    name: "Post-Construction Window Cleaning",
    link: "post-construction-window-cleaning",
    icon: PostConstructionWindowIcon,
  },
  {
    name: "Roof Cleaning",
    link: "roof-cleaning",
    icon: RoofWashingIcon,
  },
  {
    name: "Travertine Sealing",
    link: "travertine-sealing",
    icon: TravertineSealingIcon,
  },
  {
    name: "Gutter Cleaning",
    link: "gutter-cleaning",
    icon: GutterIcon,
  },
  {
    name: "Pressure Washing",
    link: "pressure-washing",
    icon: PressureWashingIcon,
  },
  {
    name: "Soft Washing",
    link: "soft-washing",
    icon: SoftWashingIcon,
  },
  {
    name: "Concrete Sealing",
    link: "concrete-sealing",
    icon: ConcreteSealingIcon,
  },
];

const ServicePopup = ({ open, onOpenChange }) => {
  const { city } = useGodlyContext();
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
          {services.map((service, index) => {
            const ServiceIcon = service.icon;

            return (
              <Link
                href={`/${cityKey}/${service.link}`}
                key={service.link}
                className={cn(
                  "group border-b-[1.5px] border-[#8d8477] hover:bg-[#2D2B2B] active:bg-[#2D2B2B]",
                  index % 1 === 0 ? "md:mx-5" : "",
                  activeIndex === index ? "bg-[#2D2B2B]" : "",
                )}
                onClick={() => onOpenChange(false)}
                onTouchStart={() => setActiveIndex(index)}
                onTouchEnd={() => setActiveIndex(null)}
                onTouchCancel={() => setActiveIndex(null)}
              >
                <div className="flex min-h-11 flex-row items-center gap-1.5 p-2 text-[#2D2B2B] transition-all group-hover:text-[#FDE4C8] group-active:text-[#FDE4C8]">
                  <span
                    className={cn(
                      "flex size-6.75 shrink-0 items-center justify-center [&_svg]:block [&_svg]:size-6.75 [&_svg]:shrink-0",
                      activeIndex === index ? "text-[#FDE4C8]" : "",
                    )}
                  >
                    <ServiceIcon />
                  </span>
                  <h3
                    className={cn(
                      "text-sm/tight font-normal",
                      activeIndex === index ? "text-[#FDE4C8]" : "",
                    )}
                  >
                    {service.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServicePopup;
