import type { MacroWeekData } from "./types";

// Source: US Department of Agriculture, Agricultural Research Service,
// FoodData Central <https://fdc.nal.usda.gov/>. Figures are per 100 g of the
// raw, edible portion, SR Legacy entries, cross-checked against independent
// mirrors of the same FDC ID before being recorded here (see updates/013.md
// for the checking method).
const week03: MacroWeekData = {
  week: 3,
  title: "Poultry and fish",
  source: {
    label: "USDA, Agricultural Research Service, FoodData Central",
    url: "https://fdc.nal.usda.gov/",
  },
  ingredients: [
    {
      name: "Chicken, broilers or fryers, breast, skinless, boneless, meat only, raw",
      fdcId: 171077,
      caloriesPer100g: 120,
      proteinPer100g: 22.5,
      fatPer100g: 2.62,
    },
    {
      name: "Fish, salmon, Atlantic, farmed, raw",
      fdcId: 175167,
      caloriesPer100g: 208,
      proteinPer100g: 20.42,
      fatPer100g: 13.42,
    },
    {
      name: "Fish, cod, Atlantic, raw",
      fdcId: 172904,
      caloriesPer100g: 82,
      proteinPer100g: 18.4,
      fatPer100g: 0.67,
    },
    {
      name: "Duck, domesticated, meat only, raw",
      fdcId: 172410,
      caloriesPer100g: 132,
      proteinPer100g: 18.28,
      fatPer100g: 5.95,
    },
  ],
};

export default week03;
