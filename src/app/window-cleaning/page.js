import { Suspense } from "react";
import RegionalWindowClusterPage, {
  generateRegionalWindowMetadata,
} from "@/godlyComponents/RegionalWindowClusterPage";
import RouteLoadingFallback from "@/components/RouteLoadingFallback";
import WebsiteLayout from "@/godlyComponents/websiteLayout";

export async function generateMetadata() {
  return generateRegionalWindowMetadata("window-cleaning");
}

export default function Page() {
  return (
    <WebsiteLayout>
      <Suspense fallback={<RouteLoadingFallback variant="service" />}>
        <RegionalWindowClusterPage slug="window-cleaning" />
      </Suspense>
    </WebsiteLayout>
  );
}
