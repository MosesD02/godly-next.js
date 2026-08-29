import React from "react";

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 50,
  height: 50,
  viewBox: "0 0 50 50",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  shapeRendering: "geometricPrecision",
};

export const PostConstructionWindowIcon = ({ className }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <rect x="4.5" y="4" width="31" height="31" rx="1.4" />
    <rect x="7" y="6.5" width="26" height="26" rx="0.5" />
    <path d="M20 6.8v25.4M7.3 19.5h25.4" />
    <path d="m9.8 10.4 3.8-1.9M9.8 13.6l6.7-3.4M22.6 10.4l3.8-1.9M22.6 13.6l6.7-3.4" />
    <path d="m9.8 23.4 3.8-1.9M9.8 26.6l6.7-3.4M22.6 23.4l3.8-1.9" />
    <circle cx="14" cy="29.2" r="0.55" fill="currentColor" stroke="none" />
    <circle cx="28.6" cy="28.5" r="0.5" fill="currentColor" stroke="none" />
    <path
      d="M41 36.1v-1.5h2v1.5c2.7.6 4.7 2.7 4.9 5.4h-12c.3-2.7 2.3-4.8 5.1-5.4Zm-5.4 6.5h12.7v1.9c0 .7-.5 1.2-1.2 1.2H36.8c-.7 0-1.2-.5-1.2-1.2v-1.9Zm5.6-4.7v3.6h1.6v-3.6h-1.6Z"
      fill="currentColor"
      stroke="none"
      fillRule="evenodd"
    />
    <path d="m42.1 25.7.9-1.9.9 1.9 1.9.9-1.9.9-.9 1.9-.9-1.9-1.9-.9 1.9-.9Z" />
  </svg>
);

export const SoftWashingIcon = ({ className }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <path d="M11 19.5h14.5v22H9.5V22a2.5 2.5 0 0 1 1.5-2.5Z" />
    <path d="M14 19.5v-4h7v4M15.5 15.5v-3h4v3" />
    <path d="M12.5 25.5h10v11h-10z" />
    <path d="M17.5 28.5c-1.2 1.4-2 2.4-2 3.5a2 2 0 0 0 4 0c0-1.1-.8-2.1-2-3.5Z" />
    <path d="M25.5 37.5c5.8 0 9.2-2.5 9.2-7.4 0-3.2 1-5.7 3.2-8.1" />
    <path d="m35.8 23.8 7.8-10.6 2.8 2.1-7.8 10.6-2.8-2.1Z" />
    <path d="m42.3 12.5 2.4-3.2 3.3 2.5-2.4 3.2" />
    <path d="M39.7 10.5c-2.1.2-4.1 1-5.6 2.4M38.5 7.4c-3.4.2-6.7 1.6-9.1 4" />
    <path d="M31.7 17.8c-.8 1-1.3 1.8-1.3 2.5a1.3 1.3 0 0 0 2.6 0c0-.7-.5-1.5-1.3-2.5ZM27.4 12.8c-.7.9-1.1 1.5-1.1 2.1a1.1 1.1 0 0 0 2.2 0c0-.6-.4-1.2-1.1-2.1Z" />
  </svg>
);

export const PaverSealingIcon = ({ className }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <rect x="4.75" y="8" width="40.5" height="34" rx="1.5" />
    <rect x="7.5" y="10.75" width="35" height="28.5" rx="0.5" />
    <path d="M7.8 20.25h34.4M7.8 29.75h34.4" />
    <path d="M18.8 11v9M31.4 11v9M13.2 20.5v9M25 20.5v9M36.8 20.5v9M18.8 30v9M31.4 30v9" />
    <path d="M10.2 13.5h5.6M21.5 13.5h6.8M34.2 13.5h5.6" />
    <path d="m38.6 3.9 1 2.1 2.1 1-2.1 1-1 2.1-1-2.1-2.1-1 2.1-1 1-2.1Z" />
    <path d="M43.1 11.7c-1.3 1.7-2.1 2.8-2.1 4a2.1 2.1 0 0 0 4.2 0c0-1.2-.8-2.3-2.1-4Z" />
    <circle cx="11" cy="34.4" r="0.55" fill="currentColor" stroke="none" />
    <circle cx="26" cy="25" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

export const TravertineSealingIcon = ({ className }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <rect x="5" y="6.5" width="40" height="37" rx="1.5" />
    <rect x="7.75" y="9.25" width="34.5" height="31.5" rx="0.5" />
    <path d="M19.25 9.5v31M30.75 9.5v31M8 25h34" />
    <path d="M10.2 13.3c1.8-1.5 3.2.8 4.7-.5 1.1-1 1.8-.4 2.4.1M21.4 20.9c1.5-1.2 2.6.5 3.8-.5 1-.9 2-.2 2.8.2M33 13.7c1.5-1.4 2.7.5 3.9-.6 1-.9 1.9-.2 2.7.2" />
    <path d="M10.3 30c1.5-1.2 2.6.5 3.8-.5 1-.8 2-.2 2.8.2M21.5 35.2c1.8-1.5 3.1.7 4.6-.6 1.1-.9 2-.3 2.6.2M33 30c1.6-1.3 2.7.6 4-.5 1-.8 1.9-.2 2.6.2" />
    <path d="M37.2 15.5c-1.3 1.7-2.2 2.8-2.2 4a2.2 2.2 0 0 0 4.4 0c0-1.2-.9-2.3-2.2-4Z" />
    <path d="m39 35.1.8-1.7.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8Z" />
    <circle cx="13.4" cy="19.6" r="0.55" fill="currentColor" stroke="none" />
    <circle cx="24.8" cy="14.2" r="0.5" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="36.2" r="0.45" fill="currentColor" stroke="none" />
  </svg>
);

export const ConcreteSealingIcon = ({ className }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <rect x="4.5" y="8" width="27" height="36" rx="1.4" />
    <rect x="7" y="10.5" width="22" height="31" rx="0.5" />
    <path d="m19 10.9-3.1 6 3.6 2.3-4.5 5.3 3.2 2.8-2.4 5.2 3 3.8-1.8 4.7" />
    <path d="M9.8 15c1.5-.7 3.2-.8 4.8-.2M21.8 16c1.3-.6 2.8-.6 4.1 0M9.6 35.8c1.4-.5 3-.5 4.4 0M21.4 34.7c1.5-.6 3.2-.5 4.6.1" />
    <circle cx="11.2" cy="27.7" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="24.8" cy="25.8" r="0.5" fill="currentColor" stroke="none" />
    <rect
      x="33"
      y="7.5"
      width="14"
      height="6"
      rx="1.4"
      fill="currentColor"
      stroke="none"
    />
    <path d="M47 10.5h1v7.2c0 2.3-1.9 4.2-4.2 4.2h-2.1c-1.2 0-2.2 1-2.2 2.2v7" />
    <rect
      x="36.8"
      y="29.8"
      width="5.4"
      height="14.2"
      rx="1.3"
      fill="currentColor"
      stroke="none"
    />
    <path d="M42.9 24.8c-1.4 1.8-2.3 3-2.3 4.2a2.3 2.3 0 0 0 4.6 0c0-1.2-.9-2.4-2.3-4.2Z" />
    <path d="m39 18.2.8-1.7.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8Z" />
  </svg>
);
