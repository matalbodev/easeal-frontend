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

const PER_PAGE = 20;

type PropsTypes = {
  ingredients: {
    data: DBIngredient[];
    total: number;
  };
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
  const { ingredients: SSRData } = props;
  const { data, mutate, isLoading, isError } = useIngredients({
    data: SSRData.data,
    paginate: {
      limit: PER_PAGE,
      page: 0,
      total: SSRData.total,
    },
  });
  const { ingredients, total } = data;
  const [view, setView] = useState("table");
  const keys = Array.from(views.keys());
  const activeView = views.get(view);
  const DisplayIngredients = activeView?.component;

  const deleteIngredient = async (id: string) => {
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
  if (isError) {
    return <div>Error...</div>;
  }
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
      {isLoading ? (
        <div>Loading...</div>
      ) : DisplayIngredients ? (
        <DisplayIngredients
          data={ingredients}
          limit={PER_PAGE}
          isLoading={isLoading}
          deleteIngredient={deleteIngredient}
        />
      ) : null}
      <UIPagination total={total} />
      <div className="py-10">
        <p className="mb-6 text-2xl">Add ingredient</p>
        <IngredientsCreateForm refreshIngredients={mutate} />
      </div>
    </DashBoardLayout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let ingredients = [];
  const { page, filter } = context.query;

  try {
    const res = await fetch(
      `http://localhost:3001/ingredients?page=${
        page ? page : 0
      }&limit=${PER_PAGE}` + (filter ? `&filter=${filter}` : "")
    );
    ingredients = await res.json();
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      ingredients,
    },
  };
}

export default Ingredients;
