import type { MacroWeekData } from "./types";

// Source: US Department of Agriculture, Agricultural Research Service,
// FoodData Central <https://fdc.nal.usda.gov/>. Figures are per 100 g of the
// raw, edible portion, SR Legacy entries, cross-checked against independent
// mirrors of the same FDC ID before being recorded here (see updates/013.md
// for the checking method).
const week02: MacroWeekData = {
  week: 2,
  title: "Vegetables",
  source: {
    label: "USDA, Agricultural Research Service, FoodData Central",
    url: "https://fdc.nal.usda.gov/",
  },
  ingredients: [
    {
      name: "Broccoli, raw",
      fdcId: 170379,
      caloriesPer100g: 34,
      proteinPer100g: 2.82,
      fatPer100g: 0.37,
    },
    {
      name: "Carrots, raw",
      fdcId: 170393,
      caloriesPer100g: 41,
      proteinPer100g: 0.93,
      fatPer100g: 0.24,
    },
    {
      name: "Spinach, raw",
      fdcId: 168462,
      caloriesPer100g: 23,
      proteinPer100g: 2.86,
      fatPer100g: 0.39,
    },
    {
      name: "Potatoes, flesh and skin, raw",
      fdcId: 170026,
      caloriesPer100g: 77,
      proteinPer100g: 2.05,
      fatPer100g: 0.1,
    },
    {
      name: "Onions, raw",
      fdcId: 170000,
      caloriesPer100g: 40,
      proteinPer100g: 1.1,
      fatPer100g: 0.1,
    },
  ],
};

export default week02;
