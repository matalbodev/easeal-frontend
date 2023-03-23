import Navigation from "./Navigation";

const DashBoardSidebar = () => {
  return (
    <div className="w-1/5 shrink-0 bg-neutral-100 pb-10">
      <div className="bg-easeal-blue px-10 py-8">
        <h1 className="text-4xl font-semibold text-white">Easeal</h1>
        <p className="text-white">Your easy meal planner</p>
      </div>
      <Navigation />
    </div>
  );
};

export default DashBoardSidebar;
