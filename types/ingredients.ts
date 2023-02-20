type MainType = 'carbohydrates'

export type Ingredient = {
  id: string;
  name: string;
  kcal: number;
  mainType: MainType;
};
export interface DBIngredient extends Ingredient {
  createdAt: Date;
  updatedAt: Date;
}
