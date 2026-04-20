// City-specific content overrides for service pages.
// Structure: cityServicesData[citySlug][serviceSlug] = { hero, essential, faqs, localCta }
//
// citySlug: matches the URL param (e.g. "boca-raton", "fort-lauderdale")
// serviceSlug: matches the URL param (e.g. "window-cleaning", "seal-coating")
//
// All fields are optional — if omitted, the default content from servicesData.js is used.
//
// hero: string — override for the hero description paragraph
// essential: array of { number, title, text } — override for the "Why Essential" cards
// faqs: array of { question, answer } — FAQs shown in the FAQ section
// localCta: string — override for the local CTA text at the bottom of the page

import { bocaRaton } from "./boca-raton";
import { coconutCreek } from "./coconut-creek";
import { cooperCity } from "./cooper-city";
import { coralSprings } from "./coral-springs";
import { davie } from "./davie";
import { deerfieldBeach } from "./deerfield-beach";
import { delrayBeach } from "./delray-beach";
import { fortLauderdale } from "./fort-lauderdale";
import { hallandaleBeach } from "./hallandale-beach";
import { hillsboroBeach } from "./hillsboro-beach";
import { hollywood } from "./hollywood";
import { lauderdaleByTheSea } from "./lauderdale-by-the-sea";
import { lauderhill } from "./lauderhill";
import { lighthousePoint } from "./lighthouse-point";
import { margate } from "./margate";
import { miramarFl } from "./miramar-fl";
import { oaklandPark } from "./oakland-park";
import { parkland } from "./parkland";
import { pembrokePines } from "./pembroke-pines";
import { plantation } from "./plantation";
import { pompanoBeach } from "./pompano-beach";
import { royalPalmBeach } from "./royal-palm-beach";
import { southwestRanches } from "./southwest-ranches";
import { southFlorida } from "./south-florida";
import { sunrise } from "./sunrise";
import { tamarac } from "./tamarac";
import { westPark } from "./west-park";
import { weston } from "./weston";

export const cityServicesData = {
  "boca-raton": bocaRaton,
  "coconut-creek": coconutCreek,
  "cooper-city": cooperCity,
  "coral-springs": coralSprings,
  davie: davie,
  "deerfield-beach": deerfieldBeach,
  "delray-beach": delrayBeach,
  "fort-lauderdale": fortLauderdale,
  "hallandale-beach": hallandaleBeach,
  "hillsboro-beach": hillsboroBeach,
  hollywood: hollywood,
  "lauderdale-by-the-sea": lauderdaleByTheSea,
  lauderhill: lauderhill,
  "lighthouse-point": lighthousePoint,
  margate: margate,
  miramar: miramarFl,
  "oakland-park": oaklandPark,
  parkland: parkland,
  "pembroke-pines": pembrokePines,
  plantation: plantation,
  "pompano-beach": pompanoBeach,
  "royal-palm-beach": royalPalmBeach,
  "southwest-ranches": southwestRanches,
  "south-florida": southFlorida,
  sunrise: sunrise,
  tamarac: tamarac,
  "west-park": westPark,
  weston: weston,
};
