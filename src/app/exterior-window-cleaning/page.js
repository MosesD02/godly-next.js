import RegionalWindowClusterPage, {
  generateRegionalWindowMetadata,
} from "@/godlyComponents/RegionalWindowClusterPage";

export const revalidate = 3600;

export async function generateMetadata() {
  return generateRegionalWindowMetadata("exterior-window-cleaning");
}

export default function Page() {
  return <RegionalWindowClusterPage slug="exterior-window-cleaning" />;
}
