import IngredientsListTable from "../../components/dashboard/Ingredients/List/Table";
import DashBoardLayout from "../../components/dashboard/Layout";
import { TableCellsIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import IngredientsListGallery from "../../components/dashboard/Ingredients/List/Gallery";
import clsx from "clsx";
import IngredientsCreateForm from "../../components/dashboard/Ingredients/Create/Form";
import useIngredients from "../../hooks/useIngredients";
import IngredientsListFilter from "../../components/dashboard/Ingredients/List/Filter";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import UIPagination from "../../components/commons/ui/Pagination";
import { DBIngredient } from "../../types/ingredients";
import { getIngredients } from "../../graphql/querier";
import { convertedIngredients } from "../../graphql/converter";

const PER_PAGE = 30;

type PropsTypes = {
  data: convertedIngredients;
};

export type DisplayIngredientsComponentProps = {
  data: DBIngredient[];
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

  const { data, mutate, isLoading, isError } = useIngredients({
    data: ingredientsData.ingredients,
    paginate: {
      limit: PER_PAGE,
      page: 0,
      total: 5,
    },
  });
  const { ingredients, total } = data;
  const [view, setView] = useState("table");
  const keys = Array.from(views.keys());
  const activeView = views.get(view);
  const DisplayIngredients = activeView?.component
    ? activeView.component
    : IngredientsListTable;

  const deleteIngredient = async (id: string) => {
    try {
      const req = await fetch(`/api/ingredients`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (req.ok) {
        mutate();
      }
    } catch (error) {
      console.error(error);
    }
  };

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
        deleteIngredient={deleteIngredient}
      />
      {isError && <div>Error...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <DisplayIngredients
          data={ingredients}
          limit={PER_PAGE}
          isLoading={isLoading}
          deleteIngredient={deleteIngredient}
        />
      )}
      <UIPagination total={total} />
      <div className="py-10">
        <p className="mb-6 text-2xl">Add ingredient</p>
        <IngredientsCreateForm refreshIngredients={mutate} />
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
