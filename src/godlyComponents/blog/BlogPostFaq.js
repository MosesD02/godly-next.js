import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BlogPostFaq({ faq }) {
  if (!faq || faq.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="trim mb-6 text-2xl font-bold text-[#312E2C] md:text-3xl">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faq.map((item, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-left font-['satoshi-medium'] text-lg text-[#312E2C] hover:text-[#AF8F6E]">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="font-['satoshi-light'] text-base/relaxed  text-[#373A44]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
