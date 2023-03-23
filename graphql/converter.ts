import { GetIngredientsPaginated } from "./querier";

export type convertedIngredients = {
  ingredients: {
    id: string;
    name: string;
    kcal: number;
    mainType: string;
  }[];
  pagination: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    totalCount: number;
  };
};

export const convertIngredients = (data: GetIngredientsPaginated) => {
  return {
    ingredients: data.ingredients.edges.map((edge) => edge.node),
    pagination: {
      hasNextPage: data.ingredients.pageInfo.hasNextPage,
      hasPreviousPage: data.ingredients.pageInfo.hasPreviousPage,
      totalCount: data.ingredients.totalCount,
    },
  };
};
