import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Cities map labels are ALL CAPS; use this for readable HTML + `uppercase` for the same look. */
export function titleCaseCityName(cityName: string | undefined | null): string {
  if (cityName == null || cityName === "") return "";
  return cityName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
