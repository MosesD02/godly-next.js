// City-specific content overrides for service pages.
// Structure: cityServicesData[citySlug][serviceSlug] = { hero, essential, faqs, localCta }
//
// citySlug: matches the URL param (e.g. "boca_raton", "fort_lauderdale")
// serviceSlug: matches the key in servicesData.js (e.g. "window_cleaning", "seal_coating")
//
// All fields are optional — if omitted, the default content from servicesData.js is used.
//
// hero: string — override for the hero description paragraph
// essential: array of { number, title, text } — override for the "Why Essential" cards
// faqs: array of { question, answer } — FAQs shown in the FAQ section
// localCta: string — override for the local CTA text at the bottom of the page

export const cityServicesData = {
  boca_raton: {
    exterior_windows: {
      hero: "Salt air, hard water, and South Florida humidity don't stand a chance. Our Boca Raton window cleaning crew uses purified RO/DI water and pro-grade tools to leave your glass spotless — inside, outside, every time. Backed by our money-back guarantee — if you're not happy, we don't want your money.",
      essential: [
        { number: "01.", title: "Boca's Salt Air Is Relentless", text: "Living near the Intracoastal or along the coast in Boca Raton means salt constantly coats your glass. Regular window cleaning prevents permanent etching and keeps your views crystal clear." },
        { number: "02.", title: "Protect Your Property Value", text: "Boca Raton homes — from Royal Palm Yacht & Country Club estates to West Boca gated communities — carry serious value. Clean windows are the simplest way to maintain curb appeal and resale potential." },
        { number: "03.", title: "Humidity Breeds Buildup Fast", text: "South Florida's humidity means mold, mildew, and hard water stains show up on your glass quicker than you'd expect. Consistent cleaning keeps your Boca home looking sharp year-round." },
        { number: "04.", title: "Let the Natural Light In", text: "Boca Raton gets over 230 sunny days a year. Dirty windows block that light and make your interiors feel dull. Clean glass transforms every room — especially those gorgeous waterfront views." },
      ],
      faqs: [
        { question: "How often should I get my windows cleaned in Boca Raton?", answer: "Most Boca homeowners go with quarterly cleaning. If you're on the Intracoastal or near the beach, we recommend every 6-8 weeks because salt air builds up fast. Homes in West Boca can usually stretch it to every 3-4 months." },
        { question: "Do you clean windows in high-rise condos near Mizner Park or the beach?", answer: "Absolutely. We service high-rise condos throughout Boca Raton, including buildings near Mizner Park, the Intracoastal, and along A1A. We're equipped for multi-story work and coordinate with building management for access." },
        { question: "Will your cleaning damage my hurricane impact windows?", answer: "Not at all. Our techniques and RO/DI water system are completely safe for impact windows, which are super common in Boca. We actually help extend their clarity and lifespan by removing corrosive salt deposits." },
        { question: "What if it rains right after my cleaning?", answer: "Ask about our Rain Shield coating — water beads right off treated glass. But regardless, if you're not happy for any reason, we'll come back and make it right. That's our guarantee." },
      ],
      localCta: "From Royal Palm Yacht & Country Club to the high-rises along the Intracoastal, Boca Raton homeowners trust us for spotless windows. Book your free estimate today.",
    },
  },
};
