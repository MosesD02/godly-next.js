"use client";
import { createContext, useContext, useState } from "react";

const GodlyContext = createContext();

export function AppWrapper({ children }) {
  const [city, setCity] = useState("SOUTH FLORIDA");
  const [service, setService] = useState(null);
  const [formPopupOpen, setFormPopupOpen] = useState(false);

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
