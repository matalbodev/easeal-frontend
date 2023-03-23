import { GraphQLClient } from "graphql-request";
import { convertIngredients, convertedIngredients } from "./converter";
import { queries } from "./queries";
import { Recipes } from "../types/meals";
import { Ingredients } from "../types/ingredients";
import { PaginatedResponse } from "../types/pagination";
const endpoint = "http://localhost:3001/graphql";

export type GetIngredientsPaginated = {
  ingredients: Ingredients & PaginatedResponse;
};

export const getIngredients = async (
  first: number
): Promise<convertedIngredients> => {
  const graphQLClient = new GraphQLClient(endpoint);
  const result = await graphQLClient.request<GetIngredientsPaginated>(
    queries.getIngredients,
    {
      first,
    }
  );

  return convertIngredients(result);
};

export const getMeals = async (): Promise<Recipes> => {
  const graphQLClient = new GraphQLClient(endpoint);
  const result = await graphQLClient.request<Recipes>(queries.getMeals);
  return result;
};
