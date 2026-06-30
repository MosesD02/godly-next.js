import {
  WindowIcon,
  GutterIcon,
  RoofWashingIcon,
  SealCoatingIcon,
  HolidayLightIcon,
} from "./servicesIcons";
import pressureWashingImg from "@/assets/homepageServices/pressure_washing.webp";
import pressureWashingImgColor from "@/assets/homepageServices/pressure_washing_color.webp";
import houseWashingImg from "@/assets/homepageServices/house_washing.webp";
import houseWashingImgColor from "@/assets/homepageServices/house_washing_color.webp";

export const servicesData = [
  {
    name: "Window Cleaning",
    icon: <WindowIcon />,
    link: "window-cleaning",
    description:
      "RO/DI purified water, hand scrubbing, and streak-free glass—residential and commercial—with our 7-day sparkle guarantee.",
  },
  {
    name: "Gutter Cleaning",
    icon: <GutterIcon />,
    link: "gutter-cleaning",
    description:
      "A thorough cleaning that is guaranteed to keep them flowing freely.",
  },
  {
    name: "House Washing",
    image: houseWashingImg,
    hoverImage: houseWashingImgColor,
    link: "house-washing",
    description:
      "Wash away years of pollen, mold, rust, and dirt — bringing that shine back to your property’s exterior.",
  },
  {
    name: "Roof Cleaning",
    icon: <RoofWashingIcon />,
    link: "roof-cleaning",
    description:
      "Removing all the debris from your roof is the easiest way to increase its longevity.",
  },
  {
    name: "Pressure Washing",
    image: pressureWashingImg,
    hoverImage: pressureWashingImgColor,
    link: "pressure-washing",
    description:
      "Get rid of the slippery film and gunk on your driveway, walkways, porches, pool areas, and more.",
  },
  {
    name: "Soft Washing",
    image: houseWashingImg,
    hoverImage: houseWashingImgColor,
    link: "soft-washing",
    description:
      "Custom low-pressure treatments for roofs, siding, and exteriors—safe chemistry that lifts algae without damage.",
  },
  {
    name: "Holiday Lighting",
    icon: <HolidayLightIcon />,
    link: "holiday-lighting",
    description:
      "Design, install, premium LEDs, maintenance, and removal—custom holiday displays without the ladder.",
  },
  {
    name: "Paver Sealing",
    icon: <SealCoatingIcon />,
    link: "paver-sealing",
    description:
      "Clean, sand, and seal your driveway/parking lot to protect against oils and other damaging elements.",
  },
  {
    name: "Travertine Sealing",
    icon: <SealCoatingIcon />,
    link: "travertine-sealing",
    description:
      "Clean and seal travertine pool decks, driveways, and patios with a gloss, matte, or natural finish.",
  },
  {
    name: "Concrete Sealing",
    icon: <SealCoatingIcon />,
    link: "concrete-sealing",
    description:
      "Pressure wash and seal concrete driveways, pool decks, and sidewalks — built for South Florida weather.",
  },
  {
    name: "Post-Construction Window Cleaning",
    icon: <WindowIcon />,
    link: "post-construction-window-cleaning",
    description:
      "Pro-grade scraping and RO/DI purified water to remove stucco, paint, and construction residue — move-in ready every time.",
  },
];
