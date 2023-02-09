import useSidePanel from "../../hooks/useSidePanel"
import { XMarkIcon } from "@heroicons/react/24/outline"

const SidePanel = () => {
	const { state, hideSidePanel } = useSidePanel()
	const Content = state?.content || null
	return state.isOpen ? (
		<div className="w-full h-full fixed z-50 inset-0">
			<div className="w-full h-full absolute bg-gray-900 opacity-50"></div>
			<div className="w-1/3 h-full absolute bg-white right-0 top-0 p-10">
				<div className="flex justify-end">
					<div className="text-2xl font-semibold">{state.title}</div>
					<button onClick={hideSidePanel}>
						<XMarkIcon className="w-6 h-6" />
					</button>
				</div>
				{Content && <Content {...state.props} />}
			</div>
		</div>
	) : null
}

export default SidePanel
