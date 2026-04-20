import React from "react";
import "@/styles/fourstepprocess.css";

const BlogsHero = () => {
  return (
    <div className="mt-17 flex flex-col items-center justify-center gap-2 bg-[#262424] px-8.75 py-25 md:mt-17 md:gap-6.25 md:p-16 md:py-17.5">
      <div className="flex flex-col gap-2 md:gap-2">
        <h1
          className="trim text-center text-[50px] text-[#FDE4C8] md:text-[96px]"
          style={{ textShadow: "4px 0px 0px #AF8F6E" }}
        >
          Godly resources
        </h1>
        <div className="flex flex-col gap-0.5">
          <div className="h-px w-85 bg-white md:w-165.5" />
          <div className="h-0.75 w-85 bg-white md:w-165.5" />
        </div>
      </div>
      <p className="text-center font-['satoshi-light'] text-xs text-[#FFFFFF94] md:font-['satoshi-regular'] md:text-[24px]">
        Expert tips on keeping your South Florida property spotless.
      </p>
    </div>
  );
};

export default BlogsHero;
