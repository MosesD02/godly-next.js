import grainBg from "../assets/grain-bg.webp";
import Image from "@/components/Image";
import subtract from "../assets/subtract.svg";

export default function HeaderButton({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="group scale-85 cursor-pointer xl:scale-100"
      >
        <div>
          <div
            className="shadow-[0px 1px 0px rgba(0, 0, 0.25) inset, -1px 1.2px rgba(255, 255, 0.03), 2px 2.6px 0.30)] 0, 0.30)] relative h-[14.4px] w-32 rounded-[3px] border-[0.4px] border-black bg-[#1b1b1b] bg-repeat"
            style={{ backgroundImage: `url(${grainBg.src})` }}
          >
            <div className="absolute bottom-1 left-1/2 max-w-28.75 shrink-0 -translate-x-1/2 transition-all duration-300">
              <div className="h-1 w-28.75 border-b border-dashed border-[#2D2B2B] bg-[#F3CA9E69]" />
              <div
                className="absolute left-1/2 flex h-16 w-28.75 -translate-x-1/2 transform items-center justify-center bg-[#F3CA9E] bg-repeat p-0.75 transition-transform duration-300 hover:shadow-lg"
                style={{ backgroundImage: `url(${grainBg.src})` }}
              >
                <div className="flex size-full flex-col justify-between rounded-[6px] border-[0.4px] border-black p-1.25 transition-all duration-300">
                  <div className="all-unset flex w-full items-center justify-between gap-0">
                    <p className="leading-trimmed font-[marlton-sans] text-[4px] font-normal text-[#1c1c1c]">
                      CUST.
                    </p>
                    <p className="leading-trimmed font-[marlton-stencil] text-[4px] font-normal text-[#AB8459]">
                      GODLY
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="inline-block text-center text-xl leading-none font-medium text-[#1c1c1c] transition-all duration-300 hover:scale-105">
                      GET A QUOTE
                    </p>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="h-0.5 w-full bg-[#312E2C]" />
                    <div className="h-px w-full bg-[#312E2C]" />
                  </div>
                </div>
                <div className="absolute -bottom-2.5">
                  <Image
                    src={subtract}
                    alt="subtract"
                    width={115}
                    height={11}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}
