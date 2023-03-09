import { useState } from "react";
import SidePanelContext, {
  SidePanelContextStateType,
} from "./SidePanelContext";

const SidePanelProvider = ({ children }: { children: React.ReactNode }) => {
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const [state, setState] = useState<SidePanelContextStateType>({
    isOpen: false,
    title: "",
    content: null,
    props: {},
  });

  const showSidePanel = (content: React.ReactNode, title: string) => {
    setState({ ...state, content: content, title, isOpen: true });
    setTimeout(() => setTransitioning(true), 100);
  };

  const hideSidePanel = () => {
    setTransitioning(false);
    // wait for the transition to finish
    setTimeout(() => {
      setState({ ...state, isOpen: false, content: null });
    }, 300);
  };
  return (
    <SidePanelContext.Provider
      value={{ state, showSidePanel, hideSidePanel, transitioning }}
    >
      {children}
    </SidePanelContext.Provider>
  );
};

export default SidePanelProvider;
