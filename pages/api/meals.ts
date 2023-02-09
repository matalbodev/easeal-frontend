import { NextApiRequest, NextApiResponse } from "next";
import fakeMeals from "../../mock-api/meals-api";
import { Meal } from "../../mock-api/meals-api";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Meal[]>
) {
  /*   let meals: MealType[] = [];
  try {
    const response = await fetch("http://localhost:3001/api/meals");
    meals = await response.json();
  } catch (error) {
    console.error(error);
  } */

  res.status(200).json(fakeMeals);
}
