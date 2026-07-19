"use client";

import { useCallback, useEffect, useState } from "react";
import { sendGtagEvent } from "@/lib/gtagEvent";
import { OfferDialog } from "./OfferDialog";
import { QuoteFormDialog } from "./QuoteFormDialog";
import { FloatingOfferTab } from "./FloatingOfferTab";
import { useOfferCountdown } from "./useOfferCountdown";
import {
  POPUP_AUTO_OPEN_MS,
  OFFER_MODAL_QUOTE_GTAG,
  OFFER_MODAL_FLOATING_GTAG,
} from "./constants";

export function PopupModal() {
  const [open, setOpen] = useState(false);
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  const { targetDate, timeLeft, isExpired } = useOfferCountdown();

  useEffect(() => {
    if (isExpired) return;
    const t = setTimeout(() => {
      setOpen(true);
    }, POPUP_AUTO_OPEN_MS);
    return () => clearTimeout(t);
  }, [isExpired]);

  const onOfferOpenChange = useCallback((isOpen) => {
    setOpen(isOpen);
    if (!isOpen) setShowFloating(true);
  }, []);

  const onGetQuote = useCallback(() => {
    setOpen(false);
    setQuoteFormOpen(true);
    sendGtagEvent("popup_modal_quote_click", OFFER_MODAL_QUOTE_GTAG);
  }, []);

  const onFloatingClick = useCallback(() => {
    setOpen(true);
    sendGtagEvent("popup_floating_button_click", OFFER_MODAL_FLOATING_GTAG);
  }, []);

  return (
    <>
      <OfferDialog
        open={open}
        onOpenChange={onOfferOpenChange}
        timeLeft={timeLeft}
        targetDate={targetDate}
        onGetQuote={onGetQuote}
      />

      <QuoteFormDialog open={quoteFormOpen} onOpenChange={setQuoteFormOpen} />

      {showFloating && !open && !isExpired && (
        <FloatingOfferTab onReopen={onFloatingClick} />
      )}
    </>
  );
}
