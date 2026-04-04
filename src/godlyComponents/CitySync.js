"use client";

import { useEffect } from "react";
import { useGodlyContext } from "@/context/godlyContext";
import { citiesMap } from "@/data/cities";

// Tiny client component that syncs the selected city to context and cookie.
// Extracted so the rest of the services page can be a server component.
export default function CitySync({ city }) {
  const { setCity } = useGodlyContext();

  useEffect(() => {
    if (city && citiesMap[city]) {
      setCity(citiesMap[city]);
      document.cookie = `selectedCity=${city};path=/;max-age=31536000`;
    }
  }, [city, setCity]);

  return null;
}
