"use client";
import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";

// Critical above-the-fold components — imported eagerly
import Logo from "./header/Logo";
import MobileMenuToggle from "./header/MobileMenuToggle";
import DesktopNav from "./header/DesktopNav";
import CitySelector from "./header/CitySelector";
import PhoneNumber from "./header/PhoneNumber";
import HeaderButton from "@/components/HeaderButton";
import { cn } from "@/lib/utils";
import { useGodlyContext } from "@/context/godlyContext";

// Lazy-load components not visible on initial render (popups & mobile menu)
const MobileNav = dynamic(() => import("./header/MobileNav"), { ssr: false });
const ServicePopup = dynamic(() => import("./header/ServicePopup"), {
  ssr: false,
});
const CitiesPopup = dynamic(() => import("./header/CitiesPopup"), {
  ssr: false,
});
const FormPopup = dynamic(() => import("./header/FormPopup"), {
  ssr: false,
});

const Header = ({ cityName }) => {
  const { formPopupOpen, setFormPopupOpen } = useGodlyContext();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track whether each popup has ever been opened so we only mount
  // the dynamically-imported component after the first trigger.
  const [servicesEverOpened, setServicesEverOpened] = useState(false);
  const [citiesEverOpened, setCitiesEverOpened] = useState(false);
  const [formEverOpened, setFormEverOpened] = useState(false);

  // Memoize handlers to avoid unnecessary child re-renders
  const handleServicesClick = useCallback(() => {
    setServicesOpen(true);
    setServicesEverOpened(true);
    setMobileMenuOpen(false);
  }, []);

  const handleCitiesClick = useCallback(() => {
    setCitiesOpen(true);
    setCitiesEverOpened(true);
    setMobileMenuOpen(false);
  }, []);

  const handleQuoteClick = useCallback(() => {
    setFormPopupOpen(true);
    setFormEverOpened(true);
    setMobileMenuOpen(false);
  }, [setFormPopupOpen]);

  const handleMobileLinkClick = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  // Keep formEverOpened in sync when opened externally via context
  if (formPopupOpen && !formEverOpened) {
    setFormEverOpened(true);
  }

  return (
    <>
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[rgba(45,43,43,0.85)] backdrop-blur-[2px] lg:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
      <div
        className="godlyheader w-full bg-[#252323] p-4 text-white lg:px-6 lg:py-0"
        style={{ position: "fixed", top: "0", zIndex: "30" }}
      >
        <div className="flex w-full flex-col items-center justify-between gap-4 bg-[#252323] lg:flex-row">
          {/* Left side: Logo, Mobile Toggle, Desktop Nav */}
          <div
            className={cn(
              "flex w-full items-center justify-between bg-[#252323] lg:max-h-20 lg:w-auto lg:justify-start lg:gap-7.5",
              mobileMenuOpen ? "justify-center" : "",
            )}
          >
            <Logo />
            <MobileMenuToggle
              isOpen={mobileMenuOpen}
              onClick={toggleMobileMenu}
              hidden={mobileMenuOpen}
            />
            <DesktopNav onServicesClick={handleServicesClick} />
          </div>

          {/* Mobile Navigation — only mounted when menu is open */}
          {mobileMenuOpen && (
            <>
              <MobileNav
                onServicesClick={handleServicesClick}
                onCitiesClick={handleCitiesClick}
                onQuoteClick={handleQuoteClick}
                onLinkClick={handleMobileLinkClick}
              />
              <MobileMenuToggle
                isOpen={mobileMenuOpen}
                onClick={toggleMobileMenu}
              />
            </>
          )}

          {/* Right side: Desktop Contact Info & Quote Button */}
          <div className="hidden items-center lg:flex lg:gap-5">
            <div className="flex items-center gap-1">
              <CitySelector
                cityOverride={cityName}
                onClick={handleCitiesClick}
              />
              <PhoneNumber cityOverride={cityName} />
            </div>
            <HeaderButton onClick={handleQuoteClick} />
          </div>
        </div>
      </div>

      {/* Popups — only mounted after first trigger to defer chunk loading */}
      {servicesEverOpened && (
        <ServicePopup open={servicesOpen} onOpenChange={setServicesOpen} />
      )}
      {citiesEverOpened && (
        <CitiesPopup open={citiesOpen} onOpenChange={setCitiesOpen} />
      )}
      {formEverOpened && (
        <FormPopup open={formPopupOpen} onOpenChange={setFormPopupOpen} />
      )}
    </>
  );
};

export default Header;
