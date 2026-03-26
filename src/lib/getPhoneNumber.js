/**
 * Returns the local phone number for a given city.
 * Extracted from footer.js so header/PhoneNumber can import it
 * without pulling in the entire footer bundle.
 */
export const getPhoneNumber = (city) => {
  const cityToCheck = city.toUpperCase();

  if (
    [
      "POMPANO BEACH",
      "FORT LAUDERDALE",
      "HOLLYWOOD",
      "OAKLAND PARK",
      "SUNRISE",
      "LIGHTHOUSE POINT",
      "LAUDERDALE-BY-THE-SEA",
      "SOUTH FLORIDA",
      "COCONUT CREEK",
    ].includes(cityToCheck)
  ) {
    return "(954) 852-5326";
  } else if (
    [
      "DELRAY BEACH",
      "BOCA RATON",
      "TAMARAC",
      "MARGATE",
      "CORAL SPRINGS",
      "PARKLAND",
      "ROYAL PALM BEACH",
      "DEERFIELD BEACH",
      "HILLSBORO BEACH",
    ].includes(cityToCheck)
  ) {
    return "(561) 826-4461";
  } else if (
    [
      "WESTON",
      "MIRAMAR",
      "PEMBROKE PINES",
      "SOUTHWEST RANCHES",
      "HALLANDALE BEACH",
      "COOPER CITY",
      "WEST PARK",
    ].includes(cityToCheck)
  ) {
    return "(954) 738-3421";
  } else {
    return "(954) 738-3421";
  }
};
