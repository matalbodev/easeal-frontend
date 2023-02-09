import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  const { id } = req.query;

  try {
    switch (method) {
      case "DELETE":
        const deleteIngredient = await fetch(
          `http://localhost:3001/ingredients/delete/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        res.status(200).json(await deleteIngredient.json());
        break;
      default:
        break;
    }
  } catch (error: any) {
    throw new Error(error);
  }
}
