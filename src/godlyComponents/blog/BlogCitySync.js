"use client";

import { useEffect } from "react";
import { useGodlyContext } from "@/context/godlyContext";
import { citiesMap } from "@/data/cities";

export default function BlogCitySync({ citySlug, targetCity }) {
  const { setCity } = useGodlyContext();

  useEffect(() => {
    if (citySlug && citiesMap[citySlug]) {
      setCity(citiesMap[citySlug]);
      document.cookie = `selectedCity=${citySlug};path=/;max-age=31536000`;
      return;
    }
    const match = Object.entries(citiesMap).find(
      ([, label]) =>
        label.toUpperCase() === (targetCity || "").toUpperCase().trim(),
    );
    if (match) {
      setCity(match[1]);
      document.cookie = `selectedCity=${match[0]};path=/;max-age=31536000`;
    }
  }, [citySlug, targetCity, setCity]);

  return null;
}
