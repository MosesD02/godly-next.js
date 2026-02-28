"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { citiesMap } from "@/data/cities";

const GodlyContext = createContext();

function getCityFromCookie() {
  if (typeof document === "undefined") return "SOUTH FLORIDA";
  const match = document.cookie.match(/selectedCity=([^;]+)/);
  const slug = match?.[1]?.trim();
  return (slug && citiesMap[slug]) ? citiesMap[slug] : "SOUTH FLORIDA";
}

export function AppWrapper({ children }) {
  const [city, setCity] = useState("SOUTH FLORIDA");
  const [service, setService] = useState(null);
  const [formPopupOpen, setFormPopupOpen] = useState(false);

  // Sync city from cookie on mount so header matches what blog page uses
  useEffect(() => {
    setCity(getCityFromCookie());
  }, []);

  return (
    <GodlyContext.Provider
      value={{ city, setCity, service, setService, formPopupOpen, setFormPopupOpen }}
    >
      {children}
    </GodlyContext.Provider>
  );
}

export function useGodlyContext() {
  return useContext(GodlyContext);
}
