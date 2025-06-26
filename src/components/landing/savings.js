"use client";
import React from "react";
import "@/styles/fourstepprocess.css";
import { Check, X } from "lucide-react";
import QuoteButton from "@/components/quoteButton";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuoteForm from "@/godlyComponents/quoteForm";

const Savings = () => {
  const steps = [
    {
      title: "Every Month",
      discount: "12% OFF ",
    },
    {
      title: "Every 3-4 Months",
      discount: "10% OFF",
    },
    {
      title: "Every 6 months",
      discount: "8% OFF",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="paper-bg-16 flex hidden flex-col items-center justify-items-center bg-[#ebded1] bg-cover bg-center bg-no-repeat p-16 bg-blend-multiply">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-items-center bg-cover bg-center bg-no-repeat p-16 bg-blend-multiply">
        <h2
          className="text-grain !bg-[#191717] text-[64px] font-normal"
          data-text="HUGE SAVINGS AND"
        >
          HUGE SAVINGS AND
        </h2>
        <h2
          className="text-grain -mt-8 !bg-[#191717] text-[64px] font-normal before:inset-0"
          data-text="ALWAYS LOOK GREAT"
        >
          ALWAYS LOOK GREAT
        </h2>
        <div
          className="pt-16 pb-16 text-white"
          // style={{ marginTop: "1rem", marginBottom: "3rem" }}
        >
          <div className="relative z-10 flex flex-wrap justify-center gap-[72px]">
            {steps.map((step, index) => (
              <div key={index} className="">
                <div
                  className={
                    "relative z-10 flex flex-col items-center justify-center gap-12 self-stretch rounded-[20px] bg-[#1F1D1D] p-[48px] text-black shadow hover:bg-[#312E2C]"
                  }
                >
                  <h5 className="text-center text-[32px] font-normal text-[#FFFFFF]">
                    {step.title}
                  </h5>

                  <div
                    className="flex flex-col gap-2 text-center font-['satoshi-bold'] text-[64px] font-semibold text-[#FFFFFF]"
                    style={{ marginBottom: "1rem" }}
                  >
                    {step.discount}
                    <p className="text-center font-['satoshi-light'] text-[20px] text-white opacity-70">
                      per cleaning
                    </p>
                  </div>

                  <div className="mb-4 flex justify-center">
                    {FeatureList(index != 2)}
                  </div>
                  <QuoteButton onClick={() => setIsOpen(true)}>
                    Get My Free Quote
                  </QuoteButton>

                  <div className="absolute top-2 -left-8 z-10 h-4 w-25 -rotate-45 bg-[#F3CA9ECC]"></div>
                  <div className="absolute -right-6 bottom-2 z-10 h-4 w-25 -rotate-45 bg-[#F3CA9ECC]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FormPopup open={isOpen} onOpenChange={setIsOpen} />
    </div>
  );
};

export default Savings;

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

const FeatureList = (value) => {
  const features = [
    "FREE Mint Rainblock Tech",
    "7 day Rain Guarantee",
    "Free Hard Water removal",
  ];

  return (
    <div className="flex flex-col gap-6 py-12 font-['satoshi-regular'] text-xl text-[#E8E6E3]">
      {features.map((text, index) => (
        <div key={index} className="flex items-center space-x-4">
          {value ? (
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFEBD7] font-['satoshi-light']">
              <Check className="h-3 w-3 text-[#4B3A2F]" />
            </div>
          ) : (
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EC6D62]">
              <X className="h-3 w-3 text-[#4B3A2F]" />
            </div>
          )}

          <span className="text-sm">{text}</span>
        </div>
      ))}
    </div>
  );
};
