import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { XIcon } from "lucide-react";
import QuoteButton from "@/components/quoteButton";
import { TimerBox } from "./TimerBox";
import {
  formatExpiryLineWithOrdinal,
  formatLongMonthEastern,
} from "@/lib/offerCountdownEastern";

// Close is absolute within the only direct child of DialogContent (position: relative),
// not the padded surface — avoids Safari/Chromium differences on the dialog root.
const OFFER_HEADER_CLOSE_CLASS =
  "ring-offset-background focus:ring-ring data-[state=open]:text-muted-foreground absolute top-3 right-12 z-120 flex min-h-11 min-w-11 items-center justify-center rounded-full bg-transparent focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none md:top-4 md:right-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:!size-5 md:[&_svg]:!size-6.75";

// No padding on DialogContent — padding lives on the main column only so the relative shell
// (first child) matches the full card; close top/right insets then match the old default dialog.
const OFFER_CONTENT_CLASS =
  "z-[16777000]! flex aspect-1811/2711 min-h-168.75 max-w-110 max-sm:scale-[0.86] scale-90 flex-col gap-0 !p-0 overflow-hidden border-0 bg-transparent bg-[url(/assets/UnionMobile.png)] bg-contain bg-center bg-no-repeat shadow-none md:max-w-110 md:scale-100 md:bg-[url(/assets/Union.png)]";

const OFFER_DASHED_RULE_CLASS =
  "pointer-events-none h-px w-full shrink-0 bg-repeat-x [background-size:auto_1px] [background-image:url(/assets/dashes-ticket.png)] [background-position:0_50%]";

const LABELS = ["DAYS", "HOURS", "MINUTES", "SECONDS"];

/**
 * @param {object} props
 * @param {boolean} props.open
 * @param {(o: boolean) => void} props.onOpenChange
 * @param {{ days: number, hours: number, minutes: number, seconds: number }} props.timeLeft
 * @param {Date | null} props.targetDate
 * @param {() => void} props.onGetQuote
 */
export function OfferDialog({
  open,
  onOpenChange,
  timeLeft,
  targetDate,
  onGetQuote,
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent hideCloseButton className={OFFER_CONTENT_CLASS}>
        <div className="relative flex min-h-0 w-full min-w-0 flex-1 flex-col">
          <DialogHeader className="sr-only" />
          <DialogDescription className="sr-only" />
          <DialogTitle asChild>
            <span className="sr-only">
              New Client Special — limited-time offer for first-time clients
            </span>
          </DialogTitle>

          <DialogClose className={OFFER_HEADER_CLOSE_CLASS}>
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col px-[48px] pt-6 pb-6 md:px-[32px]">
            <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-4 md:gap-5">
              <h2 className="trim text-center text-[32px] leading-none text-black">
                New Client Special
                <br className="md:hidden" />–{" "}
                <span className="bg-linear-to-b from-[#EC7F58] via-[#EC7B56] to-[#EB7753] bg-clip-text py-2 text-transparent">
                  $50 Off
                </span>
              </h2>
              <p className="mx-auto max-w-68 text-center font-[Satoshi-medium] text-sm font-medium tracking-[0.96px] md:max-w-88 md:text-base">
                We&apos;re opening up limited spots for first-time clients this{" "}
                {formatLongMonthEastern(targetDate)}.
              </p>
              <div className="flex w-full max-w-88 flex-col items-center gap-4">
                <p className="text-center font-[Satoshi-medium] text-base font-medium tracking-[0.96px]">
                  <span aria-hidden="true">⏳ </span>
                  Offer ends in:
                </p>
                <div className="flex items-center justify-center gap-5">
                  {LABELS.map((label, i) => {
                    const keys = ["days", "hours", "minutes", "seconds"];
                    return (
                      <TimerBox
                        key={label}
                        label={label}
                        value={String(timeLeft[keys[i]]).padStart(2, "0")}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className={OFFER_DASHED_RULE_CLASS} aria-hidden />

            <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col items-center justify-center gap-3 md:gap-4">
              <div className="flex w-full flex-col rounded-[12px] border border-black p-2">
                <div className="flex flex-col rounded-xl border border-black">
                  <div className="grid grid-cols-2 items-center justify-center gap-2 md:gap-4">
                    <p className="trim bg-linear-to-b from-[#EC7F58] via-[#EC7B56] to-[#EB7753] bg-clip-text py-4 text-right text-[clamp(48px,15vw,96px)] text-transparent">
                      $50
                    </p>
                    <p className="trim text-left text-[20px] leading-none tracking-wide md:text-[24px]">
                      OFF <br />
                      <span className="text-[#AE9D8A]">
                        FIRST SERVICE
                        <br />
                        PLAN CLEANING
                      </span>
                    </p>
                  </div>
                  <div className="h-px w-full bg-[#CCCACA]" />
                  <p className="px-1.5 py-3.75 text-center font-[Satoshi-medium] text-sm font-medium tracking-[0.96px] md:text-base">
                    Perfect timing for a crystal-clear home. Expires{" "}
                    {formatExpiryLineWithOrdinal(targetDate)}. Countdown&apos;s
                    ticking.
                  </p>
                </div>
              </div>
              <DialogClose asChild>
                <QuoteButton
                  className="quote-button !w-full !max-w-full !self-stretch py-4! text-[24px]! md:py-6!"
                  onClick={onGetQuote}
                >
                  Get My Quote
                </QuoteButton>
              </DialogClose>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
