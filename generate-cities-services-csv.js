const fs = require("fs");

const citiesMap = {
  "boca-raton": "Boca Raton",
  "coconut-creek": "Coconut Creek",
  "cooper-city": "Cooper City",
  "coral-springs": "Coral Springs",
  davie: "Davie",
  "deerfield-beach": "Deerfield Beach",
  "delray-beach": "Delray Beach",
  "fort-lauderdale": "Fort Lauderdale",
  "hallandale-beach": "Hallandale Beach",
  "hillsboro-beach": "Hillsboro Beach",
  hollywood: "Hollywood",
  "lauderdale-by-the-sea": "Lauderdale-By-The-Sea",
  "lighthouse-point": "Lighthouse Point",
  margate: "Margate",
  miramar: "Miramar",
  "oakland-park": "Oakland Park",
  parkland: "Parkland",
  "pembroke-pines": "Pembroke Pines",
  plantation: "Plantation",
  "pompano-beach": "Pompano Beach",
  "royal-palm-beach": "Royal Palm Beach",
  "south-florida": "South Florida",
  "southwest-ranches": "Southwest Ranches",
  sunrise: "Sunrise",
  tamarac: "Tamarac",
  "west-park": "West Park",
  weston: "Weston",
};

const services = [
  "solar-panel-cleaning",
  "exterior-window-cleaning",
  "interior-window-cleaning",
  "gutter-cleaning",
  "house-washing",
  "roof-washing",
  "pressure-washing",
  "paver-sealing",
  "light-fixture-cleaning",
  "screen-cleaning",
  "window-cleaning",
  "soft-washing",
  "holiday-lighting",
];

const serviceHeaders = services.map((s) =>
  s.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
);

const header = ["City", "City Slug", "Landing Page URL", ...serviceHeaders];
const rows = [header];

for (const [slug, name] of Object.entries(citiesMap)) {
  const row = [
    name,
    slug,
    `/${slug}`,
    ...services.map((s) => `/${slug}/${s}`),
  ];
  rows.push(row);
}

const csv = rows.map((r) => r.join(",")).join("\n");
fs.writeFileSync("cities-services.csv", csv);
console.log(`Generated ${rows.length - 1} rows to cities-services.csv`);
