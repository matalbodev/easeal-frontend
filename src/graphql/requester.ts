import { GraphQLClient } from "graphql-request";

export const graphqlRequester = async (
  query: string,
  variables: any,
  I: any
) => {
  const endpoint = "http://localhost:3001/graphql";
  const graphQLClient = new GraphQLClient(endpoint);
  return await graphQLClient.request<typeof I>(query, variables);
};
