/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  return (
    <div className="paper-bg-16 mt-20 bg-[#262424] md:mt-0">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-6 pb-[120px] md:px-6 md:py-25">
        <div className="flex w-full flex-col gap-[63px] md:relative md:flex-row md:items-end md:justify-center">
          <div className="flex flex-col items-center justify-center gap-6 md:gap-9">
            <div className="flex items-end gap-6">
              <h4 className="trim md:text-trim text-[32px] tracking-wider text-[#FFFFFF] md:text-[86px]">
                TRUSTED
              </h4>
              <h4 className="trim md:text-trim text-[22px] tracking-wider text-[#FDE4C8] md:text-3xl">
                BY
              </h4>
            </div>
            <h2 className="-mt-5 md:-mt-9">
              <span
                className="text-grain !bg-[#FDE4C8] font-['luminaire-script'] text-base md:mr-4 md:ps-2 md:pb-2 md:text-[64px] md:before:inset-0"
                data-text="Your"
              >
                Your
              </span>{" "}
              <span
                className="text-grain text-trim !bg-[#FFFFFF] text-[32px] tracking-wider md:text-[86px]"
                data-text="NEIGHBORS"
              >
                NEIGHBORS
              </span>
            </h2>
          </div>
        </div>
        <div className="max-w-screen-[1920px] mx-auto w-full pb-20 md:pb-40">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-5/6 pl-4 md:basis-[25%]"
                >
                  <div className="paper-bg-8 flex h-full flex-col gap-6 rounded-md bg-[#dec9b4] p-6 text-[#1c1c1c]">
                    <div className="flex w-full flex-col items-center justify-between gap-3">
                      <div className="ribbon">{item.location}</div>
                      <div className="flex w-full items-center gap-[10px]">
                        <img
                          src={item.image}
                          alt={item.author}
                          className="size-[47px] rounded-full bg-[#D9D9D9] object-cover"
                        />
                        <div className="flex flex-col gap-2.5">
                          <p className="trim text-base font-normal">
                            {item.author}
                          </p>
                          <div className="flex items-center gap-1.5">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star key={i} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="mb-4 font-sans text-sm leading-relaxed font-normal">
                      {item.content}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="relative mt-16 h-16">
              <CarouselPrevious className="absolute left-1/2 size-[60px] -translate-x-[calc(100%+1.25rem)] transform rounded-full bg-white text-black" />
              <CarouselNext className="absolute left-1/2 size-[60px] translate-x-[1.25rem] transform rounded-full bg-white text-black" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const reviews = [
  {
    author: "Stacey Downs",
    location: "Coral Springs, Fl",
    content:
      "Extremely pleased with the results of my windows. They were very professional and informative. I highly recommend Moses Godly Windows!",
    image: "/assets/stacey.png",
  },
  {
    author: "Lilly Thomas",
    location: "Lighthouse Point, Fl",
    content:
      "Amazing Job! Moses is very conscientious and always provides a top quality service.",
    image: "/assets/lily.png",
  },
  {
    author: "Julie Candella",
    location: "Ft. Lauderdale",
    content:
      "Amazing and professional service by Moses and his team today they completed the entire house inside and out driveways, and awnings & made sure everything was clean, including garbage cans and then put furniture and everything back the way it was exactly. Plus more. We are looking forward to having our Christmas lights as well.",
    image: "/assets/julie.png",
  },
  {
    author: "Heather Roach",
    location: "Ft. Lauderdale, Fl",
    content:
      "The window washing service was prompt, professional, and left every pane sparkling clean. They paid attention to detail and even cleaned hard-to-reach areas without any streaks. I'm impressed with the results and would definitely hire them again! 🙌",
    image: "/assets/heather.png",
  },
  {
    author: "Phillip Smoak",
    location: "Parkland, Fl",
    content:
      "These guys are amazing. They clean our windows every three months and always do a great job. It's not easy finding great honest work, super glad I found them.",
    image: "/assets/phillip.png",
  },
  {
    author: "Sliding Door Dr.",
    location: "Boca Raton, Fl",
    content:
      "I install glass and these are the only guys I use and recommend. They know what they're doing and if you have impact glass you better use someone that knows.",
    image: "/assets/sliding.png",
  },
  {
    author: "Daniela D",
    location: "Boca Raton, Fl",
    content:
      "The best window company I've used. Was referred by a friend and they did a great job. The one thing I loved was how they use something on the glass so that my windows barely get wet when it rains. Just call them and you'll see why I'm leaving a review. Great guys.",
    image: "/assets/daniela.png",
  },
  {
    author: "Kelly Grana-Barton",
    location: "Ft. Lauderdale, Fl",
    content: "The best!!! Don't call anyone else for window washing.",
    image: "/assets/kelly.png",
  },
  {
    author: "Mike Donoghue",
    location: "Ft. Lauderdale, Fl",
    content:
      "Moses and his crew were detail-oriented and great to work with. I added patio screen cleaning to the job, and they excelled. I'm so pleased I've scheduled regular cleanings—quarterly since I'm near the ocean. Service in Florida has generally disappointed me, but Moses restores my faith in good service. Funny enough, the business is named after him. Overall, a great experience.",
    image: "/assets/mike.png",
  },
];

const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M4.71103 15.7816L5.88103 10.7236L1.95703 7.32156L7.14103 6.87156L9.15703 2.10156L11.173 6.87156L16.357 7.32156L12.433 10.7236L13.603 15.7816L9.15703 13.0996L4.71103 15.7816Z"
        fill="black"
      />
    </svg>
  );
};
