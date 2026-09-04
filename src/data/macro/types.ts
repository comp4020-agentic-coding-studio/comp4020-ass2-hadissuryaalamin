/**
 * Shared shape for the macro/calorie calculator's per-week ingredient data
 * (epic.md "Round 2", constraint 12). One file per week that needs it —
 * `week-02.ts`, `week-03.ts`, `week-04.ts`, `week-09.ts` — each exporting a
 * `MacroWeekData` object consumed by `src/components/MacroCalculator.astro`.
 *
 * Every figure is per 100 g of the raw, edible portion, taken from USDA
 * FoodData Central (https://fdc.nal.usda.gov/) and cross-checked against at
 * least one independent mirror of the same entry before being recorded here.
 */

/** Where a week's figures came from — one citation shared by all its ingredients. */
export interface MacroSource {
  /** How the source reads in a citation line. */
  label: string;
  /** A URL that resolves to the source. */
  url: string;
}

/** One selectable ingredient and its per-100 g macro figures. */
export interface MacroIngredient {
  /** Display name, matching how USDA FoodData Central names the food. */
  name: string;
  /** USDA FoodData Central ID (fdcId) for the specific cited entry. */
  fdcId: number;
  /** Fat, in grams, per 100 g raw. */
  fatPer100g: number;
  /** Protein, in grams, per 100 g raw. */
  proteinPer100g: number;
  /** Energy, in kilocalories, per 100 g raw. */
  caloriesPer100g: number;
}

/** A whole week's worth of calculator data. */
export interface MacroWeekData {
  /** Teaching week number (2, 3, 4 or 9). */
  week: number;
  /** Short label for the week's material, used in the calculator's heading. */
  title: string;
  /** The shared citation for every ingredient below. */
  source: MacroSource;
  /** 4-6 ingredients a student can select in the calculator. */
  ingredients: MacroIngredient[];
}
