import windowCleaningHero from "@/assets/serviceData/window-cleaning-new.jpeg";
import postConstructionHero from "@/assets/serviceData/post-construction.webp";
import rainShieldHero from "@/assets/serviceData/rain-shield.webp";
import service4 from "@/assets/serviceData/service4.webp";
import service5 from "@/assets/serviceData/service5.webp";
import roofWashingHero from "@/assets/serviceData/roof-washing.webp";
import service7 from "@/assets/serviceData/service7.webp";
import service8 from "@/assets/serviceData/service8.webp";
import service10 from "@/assets/serviceData/service10.webp";
import service11 from "@/assets/serviceData/service11.webp";

const Services = {
  "gutter-cleaning": {
    hero: [
      "Gutter",
      "Cleaning",
      service4,
      (city) =>
        `Clogged gutters can cause water damage, roof leaks, and sometimes foundation issues. Our ${city} gutter cleaning service ensures that leaves, and other types of debris buildup are removed so water can flow freely.`,
    ],
    included: [
      {
        number: "01",
        title: "inspection and prep",
        text: "Check gutters for clogs and debris.",
      },
      {
        number: "02",
        title: "Remove Debris",
        text: "Clear out leaves, twigs, and buildup —bag and dispose of the mess properly",
      },
      {
        number: "03",
        title: "FLUSH & UNCLOG",
        text: "Flush gutters and downspouts, making sure everything drains freely.",
      },
    ],
    nearyou: [
      {
        number: "01.",
        title: "Residential gutter cleaning ",
        text: "Clear out leaves, debris, and buildup so your gutters flow freely and your home stays protected from water damage.",
      },
      {
        number: "02.",
        title: "Spring Refresh",
        text: "Flush out everything that built up over winter before South Florida's rainy season hits and gutters can't keep up.",
      },
      {
        number: "03.",
        title: "Before the Rainy Season",
        text: "South Florida rain doesn't stop. Get your gutters clear before the season starts so water goes exactly where it's supposed to.",
      },
      {
        number: "04.",
        title: "Selling your Home",
        text: "Clean, functioning gutters tell buyers the home has been cared for. A quick clean before listing makes a real difference.",
      },
      {
        number: "05.",
        title: "After a Storm",
        text: "Storms drop leaves, sticks, and debris fast. We clear it out so water drains properly after every big one.",
      },
    ],
    essential: [
      {
        number: "01",
        title: "Prevents Water Damage",
        text: "Avoid costly leaks and flooding caused by clogged gutters.",
      },
      {
        number: "02",
        title: "Extends Roof & Gutter Lifespan",
        text: "Removes debris that can lead to rust and deterioration.",
      },
      {
        number: "03",
        title: "Protects Landscaping & Foundation",
        text: "Keeps water from pooling around your home or business.",
      },
    ],
    quote:
      "Don't let clogged gutters damage your home. We keep water flowing where it should.",
  },
  "house-washing": {
    hero: [
      "House",
      "Washing",
      service5,
      "Over time, your home's exterior accumulate layers of pollen, dirt, mold, and mildew, making it look old and run down. Our house washing service gently removes these contaminants using soft-washing techniques that clean effectively without damaging your home's finish.",
    ],
    included: [
      {
        number: "01",
        title: "Soft Wash",
        text: "Safely cleans delicate surfaces without damage.",
      },
      {
        number: "02",
        title: "Mold, Mildew & Algae Removal",
        text: "Prevents long-term staining and deterioration.",
      },
      {
        number: "03",
        title: "Dirt, Dust & Pollution Removal",
        text: "Eliminates the buildup of harmful environmental elements.",
      },
      {
        number: "04",
        title: "Thorough Rinse & Property Protection",
        text: "We ensure surrounding plants and surfaces remain unharmed.",
      },
    ],
    essential: [
      {
        number: "01.",
        title: "Boost Appeal",
        text: "Instantly enhances the look of your home.",
      },
      {
        number: "02.",
        title: "Protection Against Damage",
        text: "Prevents mold, mildew, and dirt from degrading surfaces.",
      },
      {
        number: "03.",
        title: "Increases Property Value",
        text: "A clean exterior adds to the overall value of your home.",
      },
      {
        number: "04.",
        title: "Healthier Living Enviorment",
        text: "Eliminates allergens and pollutants that can affect air quality.",
      },
    ],
    nearyou: [
      {
        number: "01",
        title: "Boost Curb Appeal",
        text: "Make your home's exterior look fresh and clean.",
      },
      {
        number: "02",
        title: "House Wshing before Selling",
        text: " Increase home value and attract more buyers.",
      },
      {
        number: "03",
        title: "Pre-Paint Pressure Washing",
        text: "Prep siding for a smooth, lasting paint job.",
      },
      {
        number: "04",
        title: "Remove Mold & Mildew",
        text: "Eliminate grime that damages your home's exterior.",
      },
      {
        number: "05",
        title: "Post-Pollen Season Cleaning",
        text: "Wash away pollen buildup on siding and windows.",
      },
    ],
    quote:
      "Restore your home's exterior to like-new condition with our professional soft-wash service.",
  },
  "roof-cleaning": {
    hero: [
      "Roof",
      "Cleaning",
      roofWashingHero,
      "Those black streaks and green patches aren't just making your roof look bad — algae, moss, and lichen are breaking down your shingles and tiles from the inside. We use soft washing to kill the growth at the root with a custom chemical blend, applied at low pressure so nothing underneath gets damaged. It's not a rinse — it's a treatment. Satisfaction guaranteed.",
    ],
    included: [
      {
        number: "01",
        title: "Custom Soft Wash Treatment",
        text: "The right chemical blend for your roof type, applied low pressure to kill algae and organic growth at the root.",
      },
      {
        number: "02",
        title: "Algae, Moss, and Lichen Removal",
        text: "Growth is killed at the source — not just rinsed off the surface — so it doesn't come back in weeks.",
      },
      {
        number: "03",
        title: "Low-Pressure Rinse",
        text: "A final soft rinse clears the dead growth and debris without blasting your shingles, tiles, or flashing.",
      },
      {
        number: "04",
        title: "Landscaping Protection",
        text: "We pre-wet and protect your plants and landscaping before every treatment so nothing around the roof gets damaged.",
      },
    ],
    essential: [
      {
        number: "01.",
        title: "Algae Eats Your Roof",
        text: "Those black streaks aren't cosmetic — algae and lichen break down roofing material over time and shorten your roof's life.",
      },
      {
        number: "02.",
        title: "Protects Your Investment",
        text: "Roof replacement is one of the biggest home expenses. Regular cleaning extends your roof's life and pushes that cost way out.",
      },
      {
        number: "03.",
        title: "Curb Appeal and Home Value",
        text: "A stained, streaky roof drags down the whole property. A clean roof makes the house look sharp and well maintained.",
      },
      {
        number: "04.",
        title: "HOA Compliance",
        text: "Algae and discoloration on roofs trigger HOA notices fast in South Florida. We get it clean and keep you compliant.",
      },
    ],
    nearyou: [
      {
        number: "01",
        title: "Shingle Roof Cleaning",
        text: "Soft wash treatment for asphalt shingles that removes algae and black streaks without damaging the surface or voiding warranties.",
      },
      {
        number: "02",
        title: "Tile Roof Cleaning",
        text: "Low-pressure roof washing for concrete and clay tile that lifts organic growth without cracking or shifting tiles.",
      },
      {
        number: "03",
        title: "Metal Roof Cleaning",
        text: "Gentle soft wash treatment for metal roofs that removes algae, rust staining, and buildup without scratching the finish.",
      },
      {
        number: "04",
        title: "Algae and Black Streak Removal",
        text: "Those dark streaks running down your roof are algae. We treat and remove them the right way — no pressure blasting.",
      },
      {
        number: "05",
        title: "Roof Soft Washing",
        text: "A chemical treatment that kills algae, moss, and lichen at the root — applied low pressure so your roof stays intact.",
      },
    ],
  },
  "pressure-washing": {
    hero: [
      "Pressure",
      "Washing",
      service7,
      "Over time, concrete, stone, and brick surfaces collect grime and become slippery. Our professional pressure washing services remove dirt, algae, and buildup—restoring your surfaces and improving safety and curb appeal. We use the right tools to clean driveways, patios, walkways, and pool areas quickly and effectively.",
    ],
    included: [
      {
        number: "01",
        title: "Pressure Washing for Hard Surfaces",
        text: "emoves grime, algae, and stains from driveways, sidewalks, patios, and decks.",
      },
      {
        number: "02",
        title: "Soft Washing for home exteriors",
        text: "cleans siding, stucco, fences, and delicate surfaces without damage.",
      },
      {
        number: "03",
        title: "Mold, Mildew,and Algae Removal",
        text: " Protects your property from stains, decay, and structural damage.",
      },
      {
        number: "04",
        title: "Eco-Friendly Cleaning Solutions",
        text: "Safe, effective solutions for your home, family, and pets.",
      },
    ],
    essential: [
      {
        number: "01.",
        title: "Protects Your Surfaces",
        text: "Dirt, algae, and mold break down concrete, pavers, and stone over time. Regular pressure washing prevents long-term damage and costly repairs.",
      },
      {
        number: "02.",
        title: "Eliminates Slip Hazards",
        text: "Algae and mildew buildup on driveways, walkways, and pool decks creates dangerous slippery surfaces — especially in South Florida's humidity.",
      },
      {
        number: "03.",
        title: "Restores Curb Appeal",
        text: "Years of grime can make your property look neglected. Pressure washing brings surfaces back to like-new condition in a single visit.",
      },
      {
        number: "04.",
        title: "Prevents Mold & Algae Spread",
        text: "South Florida's heat and moisture create the perfect conditions for mold and algae growth. Routine cleaning stops it before it spreads to walls, roofs, and other surfaces.",
      },
    ],
    nearyou: [
      {
        number: "01",
        title: "House Washing ",
        text: "Clean siding, stucco, and exterior walls without damage using soft washing.",
      },
      {
        number: "02",
        title: "Driveway & Sidewalk Cleaning",
        text: " Remove stains, oil, and algae from concrete with pressure washing.",
      },
      {
        number: "03",
        title: "Roof Cleaning",
        text: " Eliminate moss, mold, and black streaks safely with low-pressure soft washing.",
      },
      {
        number: "04",
        title: "Deck & Fence Cleaning ",
        text: "Restore wood and vinyl surfaces with gentle, effective cleaning..",
      },
      {
        number: "05",
        title: "Pool Deck & Patio Washing",
        text: "Brighten up outdoor living spaces and improve safety by removing slippery buildup.",
      },
    ],
  },
  "paver-sealing": {
    hero: [
      "Paver",
      "Sealing",
      service8,
      "Pavers fade, stain, and shift over time due to weather, moisture, and wear. Our professional brick and concrete paver sealing service protects your driveway, patio, or walkway—enhancing color, preventing damage, and keeping your outdoor surfaces looking like new.",
    ],
    included: [
      {
        number: "01",
        title: "Surface Cleaning",
        text: "Deep pressure washing to remove dirt, weeds, stains, and algae from the pavers and joints.",
      },
      {
        number: "02",
        title: "Sanding the Joints",
        text: "Polymeric or joint sand is applied between pavers to stabilize them and prevent weed growth.",
      },
      {
        number: "03",
        title: "Surface Preparation",
        text: "Drying time is allowed, and surfaces are prepped to ensure proper sealant bonding.",
      },
      {
        number: "04",
        title: "Sealer Application",
        text: "A high-quality paver sealer is evenly applied to protect against stains, fading, moisture, and wear.",
      },
    ],
    essential: [
      {
        number: "01.",
        title: "South Florida Rain Never Stops",
        text: "Constant rain and standing water break unsealed pavers down from underneath. Sealed surfaces drain better and resist moisture damage.",
      },
      {
        number: "02.",
        title: "Color Fades Without Protection",
        text: "UV and weather fade paver color quickly down here. Sealing locks in the color and keeps them looking fresh.",
      },
      {
        number: "03.",
        title: "Weeds and Algae Move In Fast",
        text: "Unsealed joints are an open invitation for weeds and algae. Polymeric sand and a good seal close that off.",
      },
      {
        number: "04.",
        title: "Protect What You've Paid For",
        text: "Pavers are an investment. Sealing every few years costs a fraction of replacement and keeps your curb appeal on point.",
      },
    ],
    nearyou: [
      {
        number: "01",
        title: "Driveway Sealing",
        text: "Protect your driveway pavers from cracking, staining, and weed growth with a seal that holds up to South Florida weather.",
      },
      {
        number: "02",
        title: "Patio & Pool Deck Sealing ",
        text: "travertine, pavers, and stone to boost color, resist moisture, and create a clean, polished finish.",
      },
      {
        number: "03",
        title: "Walkway & Sidewalk Sealing",
        text: "Maintains curb appeal by keeping paths free of grime, algae, and shifting issues.",
      },
      {
        number: "04",
        title: "Brick & Natural Stone Sealing",
        text: "Preserves color, prevents erosion, and gives brick or stone a refreshed, vibrant matte or wet appearance based on preference. ",
      },
      {
        number: "05",
        title: "New Surface Protection",
        text: "Locks in the clean, new look of pavers, travertine, or stone while extending surface life and reducing maintenance.",
      },
    ],
  },
  "travertine-sealing": {
    hero: [
      "Travertine",
      "Sealing",
      service8,
      "Travertine is everywhere in South Florida — pool decks, driveways, patios, entryways. When it's cared for, nothing looks better. When it's not, it fades and stains fast. We clean and seal travertine and natural stone right: the correct sealer for your surface, the finish you want, and a 2-year unconditional warranty on every job.",
    ],
    included: [
      {
        number: "01",
        title: "Pressure Wash and Surface Prep",
        text: "We pressure wash the travertine to clear algae, buildup, and staining before any sealer touches the stone.",
      },
      {
        number: "02",
        title: "Joint Cleaning and Re-Sanding",
        text: "We remove any prior sand, clean the joints, and re-sand with polymeric sand where needed to stabilize everything before the sealer goes down.",
      },
      {
        number: "03",
        title: "Surface Dry and Prep",
        text: "Travertine must be fully dry before sealing. Proper prep time ensures the sealer bonds right.",
      },
      {
        number: "04",
        title: "Sealer Application",
        text: "We match the right sealer to your stone and apply the finish you want — gloss, matte, or natural. Protects against stains, moisture, and UV fade.",
      },
    ],
    essential: [
      {
        number: "01.",
        title: "Travertine Absorbs Everything",
        text: "It's a porous stone. Without sealing, pool water, oil, and fertilizer stain it fast and go deep.",
      },
      {
        number: "02.",
        title: "South Florida Weather Fades It",
        text: "Daily rain, humidity, and UV exposure dull unsealed travertine quickly. Sealing locks the color in.",
      },
      {
        number: "03.",
        title: "Pool Deck Safety",
        text: "Wet unsealed travertine gets slippery and stains from chemicals. A sealed surface is safer and easier to maintain.",
      },
      {
        number: "04.",
        title: "Keeps the Value In",
        text: "Travertine is a premium material. Sealing it keeps it looking that way and keeps costly replacement off your list.",
      },
    ],
    nearyou: [
      {
        number: "01",
        title: "Pool Deck Travertine Sealing",
        text: "Full clean and seal for pool decks, the area that takes the most abuse from water and foot traffic.",
      },
      {
        number: "02",
        title: "Driveway Travertine Sealing",
        text: "Protect your driveway from tire marks, oil, and South Florida rain with a penetrating seal.",
      },
      {
        number: "03",
        title: "Patio and Outdoor Living Areas",
        text: "Reseal faded or stained patio travertine and bring the color back — matte or wet look available.",
      },
      {
        number: "04",
        title: "Entryway and Walkway Sealing",
        text: "Sealed travertine at your entry makes the whole property look cared for.",
      },
      {
        number: "05",
        title: "New Construction Protection",
        text: "Just laid? Seal it now before it absorbs anything and you'll spend a lot less maintaining it later.",
      },
    ],
    quote:
      "Travertine and natural stone sealed right — the correct sealer, the finish you want, and a 2-year unconditional warranty.",
  },
  "concrete-sealing": {
    hero: [
      "Concrete",
      "Sealing",
      service8,
      "Concrete driveways, pool decks, and sidewalks in South Florida deal with more than just regular wear. Salt air, afternoon rain, UV, and traffic all work on an unsealed surface. We pressure wash and seal it right — clean first, then lock it with a sealer built for the heat and humidity down here. 2-year unconditional warranty on every job.",
    ],
    included: [
      {
        number: "01",
        title: "Pressure Wash Surface Prep",
        text: "We pressure wash everything first — oil, algae, and staining all cleared out before any sealer touches the surface.",
      },
      {
        number: "02",
        title: "Joint Cleaning and Re-Sanding",
        text: "We remove any prior sand, clean out the joints, and re-sand where needed to stabilize before the sealer goes down.",
      },
      {
        number: "03",
        title: "Surface Dry and Prep",
        text: "Concrete has to be fully dry for the sealer to bond right. We allow proper time before application.",
      },
      {
        number: "04",
        title: "Sealer Application",
        text: "We match the right sealer to your concrete and apply the finish you want — gloss, matte, or natural. Protection against staining, moisture, UV fade, and surface breakdown.",
      },
    ],
    essential: [
      {
        number: "01.",
        title: "Unsealed Concrete Stains Easily",
        text: "Oil, algae, and rust from sprinkler heads all soak into unsealed concrete fast. A sealed surface stays clean.",
      },
      {
        number: "02.",
        title: "South Florida Rain and Humidity",
        text: "Moisture gets into the surface, promotes algae, and breaks it down from underneath. Sealing stops that.",
      },
      {
        number: "03.",
        title: "UV Breaks It Down",
        text: "The South Florida sun fades and dries out concrete faster than most places. Sealing keeps the surface protected.",
      },
      {
        number: "04.",
        title: "Extends Your Surface Life",
        text: "Replacing a driveway or pool deck is expensive. Sealing every few years is a fraction of that cost.",
      },
    ],
    nearyou: [
      {
        number: "01",
        title: "Driveway Concrete Sealing",
        text: "Protect your driveway from oil stains, algae, and weather damage with a seal that lasts.",
      },
      {
        number: "02",
        title: "Pool Deck Concrete Sealing",
        text: "Pool decks take the most abuse. Sealing keeps them clean, safe, and looking sharp.",
      },
      {
        number: "03",
        title: "Sidewalk and Walkway Sealing",
        text: "Keep walkways free of staining and surface breakdown with a clean seal for daily use.",
      },
      {
        number: "04",
        title: "Commercial Concrete Sealing",
        text: "Parking lots, storefronts, and loading areas — we handle commercial concrete at any scale.",
      },
      {
        number: "05",
        title: "Post-Wash Seal Package",
        text: "Just had your concrete pressure washed? Seal it right after for full protection while the surface is clean.",
      },
    ],
    quote:
      "Pressure washed and sealed right — a sealer built for South Florida heat and humidity, backed by a 2-year unconditional warranty.",
  },
  "screen-cleaning": {
    hero: [
      "Screen",
      "Cleaning",
      service10,
      "Dirty screens trap pollen, block airflow, and leave your views hazy. Our professional screen cleaning service restores window screens, door screens, and pool enclosures to like-new condition — improving ventilation and letting fresh air flow freely through your home.",
    ],
    included: [
      {
        number: "01",
        title: "Window & Door Screen Cleaning",
        text: "Removes dirt, pollen, and debris to restore freshness.",
      },
      {
        number: "02",
        title: "Frame & Track Cleaning",
        text: "Ensures a smooth operation and a polished look.",
      },
      {
        number: "03",
        title: "Screen Removal & Reinstallation",
        text: "Carefully handled for a thorough clean.",
      },
      {
        number: "04",
        title: "Minor Screen Repairs",
        text: "Small tears and damages addressed to extend screen life.",
      },
    ],
    essential: [
      {
        number: "01.",
        title: "Enhances Visibility",
        text: "Clear screens mean clearer views.",
      },
      {
        number: "02.",
        title: "Improves Airflow",
        text: "Removes buildup that can restrict ventilation.",
      },
      {
        number: "03.",
        title: "Reduces Allergens",
        text: "Eliminates pollen and dust accumulation.",
      },
      {
        number: "04.",
        title: "Extends Screen Lifespan",
        text: "Prevents premature wear and tear.",
      },
    ],
    nearyou: [
      {
        number: "01",
        title: "Window Screen Cleaning",
        text: "Restore dirty, pollen-covered window screens to like-new clarity.",
      },
      {
        number: "02",
        title: "Pool Cage & Screen Enclosure Cleaning",
        text: "Remove mildew, algae, and buildup from pool cage frames and mesh.",
      },
      {
        number: "03",
        title: "Lanai & Porch Screen Cleaning",
        text: "Clean screened-in patios and porches to improve airflow and restore visibility.",
      },
      {
        number: "04",
        title: "Door Screen Cleaning",
        text: "Refresh entry door screens that are grimy, bent, or clogged with debris.",
      },
      {
        number: "05",
        title: "Post-Storm Screen Cleaning",
        text: "Clear dirt, debris, and water stains left behind after heavy rain or wind.",
      },
    ],
  },
  "window-cleaning": {
    // "What's Included" — SHARED across all cities (City Page Rewrite Guide v2). Do not override per city.
    hero: [
      "Window",
      "Cleaning",
      windowCleaningHero,
      (city) =>
        `Interior window cleaning, exterior window cleaning, or both — this is where it starts. We specialize in residential and commercial window washing across ${city}, and we reach the windows other companies skip. Hand-scrubbed glass, RO/DI purified water rinses, and a 7-day sparkle guarantee on every job. Whether it's a routine exterior clean, a full interior and exterior package, or a one-time deep clean, we've got it.`,
    ],
    included: [
      {
        number: "01",
        title: "Thorough Glass Scrub",
        text: "We manually scrub every pane to lift salt film, mildew, silicone, stickers, and overspray safely.",
      },
      {
        number: "02",
        title: "Exterior Window Washing",
        text: "We clean the outside from ground level up — streak-free glass without ladders touching your siding or stucco.",
      },
      {
        number: "03",
        title: "Interior Window Cleaning",
        text: "We get inside every room and clean every pane — hard-to-reach windows included, plus frames, tracks, and dividers.",
      },
      {
        number: "04",
        title: "RO/DI Purified Water Rinse",
        text: "Zero TDS purified water means no minerals, no spots, and no streaks when it dries.",
      },
      {
        number: "05",
        title: "7-Day Sparkle Guarantee",
        text: "Storm, bird, or dog got to your windows? Call us within 7 days and we make it right.",
      },
    ],
    essential: [
      {
        number: "01.",
        title: "Salt, Pollen, and Storm Film",
        text: "South Florida windows take salt air, pollen, and storm residue year-round. Left alone, that film etches glass permanently.",
      },
      {
        number: "02.",
        title: "Natural Light in Every Room",
        text: "Dust, pollen, and grime block more light than you think. Clean glass inside and out brightens every room.",
      },
      {
        number: "03.",
        title: "Glass That Lasts Longer",
        text: "Mineral deposits and sprinkler overspray etch South Florida glass if left alone. Regular cleaning keeps replacement off your list.",
      },
      {
        number: "04.",
        title: "Curb Appeal That Holds Up",
        text: "Clean windows are what separate a well-maintained property from a tired one — inside and out.",
      },
    ],
    nearyou: [
      {
        number: "01",
        title: "Residential Window Washing",
        text: "Interior and exterior window washing for homes across South Florida, done right the first time.",
      },
      {
        number: "02",
        title: "Commercial Window Cleaning",
        text: "Storefronts, offices, restaurants, and hotels — regular window cleaning that keeps your business looking sharp.",
      },
      {
        number: "03",
        title: "Post-Construction Window Cleaning",
        text: "Stucco dust, paint overspray, and construction film removed so your windows are move-in ready.",
      },
      {
        number: "04",
        title: "Condo Window Cleaning",
        text: "We handle condo units inside and out, working around schedules and building access requirements.",
      },
      {
        number: "05",
        title: "Screen Cleaning",
        text: "Pollen, salt, and debris pulled from every screen so your windows breathe and look clean.",
      },
    ],
    interiorSection: {
      heading: "Interior Window Cleaning",
      body: [
        "Fingerprints, cooking film, and salt buildup collect on the inside of your windows and don't go away on their own. We specialize in interior window cleaning — every room, every pane, hard-to-reach windows included. Frames, tracks, and dividers all get the same attention as the glass.",
        "Interior window cleaning is available on its own or bundled with exterior as a full package. Either way, every pane is left streak-free and backed by our 7-day sparkle guarantee.",
      ],
    },
    faqs: [
      {
        question: "Do you clean inside windows?",
        answer:
          "Yes. Interior window cleaning is available as part of our full-service package or as a standalone visit. Our crew stages shoe covers, protects furniture, and works pane-by-pane on inside glass, frames, tracks, and sills. Results are covered by our 7-day sparkle guarantee.",
      },
    ],
    quote:
      "Crystal clear windows, guaranteed — RO/DI purified water, hand scrubbing, and our 7-Day Sparkle Guarantee.",
  },
  "soft-washing": {
    hero: [
      "Soft",
      "Washing",
      service5,
      (city) =>
        `This is our jam. We specialize in residential and commercial soft washing in ${city}. Every treatment starts with a custom chemical blend tailored to exactly what your surface needs, nothing more, nothing less. Backed by our 100% money back guarantee.`,
    ],
    included: [
      {
        number: "01",
        title: "Custom Treatment Assessment",
        text: "We evaluate your surface first and formulate the right blend at the lowest effective concentration.",
      },
      {
        number: "02",
        title: "Low Pressure Application",
        text: "Safe, controlled application that cleans thoroughly without damaging your exterior or landscaping.",
      },
      {
        number: "03",
        title: "Targeted Problem Removal",
        text: "Algae, mold, mildew, and organic growth eliminated at the source, not just rinsed off the top.",
      },
      {
        number: "04",
        title: "Exterior and Surface Protection",
        text: "Our process protects paint, siding, and roofing materials while delivering a like-new result.",
      },
      {
        number: "05",
        title: "7-Day Clean Guarantee",
        text: "Not satisfied with the result? Call us within 7 days and we come back and make it right.",
      },
    ],
    essential: [
      {
        number: "01.",
        title: "HOA Compliance",
        text: "Got a letter? We handle it fast and get your home back in good standing without the stress.",
      },
      {
        number: "02.",
        title: "Extended Roof Life",
        text: "Algae and organic growth break down roofing materials over time. Soft washing stops that damage early.",
      },
      {
        number: "03.",
        title: "Protects Your Investment",
        text: "Harsh pressure washing strips and damages. Our low pressure approach cleans without costing you later.",
      },
      {
        number: "04.",
        title: "Curb Appeal That Lasts",
        text: "A properly soft washed exterior stays cleaner longer because we remove the root cause, not just the surface.",
      },
    ],
    nearyou: [
      {
        number: "01",
        title: "Roof Soft Washing",
        text: "Safe low pressure treatment that removes algae, mold, and streaking without damaging shingles or tiles.",
      },
      {
        number: "02",
        title: "House Soft Washing",
        text: "Full exterior treatment for stucco, siding, and painted surfaces that restores your home's original look.",
      },
      {
        number: "03",
        title: "Driveway and Paver Soft Washing",
        text: "Gentle treatment for pavers and concrete that lifts organic growth without etching or surface damage.",
      },
      {
        number: "04",
        title: "HOA Violation Soft Washing",
        text: "Got a notice? We respond fast and get your property cleaned and compliant quickly.",
      },
      {
        number: "05",
        title: "Commercial Soft Washing",
        text: "Keeping storefronts, office buildings, and commercial properties clean and professionally maintained.",
      },
    ],
    quote:
      "Custom chemical blends, low pressure, and a 7-Day Clean Guarantee — soft washing done right.",
  },
  "holiday-lighting": {
    hero: [
      "Holiday Lighting &",
      "Christmas Lighting",
      service11,
      (city) =>
        `This is our jam. We bring the magic of the season to homes, communities, and businesses across ${city} without you lifting a finger. Professional installation, top of the line LED lights, free custom design, and full removal when the season ends. You enjoy it. We handle everything.`,
    ],
    included: [
      {
        number: "01",
        title: "Free Custom Design",
        text: "We design your display before we touch a single light. Tailored to your home, your style, and your vision at no extra charge.",
      },
      {
        number: "02",
        title: "Premium LED Lights Provided",
        text: "We bring everything. Top of the line energy efficient LED lights in any color, all included. You don't buy a thing.",
      },
      {
        number: "03",
        title: "Professional Installation",
        text: "From standard rooflines to high elevations, our bucket truck handles properties of any size safely and beautifully.",
      },
      {
        number: "04",
        title: "24-Hour Maintenance",
        text: "Something goes out during the season? We're back within 24 hours to fix it. You stay hands-free the entire holiday season.",
      },
      {
        number: "05",
        title: "Full Removal Included",
        text: "When the season ends we come back, take everything down, and leave your property exactly as we found it.",
      },
    ],
    essential: [
      {
        number: "01.",
        title: "Completely Hands-Free",
        text: "No ladders, no storage, no stress. We handle design, installation, maintenance, and removal so you enjoy the season.",
      },
      {
        number: "02.",
        title: "Stunning First Impressions",
        text: "Professional Christmas lighting transforms your home or property and makes it the one everyone remembers.",
      },
      {
        number: "03.",
        title: "Safe and Insured",
        text: "Our trained team handles all heights and property types safely. Bucket truck capability means no job is too big.",
      },
      {
        number: "04.",
        title: "The Entire Season Covered",
        text: "From installation to takedown, your display is maintained and monitored so it looks perfect every single night.",
      },
    ],
    nearyou: [
      {
        number: "01",
        title: "Residential Holiday Lighting",
        text: "Custom designed Christmas lighting displays for homes. We install, maintain, and remove everything so you enjoy a stress-free season.",
      },
      {
        number: "02",
        title: "Commercial Holiday Lighting",
        text: "Storefronts, office buildings, and business properties transformed with professional festive displays.",
      },
      {
        number: "03",
        title: "HOA and Community Lighting",
        text: "We handle entire communities and neighborhoods. Consistent, beautiful displays across multiple properties with one call.",
      },
      {
        number: "04",
        title: "Roofline and Architectural Lighting",
        text: "From standard rooflines to high elevations, our bucket truck handles any height safely and with precision.",
      },
      {
        number: "05",
        title: "Wreaths and Accent Decor",
        text: "Complement your display with premium wreaths and accent pieces. Available as an add-on to complete your holiday look.",
      },
    ],
    quote:
      "Holiday and Christmas lighting — design, install, maintain, and remove. You enjoy the season; we handle the rest.",
  },
  "post-construction-window-cleaning": {
    hero: [
      "Post-Construction",
      "Window Cleaning",
      postConstructionHero,
      (city) =>
        `Builders and remodelers across ${city} bring us in when silicone tags, stucco spatter, and protective film are still stuck to glass days before certificate of occupancy. This service is tuned for job-site schedules—not routine residential maintenance—with scraping, solvent-safe detailing, and a final purified rinse so punch lists photograph clean for owners and inspectors.`,
    ],
    included: [
      {
        number: "01",
        title: "Stucco & Paint Overspray Removal",
        text: "We carefully lift stucco splatter, paint overspray, and silicone off every pane without scratching the glass.",
      },
      {
        number: "02",
        title: "Construction Film & Adhesive Scraping",
        text: "Protective film, tape residue, and adhesive stickers all come off clean with our pro-grade scraping tools.",
      },
      {
        number: "03",
        title: "Interior Dust & Debris Detailing",
        text: "Drywall dust, sawdust, and construction grit get wiped from interior glass and surrounding window surfaces.",
      },
      {
        number: "04",
        title: "Frame, Sill & Track Deep-Clean",
        text: "Tracks, frames, and sills get a deep-clean to remove trapped debris that standard cleaning always misses.",
      },
      {
        number: "05",
        title: "Final RO/DI Purified Rinse",
        text: "Zero-TDS purified water rinses the glass last — no minerals, no streaks, no spots when it dries.",
      },
    ],
    essential: [
      {
        number: "01.",
        title: "Protect Brand-New Glass",
        text: "Construction debris scratches unprotected glass fast. Professional removal prevents permanent damage to expensive impact and low-E windows.",
      },
      {
        number: "02.",
        title: "Move-In Ready Finish",
        text: "Buyers expect spotless windows on day one. Clean glass makes the whole property feel finished and premium.",
      },
      {
        number: "03.",
        title: "Remove Layered Residue",
        text: "Stucco, paint, and silicone bond to glass during construction. Standard cleaning can't touch it — our scraping tools and purified rinse can.",
      },
      {
        number: "04.",
        title: "Builder Reputation on the Line",
        text: "Builders and GCs rely on us for the final detail. Our crew delivers the builder-ready finish that protects your reputation.",
      },
    ],
    nearyou: [
      {
        number: "01",
        title: "New Home Build Cleaning",
        text: "Full interior and exterior cleaning for new builds so buyers walk into spotless, streak-free glass on move-in day.",
      },
      {
        number: "02",
        title: "High-Rise Construction Cleaning",
        text: "Post-construction cleaning for high-rises and condos with full safety rigging and pro equipment.",
      },
      {
        number: "03",
        title: "Commercial Build-Out Cleaning",
        text: "We clean new storefronts, offices, and build-outs so your grand opening looks sharp from every angle.",
      },
      {
        number: "04",
        title: "Renovation & Remodel Cleaning",
        text: "Kitchen, bathroom, or whole-home remodel? We remove paint splatter, grout haze, and dust from every affected window.",
      },
      {
        number: "05",
        title: "Estate Final Clean",
        text: "Detailed post-construction window cleaning for luxury estates where the finish standard is absolute.",
      },
    ],
    quote:
      "Move-in ready windows, guaranteed — pro-grade scraping, RO/DI purified water, and our builder-ready finish guarantee.",
  },
  /**
   * Standalone hub only: `/rain-shield` (excluded from `/[city]/[slug]` static params).
   */
  "rain-shield": {
    hero: [
      "Rain Shield",
      "Technology",
      rainShieldHero,
      "South Florida rain, salt spray, and sprinkler minerals don't stand a chance against Rain Shield. Our hydrophobic glass coating makes water bead and roll off, carrying dirt with it. The result: windows that stay cleaner longer — included free with every window cleaning we perform.",
    ],
    included: [
      {
        number: "01",
        title: "Full Glass Scrub",
        text: "We scrub every pane to lift dirt, mildew, silicone, stickers, and overspray before the Rain Shield coating goes on.",
      },
      {
        number: "02",
        title: "Rain Shield Applied During Cleaning",
        text: "Rain Shield gets applied right during the cleaning process, creating an invisible hydrophobic barrier that repels water and dirt.",
      },
      {
        number: "03",
        title: "Even Coverage on Every Pane",
        text: "Every pane receives full, consistent coverage — no missed spots, no thin areas, no streaking or haze anywhere.",
      },
      {
        number: "04",
        title: "RO/DI Purified Water Finish",
        text: "Zero-TDS purified water rinses each window last, activating the coating so glass dries spotless and streak-free.",
      },
      {
        number: "05",
        title: "Included Free With Quarterly Plan",
        text: "Rain Shield comes included free on every service with our quarterly plan, plus occasional seasonal promotions for new customers.",
      },
    ],
    essential: [
      {
        number: "01.",
        title: "Tropical Rain Soaks Windows Daily",
        text: "South Florida afternoon storms soak windows daily, leaving water spots once glass dries. Rain Shield makes rain bead and sheet off cleanly, keeping your home spotless between full professional cleanings.",
      },
      {
        number: "02.",
        title: "Salt Air Bonds Without Protection",
        text: "Salt spray from the Atlantic coast and Intracoastal waterways bonds to untreated glass fast. Our hydrophobic coating blocks salt from etching into the surface, protecting your windows and your investment long term.",
      },
      {
        number: "03.",
        title: "Sprinkler Minerals Spot Glass Daily",
        text: "South Florida irrigation mineral deposits leave chalky spots every time sprinklers run. Rain Shield repels that mineral-heavy water so spots rinse off with the next rain instead of bonding permanently to your glass.",
      },
      {
        number: "04.",
        title: "Cleaner Views for Longer",
        text: "With over 230 sunny days and regular South Florida rain, Rain Shield extends your window clarity between cleanings. You get crystal-clear views that stay sharp for weeks longer, automatically.",
      },
    ],
    nearyou: [
      {
        number: "01",
        title: "Rain Shield for Home Windows",
        text: "Hydrophobic coating applied to your entire home so every window repels water, salt, and dirt automatically between cleanings.",
      },
      {
        number: "02",
        title: "Rain Shield for High-Rise Condos",
        text: "Protect your coastal high-rise condo glass with Rain Shield — fewer cleanings, clearer views, longer protection from salt spray.",
      },
      {
        number: "03",
        title: "Rain Shield for Commercial Glass",
        text: "Keep your storefront and office windows crystal-clear between professional cleanings with our pro-grade Rain Shield hydrophobic coating.",
      },
      {
        number: "04",
        title: "Rain Shield for Waterfront Estates",
        text: "Intracoastal, oceanfront, and canal-front estates benefit most — Rain Shield repels the constant salt spray from waterfront exposure.",
      },
      {
        number: "05",
        title: "Rain Shield for Boat & Yacht Glass",
        text: "We apply Rain Shield to yacht and boat glass at South Florida marinas, blocking salt etching and improving visibility.",
      },
    ],
    faqs: [
      {
        question: "How long does Rain Shield last?",
        answer:
          "Rain Shield typically lasts around three months or more between applications, depending on exposure. Since it's included free on every service with our quarterly plan, your windows stay protected year-round without any extra scheduling or cost.",
      },
      {
        question:
          "What makes Rain Shield different from regular glass cleaners?",
        answer:
          "Rain Shield is a professional-grade hydrophobic coating that bonds to your glass at the molecular level. Unlike consumer products, it creates a lasting water-repellent barrier that makes rain and dirt slide off cleanly for months at a time.",
      },
      {
        question: "Does Rain Shield work on hurricane impact windows?",
        answer:
          "Absolutely. Rain Shield is completely safe on hurricane impact windows, which are standard throughout South Florida. The hydrophobic coating bonds directly to glass without damaging low-E coatings, tints, or protective manufacturer layers.",
      },
      {
        question: "Is Rain Shield included with my cleaning service?",
        answer:
          "Yes — Rain Shield comes included free on every service with our quarterly maintenance plan, plus occasional seasonal promotions. We apply it during the cleaning process itself — no separate appointment or fee needed.",
      },
    ],
    quote:
      "From Palm Beach County to Broward County, South Florida homeowners rely on Rain Shield for long-lasting window clarity — included free with every cleaning. Book your window cleaning today.",
  },
};
export default Services;
