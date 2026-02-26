"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGodlyContext } from "@/context/godlyContext";
import { citiesMap } from "@/data/cities";

export default function BlogRedirect() {
  const router = useRouter();
  const { city } = useGodlyContext();

  useEffect(() => {
    const slug =
      Object.keys(citiesMap).find((key) => citiesMap[key] === city) ||
      "south-florida";
    router.replace(`/blog/${slug}`);
  }, [city, router]);

  return null;
}
