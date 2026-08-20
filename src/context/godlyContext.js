"use client";
import { createContext, useContext, useEffect, useState } from "react";
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

/**
 * Keep URL-dependent state behind its own Suspense boundary so the provider
 * remains mounted across navigations without making the entire App Shell wait
 * for usePathname().
 */
export function CityPathSync() {
  const pathname = usePathname();
  const { setCity } = useGodlyContext();

  useEffect(() => {
    // On landing pages: city from URL slug, never from cookie. No city/no service → SOUTH FLORIDA
    if (pathname?.startsWith("/landing")) {
      const segments = pathname.split("/").filter(Boolean);
      const citySlug = segments[segments.length - 1];
      const cityFromSlug = citiesMap[citySlug];
      setCity(cityFromSlug || "SOUTH FLORIDA");
      return;
    }
    // Home (/) and main blog index (/blog): SOUTH FLORIDA in header regardless of cookie
    if (pathname === "/" || pathname === "/blog") {
      setCity("SOUTH FLORIDA");
      return;
    }

    const routeCitySlug = pathname
      ?.split("/")
      .filter(Boolean)
      .find((segment) => citiesMap[segment]);
    if (routeCitySlug) {
      setCity(citiesMap[routeCitySlug]);
      return;
    }

    // Routes without a city segment retain the visitor's selected region.
    setCity(getCityFromCookie());
  }, [pathname, setCity]);

  return null;
}

export function useGodlyContext() {
  return useContext(GodlyContext);
}
