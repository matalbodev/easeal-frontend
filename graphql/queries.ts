export const queries = {
  getIngredients: `
    query Ingredients($first: Int!) {
      ingredients(first: $first) {
        edges {
          cursor
          node {
            id
            name
            kcal
            mainType
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        totalCount
      }
    }
  `,
  getMeals: `
    query Meals {
      recipes {
        name
        description
        ingredients {
          ingredient {
            id
            name
            mainType
            classification
          }
        }
      }
    }
  `,
};
