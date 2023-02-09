import { useEffect, useState } from "react";
import { Meal } from "../../../types/meals";
import { DBIngredient } from "../../../types/ingredients";
import UIButton from "../../commons/ui/Button";
type PropsType = {
  data: Meal;
};
const MealCard = (props: PropsType) => {
  const { data } = props;
  const { name, ingredients: ids } = data;

  const [ingredients, setIngredients] = useState<any>([]);

  const getIngredient = async (id: string) => {
    let ingredient: DBIngredient | {} = {};
    try {
      const req = await fetch(`/api/ingredients/${id}`);
      return (ingredient = await req.json());
    } catch (error) {
      console.error(error);
    }
  };

  const getIngredients = async () => {
    const promises = ids.map((id: string) => getIngredient(id));
    const ingredients = await Promise.all(promises);
    setIngredients(ingredients);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div className="mb-4 bg-white shadow-md">
      <div className="border-b border-neutral-200 p-6">
        <div className="text-2xl font-semibold">{name}</div>
      </div>
      <div className="px-6 pb-2 pt-8">
        <div className="flex flex-wrap">
          {ingredients &&
            ingredients.map((ingredient: DBIngredient) => {
              return (
                <div
                  key={ingredient.id}
                  className="mr-4 mb-4 rounded-full bg-neutral-100 px-4 py-2 text-sm"
                >
                  {ingredient.name}
                </div>
              );
            })}
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <UIButton color="primary">Edit</UIButton>
      </div>
    </div>
  );
};

export default MealCard;
