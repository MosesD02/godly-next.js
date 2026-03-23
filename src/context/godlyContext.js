"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { citiesMap } from "@/data/cities";

const GodlyContext = createContext();

export function getCityFromCookie() {
  if (typeof document === "undefined") return "SOUTH FLORIDA";
  const match = document.cookie.match(/selectedCity=([^;]+)/);
  const slug = match?.[1]?.trim();
  return slug && citiesMap[slug] ? citiesMap[slug] : "SOUTH FLORIDA";
}

export function AppWrapper({ children }) {
  const [city, setCity] = useState("SOUTH FLORIDA");
  const [service, setService] = useState(null);
  const [formPopupOpen, setFormPopupOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // On landing pages: city from URL slug, never from cookie. No city/no service → SOUTH FLORIDA
    if (pathname?.startsWith("/landing")) {
      const segments = pathname.split("/").filter(Boolean);
      const citySlug = segments[segments.length - 1];
      const cityFromSlug = citiesMap[citySlug];
      setCity(cityFromSlug || "SOUTH FLORIDA");
      return;
    }
    // Home page (/): always show SOUTH FLORIDA regardless of cookie
    if (pathname === "/") {
      setCity("SOUTH FLORIDA");
      return;
    }
    // All other pages: sync from cookie so header matches blog/navigation
    setCity(getCityFromCookie());
  }, [pathname]);

  return (
    <GodlyContext.Provider
      value={{
        city,
        setCity,
        service,
        setService,
        formPopupOpen,
        setFormPopupOpen,
      }}
    >
      {children}
    </GodlyContext.Provider>
  );
}

export function useGodlyContext() {
  return useContext(GodlyContext);
}
