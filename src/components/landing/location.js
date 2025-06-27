import React from "react";

import map from "@/assets/map.webp";
import SectionButton from "@/components/sectionButton";
import Image from "next/image";

const Location = () => {
  return (
    <div className="paper-bg-16 bg-[#262424]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-[15px] bg-cover bg-center bg-no-repeat py-[43px] bg-blend-multiply md:gap-[14px] md:p-16">
        <h4
          className="text-grain trim !bg-[#FDE4C8] font-['Marlton'] text-base font-light tracking-[2.24px] md:text-2xl md:font-normal md:tracking-wider"
          data-text="PROUDLY SERVING"
        >
          PROUDLY SERVING
        </h4>
        <h4
          className="text-grain trim !bg-white text-[32px] font-normal tracking-[3.2px] md:text-[64px] md:tracking-wider"
          data-text="THESE TOWNS"
        >
          THESE TOWNS
        </h4>
        <h4
          className="text-grain trim md:t-0 !bg-white text-[32px] font-normal tracking-wider md:text-2xl"
          data-text="IN SOUTH "
        >
          <span className="trim text-32px] md:text-xl">IN</span> SOUTH{" "}
          <span
            className="text-grain trim !bg-[#FDE4C8] font-[luminaire-script] text-[20px] md:text-[32px]"
            data-text="Florida"
          >
            Florida
          </span>
        </h4>
      </div>
      <div className="paper-bg-16 flex flex-col items-center justify-items-center gap-10 bg-[#ebded1] bg-cover bg-center bg-no-repeat p-16 bg-blend-multiply">
        <Image
          src={map}
          alt="map"
          className="h-full max-w-[345px] md:max-w-[1140px]"
        />

        <SectionButton>Get My Free Quote</SectionButton>
      </div>
    </div>
  );
};

export default Location;
