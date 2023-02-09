import { GetServerSidePropsContext } from "next";
import DashBoardLayout from "../../components/dashboard/Layout";
import MealsList from "../../components/dashboard/Meals/List";
import { Meal } from "../../types/meals";
import fakeMeals from "../../mock-api/meals-api";

type PropsTypes = {
  meals: Meal[];
};

const Meals = (props: PropsTypes) => {
  const { meals } = props;
  return (
    <DashBoardLayout title="Your meals">
      <MealsList data={meals} />
    </DashBoardLayout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let data = [];

  /* 	try {
		const res = await fetch("/api/meals")
		data = await res.json()
	} catch (error) {
		console.error(error)
	} */

  return {
    props: {
      meals: fakeMeals,
    },
  };
}

export default Meals;
