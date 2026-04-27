import service1 from "@/assets/serviceData/service1.webp";
import windowCleaningHero from "@/assets/serviceData/window-cleaning-new.jpeg";
import postConstructionHero from "@/assets/serviceData/post-construction.webp";
import rainShieldHero from "@/assets/serviceData/rain-shield.webp";
import service3 from "@/assets/serviceData/service3.webp";
import service4 from "@/assets/serviceData/service4.webp";
import service5 from "@/assets/serviceData/service5.webp";
import roofWashingHero from "@/assets/serviceData/roof-washing.webp";
import service7 from "@/assets/serviceData/service7.webp";
import service8 from "@/assets/serviceData/service8.webp";
import service9 from "@/assets/serviceData/service9.webp";
import service10 from "@/assets/serviceData/service10.webp";
import service11 from "@/assets/serviceData/service11.webp";
import service12 from "@/assets/serviceData/service12.webp";

const Services = {
  "solar-panel-cleaning": {
    hero: [
      "Solar Panel",
      "Cleaning",
      service1,
      "Dirty solar panels reduce energy efficiency by blocking sunlight absorption. Our solar panel cleaning service ensures maximum performance by carefully removing all of nature's buildup that can affect energy output. Regular cleaning helps maintain optimal energy production.",
    ],
    included: [
      {
        number: "01",
        title: "Thorough Panel Cleaning",
        text: "Using purified water we remove dirt, dust, pollen, and bird droppings without causing damage.",
      },
      {
        number: "02",
        title: "Hard Water & Mineral Deposit Removal",
        text: "Eliminates buildup that can impact energy absorption.",
      },
      {
        number: "03",
        title: "Spotless Rinse",
        text: "Using purified reverse osmosis water we rinse all debris to bring them back looking new.",
      },
      {
        number: "04",
        title: "Purified water cleaning method",
        text: "Safe for panels, your home, and the environment.",
      },
    ],
    essential: [
      {
        number: "01.",
        title: "Increases Energy Efficiency",
        text: "Clean panels absorb more sunlight, boosting power output.",
      },
      {
        number: "02.",
        title: "Extends Panel Lifespan",
        text: "Prevents damage caused by dirt buildup and environmental debris.",
      },
      {
        number: "03.",
        title: "Reduces Energy Costs",
        text: "Higher efficiency means better savings on your electricity bill.",
      },
      {
        number: "04.",
        title: "Protects Your Warranty",
        text: "Many manufacturers require regular cleaning for warranty compliance.",
      },
    ],
    nearyou: [
      {
        number: "01",
        title: "Residential Solar Panel Maintenance",
        text: "Routine cleaning to maximize efficiency for homeowners.",
      },
      {
        number: "02",
        title: "Commercial Solar Panel Cleaning",
        text: "Keep rooftop solar arrays on offices and warehouses clean and producing at full capacity.",
      },
      {
        number: "03",
        title: "Post-Construction Solar Cleaning",
        text: "Remove construction dust, debris, and stickers from newly installed solar panels.",
      },
      {
        number: "04",
        title: "Hard Water & Mineral Deposit Removal",
        text: "Cleaning panels affected by sprinkler overspray or rain residue.",
      },
      {
        number: "05",
        title: "Seasonal Cleaning & Maintenance ",
        text: "Preparing for peak energy production in the summer or after winter.",
      },
    ],
    quote:
      "Maximize energy Efficiency with our professional solar panel cleaning services.",
  },
  "exterior-window-cleaning": {
    hero: [
      "Exterior Window",
      "Cleaning",
      service7,
      (city) =>
        `Outside glass in ${city} catches salt mist, pollen showers, and sprinkler overspray long before you notice it from indoors. Our exterior-only crews work ladders, poles, and purified rinses to scrub outdoor panes, sun-facing sliders, and patio doors—without crossing your threshold. Every job ends with a streak-free RO/DI finish and our money-back promise.`,
    ],
    included: [
      {
        number: "01",
        title: "THROUGH GLASS SCRUB",
        text: "We first remove all dirt, mildew, silicon and more.",
      },
      {
        number: "02",
        title: "Squeegee or our water fed pole",
        text: "the satisfying part, getting rid of all the gunk on the glass.",
      },
      {
        number: "03",
        title: "Detail and Sill cleaning",
        text: "wiping things down and cleaning sills for the win.",
      },
      {
        number: "04",
        title: "RAINSHIELD TECHNOLOGY",
        text: "Our unique solution repels water, keeping your windows cleaner for longer.",
      },
      {
        number: "05",
        title: "7-day Sparkle Guarantee",
        text: "If your windows aren't sparkling due to a storm, bird, or dog, or a tiger call us. We'll make them like new.",
      },
    ],
    essential: [
      {
        number: "01.",
        title: "Enhanced Appearance",
        text: "Instantly boost the look of your property and curb appeal.",
      },
      {
        number: "02.",
        title: "Increased Longevity",
        text: "Regular cleaning prevents glass degradation,Permanent stains and hard water buildup.",
      },
      {
        number: "03.",
        title: "Enjoy Unobstructed Views",
        text: "Whether it's the ocean, the skyline, or your garden, clean windows give you a crystal-clear view, free from streaks or dust.",
      },
      {
        number: "04.",
        title: "Maximize Natural Light",
        text: "Dust, pollen, and grime on your windows reduce sunlight. Clean windows let in more light, brightening the room.",
      },
    ],
    nearyou: [
      {
        number: "01.",
        title: "Routine Home Window Washing",
        text: "Regular window cleaning to maintain a clear view and keep your home looking fresh.",
      },
      {
        number: "02.",
        title: "Commercial Window Cleaning",
        text: "Regular cleaning for stores, offices, restaurants, hotels, healthcare facilities, and schools to keep an inviting environment.",
      },
      {
        number: "03.",
        title: "Post-Construction Window Cleaning",
        text: "Cleaning windows after new construction or home renovations to remove dust, stickers, paint and debris.",
      },
      {
        number: "04.",
        title: "Real Estate window cleaning",
        text: "Cleaning windows to enhance curb appeal and attract potential buyers.",
      },
      {
        number: "05.",
        title: "Boat Window Cleaning",
        text: "Cleaning windows on boats and yachts, ensuring clear visibility while enhancing the overall appearance.",
      },
    ],
    quote:
      "Crystal clear windows, guaranteed. Our RainShield™ technology keeps them cleaner, longer.",
  },
  "interior-window-cleaning": {
    hero: [
      "Interior Window",
      "Cleaning",
      service3,
      (city) =>
        `Fingerprints on kid-height glass, HVAC dust along sills, and film from cooking grease stay on the inside of ${city} homes. We stage shoe covers, protect furniture, and work pane-by-pane on interior glass, tracks, and dividers—never confusing this visit with an exterior wash. Residential interior work is our focus here, backed by the same satisfaction guarantee.`,
    ],
    included: [
      {
        number: "01",
        title: "thorough glass scrub",
        text: "We first remove all dirt, mildew, silicon and more.",
      },
      {
        number: "02",
        title: "Squeegee or our water fed pole",
        text: "the satisfying part, getting rid of all the gunk on the glass.",
      },
      {
        number: "03",
        title: "Detail and Sill cleaning",
        text: "wiping things down and cleaning sills for the win.",
      },
    ],
    essential: [
      {
        number: "01.",
        title: "Pristine Windows for Enhanced Interior Aesthetics",
        text: "Spotless windows that enhance the aesthetic appeal of your interiors",
      },
      {
        number: "02.",
        title: "Maximize Natural Light",
        text: "Dust, pollen, and grime on your windows reduce sunlight. Clean windows let in more light, brightening the room.",
      },
      {
        number: "03.",
        title: "Enjoy Unobstructed Views",
        text: "Whether it's the ocean, the skyline, or your garden, clean windows give you a crystal-clear view, free from streaks or dust.",
      },
    ],
    nearyou: [
      {
        number: "01.",
        title: "Routine Home Window Washing",
        text: "Regular window cleaning to maintain a clear view and keep your home looking fresh.",
      },
      {
        number: "02.",
        title: "Commercial Window Cleaning",
        text: "Regular cleaning for stores, offices, restaurants, hotels, healthcare facilities, and schools to keep an inviting environment.",
      },
      {
        number: "03.",
        title: "Post-Construction Window Cleaning",
        text: "Cleaning windows after new construction or home renovations to remove dust, stickers, paint and debris.",
      },
      {
        number: "04.",
        title: "Real Estate window cleaning",
        text: "Cleaning windows to enhance curb appeal and attract potential buyers.",
      },
      {
        number: "05.",
        title: "Removing Fingerprints & Smudges",
        text: "Carefully clean interior glass to remove smudges, grease, and residue without damaging frames or sills.",
      },
    ],
    quote:
      "Streak-free interior windows, done right. We protect your surfaces and leave every pane spotless.",
  },
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
        text: "Prevent or get rid of pesty clogs.",
      },
      {
        number: "02.",
        title: "Spring Refresh",
        text: "Clear out winter buildup",
      },
      {
        number: "03.",
        title: "Before the Rainy Season",
        text: "Avoid gutter overflow issues.",
      },
      {
        number: "04.",
        title: "Selling your Home",
        text: "Improve curb appeal and show upkeep.",
      },
      {
        number: "05.",
        title: "After a Storm",
        text: "Remove debris and branches.",
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
        title: "Removal of Mold , MELDW & ALGAE",
        text: "Prevents long-term staining and deterioration.",
      },
      {
        number: "03",
        title: "DIRT DUST AND POLLUTION REMOVAL",
        text: "Eliminates the buildup of harmful environmental elements.",
      },
      {
        number: "04",
        title: "THROUGHT RINSE AND PROPERTY PROTECTION",
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
  "roof-washing": {
    hero: [
      "Roof",
      "Washing",
      roofWashingHero,
      "Moss, algae, leaves, and other natural debris can cause roof deterioration, which is often a costly fix. Our roof washing service safely removes these elements and extends the life of your roof. We use specialized cleaning methods to ensure no damage.",
    ],
    included: [
      {
        number: "01",
        title: "Low-Pressure Soft Washing ",
        text: "Safely cleans without damaging shingles or tiles.",
      },
      {
        number: "02",
        title: "Algae, Moss, and Lichen Removal",
        text: "Prevents premature deterioration and staining.",
      },
      {
        number: "03",
        title: "Dirt and Grime Eliminatio",
        text: "Restores your roof's original look.",
      },
      {
        number: "04",
        title: "QUICK ESTIMATES",
        text: "Ensures surrounding landscaping remains unharmed.",
      },
    ],
    essential: [
      {
        number: "01.",
        title: "Boosts Appeal",
        text: "Instantly enhances the look of your home.",
      },
      {
        number: "02.",
        title: "Protects Against Damage",
        text: "Prevents mold, mildew, and dirt from degrading surfaces.",
      },
      {
        number: "03.",
        title: "Increases Property Value",
        text: "A clean exterior adds to the overall value of your home.",
      },
      {
        number: "04.",
        title: "Healthier Living Environment",
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
        title: "House Washing Before Selling ",
        text: "Increase home value and attract more buyers.",
      },
      {
        number: "03",
        title: "Pre-Paint Pressure Washing",
        text: "Prep siding for a smooth, lasting paint job.",
      },
      {
        number: "04",
        title: "Remove Mold & Mildew ",
        text: "Eliminate grime that damages your home's exterior..",
      },
      {
        number: "05",
        title: "Post-Pollen Season Cleaning",
        text: "Wash away pollen buildup on siding and windows.",
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
        title: "Improve Indoor Air Quality",
        text: "Reduces allergens and airborne particles.",
      },
      {
        number: "02.",
        title: "Enhances Appearance",
        text: "Maintains a clean and professional environment.",
      },
      {
        number: "03.",
        title: "Prevents Dust Build-Up",
        text: "Reduces long-term maintenance needs.",
      },
      {
        number: "04.",
        title: "Health & Safety Compliance",
        text: "deal for offices and commercial spaces.",
      },
    ],
    nearyou: [
      {
        number: "01",
        title: "Driveway Sealing",
        text: "Prevent damage and extend roof lifespan.",
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
  "light-fixture-cleaning": {
    hero: [
      "Light Fixture",
      "Cleaning",
      service9,
      "Over time, dust and grime can limit the brightness of your light fixtures, reducing their effectiveness. Our light fixture cleaning service ensures your interior and exterior lights shine to their full potential by carefully removing dirt from chandeliers, sconces, lanterns, and more.",
    ],
    included: [
      {
        number: "01",
        title: "Interior & Exterior Light Fixtures",
        text: "Chandeliers, pendant lights, sconces, recessed lighting, and more.",
      },
      {
        number: "02",
        title: "Ceiling Fans & Mounted Fixtures",
        text: "Removal of dust, dirt, and buildup from all ceiling-mounted lighting.",
      },
      {
        number: "03",
        title: "Outdoor Lighting",
        text: "Cleaning of lanterns, porch lights, and pathway lighting for improved visibility and aesthetics.",
      },
      {
        number: "04",
        title: "Bulb & Cover Cleaning",
        text: "Enhances light output and longevity by eliminating dust and residue.",
      },
    ],
    essential: [
      {
        number: "01.",
        title: "Enhances Illumination",
        text: "Ensures your space remains bright and inviting",
      },
      {
        number: "02.",
        title: "Improves Energy Efficiency",
        text: "Clean fixtures allow bulbs to shine at full capacity.",
      },
      {
        number: "03.",
        title: "Extends Fixture Lifespan",
        text: "Reduces wear and tear from accumulated dirt and debris",
      },
      {
        number: "04.",
        title: "Improves Safety",
        text: "Clean fixtures reduce fire risk from dust-covered bulbs and overheated housings.",
      },
    ],
    nearyou: [
      {
        number: "01",
        title: "Chandelier Cleaning Services",
        text: "Restore sparkle and clarity to chandeliers in homes, hotels, and event venues.",
      },
      {
        number: "02",
        title: "High Ceiling Light Fixture Cleaning",
        text: "Safely clean hard-to-reach lights in foyers, vaulted ceilings, churches, and commercial spaces.",
      },
      {
        number: "03",
        title: "Outdoor Light Fixture Cleaning",
        text: "Remove dirt, bugs, and buildup from porch lights, wall sconces, and exterior lighting.",
      },
      {
        number: "04",
        title: "Commercial Light Cleaning ",
        text: "Keep office, retail, and restaurant lighting clean for better appearance and brighter space.",
      },
      {
        number: "05",
        title: "Improve Light Output & Energy Efficiency",
        text: "Clear dust and grime from bulbs and lenses to maximize brightness and reduce energy use.",
      },
    ],
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
        `Think of this as the hub for every window need in ${city}: storefronts, waterfront homes, and HOAs that want one vendor who can scale. We coordinate interior crews, exterior-only routes, and post-construction punch-list teams so you are never steered to the wrong specialty page. Hand-scrubbed glass, RO/DI rinses, optional Rain Shield, and our 7-day sparkle guarantee still anchor every scope.`,
    ],
    included: [
      {
        number: "01",
        title: "Thorough Glass Scrub",
        text: "We manually scrub every pane to lift dirt, mildew, silicone, stickers, and overspray safely.",
      },
      {
        number: "02",
        title: "RO/DI Purified Water Rinse",
        text: "Zero TDS purified water means no minerals, no spots, and no streaks when it dries.",
      },
      {
        number: "03",
        title: "Detail and Sill Cleaning",
        text: "Wiping down frames and cleaning sills so every surface gets the attention it deserves.",
      },
      {
        number: "04",
        title: "Rain Shield Technology",
        text: "Our unique coating repels water and dirt, keeping your windows cleaner for longer.",
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
        title: "Enhanced Appearance",
        text: "Instantly boost the look of your home and keep your curb appeal on point.",
      },
      {
        number: "02.",
        title: "Increased Longevity",
        text: "Regular cleaning prevents mineral buildup, permanent staining, and glass degradation over time.",
      },
      {
        number: "03.",
        title: "Unobstructed Views",
        text: "Whether it's the water or your backyard, clean windows keep your views crystal clear.",
      },
      {
        number: "04.",
        title: "Maximize Natural Light",
        text: "Dust, pollen, and grime block more sunlight than you think. Clean glass brightens every room.",
      },
    ],
    nearyou: [
      {
        number: "01",
        title: "Routine Home Window Cleaning",
        text: "Regular window cleaning to maintain a clear view and keep your home looking fresh.",
      },
      {
        number: "02",
        title: "Commercial Window Cleaning",
        text: "Regular cleaning for stores, offices, restaurants, hotels, and healthcare facilities to keep an inviting environment.",
      },
      {
        number: "03",
        title: "Post-Construction Window Cleaning",
        text: "Cleaning windows after new construction or home renovations to remove dust, stickers, paint, and debris.",
      },
      {
        number: "04",
        title: "Real Estate Window Cleaning",
        text: "Cleaning windows to enhance curb appeal and help potential buyers fall in love at first sight.",
      },
      {
        number: "05",
        title: "Boat Window Cleaning",
        text: "Cleaning windows on boats and yachts, ensuring clear visibility while enhancing the overall appearance.",
      },
    ],
    interiorSection: {
      heading: "Interior Window Cleaning",
      body: [
        "Fingerprints, HVAC dust, and cooking film stay on the inside of your windows long after the exterior looks clean. Our interior window cleaning crews stage shoe covers, protect furniture, and work pane-by-pane through every room — handling glass, frames, tracks, and dividers with the same care we give your exterior.",
        "Interior cleaning is available as part of a full-service window package or as a standalone visit. Either way, every pane is left streak-free and backed by our 7-day sparkle guarantee.",
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
