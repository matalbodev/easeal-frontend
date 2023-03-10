import { GetServerSidePropsContext } from "next";
import DashBoardLayout from "../../components/dashboard/Layout";
import Week from "../../components/dashboard/WeekDays/Week";
import { Meal } from "../../types/meals";

type PropsType = {
  meals: Meal[];
};

const DashBoard = (props: PropsType) => {
  return (
    <DashBoardLayout title="Your week">
      <Week meals={props.meals} />
    </DashBoardLayout>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  let meals = [];
  try {
    const response = await fetch("http://localhost:3001/api/meals");
    meals = await response.json();
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      meals,
    },
  };
};

export default DashBoard;
