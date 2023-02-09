import Day from "./Day";
import dayjs from "dayjs";
import { useRef } from "react";
import { Meal } from "../../../types/meals";

type PropsType = {
  meals: Meal[];
};

const Week = (props: PropsType) => {
  const ref = useRef<HTMLDivElement>(null);
  const activeDay = dayjs().day(dayjs().day()).format("dddd");
  const days = [];
  days.push(activeDay);
  for (let i = 1; i < 7; i++) {
    days.push(
      dayjs()
        .day(dayjs().day() + i)
        .format("dddd")
    );
  }

  const handleScroll = (direction: "left" | "right") => {
    if (ref.current) {
      if (direction === "left") {
        ref.current.scrollLeft -= 400;
      } else {
        ref.current.scrollLeft += 400;
      }
    }
  };

  return (
    <>
      <div className="mb-2 flex justify-end">
        <button
          onClick={() => handleScroll("left")}
          className="flex h-12 w-12 items-center justify-center bg-easeal-blue text-white"
        >
          &larr;
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="ml-1 flex h-12 w-12 items-center justify-center bg-easeal-blue text-white"
        >
          &rarr;
        </button>
      </div>
      <div
        ref={ref}
        className="scrollbar-hide flex space-x-10 overflow-y-scroll scroll-smooth shadow-inner-r-2"
      >
        {days.map((day, index) => (
          <Day
            key={index}
            meals={props.meals}
            day={{
              dayName: day,
              dayFormatted: dayjs()
                .day(dayjs().day() + index + 1)
                .format("DD/MM"),
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Week;
