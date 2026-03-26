/**
 * Shared OG image layout for Godly Windows.
 * Brand colors: #262424 (charcoal), #F4D9BB (warm cream), #312E2C (dark)
 */
export const OG_SIZE = { width: 1200, height: 630 };

/** Strip " | Godly Windows" / " - Godly Windows" etc. from title for OG display */
function stripBrandSuffix(title) {
  if (!title || typeof title !== "string") return title;
  return title
    .replace(/\s*[|–-]\s*Godly Windows\s*&?\s*Wash\s*Co\.?\s*$/i, "")
    .replace(/\s*[|–-]\s*Godly Windows\s*$/i, "")
    .trim();
}

/** Smart truncate: break at word boundary, max ~70 chars */
function truncateTitle(title, maxLen = 70) {
  if (!title || title.length <= maxLen) return title;
  const truncated = title.slice(0, maxLen);
  const lastSpace = truncated.lastIndexOf(" ");
  if (lastSpace > maxLen * 0.6) {
    return truncated.slice(0, lastSpace) + "…";
  }
  return truncated + "…";
}

export function OgLayout({
  title,
  subtitle,
  logoSrc,
  paperBgSrc,
  locationBadge,
  date,
}) {
  const displayTitle = truncateTitle(stripBrandSuffix(title));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundColor: "#000000",
        padding: "48px 56px",
        fontFamily: "Satoshi, sans-serif",
        borderLeft: "4px solid #FDE4C8",
      }}
    >
      {/* Gradient overlay for depth */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.75) 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Paper texture or CSS noise fallback */}
      {paperBgSrc ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${paperBgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
          }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            opacity: 0.08,
          }}
        />
      )}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          textAlign: "left",
          maxWidth: "85%",
        }}
      >
        {locationBadge && (
          <div
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: "#FDE4C8",
              fontFamily: "Satoshi, sans-serif",
              marginBottom: 12,
              padding: "6px 12px",
              backgroundColor: "rgba(253, 228, 200, 0.15)",
              borderRadius: 4,
              letterSpacing: "0.02em",
            }}
          >
            {locationBadge}
          </div>
        )}
        <div
          style={{
            fontSize: 96,
            fontWeight: 400,
            color: "#fafaeb",
            lineHeight: 1.2,
            marginBottom: subtitle ? 20 : 0,
            fontFamily: "Marlton, sans-serif",
            letterSpacing: "0.02em",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {displayTitle}
        </div>
        {subtitle && (
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: "#FDE4C8",
              opacity: 0.9,
              lineHeight: 1.4,
              fontFamily: "Satoshi, sans-serif",
            }}
          >
            {subtitle}
          </div>
        )}
        {date && (
          <div
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#F4D9BB",
              opacity: 0.85,
              marginTop: 16,
              fontFamily: "Satoshi, sans-serif",
            }}
          >
            {date}
          </div>
        )}
      </div>
      {logoSrc && (
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 56,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt="Godly Windows"
            width={180}
            height={88}
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
    </div>
  );
}
