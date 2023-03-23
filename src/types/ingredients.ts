import { PaginatedResponse } from "./pagination";

export type Ingredient = {
  id: string;
  name: string;
  classification: string;
  kcal: number;
  mainType: string;
};

export type Ingredients = {
  edges: {
    cursor: string;
    node: Ingredient;
  }[];
};

export type GetIngredientsPaginated = {
  ingredients: Ingredients & PaginatedResponse;
};
