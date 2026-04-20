import RegionalWindowClusterPage, {
  generateRegionalWindowMetadata,
} from "@/godlyComponents/RegionalWindowClusterPage";

export const revalidate = 3600;

export async function generateMetadata() {
  return generateRegionalWindowMetadata("window-cleaning");
}

export default function Page() {
  return <RegionalWindowClusterPage slug="window-cleaning" />;
}
