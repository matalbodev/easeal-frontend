import { DisplayIngredientsComponentProps } from "../../../../pages/dashboard/ingredients";

const IngredientsListGallery = (props: DisplayIngredientsComponentProps) => {
  const { data: ingredients } = props;

  return (
    <div className="-mx-4 flex flex-wrap">
      {ingredients.map((ingredient) => (
        <div key={ingredient.id} className="px-4 pb-4 lg:basis-1/4">
          <div className="p-10 shadow-lg">
            <div className="">{ingredient.name}</div>
            <div className="">{ingredient.kcal}</div>
            <div className="">{ingredient.mainType}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IngredientsListGallery;
