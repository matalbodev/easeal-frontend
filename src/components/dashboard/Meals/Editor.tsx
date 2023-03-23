type PropsType = {
	date: string
}
const MealsEditor = (props: PropsType) => {
  const { date } = props
  return <>Here to edit meal for {date}</>
}

export default MealsEditor
