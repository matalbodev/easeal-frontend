import SidePanelProvider from "../../context/SidePanelProvider"
import DashBoardContent from "./Content"
import DashBoardSidebar from "./Sidebar"
import SidePanel from './SidePanel'

type PropsTypes = {
	children: React.ReactNode
	title: string
}

const DashBoardLayout = (props: PropsTypes) => {
	const { children, title } = props
	return (
		<SidePanelProvider>
			<div className="flex min-h-screen flex-wrap">
				<DashBoardSidebar />
				<DashBoardContent>
					<h2 className="text-4xl font-semibold">{title}</h2>
					<div className="py-10">{children}</div>
				</DashBoardContent>
      </div>
      <SidePanel />
		</SidePanelProvider>
	)
}

export default DashBoardLayout
