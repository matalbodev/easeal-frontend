import { NextPage } from "next";
import SidePanelProvider from "../../context/SidePanelProvider";
import DashBoardContent from "./Content";
import DashBoardSidebar from "./Sidebar";
import SidePanel from "./SidePanel";
import { Fragment } from "react";
import useSidePanel from "../../hooks/useSidePanel";
import UIButton from "../commons/ui/Button";

type PropsTypes = {
  children: React.ReactNode;
  title: string;
  actions?: React.ReactNode[];
};

const DashBoardLayout: NextPage<PropsTypes> = ({
  children,
  title,
  actions,
}) => {
  const { showSidePanel } = useSidePanel();
  return (
    <div className="flex min-h-screen flex-wrap">
      <DashBoardSidebar />
      <DashBoardContent>
        <div className="flex items-center">
          <h2 className="text-4xl font-semibold">{title}</h2>
          {actions && (
            <div className="ml-16 flex items-center">
              {actions.map((action, index) => (
                <Fragment key={index}>{action}</Fragment>
              ))}
            </div>
          )}
        </div>
        <div className="py-10">{children}</div>
      </DashBoardContent>
    </div>
  );
};

export default DashBoardLayout;
