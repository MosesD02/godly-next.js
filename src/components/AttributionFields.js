"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ATTRIBUTION_FIELDS, getAttributionValues } from "@/lib/attribution";

export default function AttributionFields() {
  const pathname = usePathname();
  const containerRef = useRef(null);

  useEffect(() => {
    const values = getAttributionValues();
    ATTRIBUTION_FIELDS.forEach((field) => {
      const input = containerRef.current?.querySelector(`[name="${field}"]`);
      if (input) input.value = values[field];
    });
  }, [pathname]);

  return (
    <div ref={containerRef} className="hidden" aria-hidden="true">
      {ATTRIBUTION_FIELDS.map((field) => (
        <input key={field} type="hidden" name={field} defaultValue="" />
      ))}
    </div>
  );
}
