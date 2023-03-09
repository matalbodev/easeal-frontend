import { createContext } from "react";

export interface SidePanelContextStateType {
  isOpen: boolean;
  title: string;
  content: React.ReactNode;
  props: {};
}

const SidePanelContext = createContext<{
  state: SidePanelContextStateType;
  showSidePanel: (content: React.ReactNode, title: string) => void;
  hideSidePanel: () => void;
  transitioning: boolean;
}>({
  state: {
    isOpen: false,
    title: "",
    content: null,
    props: {},
  },
  transitioning: false,
  showSidePanel: () => {},
  hideSidePanel: () => {},
});

export default SidePanelContext;
