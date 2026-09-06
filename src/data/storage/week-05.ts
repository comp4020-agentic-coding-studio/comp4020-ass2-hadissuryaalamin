import type { StorageDataset } from "./types";

/**
 * Week 5 — spices, aromatics and oil.
 *
 * Sourced from the same USDA FSIS cold-chain guidance already cited in
 * `src/content/sessions/10-food-safety-and-the-cold-chain.md`: the danger-
 * zone holding-time rule applies to freshly cut aromatics exactly as it
 * does to any other perishable material, and FSIS gives no allium- or
 * herb-specific refrigerated-storage figure, so the refrigerated items
 * below apply FSIS's general window for cut or prepared perishable food
 * (stated on its Leftovers and Food Safety page as 3 to 4 days), taken at
 * its conservative, shorter end. That generalisation is stated explicitly
 * in each item's `note` rather than presented as an allium-specific figure.
 */
const week05Storage: StorageDataset = {
  week: 5,
  title: "Aromatics and oil",
  items: [
    {
      id: "aromatics-room-temp-normal",
      label: "Chopped or crushed garlic, onion or shallot — held at room temperature, 32°C or below",
      condition: "Refrigerate within 2 hours of cutting or crushing",
      durationHours: 2,
      note: "USDA FSIS danger-zone rule: perishable material left above 4°C must be refrigerated within 2 hours.",
    },
    {
      id: "aromatics-room-temp-hot",
      label: "Chopped or crushed garlic, onion or shallot — held at room temperature above 32°C",
      condition: "Refrigerate within 1 hour of cutting or crushing",
      durationHours: 1,
      note: "USDA FSIS danger-zone rule: the 2-hour allowance halves once ambient temperature exceeds 32°C.",
    },
    {
      id: "aromatics-refrigerated",
      label: "Chopped or crushed garlic, onion or shallot — refrigerated at or below 4°C",
      condition: "Refrigerated at or below 4°C",
      durationHours: 72,
      note: "FSIS publishes no allium-specific figure; this applies its general 3-to-4-day window for refrigerated, cut or prepared perishable food, taken at the conservative (shorter) end.",
    },
    {
      id: "leaf-herbs-refrigerated",
      label: "Washed, prepared bay leaf, lime leaf, oregano or basil — refrigerated at or below 4°C",
      condition: "Refrigerated at or below 4°C",
      durationHours: 72,
      note: "Same general FSIS window as prepared aromatics above, applied conservatively; it is a safety limit, not a freshness or flavour guide.",
    },
  ],
  sources: [
    {
      label: 'USDA FSIS, "\'Danger Zone\' (40°F - 140°F)"',
      url: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/danger-zone-40f-140f",
    },
    {
      label: "USDA FSIS, \"Refrigeration and Food Safety\"",
      url: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/refrigeration",
    },
    {
      label: "USDA FSIS, \"Leftovers and Food Safety\"",
      url: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety",
    },
  ],
};

export default week05Storage;
