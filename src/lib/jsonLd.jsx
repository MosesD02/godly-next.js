/**
 * Server-rendered JSON-LD for crawlers (avoid next/script for schema).
 */
export function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/**
 * @param {{ id?: string, data: object }} props
 */
export default function JsonLd({ id, data }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
