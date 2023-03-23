import { FormEvent } from "react";
import UIButton from "../../../commons/ui/Button";
import useSWR from "swr";
import { fetcher } from "../../../../../utils/fetcher";
import UIInput from "../../../commons/ui/Input";

type PropsTypes = {
  refreshIngredients: () => void;
};

const IngredientsCreateForm = (props: PropsTypes) => {
  const { refreshIngredients } = props;
  const createIngredient = async (data: any) => {
    const response = await fetch("/api/ingredients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    if (response.status !== 200) {
      console.error(json);
    }
    refreshIngredients();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());

    const parsedValue = {
      ...values,
      kcal: parseInt(values.kcal as string),
    };
    createIngredient(parsedValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-4">
        <div className="flex flex-col">
          <UIInput placeholder="Name" type="text" name="name" id="name" />
        </div>
        <div className="flex flex-col">
          <UIInput placeholder="Kcal" type="number" name="kcal" id="kcal" />
        </div>
        <div className="flex flex-col">
          <UIInput
            placeholder="Type"
            type="text"
            name="mainType"
            id="mainType"
          />
        </div>
        <UIButton type="submit" color="primary">
          Create
        </UIButton>
      </div>
    </form>
  );
};

export default IngredientsCreateForm;
