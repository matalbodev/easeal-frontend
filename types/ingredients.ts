export type Ingredient = {
  id: string;
  name: string;
  kcal: number;
  mainType: string;
};
export interface DBIngredient extends Ingredient {
  createdAt: Date;
  updatedAt: Date;
}
