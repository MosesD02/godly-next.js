import { Suspense } from "react";
import RouteLoadingFallback from "@/components/RouteLoadingFallback";
import LandingWebsiteLayout from "@/components/landing/websiteLayout";

export default function LandingLayout({ children }) {
  return (
    <LandingWebsiteLayout>
      <Suspense fallback={<RouteLoadingFallback variant="landing" />}>
        {children}
      </Suspense>
    </LandingWebsiteLayout>
  );
}
