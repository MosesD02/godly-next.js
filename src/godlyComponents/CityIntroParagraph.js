import React from "react";
import { cityIntroParagraphs } from "@/data/cityIntroParagraphs";

export default function CityIntroParagraph({ city }) {
  if (!city || !cityIntroParagraphs[city]) return null;

  return (
    <div className="mt-6 max-w-2xl px-4 text-center">
      <p className="text-base leading-relaxed text-white md:text-lg">
        {cityIntroParagraphs[city]}
      </p>
    </div>
  );
}
