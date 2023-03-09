import { GetServerSidePropsContext } from "next";
import DashBoardLayout from "../../components/dashboard/Layout";
import MealsList from "../../components/dashboard/Meals/List";
import { Meal } from "../../types/meals";
import fakeMeals from "../../mock-api/meals-api";
import UIButton from "../../components/commons/ui/Button";
import useSidePanel from "../../hooks/useSidePanel";

type PropsTypes = {
  meals: Meal[];
};

const Meals: React.FC<PropsTypes> = ({ meals }) => {
  const { showSidePanel } = useSidePanel();

  console.log(showSidePanel);
  const actions = [
    <UIButton
      color="success"
      action={() => showSidePanel(<div>Test</div>, "add a meal")}
    >
      Add meal
    </UIButton>,
  ];
  return (
    <DashBoardLayout title="Your meals" actions={actions}>
      <MealsList data={[]} />
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
