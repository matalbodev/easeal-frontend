import useIngredients from "../../../../hooks/useIngredients";
import { DisplayIngredientsComponentProps } from "../../../../pages/dashboard/ingredients";

import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { DBIngredient } from "../../../../types/ingredients";

const IngredientsListTable = (props: DisplayIngredientsComponentProps) => {
  const { data: ingredients, deleteIngredient } = props;

  return (
    <table className="w-full overflow-hidden rounded-xl bg-white shadow-lg">
      <thead>
        <tr>
          <th className="border-b bg-neutral-50 px-6 py-3 text-left font-semibold leading-4  text-neutral-500">
            Name
          </th>
          <th className="border-b bg-neutral-50 px-6 py-3 text-left font-semibold leading-4  text-neutral-500">
            Kcal
          </th>
          <th className="border-b bg-neutral-50 px-6 py-3 text-left font-semibold leading-4  text-neutral-500">
            Source type
          </th>
          <th className="border-b bg-neutral-50 px-6 py-3 text-left font-semibold leading-4 text-neutral-500">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {ingredients.map((ingredient: DBIngredient) => (
          <tr key={ingredient.id}>
            <td className="whitespace-no-wrap border-b border-neutral-100 px-6 py-4 font-semibold">
              {ingredient.name}
            </td>
            <td className="whitespace-no-wrap border-b border-neutral-100 px-6 py-4 text-sm leading-5 text-blue-900">
              <span className="font-semibold">{ingredient.kcal}</span> kcal/
              <span className="text-xs">100gr</span>
            </td>
            <td className="whitespace-no-wrap border-b border-neutral-100 px-6 py-4 text-sm leading-5 text-blue-900">
              {ingredient.mainType}
            </td>
            <td className="whitespace-no-wrap border-b border-neutral-100 px-6 py-4 text-sm leading-5 text-blue-900">
              <div className="inline-flex items-center space-x-3">
                <button className="text-blue-500 hover:text-blue-700">
                  <PencilSquareIcon className="h-5 w-5" />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <XMarkIcon
                    onClick={() => deleteIngredient(ingredient.id)}
                    className="h-5 w-5"
                  />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IngredientsListTable;
