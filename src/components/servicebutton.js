"use client";
import { useState } from "react";
import grainBg from "../assets/grain-bg.webp";
import Image from "next/image";
import subtract from "../assets/subtract.svg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuoteForm from "@/godlyComponents/quoteForm";

export default function ServiceButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => {
          setIsOpen(true);
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "service_button_click", {
              event_category: "engagement",
              event_label: "Service Button Click - Get Quote",
              value: 1
            });
          }
        }} 
        className="cursor-pointer"
      >
        <div
          className="shadow-[0px 1px 1px 0px rgba(0, 0, 0, 0.25) inset, 0px -1px 1.2px 0px rgba(255, 255, 255, 0.03), 0px 2px 2.6px 0px rgba(0, 0, 0, 0.30)] relative h-[14.4px] w-32 rounded-[3px] border-[0.4px] border-[#000] bg-[#1b1b1b] bg-repeat"
          style={{ backgroundImage: `url(${grainBg.src})` }}
        >
          <div className="absolute bottom-1 left-1/2 max-w-[115px] flex-shrink-0 -translate-x-1/2">
            <div className="h-[4px] w-[115px] border-b border-dashed border-[#2D2B2B] bg-[#F3CA9E69]" />
            <div
              className="absolute left-1/2 flex h-16 w-[115px] -translate-x-1/2 -translate-y-16 items-center justify-center bg-[#F3CA9E] bg-repeat p-[3px]"
              style={{ backgroundImage: `url(${grainBg.src})` }}
            >
              <div className="flex h-full w-full flex-col justify-between rounded-[6px] border-[0.4px] border-[#000] p-[5px]">
                <div className="all-unset flex w-full items-center justify-between gap-0">
                  <p className="leading-trimmed font-[marlton-sans] text-[4px] font-normal text-[#1c1c1c]">
                    CUST.
                  </p>
                  <p className="leading-trimmed font-[marlton-sans] text-[4px] font-normal text-[#AB8459]">
                    GODLY
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="inline-block text-center text-xl leading-none font-medium text-[#1c1c1c]">
                    GET A QUOTE
                  </p>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <div className="h-[2px] w-full bg-[#312E2C]" />
                  <div className="h-[1px] w-full bg-[#312E2C]" />
                </div>
              </div>
              <div className="absolute -top-2.5">
                <Image
                  src={subtract}
                  alt="subtract"
                  width={115}
                  height={11}
                  className="scale-y-[-1] transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FormPopup open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}

const FormPopup = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogHeader>
        <DialogTitle className="hidden">Contact Us</DialogTitle>
      </DialogHeader>
      <DialogContent className="z-100 border-none bg-transparent p-0 md:max-w-[1200px]">
        <QuoteForm isDialog={true} />
      </DialogContent>
    </Dialog>
  );
};
