"use client";
import React from "react";
import { useGodlyContext } from "@/context/godlyContext";
import Link from "next/link";

const CoralSpringsCta = () => {
  const { city } = useGodlyContext();

  if (city !== "CORAL SPRINGS") return null;

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20 px-8 bg-[#2D2B2B]">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-[#FDE4C8] mb-6 md:text-4xl lg:text-5xl">
          Ready for Sparkling Clean Windows in Coral Springs?
        </h2>
        <p className="text-lg text-white mb-8 md:text-xl">
          Join hundreds of satisfied Coral Springs customers who trust{" "}
          <Link href="https://godlywindows.com/" className="underline decoration-solid decoration-current hover:text-[#FDE4C8] transition-colors">
            Godly Windows
          </Link>{" "}
          for professional window cleaning and exterior services. Fast response, honest pricing, and guaranteed results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:(954) 852-5326"
            className="bg-[#FDE4C8] text-[#2D2B2B] px-8 py-3 rounded-md font-bold hover:bg-[#f1d4a6] transition-colors"
          >
            Call (954) 852-5326
          </a>
          <p className="text-[#FDE4C8] text-sm">
            Or get your free estimate in under 30 minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoralSpringsCta;