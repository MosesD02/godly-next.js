import RegionalWindowClusterPage, {
  generateRegionalWindowMetadata,
} from "@/godlyComponents/RegionalWindowClusterPage";

export const revalidate = 3600;

export async function generateMetadata() {
  return generateRegionalWindowMetadata("post-construction-window-cleaning");
}

export default function Page() {
  return <RegionalWindowClusterPage slug="post-construction-window-cleaning" />;
}
