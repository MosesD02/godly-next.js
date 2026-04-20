import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "@/components/Image";
import { cn } from "@/lib/utils";
import { windowClusterPath } from "@/data/windowCleaningCluster";
import { generateServiceHeroAlt } from "@/data/metaTitles";
import "@/styles/fourstepprocess.css";

import windowCleaningHero from "@/assets/serviceData/window-cleaning.webp";
import service3 from "@/assets/serviceData/service3.webp";
import postConstructionHero from "@/assets/serviceData/post-construction.webp";
import service7 from "@/assets/serviceData/service7.webp";

const LINKS = [
  {
    slug: "window-cleaning",
    label: "Window cleaning",
    blurb: "Full overview — residential & commercial",
    image: windowCleaningHero,
  },
  {
    slug: "interior-window-cleaning",
    label: "Interior window cleaning",
    blurb: "Inside glass & tracks for homes",
    image: service3,
  },
  {
    slug: "exterior-window-cleaning",
    label: "Exterior window cleaning",
    blurb: "Outdoor panes, frames & coastal grime",
    image: service7,
  },
  {
    slug: "post-construction-window-cleaning",
    label: "Post-construction window cleaning",
    blurb: "Builders, punch lists & new builds",
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
      aria-label="Window cleaning services"
      className="paper-bg-16 flex w-full flex-col items-center bg-[#ebded1] bg-cover bg-center bg-no-repeat px-4 py-12 bg-blend-multiply md:px-8 md:py-16 lg:px-12"
    >
      <div className="mx-auto flex w-full max-w-(--breakpoint-xl) flex-col items-center gap-8 md:gap-10">
        <header className="flex max-w-180 flex-col gap-3 text-center md:gap-4">
          <h2 className="trim text-[28px] leading-tight font-normal tracking-wide text-[#191717] md:text-[48px] md:leading-tight lg:text-[56px]">
            Explore our window services
          </h2>
          <p className="font-['satoshi-regular'] text-[15px] leading-relaxed text-[#3d3834] md:text-base">
            Each page targets a different search intent so you land on the right
            crew for the job.
          </p>
        </header>

        <ul className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {LINKS.map(({ slug, label, blurb, image }, index) => {
            const href = windowClusterPath(citySlug, slug);
            const isCurrent = slug === currentSlug;
            const tiltEven =
              index % 2 === 0
                ? "rotate-1 group-hover:rotate-0"
                : "-rotate-1 group-hover:rotate-0";

            return (
              <li key={slug} className="list-none">
                <Link
                  href={href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={cn(
                    "group block transform transition-transform duration-300",
                    tiltEven,
                  )}
                >
                  <div
                    className={cn(
                      "relative flex flex-col justify-between gap-3 overflow-hidden rounded-sm bg-[#e7e3df] p-[6.5] pb-3.25 text-[#1c1c1c] shadow-[2px_3px_0_0_rgba(25,23,23,0.08)] transition-shadow duration-300 md:min-h-62.5 md:gap-4 md:p-2.5 md:pb-4.5",
                      "group-hover:shadow-[3px_5px_0_0_rgba(25,23,23,0.1)]",
                      isCurrent &&
                        "ring-2 ring-[#AB8459] ring-offset-2 ring-offset-[#ebded1]",
                    )}
                  >
                    <div className="absolute top-1 -left-5 z-10 h-3 w-13 -rotate-45 bg-[#F3CA9ECC]" />
                    <div className="absolute -right-5 bottom-1 z-10 h-3 w-13 -rotate-45 bg-[#F3CA9ECC]" />

                    <div className="relative overflow-hidden rounded-sm">
                      <Image
                        src={image}
                        alt={generateServiceHeroAlt(slug, cityName)}
                        width={500}
                        height={500}
                        style={{ objectFit: "cover" }}
                        className="size-full max-h-36.25 min-h-36.25 object-cover transition-transform duration-300 group-hover:scale-[1.03] md:max-h-45 md:min-h-45"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 px-0.5 pt-1 md:gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <p className="trim text-left text-[15px] leading-snug font-normal tracking-wide text-[#191717] md:text-[18px] md:leading-tight lg:text-[20px]">
                          {label}
                        </p>
                        <span
                          className={cn(
                            "mt-0.5 shrink-0 transition-colors",
                            isCurrent
                              ? "text-[#AB8459]"
                              : "text-[#191717]/35 group-hover:text-[#191717]",
                          )}
                        >
                          <ArrowUpRight
                            className="size-5 md:size-5"
                            strokeWidth={1.5}
                            aria-hidden
                          />
                        </span>
                      </div>
                      <p className="trim text-left font-['satoshi-regular'] text-xs/snug  text-[#5c534c] md:text-[13px]">
                        {blurb}
                      </p>
                      <p className="trim pt-1 text-left font-sans text-xs underline decoration-[#191717]/25 underline-offset-2 transition-colors group-hover:decoration-[#191717]/60 md:text-sm">
                        {isCurrent ? "Current page" : "View service"}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
