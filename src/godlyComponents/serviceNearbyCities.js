import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { citiesMap } from "@/data/cities";
import { getNearbyCitySlugs } from "@/data/cityNeighbors";
import { serviceMetaTitles } from "@/data/metaTitles";
import "@/styles/fourstepprocess.css";

function toCityTitle(citySlug) {
  return citiesMap[citySlug]
    ? citiesMap[citySlug]
        .split(" ")
        .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
        .join(" ")
    : citySlug;
}

export default function ServiceNearbyCities({ citySlug, serviceSlug }) {
  const neighbors = getNearbyCitySlugs(citySlug);
  const serviceName =
    serviceMetaTitles[serviceSlug] ||
    serviceSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <section
      id="service-nearby-cities"
      className="paper-bg-16 flex flex-col items-center bg-[#ebded1] bg-cover bg-center bg-no-repeat px-4 pt-0 pb-20 bg-blend-multiply md:px-24 md:pb-42"
    >
      <h2 className="trim max-w-[1200px] py-10 text-center text-[32px] leading-tight font-normal tracking-wide text-[#191717] md:text-[64px]">
        {serviceName} in Nearby Cities
      </h2>

      <div className="grid w-full max-w-(--breakpoint-xl) grid-cols-2 gap-6 px-4 py-5 sm:gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
        {neighbors.map((neighborSlug, index) => {
          const cityLabel = toCityTitle(neighborSlug);
          const tiltEven =
            index % 2 === 0
              ? "rotate-1 group-hover:rotate-0"
              : "-rotate-1 group-hover:rotate-0";
          return (
            <Link
              key={neighborSlug}
              href={`/${neighborSlug}/${serviceSlug}`}
              className={`group block transform transition-transform duration-300 ${tiltEven}`}
            >
              <div className="relative flex min-h-[120px] flex-col justify-center rounded-sm bg-[#e7e3df] p-4 text-[#1c1c1c] shadow-[2px_3px_0_0_rgba(25,23,23,0.06)] md:min-h-[140px] md:p-5">
                <div className="absolute top-1 -left-5 z-10 h-3 w-13 -rotate-45 bg-[#F3CA9ECC]" />
                <div className="absolute -right-5 bottom-2 z-10 h-3 w-13 -rotate-45 bg-[#F3CA9ECC]" />

                <div className="flex items-center justify-between gap-3">
                  <p className="trim text-left text-[17px] leading-snug font-normal tracking-wide md:text-[22px]">
                    {cityLabel}
                  </p>
                  <span className="shrink-0 text-[#191717]/40 transition-colors group-hover:text-[#191717]">
                    <ArrowUpRight
                      className="size-5 md:size-6"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </span>
                </div>
                <p className="mt-3 text-left font-[satoshi-regular] text-xs font-normal tracking-wide text-[#191717]/55 md:text-[13px]">
                  View {serviceName.toLowerCase()}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
