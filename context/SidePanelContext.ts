import { createContext } from "react"

export interface SidePanelContextState {
	isOpen: boolean
	title: string
	content: React.FunctionComponent<any> | null
	props: {}
}

const SidePanelContext = createContext<{
	state: SidePanelContextState
	showSidePanel: (content: React.FunctionComponent<any>, props: {}, title:string) => void
	hideSidePanel: () => void
}>({
	state: {
		isOpen: false,
		title: "",
		content: null,
		props: {},
	},
	showSidePanel: () => {},
	hideSidePanel: () => {},
})

export default SidePanelContext
