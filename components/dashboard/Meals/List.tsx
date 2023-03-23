import { Fragment } from "react";
import { Recipes } from "../../../types/meals";
import MealCard from "./Card";
type PropsType = {
  data: Recipes | undefined;
};
const MealsList = (props: PropsType) => {
  const meals = props.data?.recipes;
  return (
    <div className="flex space-x-4">
      {meals ? (
        meals.map((meal) => {
          return (
            <Fragment key={meal.id}>
              <MealCard data={meal} />
            </Fragment>
          );
        })
      ) : (
        <div>No meals here...</div>
      )}
    </div>
  );
};

export default MealsList;
