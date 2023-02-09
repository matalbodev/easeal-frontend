import useSidePanel from "../../../hooks/useSidePanel";
import UIButton from "../../commons/ui/Button";
import MealsList from "../Meals/List";
import useSWR from "swr";
import { Meal } from "../../../types/meals";
type Day = {
  dayName: string;
  dayFormatted: string;
};

type PropsTypes = {
  day: Day;
  meals: Meal[];
};

const Day = (props: PropsTypes) => {
  const { showSidePanel } = useSidePanel();
  const { day } = props;

  return (
    <div className="w-1/4 shrink-0">
      <div className="relative mb-6 border border-neutral-200 p-4 shadow-md">
        <>
          {day.dayName}{" "}
          <span className="absolute bottom-2 right-2 text-sm text-neutral-300">
            {" "}
            {day.dayFormatted}
          </span>
        </>
      </div>
      <div className="border border-slate-200 bg-slate-100 p-6">
        No meal here...
      </div>

      <div className="mt-6 text-center">
        <UIButton
          action={() =>
            showSidePanel(
              MealsList,
              {
                data: props.meals,
              },
              `Choose a meal to add to ${day.dayName} ${day.dayFormatted}`
            )
          }
          color="primary"
        >
          Add meal
        </UIButton>
      </div>
    </div>
  );
};

export default Day;
