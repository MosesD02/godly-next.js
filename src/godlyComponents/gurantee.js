import cardBg from "../assets/card_bg.webp";
import React from "react";
import barcode from "../assets/barcode.webp";
import Image from "@/components/Image";

const Gurantee = () => {
  return (
    <div className="paper-bg-16 bg-[#262424]">
      <div
        className={`mx-auto flex max-w-360 flex-col items-center gap-30 bg-[url('/assets/guarantee_bg_mobile.png')] bg-position-[50%_170px] px-6 py-25 md:bg-[url('/assets/gurantee_bg.webp')] md:bg-bottom md:py-37.5`}
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-360">
          <h2 className="sr-only">The Godly Guarantee</h2>
          <div className="item-start flex gap-2">
            <div className="trim md:text-trim text-xs tracking-[1.08px] text-[#FFFFFF] md:mt-3 md:mb-4 md:text-3xl md:tracking-wide">
              THE
            </div>
            <div
              className="trim md:text-trim text-grain bg-[#F3CA9E]! text-[48px] tracking-[4.32px] md:text-[102px] md:tracking-wide"
              data-text="GODLY"
            >
              GODLY
            </div>
          </div>
          <div
            className="trim md:text-trim relative z-10 ml-15 font-['luminaire-script'] text-[27px] text-[#FFFFFF] md:-mt-6 md:ml-22 md:text-[64px]"
            style={{
              WebkitTextStrokeWidth: "8px",
              strokeLinecap: "round",
              WebkitTextStrokeColor: "black",
              paintOrder: "stroke",
            }}
          >
            Guarantee
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-55 bg-contain bg-center bg-no-repeat md:min-h-screen md:gap-62.5">
          <div className="relative min-w-165 scale-40 md:h-60 md:scale-100">
            <div
              className="absolute -top-1 size-full rotate-6 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${cardBg.src})` }}
            ></div>
            <div className="paper-bg-8 gurantee absolute top-0 min-w-165 rounded-md bg-[#CBB7A0]! p-2 shadow">
              <div className="flex size-full items-center justify-between rounded-md border border-black px-4 py-5">
                <div className="flex w-3/4 flex-col justify-between gap-6">
                  <div
                    className="card-number trim text-[rgba(49, 46, 44, 0.19)] text-5xl"
                    style={{
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "rgba(45, 43, 43, 0.20)",
                      paintOrder: "stroke",
                    }}
                  >
                    01.
                  </div>
                  <h3 className="font-['satoshi-bold'] text-2xl text-black">
                    We respect your time
                  </h3>
                  <p className="font-['satoshi-regular'] text-2xl">
                    Time is valuable and should never be taken for granted, we
                    show up on time and maintain steady communication from
                    booking to completion.
                  </p>
                </div>
                <Image src={barcode} alt="barcode" className="h-full w-1/5" />
              </div>
            </div>
          </div>

          <div className="relative w-126.25 scale-40 rotate-2 md:h-50 md:scale-100">
            <div
              className="absolute top-4 -left-15 size-full -rotate-10 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${cardBg.src})` }}
            ></div>
            <div className="gurantee absolute top-0 rounded-md bg-[#CBB7A0] p-2 shadow">
              <div className="flex size-full items-center justify-between rounded-md border border-black px-4 py-5">
                <div className="flex w-3/4 flex-col justify-between gap-6">
                  <div
                    className="card-number trim text-[rgba(49, 46, 44, 0.19)] text-5xl"
                    style={{
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "rgba(45, 43, 43, 0.20)",
                      paintOrder: "stroke",
                    }}
                  >
                    02.
                  </div>
                  <h3 className="font-['satoshi-bold'] text-2xl text-black">
                    We keep our word
                  </h3>
                  <p className="font-['satoshi-regular'] text-2xl font-light">
                    If we say we&apos;re going to do something, we do it. Plain
                    and simple.
                  </p>
                </div>

                <Image src={barcode} alt="barcode" className="h-full w-1/4" />
              </div>
            </div>
          </div>

          <div className="relative min-w-125 scale-40 rotate-2 md:h-50 md:scale-100">
            <div
              className="absolute -top-2 right-5 size-full rotate-5 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${cardBg.src})` }}
            ></div>
            <div className="gurantee absolute top-0 min-w-117.5 rounded-md bg-[#CBB7A0] p-2 shadow">
              <div className="flex size-full rounded-md border border-black px-4 py-5">
                <div className="flex w-3/4 flex-col justify-between gap-6">
                  <div
                    className="card-number trim text-[rgba(49, 46, 44, 0.19)] text-5xl"
                    style={{
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "rgba(45, 43, 43, 0.20)",
                      paintOrder: "stroke",
                    }}
                  >
                    03.
                  </div>
                  <h3 className="card-heading font-['satoshi-bold'] text-2xl text-black">
                    We treat properties like our own
                  </h3>
                  <p className="card-description font-['satoshi-regular'] text-2xl font-light">
                    We respect every inch of your property, and strive to leave
                    it better than we found it.
                  </p>
                </div>

                <Image src={barcode} alt="barcode" className="h-full w-1/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gurantee;
