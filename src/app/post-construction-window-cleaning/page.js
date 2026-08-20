import { Suspense } from "react";
import RegionalWindowClusterPage, {
  generateRegionalWindowMetadata,
} from "@/godlyComponents/RegionalWindowClusterPage";
import RouteLoadingFallback from "@/components/RouteLoadingFallback";
import WebsiteLayout from "@/godlyComponents/websiteLayout";

export async function generateMetadata() {
  return generateRegionalWindowMetadata("post-construction-window-cleaning");
}

export default function Page() {
  return (
    <WebsiteLayout>
      <Suspense fallback={<RouteLoadingFallback variant="service" />}>
        <RegionalWindowClusterPage slug="post-construction-window-cleaning" />
      </Suspense>
    </WebsiteLayout>
  );
}
