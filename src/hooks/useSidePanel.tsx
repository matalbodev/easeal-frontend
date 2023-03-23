import { useContext } from "react";
import SidePanelContext from "../context/SidePanelContext";

const useSidePanel = () => {
  const context = useContext(SidePanelContext);

  if (context === undefined) {
    throw new Error("useSidePanel must be used within a SidePanelProvider");
  }

  return context;
};

export default useSidePanel;
