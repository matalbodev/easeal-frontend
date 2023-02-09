import { Meal } from '../../../types/meals'
import MealCard from "./Card"
type PropsType = {
	data: Meal[]
}
const MealsList = (props: PropsType) => {
	const meals = props.data
  console.log(meals)
	return (
		<div className="flex space-x-4">
			{meals ? (
				meals.map((meal) => {
					return (
						<div key={meal.id}>
							<MealCard data={meal} />
						</div>
					)
				})
			) : (
				<div>No meals here...</div>
			)}
		</div>
	)
}

export default MealsList
