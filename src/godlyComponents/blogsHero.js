import React from "react";
import "@/styles/fourstepprocess.css";

const BlogsHero = () => {
  return (
    <div className="mt-17 flex flex-col items-center justify-center gap-2 bg-[#262424] px-[35px] py-[100px] md:mt-17 md:gap-[25px] md:p-16 md:py-[70px]">
      <div className="flex flex-col gap-2 md:gap-2">
        <h1
          className="trim text-center text-[50px] text-[#FDE4C8] md:text-[96px]"
          style={{ textShadow: "4px 0px 0px #AF8F6E" }}
        >
          Godly resources
        </h1>
        <div className="flex flex-col gap-0.5">
          <div className="h-[1px] w-[340px] bg-white md:w-[662px]" />
          <div className="h-[3px] w-[340px] bg-white md:w-[662px]" />
        </div>
      </div>
      <p className="text-center font-['satoshi-light'] text-xs text-[#FFFFFF94] md:font-['satoshi-regular'] md:text-[24px]">
        Expert tips on keeping your South Florida property spotless.
      </p>
    </div>
  );
};

export default BlogsHero;
