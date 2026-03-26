import Script from "next/script";

/**
 * Renders FAQPage JSON-LD structured data for Google rich results.
 * @param {{ faqs: Array<{ question: string, answer: string }> }} props
 * @see https://developers.google.com/search/docs/appearance/structured-data/faqpage
 */
export default function FaqSchema({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
