import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  const { id } = req.query;

  try {
    if (method === "GET") {
      const get = await fetch(`http://localhost:3001/ingredients/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      res.status(200).json(await get.json());
    }
  } catch (error: any) {
    throw new Error(error);
  }
}
