import UISelect from "../../../commons/ui/Select";

const foodTypes = new Map([
  ["", "All"],
  ["carbohydrate", "Carbohydrate"],
  ["fiber", "Fiber"],
  ["protein", "Protein"],
  ["fat", "Fat"],
]);

type PropsTypes = {
  getFilterCriteria: (criteria: string) => void;
};

const IngredientsListFilter = (props: PropsTypes) => {
  const { getFilterCriteria } = props;
  return (
    <UISelect
      options={Array.from(foodTypes).map(([key, value]) => ({
        value: key,
        label: value,
      }))}
      onChange={(value) => getFilterCriteria(value)}
    />
  );
};

export default IngredientsListFilter;
