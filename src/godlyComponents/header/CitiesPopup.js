// src/godlyComponents/header/CitiesPopup.js
"use client";
import React, { useState } from "react";
import { MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useGodlyContext } from "@/context/godlyContext";
import { usePathname, useRouter } from "next/navigation";

import { citiesMap } from "@/data/cities";
import { isLikelyCityServicePage } from "@/lib/cityRouteContext";

const CitiesPopup = ({ open, onOpenChange }) => {
  const { setCity } = useGodlyContext();
  const router = useRouter();
  // Add state to track active/touched item on mobile
  const [activeIndex, setActiveIndex] = useState(null);

  const pathname = usePathname();
  const segments = pathname.split("/");
  const firstSegment = segments[1];
  const isServicePage = isLikelyCityServicePage(pathname);

  return (
    <Dialog open={open} onOpenChange={onOpenChange} className="">
      <DialogHeader>
        <DialogTitle asChild>
          <span className="sr-only">Our Cities</span>
        </DialogTitle>
      </DialogHeader>
      <DialogContent
        hideCloseButton
        className="paper-bg-16 md:py- z-100 overflow-y-auto border-none bg-[#fff9f3] p-4 md:top-51.75 md:max-w-261.25 md:px-2 lg:top-20 lg:translate-y-0"
      >
        <div className="xs:grid-cols-2 grid max-h-[calc(100vh-256px)] w-full grid-cols-2 gap-1 gap-y-4 sm:grid-cols-3 md:max-h-[calc(100vh-128px)] md:grid-cols-4 lg:grid-cols-4">
          {Object.keys(citiesMap)
            .filter((city) => city !== "south-florida")
            .map((cityName, index) => (
              <div
                key={index}
                className={cn(
                  "group flex cursor-pointer flex-col gap-1 border-b border-[#8d8477] py-1 transition-all hover:bg-[#2D2B2B] active:bg-[#2D2B2B]",
                  index % 1 === 0 ? "md:mx-5" : "",
                  activeIndex === index ? "bg-[#2D2B2B]" : "",
                )}
                onClick={() => {
                  setCity(citiesMap[cityName]);
                  document.cookie = `selectedCity=${cityName};path=/;max-age=31536000`;

                  let url;
                  if (isServicePage) {
                    url = `/${cityName}/${segments[2]}`;
                  } else if (
                    firstSegment === "blog" ||
                    firstSegment === "blogs"
                  ) {
                    url = `/blog/${cityName}`;
                  } else {
                    url = `/${cityName}`;
                  }
                  router.push(url);
                  // router.push() may not return a Promise in Next.js 15; defer refresh so new page loads
                  setTimeout(() => router.refresh(), 100);
                  onOpenChange(false);
                }}
                onTouchStart={() => setActiveIndex(index)}
                onTouchEnd={() => setActiveIndex(null)}
              >
                <div className="flex items-center justify-start gap-3">
                  <MapPin
                    className={cn(
                      "shrink-0 group-hover:filter-[invert(1)]",
                      activeIndex === index ? "filter-[invert(1)]" : "",
                    )}
                    size={20}
                  />
                  <h3
                    className={cn(
                      "text-xs/tight font-normal text-[#2D2B2B] group-hover:text-[#FDE4C8] group-active:text-[#FDE4C8]",
                      activeIndex === index ? "text-[#FDE4C8]" : "",
                    )}
                  >
                    {citiesMap[cityName]}
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CitiesPopup;
