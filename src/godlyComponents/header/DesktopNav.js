// src/godlyComponents/header/DesktopNav.js
import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const DesktopNav = ({ onServicesClick }) => {
  return (
    <nav className="hidden bg-[#252323] xl:block">
      <ul className="flex gap-x-3 text-[#FDE4C8] xl:gap-x-6">
        <li className="inline-flex items-center">
          <button
            onClick={onServicesClick}
            className="flex cursor-pointer items-center gap-1 text-sm text-[#FDE4C8] hover:text-[#FFCA8F] md:items-end xl:text-base"
          >
            <span className="">SERVICES</span>
            <span className="mb-1">
              <ChevronDown size={18} />
            </span>
          </button>
        </li>
        <li>
          <Link
            href="/#about"
            className="text-sm text-[#FDE4C8] hover:text-[#FFCA8F] xl:text-base"
          >
            ABOUT US
          </Link>
        </li>
        <li>
          <Link
            href="/#promise"
            className="text-sm text-[#FDE4C8] hover:text-[#FFCA8F] xl:text-base"
          >
            OUR PROMISE
          </Link>
        </li>
        <li>
          <Link
            href="/#process"
            className="text-sm text-[#FDE4C8] hover:text-[#FFCA8F] xl:text-base"
          >
            OUR PROCESS
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="text-sm text-[#FDE4C8] hover:text-[#FFCA8F] xl:text-base"
          >
            BLOG
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
