"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import QuoteButton from "./quoteButton";
import { DialogTitle } from "@radix-ui/react-dialog";

const TimerBox = ({ value, label }) => {
  return (
    <div className="flex shrink-0 flex-col items-center gap-2">
      <div
        className="flex size-[64px] shrink-0 items-center justify-center rounded-[8px] bg-[#1F1D1D] p-3 font-[Satoshi-Medium] text-[32px] text-white"
        style={{
          boxShadow:
            "0px 3.015px 3.015px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(255, 255, 255, 0.30) inset",
        }}
      >
        {value}
      </div>
      <p className="font-[Satoshi-Medium] text-sm text-black">{label}</p>
    </div>
  );
};

export function PopupModal() {
  const [open, setIsOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);
  const [targetDate, setTargetDate] = useState(null);

  useEffect(() => {
    // South Florida is in Eastern Time - create end of month in ET
    const now = new Date();

    // Get current date in Eastern Time
    const easternTime = new Date(
      now.toLocaleString("en-US", { timeZone: "America/New_York" }),
    );
    const year = easternTime.getFullYear();
    const month = easternTime.getMonth();

    // Create end of current month in Eastern Time (11:59:59 PM)
    const endOfMonth = new Date(year, month + 1, 0, 23, 59, 59, 999);

    setTargetDate(endOfMonth);

    const updateTimer = () => {
      const now = new Date();
      const difference = endOfMonth - now;

      if (difference <= 0) {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer(); // Initial call
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isExpired) {
      return; // Don't show popup if expired
    }

    const timeout = setTimeout(() => {
      setIsOpen(true);
      // Track popup auto-open
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "popup_modal_auto_open", {
          event_category: "engagement",
          event_label: "Popup Modal Auto Open",
          value: 1
        });
      }
    }, 7000);

    return () => clearTimeout(timeout);
  }, [isExpired]);

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          setIsOpen(isOpen);
          if (!isOpen) {
            // Show floating button when modal is closed
            setShowFloatingButton(true);
          }
        }}
      >
        <DialogContent
          closeClass="md:top-4! bg-transparent md:right-5! [&_svg]:size-6! top-2.5! right-13!"
          className="flex aspect-[1811/2711] min-h-[675px] max-w-[440px] scale-90 flex-col border-0 bg-transparent bg-[url(/assets/UnionMobile.png)] bg-contain bg-center bg-no-repeat px-16 shadow-none md:max-w-[440px] md:scale-100 md:bg-[url(/assets/Union.png)] md:px-8"
        >
          <DialogHeader className="sr-only" />
          <DialogDescription className="sr-only" />
          <DialogTitle className="sr-only" />

          <h2 className="trim mt-4 mb-2 text-center text-[32px] leading-[1] text-black md:mt-0">
            South Florida Summer Special –{" "}
            <span className="bg-gradient-to-b from-[#EC7F58] via-[#EC7B56] to-[#EB7753] bg-clip-text py-2 text-transparent">
              $59 Off
            </span>
          </h2>
          <p className="mx-auto max-w-[272px] text-center font-[Satoshi-medium] text-sm font-medium tracking-[0.96px] md:max-w-[352px] md:text-base">
            We&apos;re opening up limited spots for first-time clients this{" "}
            {targetDate
              ? targetDate.toLocaleDateString("en-US", {
                  month: "long",
                  timeZone: "America/New_York",
                })
              : "month"}
            .
          </p>

          <div className="mt-3 mb-2 flex flex-col gap-[24px]">
            <p className="max-w-[352px] text-center font-[Satoshi-medium] text-base font-medium tracking-[0.96px]">
              ⏳ Offer ends in:
            </p>
            <div className="flex items-center justify-center gap-5">
              <TimerBox
                label={"DAYS"}
                value={timeLeft.days.toString().padStart(2, "0")}
              />
              <TimerBox
                label={"HOURS"}
                value={timeLeft.hours.toString().padStart(2, "0")}
              />
              <TimerBox
                label={"MINUTES"}
                value={timeLeft.minutes.toString().padStart(2, "0")}
              />
              <TimerBox
                label={"SECONDS"}
                value={timeLeft.seconds.toString().padStart(2, "0")}
              />
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 h-[1px] w-[calc(100%-90px)] -translate-x-1/2 -translate-y-1/2 bg-[url(/assets/dashes-ticket.png)] object-cover md:w-[calc(100%-32px)]" />

          <div className="mt-8 flex flex-col rounded-[12px] border border-black p-2 md:mt-10">
            <div className="flex flex-col rounded-[8px] border border-black">
              <div className="grid grid-cols-2 items-center justify-center gap-2 md:gap-4">
                <p className="trim bg-gradient-to-b from-[#EC7F58] via-[#EC7B56] to-[#EB7753] bg-clip-text py-4 text-right text-[96px] text-transparent">
                  $59
                </p>
                <p className="trim text-left text-[20px] leading-[1] tracking-wide md:text-[24px]">
                  OFF <br />
                  <span className="text-[#AE9D8A]">
                    FIRST WINDOW <br /> CLEANING
                  </span>
                </p>
              </div>
              <div className="h-[1px] w-full bg-[#CCCACA]" />
              <p className="px-[6px] py-[15px] text-center font-[Satoshi-medium] text-sm font-medium tracking-[0.96px] md:text-base">
                Just in time for summer entertaining. <br />
                Expires{" "}
                {targetDate
                  ? (() => {
                      const day = targetDate.getDate();
                      const suffix =
                        day === 1 || day === 21 || day === 31
                          ? "st"
                          : day === 2 || day === 22
                            ? "nd"
                            : day === 3 || day === 23
                              ? "rd"
                              : "th";
                      return `${targetDate.toLocaleDateString("en-US", {
                        month: "long",
                        timeZone: "America/New_York",
                      })} ${day}${suffix}`;
                    })()
                  : "soon"}
                . Countdown&apos;s ticking.
              </p>
            </div>
          </div>
          <DialogClose asChild>
            <QuoteButton 
              className="quote-button py-4! text-[24px]! md:py-6!"
              onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "popup_modal_quote_click", {
                    event_category: "engagement",
                    event_label: "Popup Modal Quote Button Click",
                    value: 1
                  });
                }
              }}
            >
              Get My Quote
            </QuoteButton>
          </DialogClose>
          <DialogFooter />
        </DialogContent>
      </Dialog>

      {/* Floating Button */}
      {showFloatingButton && !open && !isExpired && (
        <div className="fixed top-1/2 left-0 z-50 -translate-y-1/2 transform">
          <button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/save_59_off.png"
              alt="Take 15% Off"
              className="h-[191px] w-[50px] cursor-pointer object-cover"
              onClick={() => {
                setIsOpen(true);
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "popup_floating_button_click", {
                    event_category: "engagement",
                    event_label: "Popup Floating Button Click",
                    value: 1
                  });
                }
              }}
            />
          </button>
        </div>
      )}
    </>
  );
}
