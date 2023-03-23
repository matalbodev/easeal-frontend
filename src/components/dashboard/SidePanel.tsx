import clsx from "clsx";
import useSidePanel from "../../hooks/useSidePanel";
import { XMarkIcon } from "@heroicons/react/24/outline";
const SidePanel = () => {
  const { state, hideSidePanel, transitioning } = useSidePanel();
  const content = state?.content || null;

  return state.isOpen ? (
    <div
      className={clsx(`fixed inset-0 z-50 h-full w-full`, {
        "transition-opacity duration-300 ease-in-out": true,
        "opacity-100": transitioning,
        "opacity-0": !transitioning,
      })}
    >
      <div
        onClick={hideSidePanel}
        className="absolute h-full w-full bg-gray-900 opacity-50"
      ></div>
      <div
        className={clsx("absolute right-0 top-0 h-full w-1/2 bg-white p-10", {
          "transition-transform duration-300 ease-in-out": true,
          "translate-x-0 transform": transitioning,
          "translate-x-full transform": !transitioning,
        })}
      >
        <div className="mb-8 flex justify-end">
          <div className="mr-16 text-2xl font-semibold">{state.title}</div>
          <button className="ml-auto" onClick={hideSidePanel}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        {content}
      </div>
    </div>
  ) : null;
};

export default SidePanel;
