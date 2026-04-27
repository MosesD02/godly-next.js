"use client";

import Link from "next/link";
import Image from "@/components/Image";
import { cn } from "@/lib/utils";
import { windowClusterPath } from "@/data/windowCleaningCluster";
import { generateServiceHeroAlt } from "@/data/metaTitles";
import "@/styles/fourstepprocess.css";

import windowCleaningHero from "@/assets/serviceData/window-cleaning-new.jpeg";
import postConstructionHero from "@/assets/serviceData/post-construction.webp";
import service7 from "@/assets/serviceData/service7.webp";

const LINKS = [
  {
    slug: "window-cleaning",
    label: "Window cleaning",
    image: windowCleaningHero,
  },
  {
    slug: "exterior-window-cleaning",
    label: "Exterior window cleaning",
    image: service7,
  },
  {
    slug: "post-construction-window-cleaning",
    label: "Post-construction window cleaning",
    image: postConstructionHero,
  },
];

export default function WindowCleaningClusterNav({
  citySlug,
  cityName,
  currentSlug,
}) {
  return (
    <nav
      id="window-cleaning-cluster-nav"
      aria-label="Window cleaning services navigation"
      className="paper-bg-16 flex flex-col items-center justify-center justify-items-center gap-10 bg-[#ebded1] bg-cover bg-center bg-no-repeat p-4 bg-blend-multiply md:px-24 md:pt-0 md:pb-0"
    >
      <div className="flex flex-col items-center">
        <h2 className="trim py-10 text-center text-[32px] leading-tight font-normal tracking-wide text-[#191717] md:max-w-300 md:text-[64px]">
          Explore our window services
        </h2>
        <p className="max-w-180 text-center font-['satoshi-regular'] text-[15px] leading-relaxed text-[#3d3834] md:text-base">
          Interior, exterior, post-construction, or full overview—pick what
          matches your home.
        </p>
      </div>

      <div className="grid w-full max-w-(--breakpoint-xl) grid-cols-1 gap-10 px-4 py-5 sm:grid-cols-3">
        {LINKS.map(({ slug, label, image }, index) => {
          const href = windowClusterPath(citySlug, slug);
          const isCurrent = slug === currentSlug;
          const tiltClass = index % 2 === 0 ? "rotate-1" : "-rotate-1";

          return (
            <Link
              href={href}
              key={slug}
              aria-current={isCurrent ? "page" : undefined}
              className="block"
            >
              <div
                className={cn(
                  "transform transition-transform duration-300 hover:rotate-0",
                  tiltClass,
                )}
              >
                <div
                  className={cn(
                    "relative flex flex-col justify-between gap-3 rounded-sm bg-[#e7e3df] p-[6.5] pb-3.25 text-[#1c1c1c] md:min-h-62.5 md:gap-4 md:p-2.5 md:pb-4.5",
                    isCurrent &&
                      "ring-2 ring-[#AB8459] ring-offset-2 ring-offset-[#ebded1]",
                  )}
                >
                  <Image
                    src={image}
                    alt={generateServiceHeroAlt(slug, cityName)}
                    width={500}
                    height={500}
                    style={{ objectFit: "cover" }}
                    className="size-full max-h-36.25 min-h-36.25 object-cover md:max-h-55.75 md:min-h-55.75"
                  />
                  <p className="trim text-center text-sm md:text-[22px]">
                    {label}
                  </p>
                  <p className="trim text-center font-sans text-xs underline md:text-base">
                    {isCurrent ? "Current Page" : "What We Offer"}
                  </p>
                  <div className="absolute top-1 -left-5 z-10 h-3 w-13 -rotate-45 bg-[#F3CA9ECC]" />
                  <div className="absolute -right-5 bottom-1 z-10 h-3 w-13 -rotate-45 bg-[#F3CA9ECC]" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
