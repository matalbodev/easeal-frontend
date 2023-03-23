import { GetServerSidePropsContext } from "next";
import DashBoardLayout from "../../components/dashboard/Layout";
import MealsList from "../../components/dashboard/Meals/List";
import UIButton from "../../components/commons/ui/Button";
import useSidePanel from "../../hooks/useSidePanel";
import { getMeals } from "../../graphql/querier";
import { Recipes } from "../../types/meals";

type PropsTypes = {
  data: Recipes | undefined;
};

const Meals: React.FC<PropsTypes> = ({ data }) => {
  const { showSidePanel } = useSidePanel();
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
      <MealsList data={data} />
    </DashBoardLayout>
  );
};

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<{ props: PropsTypes }> {
  let data;

  const { req } = context;

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
