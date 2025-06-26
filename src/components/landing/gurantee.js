import cardBg from "@/assets/card_bg.webp";
import React from "react";
import barcode from "@/assets/barcode.webp";
import Image from "next/image";

const Gurantee = () => {
  return (
    <div className="paper-bg-16 bg-[#262424]">
      <div
        className={`mx-auto flex max-w-[1440px] flex-col items-center gap-30 bg-[url('/assets/guarantee_bg_mobile.png')] bg-[50%_170px] px-6 py-[100px] md:bg-[url('/assets/gurantee_bg.webp')] md:bg-bottom md:py-[150px]`}
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="item-start flex gap-2">
            <h4 className="trim md:text-trim text-xs tracking-[1.08px] text-[#FFFFFF] md:mt-3 md:mb-4 md:text-3xl md:tracking-wide">
              THE
            </h4>
            <h4
              className="trim md:text-trim text-grain !bg-[#F3CA9E] text-[48px] tracking-[4.32px] md:text-[102px] md:tracking-wide"
              data-text="GODLY"
            >
              GODLY
            </h4>
          </div>
          <h4
            className="trim md:text-trim relative z-10 ml-15 font-['luminaire-script'] text-[27px] text-[#FFFFFF] md:-mt-6 md:ml-22 md:text-[64px]"
            style={{
              WebkitTextStrokeWidth: "8px",
              strokeLinecap: "round",
              WebkitTextStrokeColor: "black",
              paintOrder: "stroke",
            }}
          >
            Guarantee
          </h4>
        </div>
        <div className="flex w-full flex-col items-center gap-[220px] bg-contain bg-center bg-no-repeat md:min-h-screen md:gap-[250px]">
          <div className="relative min-w-[660px] scale-40 md:h-60 md:scale-100">
            <div
              className="absolute -top-1 h-full w-full rotate-[6deg] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${cardBg.src})` }}
            ></div>
            <div className="paper-bg-8 gurantee absolute top-0 min-w-[660px] rounded-md bg-[#CBB7A0]! p-2 shadow">
              <div className="flex h-full w-full items-center justify-between rounded-md border border-black px-4 py-5">
                <div className="flex w-3/4 flex-col justify-between gap-6">
                  <h4
                    className="card-number trim text-[rgba(49, 46, 44, 0.19)] text-5xl"
                    style={{
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "rgba(45, 43, 43, 0.20)",
                      paintOrder: "stroke",
                    }}
                  >
                    01.
                  </h4>
                  <h4 className="font-['satoshi-bold'] text-2xl text-black">
                    We respect your time
                  </h4>
                  <h5 className="font-['satoshi-regular'] text-2xl">
                    Your time matters. We show up when we say we will — and keep
                    you in the loop from booking to final walkthrough.
                  </h5>
                </div>
                <Image src={barcode} alt="barcode" className="h-full w-1/5" />
              </div>
            </div>
          </div>

          <div className="relative w-[505px] scale-40 rotate-2 md:h-50 md:scale-100">
            <div
              className="absolute top-4 -left-15 h-full w-full -rotate-10 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${cardBg.src})` }}
            ></div>
            <div className="gurantee absolute top-0 rounded-md bg-[#CBB7A0] p-2 shadow">
              <div className="flex h-full w-full items-center justify-between rounded-md border border-black px-4 py-5">
                <div className="flex w-3/4 flex-col justify-between gap-6">
                  <h4
                    className="card-number trim text-[rgba(49, 46, 44, 0.19)] text-5xl"
                    style={{
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "rgba(45, 43, 43, 0.20)",
                      paintOrder: "stroke",
                    }}
                  >
                    02.
                  </h4>
                  <h4 className="font-['satoshi-bold'] text-2xl text-black">
                    We keep our word
                  </h4>
                  <h5 className="font-['satoshi-regular'] text-2xl font-light">
                    If we say it, we mean it. No excuses, no surprises — just
                    old-school follow-through.
                  </h5>
                </div>

                <Image src={barcode} alt="barcode" className="h-full w-1/4" />
              </div>
            </div>
          </div>

          <div className="relative min-w-[500px] scale-40 rotate-2 md:h-50 md:scale-100">
            <div
              className="absolute -top-2 right-5 h-full w-full rotate-5 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${cardBg.src})` }}
            ></div>
            <div className="gurantee absolute top-0 min-w-[470px] rounded-md bg-[#CBB7A0] p-2 shadow">
              <div className="flex h-full w-full rounded-md border border-black px-4 py-5">
                <div className="flex w-3/4 flex-col justify-between gap-6">
                  <h4
                    className="card-number trim text-[rgba(49, 46, 44, 0.19)] text-5xl"
                    style={{
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "rgba(45, 43, 43, 0.20)",
                      paintOrder: "stroke",
                    }}
                  >
                    03.
                  </h4>
                  <h4 className="card-heading font-['satoshi-bold'] text-2xl text-black">
                    We treat properties like our own
                  </h4>
                  <h5 className="card-description font-['satoshi-regular'] text-2xl font-light">
                    We treat your home like it’s ours — with care, respect, and
                    attention to detail you can feel.
                  </h5>
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
