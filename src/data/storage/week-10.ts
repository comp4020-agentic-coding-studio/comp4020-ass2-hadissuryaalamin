import type { StorageDataset } from "./types";

/**
 * Week 10 — food safety and the cold chain.
 *
 * The synthesis week's own figures, restated as calculator data rather
 * than only as prose. These durations match
 * `src/content/sessions/10-food-safety-and-the-cold-chain.md` exactly (raw
 * poultry and ground meat, one to two days refrigerated; raw steaks, chops
 * and roasts, three to five days), taken at each range's upper bound as the
 * safe-until cutoff, plus the same danger-zone holding rule and FSIS's
 * Leftovers and Food Safety guidance for cooked material. Cut fruit is
 * deliberately not included here: session 10 itself states fruit "sits on
 * a shorter, less uniform clock, set by ripeness rather than a fixed rule,"
 * so giving it a fixed calculator figure would contradict the course's own
 * stated position.
 */
const week10Storage: StorageDataset = {
  week: 10,
  title: "Food safety and the cold chain",
  items: [
    {
      id: "poultry-refrigerated",
      label: "Raw poultry, refrigerated at or below 4°C",
      condition: "Refrigerated at or below 4°C",
      durationHours: 48,
      note: "Matches this week's own figure: one to two days, taken at the upper bound.",
    },
    {
      id: "ground-meat-refrigerated",
      label: "Raw ground meat, refrigerated at or below 4°C",
      condition: "Refrigerated at or below 4°C",
      durationHours: 48,
      note: "Matches this week's own figure: one to two days, taken at the upper bound.",
    },
    {
      id: "whole-cuts-refrigerated",
      label: "Raw steaks, chops and roasts, refrigerated at or below 4°C",
      condition: "Refrigerated at or below 4°C",
      durationHours: 120,
      note: "Matches this week's own figure: three to five days, taken at the upper bound.",
    },
    {
      id: "cooked-refrigerated",
      label: "Cooked meat, poultry or fish, cooled and refrigerated at or below 4°C",
      condition: "Refrigerated at or below 4°C",
      durationHours: 96,
      note: "USDA FSIS Leftovers and Food Safety guidance for cooked, cooled preparations — the 'cook' and 'chill' steps this week names.",
    },
    {
      id: "danger-zone-normal",
      label: "Any perishable material held at room temperature, 32°C or below",
      condition: "Refrigerate within 2 hours",
      durationHours: 2,
      note: "The danger-zone rule this week states directly.",
    },
    {
      id: "danger-zone-hot",
      label: "Any perishable material held at room temperature above 32°C",
      condition: "Refrigerate within 1 hour",
      durationHours: 1,
      note: "The danger-zone rule this week states directly, halved above 32°C.",
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

export default week10Storage;
