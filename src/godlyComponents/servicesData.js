import {
  WindowIcon,
  GutterIcon,
  RoofWashingIcon,
  ScreenCleansIcon,
  SolarPanelsIcon,
  SealCoatingIcon,
  HolidayLightIcon,
} from "./servicesIcons";
import pressureWashingImg from "@/assets/homepageServices/pressure_washing.webp";
import pressureWashingImgColor from "@/assets/homepageServices/pressure_washing_color.webp";
import houseWashingImg from "@/assets/homepageServices/house_washing.webp";
import houseWashingImgColor from "@/assets/homepageServices/house_washing_color.webp";

export const servicesData = [
  {
    name: "Exterior Window Cleaning",
    icon: <WindowIcon />,
    link: "exterior-window-cleaning",
    description:
      "It’s what we do best! Get rid of that nasty build-up of nature’s mildew and grime.",
  },
  {
    name: "Interior Window Cleaning",
    icon: <WindowIcon />,
    link: "interior-window-cleaning",
    description:
      "Pet slobber, fingerprints, and so much more can leave residue that is tricky to get off.",
  },
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
    name: "Roof Washing",
    icon: <RoofWashingIcon />,
    link: "roof-washing",
    description:
      "Removing all the debris from your roof is the easiest way to increase its longevity.",
  },
  {
    name: "Pressure & Soft Washing",
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
    name: "Light Fixture Cleaning",
    image: "/assets/light-fixture.webp",
    hoverImage: "/assets/light-fixture_colored.webp",
    link: "light-fixture-cleaning",
    description:
      "Keep both your interior and exterior lighting bright with thorough cleanings of your lanterns, sconces, and more.",
  },
  {
    name: "Screen Cleaning",
    icon: <ScreenCleansIcon />,
    link: "screen-cleaning",
    description:
      "Our special solution and professional equipment leaves window screens & pool screen enclosures looking brand new.",
  },
  {
    name: "Holiday Lighting",
    icon: <HolidayLightIcon />,
    link: "holiday-lighting",
    description:
      "Design, install, premium LEDs, maintenance, and removal—custom holiday displays without the ladder.",
  },
  {
    name: "Solar Panel Cleaning",
    icon: <SolarPanelsIcon />,
    link: "solar-panel-cleaning",
    description:
      "Dirty solar panels lead to less efficient energy absorption — keep them clean and running to their full potential.",
  },
  {
    name: "Paver Sealing",
    icon: <SealCoatingIcon />,
    link: "paver-sealing",
    description:
      "Clean, sand, and seal your driveway/parking lot to protect against oils and other damaging elements.",
  },
];
