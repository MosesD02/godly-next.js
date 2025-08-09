// src/godlyComponents/header/Logo.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-new.png";

const Logo = () => {
  return (
    <div className="header-logo md:mb-0">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          className="header-logo h-[36px] w-[67px] md:h-[52.542px] md:w-[108.344px]"
        />
      </Link>
    </div>
  );
};

export default Logo;
