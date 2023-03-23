import { NextApiRequest, NextApiResponse } from "next";
import { getMeals } from "../../src/graphql/querier";
import { Recipes } from "../../src/types/meals";
import { ApiErrorRes } from "../../src/types/api";
export default async function handler(
  res: NextApiResponse<Recipes | ApiErrorRes>
) {
  let data;

  try {
    const res = await getMeals();
    data = res;
  } catch (error) {
    console.error(error);
  }
  if (!data) return res.status(404).json({ message: "No meals found" });
  res.status(200).json(data);
}
