import React, { memo } from "react";

const TIMER_BOX_INNER =
  "flex size-16 shrink-0 items-center justify-center rounded-xl bg-[#1F1D1D] p-3 font-[Satoshi-Medium] text-[32px] text-white";

const TIMER_INSET_SHADOW = {
  boxShadow:
    "0px 3.015px 3.015px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(255, 255, 255, 0.30) inset",
};

function TimerBoxInner({ value, label }) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-2">
      <div
        className={TIMER_BOX_INNER}
        style={TIMER_INSET_SHADOW}
      >
        {value}
      </div>
      <p className="font-[Satoshi-Medium] text-sm text-black">{label}</p>
    </div>
  );
}

export const TimerBox = memo(TimerBoxInner);
TimerBox.displayName = "TimerBox";
