export type Meal = {
  id: string;
  name: string;
  ingredients: string[];
};

export interface DBMeal extends Meal {
  createdAt: Date;
  updatedAt: Date;
}
