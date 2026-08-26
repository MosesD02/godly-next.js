import React from "react";

export default function InteriorWindowCleaningSection({ section }) {
  if (!section?.heading || !section?.body?.length) return null;

  return (
    <section
      className="paper-bg-16 bg-[#ebded1] px-6 py-16 sm:px-8 md:py-24"
      data-section="interior-window-cleaning"
    >
      <div className="mx-auto grid max-w-260 gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:gap-24">
        <header>
          <h2 className="trim max-w-100 text-[34px] leading-tight font-normal tracking-wide text-[#312e2c] sm:text-[40px] md:text-[48px]">
            {section.heading}
          </h2>
        </header>

        <div className="flex max-w-170 flex-col gap-6 md:pt-1">
          {section.body.map((paragraph) => (
            <p
              className="font-['satoshi-regular'] text-base leading-[1.75] text-[#3d3834] sm:text-lg"
              data-interior-paragraph
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
