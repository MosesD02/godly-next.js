"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionButton from "@/components/sectionButton";
import { cn } from "@/lib/utils";

const questions = [
  "Do I need to be home for the cleaning?",
  "What if it rains after you clean my windows?",
  "How much does it cost?",
  "Are you licensed and insured?",
  "Do you clean interior windows too?",
];
const answers = [
  "Not at all. As long as we have access to the exterior and a water source, we can handle the job while you're away. We’ll send you a text when we arrive and photos when we’re done.",
  "Some of our plans include our 7-Day Sparkle Guarantee — which means if it rains within a week, we’ll come back and touch up the windows at no extra cost. If you're not on one of those plans yet, we’ll walk you through your options during the quote.",
  "Pricing is based on the amount of glass and the size of your property. We offer a variety of discounts, including seasonal promos and multi-service bundles, so you’ll always get the best value. Every quote is clear, customized, and 100% free.",
  "Yes — we carry full liability insurance up to $2 million and workers’ comp. All of our technicians are background-checked, trained, and committed to treating your home with respect.",
  "Yes! Interior cleaning can be added to any exterior job, and it’s discounted when bundled. We’ll confirm what you need before your service and only clean what you request.",
];

const Faq = () => {
  const [expandedItem, setExpandedItem] = useState("item-1"); // Set default value to item-1

  const handleAccordionChange = (value) => {
    if (value) {
      setExpandedItem(value);
    }
  };

  return (
    <div
      id="faq"
      className={cn(
        "paper-bg-16 flex flex-col items-center gap-[98px] bg-[#ebded1] bg-cover bg-center bg-no-repeat px-6 py-12",
      )}
    >
      <div
        className="flex w-full max-w-4xl flex-col"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <h1
          className="text-grain !bg-[#191717] text-[32px] font-black tracking-wide md:text-8xl"
          data-text="FREQUENTLY"
        >
          FREQUENTLY
        </h1>
        <h4 className="text-[24px] font-semibold tracking-wide text-[#191717] md:text-2xl">
          <span>ASKED</span>{" "}
          <span
            className="text-grain ml-3 !bg-[#61503E] font-['luminaire-script'] text-[48px] font-medium md:text-[64px]"
            data-text="Questions"
          >
            Questions
          </span>
        </h4>

        <div className="mt-10 w-full">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-2"
            value={expandedItem}
            onValueChange={handleAccordionChange}
          >
            {questions.map((question, i) => (
              <AccordionItem
                key={i}
                value={`item-${i + 1}`}
                className="border-b border-[#332B2B21]"
              >
                <AccordionTrigger className="text-lg text-[#2D2B2B]">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm font-normal text-[#2D2B2B]">
                  {answers[i]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <SectionButton>Get My Free Quote</SectionButton>
    </div>
  );
};

export default Faq;
