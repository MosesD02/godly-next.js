import React from "react";

import map from "@/assets/map.webp";
import SectionButton from "@/components/sectionButton";
import Image from "@/components/Image";

const Location = () => {
  return (
    <div className="paper-bg-16 bg-[#262424]">
      <div className="mx-auto flex max-w-360 flex-col items-center justify-center gap-3.75 bg-cover bg-center bg-no-repeat py-10.75 bg-blend-multiply md:gap-3.5 md:p-16">
        <div
          className="text-grain trim bg-[#FDE4C8]! font-['Marlton'] text-base font-light tracking-[2.24px] md:text-2xl md:font-normal md:tracking-wider"
          data-text="PROUDLY SERVING"
        >
          PROUDLY SERVING
        </div>
        <h2
          className="text-grain trim bg-white! text-[32px] font-normal tracking-[3.2px] md:text-[64px] md:tracking-wider"
          data-text="THESE TOWNS"
        >
          THESE TOWNS
        </h2>
        <div
          className="text-grain trim md:t-0 bg-white! text-[32px] font-normal tracking-wider md:text-2xl"
          data-text="IN SOUTH "
        >
          <span className="trim text-32px] md:text-xl">IN</span> SOUTH{" "}
          <span
            className="text-grain trim bg-[#FDE4C8]! font-[luminaire-script] text-[20px] md:text-[32px]"
            data-text="Florida"
          >
            Florida
          </span>
        </div>
      </div>
      <div className="paper-bg-16 flex flex-col items-center justify-items-center gap-10 bg-[#ebded1] bg-cover bg-center bg-no-repeat p-16 bg-blend-multiply">
        <Image
          src={map}
          alt="map"
          className="h-full max-w-86.25 md:max-w-285"
        />

        <SectionButton>Get My Free Quote</SectionButton>
      </div>
    </div>
  );
};

export default Location;
