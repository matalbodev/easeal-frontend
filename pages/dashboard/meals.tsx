import { GetServerSidePropsContext } from "next";
import DashBoardLayout from "../../src/components/dashboard/Layout";
import MealsList from "../../src/components/dashboard/Meals/List";
import UIButton from "../../src/components/commons/ui/Button";
import { Recipes } from "../../src/types/meals";
import MealsAdd from "../../src/components/dashboard/Meals/Add";
import useSidePanel from "../../src/hooks/useSidePanel";
import { getMeals } from "../../src/graphql/querier";

type PropsTypes = {
  data: Recipes | undefined;
};

const Meals: React.FC<PropsTypes> = ({ data }) => {
  const { showSidePanel } = useSidePanel();
  const actions = [
    <UIButton
      color="success"
      action={() => showSidePanel(<MealsAdd />, "Add a new meal 🍽️ !")}
    >
      Add meal
    </UIButton>,
  ];
  return (
    <DashBoardLayout title="Your meals" actions={actions}>
      <MealsList data={data} />
    </DashBoardLayout>
  );
};

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<{ props: PropsTypes }> {
  let data;
  try {
    const res = await getMeals();
    data = res;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      data,
    },
  };
}

export default Meals;
