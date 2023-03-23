export type PaginatedResponse = {
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  totalCount: number;
};
