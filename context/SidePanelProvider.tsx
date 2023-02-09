import { useState } from "react"
import SidePanelContext, { SidePanelContextState } from "./SidePanelContext"

const SidePanelProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, setState] = useState<SidePanelContextState>({
		isOpen: false,
		title: "",
		content: null,
		props: {},
	})

	const showSidePanel = (content: React.FunctionComponent<any>, props: {}, title: string) => {
		setState({ ...state, content: content, props, title, isOpen: true })
	}

	const hideSidePanel = () => {
		setState({ ...state, isOpen: false, content: null })
	}
	return <SidePanelContext.Provider value={{ state, showSidePanel, hideSidePanel }}>{children}</SidePanelContext.Provider>
}

export default SidePanelProvider
