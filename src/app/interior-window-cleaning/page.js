import RegionalWindowClusterPage, {
  generateRegionalWindowMetadata,
} from "@/godlyComponents/RegionalWindowClusterPage";

export const revalidate = 3600;

export async function generateMetadata() {
  return generateRegionalWindowMetadata("interior-window-cleaning");
}

export default function Page() {
  return <RegionalWindowClusterPage slug="interior-window-cleaning" />;
}
