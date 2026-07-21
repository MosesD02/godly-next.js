"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { captureCurrentAttribution } from "@/lib/attribution";

export default function AttributionCapture() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  useEffect(() => {
    captureCurrentAttribution();
  }, [pathname, query]);

  return null;
}
