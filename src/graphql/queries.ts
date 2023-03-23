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
            classification
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
        id
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
