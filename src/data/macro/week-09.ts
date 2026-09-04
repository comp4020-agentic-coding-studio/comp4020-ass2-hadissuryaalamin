import type { MacroWeekData } from "./types";

// Source: US Department of Agriculture, Agricultural Research Service,
// FoodData Central <https://fdc.nal.usda.gov/>. Figures are per 100 g of the
// raw, edible portion, SR Legacy entries, cross-checked against independent
// mirrors of the same FDC ID before being recorded here (see updates/013.md
// for the checking method).
const week09: MacroWeekData = {
  week: 9,
  title: "Fruit",
  source: {
    label: "USDA, Agricultural Research Service, FoodData Central",
    url: "https://fdc.nal.usda.gov/",
  },
  ingredients: [
    {
      name: "Apples, raw, with skin",
      fdcId: 171688,
      caloriesPer100g: 52,
      proteinPer100g: 0.26,
      fatPer100g: 0.17,
    },
    {
      name: "Bananas, raw",
      fdcId: 173944,
      caloriesPer100g: 89,
      proteinPer100g: 1.09,
      fatPer100g: 0.33,
    },
    {
      name: "Oranges, raw, all commercial varieties",
      fdcId: 169097,
      caloriesPer100g: 47,
      proteinPer100g: 0.94,
      fatPer100g: 0.12,
    },
    {
      name: "Strawberries, raw",
      fdcId: 167762,
      caloriesPer100g: 32,
      proteinPer100g: 0.67,
      fatPer100g: 0.3,
    },
    {
      name: "Mangos, raw",
      fdcId: 169910,
      caloriesPer100g: 60,
      proteinPer100g: 0.82,
      fatPer100g: 0.38,
    },
  ],
};

export default week09;
