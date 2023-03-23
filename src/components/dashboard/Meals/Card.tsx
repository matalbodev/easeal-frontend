import UIButton from "../../commons/ui/Button";
import { Recipe } from "../../../types/meals";
import { Ingredient } from "../../../types/ingredients";
type PropsType = {
  data: Recipe;
};
const MealCard = (props: PropsType) => {
  const { data: recipe } = props;
  const ingredients: {
    ingredient: Ingredient;
  }[] = recipe?.ingredients;
  console.log(ingredients);
  return (
    <div className="mb-4 w-1/4 bg-white shadow-md">
      <div className="border-b border-neutral-200 p-6">
        <div className="text-2xl font-semibold">{recipe.name}</div>
      </div>
      <div className="px-6 pb-2 pt-8">
        <div className="flex flex-wrap">
          {ingredients &&
            ingredients.map((node: { ingredient: Ingredient }) => {
              return (
                <div
                  key={node.ingredient.id}
                  className="mr-4 mb-4 rounded-full bg-neutral-100 px-4 py-2 text-sm"
                >
                  {node.ingredient.name}
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
