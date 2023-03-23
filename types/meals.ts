import { Ingredient } from "./ingredients";

export type Recipe = {
  id: string;
  name: string;
  description: string;
  ingredients: {
    ingredient: Ingredient;
  }[];
};

export type Recipes = {
  recipes: Recipe[];
};
