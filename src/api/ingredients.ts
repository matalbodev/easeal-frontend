export const deleteIngredient = async (id: string, mutate: any) => {
  const req = await fetch(`/api/ingredients`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  if (req.ok) {
    mutate();
  }
};
