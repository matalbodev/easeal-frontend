import Navigation from "./Navigation"

const DashBoardSidebar = () => {
	return (
		<div className="w-1/4 bg-neutral-100 shrink-0 pb-10">
			<div className="bg-easeal-blue px-10 py-16">
				<h1 className="text-white text-4xl font-semibold">Easeal</h1>
				<p className="text-white">Your easy meal planner</p>
			</div>
			<Navigation />
		</div>
	)
}

export default DashBoardSidebar
