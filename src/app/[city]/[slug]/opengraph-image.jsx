import { ImageResponse } from "next/og";
import { OgLayout, OG_SIZE } from "@/app/lib/og-image";
import { loadOgFonts, loadOgLogo, loadOgPaperBg } from "@/app/lib/og-fonts";
import { citiesMap } from "@/data/cities";
import { generateServiceTitle, serviceMetaTitles } from "@/data/metaTitles";
import { getSanityPostBySlug } from "@/data/sanity-content";
import { format } from "date-fns";

export const size = OG_SIZE;
export const contentType = "image/png";

/** Non-city segments that could incorrectly match [city] - render as blog post */
const BLOG_LIKE_SEGMENTS = new Set(["blog", "blogs"]);

function capitalize(str) {
  if (!str) return str;
  return str
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

export default async function Image({ params }) {
  const [resolvedParams, fonts, logoSrc, paperBgSrc] = await Promise.all([
    params,
    loadOgFonts(),
    loadOgLogo(),
    loadOgPaperBg(),
  ]);
  const { city, slug } = await resolvedParams;

  // If [city] matched "blog" (route conflict), render blog post OG image
  if (BLOG_LIKE_SEGMENTS.has(city)) {
    const post = await getSanityPostBySlug(slug);
    const title = post?.metaTitle || post?.title || "Blog | Godly Windows";
    const subtitle = post?.targetCity
      ? `${post.targetCity} | Godly Windows`
      : "Godly Windows";
    const date = post?.publishedAt
      ? format(new Date(post.publishedAt), "MMMM d, yyyy")
      : null;
    return new ImageResponse(
      <OgLayout
        title={title}
        subtitle={subtitle}
        logoSrc={logoSrc}
        paperBgSrc={paperBgSrc}
        date={date}
      />,
      { ...OG_SIZE, fonts },
    );
  }

  const cityName = citiesMap[city];
  const title = generateServiceTitle(slug, cityName);
  const serviceName =
    serviceMetaTitles[slug] ||
    slug?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const location = cityName ? capitalize(cityName) : "South Florida";

  return new ImageResponse(
    <OgLayout
      title={title}
      subtitle={`${serviceName} in ${location}`}
      logoSrc={logoSrc}
      paperBgSrc={paperBgSrc}
      locationBadge={location}
    />,
    { ...OG_SIZE, fonts },
  );
}
