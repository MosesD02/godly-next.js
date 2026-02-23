import { ImageResponse } from "next/og";
import { OgLayout, OG_SIZE } from "@/app/lib/og-image";
import { loadOgFonts, loadOgLogo, loadOgPaperBg } from "@/app/lib/og-fonts";
import { getBlogPostBySlug } from "@/data/blog-content";
import { format } from "date-fns";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({ params }) {
  const [resolvedParams, fonts, logoSrc, paperBgSrc] = await Promise.all([
    params,
    loadOgFonts(),
    loadOgLogo(),
    loadOgPaperBg(),
  ]);
  const { slug } = await resolvedParams;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return new ImageResponse(
      (
        <OgLayout
          title="Blog | Godly Windows"
          subtitle="Window cleaning & pressure washing in South Florida"
          logoSrc={logoSrc}
          paperBgSrc={paperBgSrc}
        />
      ),
      { ...OG_SIZE, fonts }
    );
  }

  const title = post.metaTitle || post.title;
  const subtitle = post.targetCity
    ? `${post.targetCity} | Godly Windows`
    : "Godly Windows";
  const date = post.publishedAt
    ? format(new Date(post.publishedAt), "MMMM d, yyyy")
    : null;

  return new ImageResponse(
    (
      <OgLayout
        title={title}
        subtitle={subtitle}
        logoSrc={logoSrc}
        paperBgSrc={paperBgSrc}
        date={date}
      />
    ),
    { ...OG_SIZE, fonts }
  );
}
