import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const Faq = ({ faqs, serviceName, cityName }) => {
  if (!faqs || faqs.length === 0) return null;

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
        <h2
          className="text-grain !bg-[#191717] text-[32px] font-black tracking-wide md:text-8xl"
          data-text="FREQUENTLY"
        >
          FREQUENTLY
        </h2>
        <h4 className="text-[24px] font-semibold tracking-wide text-[#191717] md:text-2xl">
          <span>ASKED</span>{" "}
          <span
            className="text-grain ml-3 !bg-[#61503E] font-['luminaire-script'] text-[48px] font-medium md:text-[64px]"
            data-text="Questions"
          >
            Questions
          </span>
        </h4>
        {(serviceName || cityName) && (
          <p className="mt-2 text-center font-['satoshi-regular'] text-sm text-[#2D2B2B] md:text-base">
            {[serviceName, cityName].filter(Boolean).join(" · ")}
          </p>
        )}

        <div className="mt-10 w-full">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i + 1}`}
                className="border-b border-[#332B2B21]"
              >
                <AccordionTrigger className="text-lg text-[#2D2B2B]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm font-normal text-[#2D2B2B]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
