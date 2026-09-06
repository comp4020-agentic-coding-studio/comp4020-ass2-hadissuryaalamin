import type { MacroWeekData } from "./types";

// Source: US Department of Agriculture, Agricultural Research Service,
// FoodData Central <https://fdc.nal.usda.gov/>. Figures are per 100 g of the
// raw, edible portion, SR Legacy entries, cross-checked against independent
// mirrors of the same FDC ID before being recorded here (see updates/013.md
// for the checking method).
const week04: MacroWeekData = {
  week: 4,
  title: "Red meat",
  source: {
    label: "USDA, Agricultural Research Service, FoodData Central",
    url: "https://fdc.nal.usda.gov/",
  },
  ingredients: [
    {
      name: "Beef, ground, 85% lean meat / 15% fat, raw",
      fdcId: 171796,
      caloriesPer100g: 215,
      proteinPer100g: 18.59,
      fatPer100g: 15.0,
    },
    {
      name: "Beef, ground, 93% lean meat / 7% fat, raw",
      fdcId: 173110,
      caloriesPer100g: 152,
      proteinPer100g: 20.85,
      fatPer100g: 7.0,
    },
    {
      name: "Lamb, domestic, leg, whole, raw",
      fdcId: 174311,
      caloriesPer100g: 230,
      proteinPer100g: 17.91,
      fatPer100g: 17.2,
    },
    {
      name: "Goat, raw",
      fdcId: 175303,
      caloriesPer100g: 109,
      proteinPer100g: 20.6,
      fatPer100g: 2.3,
    },
  ],
};

export default week04;
