import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { useRouter } from "next/router";
import { DBIngredient } from "../types/ingredients";

type Params = {
  data: DBIngredient[];
  paginate: {
    limit: number;
    page: number;
    total: number;
  };
};

const useIngredients = (params: Params) => {
  const router = useRouter();
  const { data: SSRData, paginate } = params;
  const { limit, total } = paginate;
  const { filter, page } = router.query;

  const endpoint = filter
    ? `/api/ingredients?page=${page || 0}&limit=${limit}&filter=${filter}`
    : `/api/ingredients?page=${page || 0}&limit=${limit}`;

  const { data, error, mutate } = useSWR(endpoint, fetcher, {
    fallbackData: {
      data: SSRData,
      totalPage: total || 1,
    },
  });

  const ingredients = data?.data;

  return {
    data: {
      ingredients,
      total: data?.totalPage,
    },
    isLoading: !error && !ingredients,
    isError: error,
    mutate,
  };
};

export default useIngredients;
