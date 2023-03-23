import IngredientsListTable from "../../src/components/dashboard/Ingredients/List/Table";
import DashBoardLayout from "../../src/components/dashboard/Layout";
import { TableCellsIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import IngredientsListGallery from "../../src/components/dashboard/Ingredients/List/Gallery";
import clsx from "clsx";
import IngredientsCreateForm from "../../src/components/dashboard/Ingredients/Create/Form";
import useIngredients from "../../src/hooks/useIngredients";
import IngredientsListFilter from "../../src/components/dashboard/Ingredients/List/Filter";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import UIPagination from "../../src/components/commons/ui/Pagination";
import { getIngredients } from "../../src/graphql/querier";
import { convertedIngredients } from "../../src/graphql/converter";
import { Ingredient } from "../../src/types/ingredients";

const PER_PAGE = 10;

type PropsTypes = {
  data: convertedIngredients;
};

export type DisplayIngredientsComponentProps = {
  data: Ingredient[];
  limit: number;
  isLoading: boolean;
  deleteIngredient: (id: string) => void;
};

const views: Map<
  string,
  {
    optionIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    title: string;
    component: React.FunctionComponent<DisplayIngredientsComponentProps>;
  }
> = new Map([
  [
    "table",
    {
      optionIcon: TableCellsIcon,
      title: "Table of ingredients",
      component: IngredientsListTable,
    },
  ],
  [
    "gallery",
    {
      optionIcon: Squares2X2Icon,
      title: "Gallery of ingredients",
      component: IngredientsListGallery,
    },
  ],
]);

const Ingredients = (props: PropsTypes) => {
  const router = useRouter();
  const { data: ingredientsData } = props;
  const [view, setView] = useState("table");
  const keys = Array.from(views.keys());
  const activeView = views.get(view);
  const DisplayIngredients = activeView?.component
    ? activeView.component
    : IngredientsListTable;

  const getFilterCriteria = (criteria: string) => {
    if (!criteria) {
      router.push("/dashboard/ingredients");
      return;
    }
    router.push({
      pathname: "/dashboard/ingredients",
      query: { filter: criteria, page: 0, limit: PER_PAGE },
    });
  };
  return (
    <DashBoardLayout title="Ingredients list">
      <div className="mb-4 flex items-center">
        <IngredientsListFilter getFilterCriteria={getFilterCriteria} />
        <div className="mb-4 ml-auto flex items-center justify-end space-x-1">
          {keys.map((key: string) => {
            const keyView = views.get(key);
            const Icon = keyView?.optionIcon;
            return (
              <Fragment key={key}>
                {Icon && (
                  <Icon
                    onClick={() => setView(key)}
                    className={`h-6 w-6 ${clsx(
                      view === key ? "text-easeal-blue" : "text-neutral-400"
                    )}`}
                  />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>

      <DisplayIngredients
        data={ingredientsData.ingredients}
        limit={PER_PAGE}
        isLoading={false}
        deleteIngredient={() => {}}
      />
      <div className="py-10">
        <p className="mb-6 text-2xl">Add ingredient</p>
      </div>
    </DashBoardLayout>
  );
};

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<{ props: PropsTypes }> {
  let data: any = [];
  const { page, filter } = context.query;
  const pageInt = parseInt(page as string) || 0;
  try {
    const req = await getIngredients(PER_PAGE);
    data = req;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      data,
    },
  };
}

export default Ingredients;
