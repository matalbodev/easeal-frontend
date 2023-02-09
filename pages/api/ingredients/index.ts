import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  const { name, kcal, mainType, id } = req.body;

  try {
    switch (method) {
      case "POST":
        const post = await fetch("http://localhost:3001/ingredients/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            kcal,
            mainType,
          }),
        });
        res.status(200).json(await post.json());
        break;
      case "GET":
        const baseUri = "http://localhost:3001/ingredients";
        const query = req.query;
        const page = parseInt(query?.page as string);
        const limit = parseInt(query.limit as string);
        const filter = query.filter as string;

        const endpoint = new URL(baseUri);
        endpoint.searchParams.append("skip", (page * limit).toString());
        endpoint.searchParams.append("take", limit.toString());

        filter && endpoint.searchParams.append("filter", filter);

        const get = await fetch(endpoint, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        res.status(200).json(await get.json());
        break;
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
      case "PUT":
        const put = await fetch("http://localhost:3001/ingredients", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        });
        res.status(200).json(await put.json());
      default:
        break;
    }
  } catch (error: any) {
    throw new Error(error);
  }
}
