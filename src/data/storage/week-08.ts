import type { StorageDataset } from "./types";

/**
 * Week 8 — guest lecture: time management under service.
 *
 * The lecture's "held" category — stocks, portioned or blanched items,
 * sauces brought to a stable state and kept for later service — is exactly
 * the case USDA FSIS's cold-chain guidance covers. Sourced from the same
 * pages already cited in `src/content/sessions/10-food-safety-and-the-cold-
 * chain.md`: the danger-zone rule for how long a held item can sit before
 * it must be chilled, and FSIS's Leftovers and Food Safety guidance for how
 * long a cooked, cooled item then keeps under refrigeration.
 */
const week08Storage: StorageDataset = {
  week: 8,
  title: "Time management under service",
  items: [
    {
      id: "held-room-temp-normal",
      label: "Portioned, blanched or staged item awaiting service — room temperature, 32°C or below",
      condition: "Refrigerate within 2 hours of being brought to a held state",
      durationHours: 2,
      note: "USDA FSIS danger-zone rule: a held item is still perishable material and follows the same 2-hour clock.",
    },
    {
      id: "held-room-temp-hot",
      label: "Portioned, blanched or staged item awaiting service — room temperature above 32°C",
      condition: "Refrigerate within 1 hour of being brought to a held state",
      durationHours: 1,
      note: "USDA FSIS danger-zone rule: the allowance halves once ambient temperature exceeds 32°C.",
    },
    {
      id: "stock-refrigerated",
      label: "Stock, cooled and refrigerated at or below 4°C",
      condition: "Refrigerated at or below 4°C",
      durationHours: 96,
      note: "USDA FSIS Leftovers and Food Safety guidance for cooked, cooled preparations.",
    },
    {
      id: "sauce-refrigerated",
      label: "Sauce, cooled and refrigerated at or below 4°C",
      condition: "Refrigerated at or below 4°C",
      durationHours: 96,
      note: "USDA FSIS Leftovers and Food Safety guidance for cooked, cooled preparations.",
    },
    {
      id: "blanched-veg-refrigerated",
      label: "Blanched or portioned vegetables, refrigerated at or below 4°C for later service",
      condition: "Refrigerated at or below 4°C",
      durationHours: 72,
      note: "FSIS gives no vegetable-specific figure for this held state; this applies its general 3-to-4-day window for refrigerated, cut or prepared perishable food, taken at the conservative (shorter) end.",
    },
  ],
  sources: [
    {
      label: 'USDA FSIS, "\'Danger Zone\' (40°F - 140°F)"',
      url: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/danger-zone-40f-140f",
    },
    {
      label: "USDA FSIS, \"Leftovers and Food Safety\"",
      url: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety",
    },
    {
      label: "USDA FSIS, \"Refrigeration and Food Safety\"",
      url: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/refrigeration",
    },
  ],
};

export default week08Storage;
