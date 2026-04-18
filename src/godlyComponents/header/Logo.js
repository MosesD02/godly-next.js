// src/godlyComponents/header/Logo.js
import React from "react";
import Link from "next/link";
import Image from "@/components/Image";
import logo from "@/assets/logo-new.png";

const Logo = () => {
  return (
    <div className="header-logo md:mb-0">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          className="header-logo h-[30px] w-[60px] md:h-[42.542px] md:w-[88.344px]"
          priority
          width={88}
          height={43}
        />
      </Link>
    </div>
  );
};

export default Logo;
