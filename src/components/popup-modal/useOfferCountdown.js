"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { getEndOfMonthDeadlineFromEasternCalendar } from "@/lib/offerCountdownEastern";

const ZERO = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function diffToParts(/** @type {number} */ differenceMs) {
  if (differenceMs <= 0) return { ...ZERO, expired: true };
  const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((differenceMs % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds, expired: false };
}

function computeFromTarget(/** @type {Date} */ targetDate) {
  const difference = targetDate.getTime() - Date.now();
  return diffToParts(difference);
}

/**
 * @returns {{
 *   targetDate: Date,
 *   timeLeft: { days: number, hours: number, minutes: number, seconds: number },
 *   isExpired: boolean
 * }}
 */
export function useOfferCountdown() {
  const targetDate = useMemo(
    () => getEndOfMonthDeadlineFromEasternCalendar(new Date()),
    [],
  );

  const initial = useMemo(() => computeFromTarget(targetDate), [targetDate]);

  const [timeLeft, setTimeLeft] = useState(() =>
    initial.expired
      ? { ...ZERO }
      : {
          days: initial.days,
          hours: initial.hours,
          minutes: initial.minutes,
          seconds: initial.seconds,
        },
  );
  const [isExpired, setIsExpired] = useState(() => initial.expired);

  const tick = useCallback(() => {
    const parts = computeFromTarget(targetDate);
    if (parts.expired) {
      setIsExpired(true);
      setTimeLeft({ ...ZERO });
      return;
    }
    setTimeLeft({
      days: parts.days,
      hours: parts.hours,
      minutes: parts.minutes,
      seconds: parts.seconds,
    });
  }, [targetDate]);

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [tick]);

  return { targetDate, timeLeft, isExpired };
}
