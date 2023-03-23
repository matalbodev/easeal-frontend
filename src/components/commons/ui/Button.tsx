type PropsTypes = {
  children: string;
  color: "primary" | "secondary" | "danger" | "success" | "warning";
  action?: () => void;
  type?: "button" | "submit" | "reset";
};
const UIButton = (props: PropsTypes) => {
  const { children, color, action, type } = props;
  const colorClass = {
    primary: "bg-easeal-blue hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    danger: "bg-red-500 hover:bg-red-700 text-white",
    success: "bg-green-500 hover:bg-green-700 text-white",
    warning: "bg-yellow-500 hover:bg-yellow-700 text-white",
  };
  return (
    <button
      type={type || "button"}
      onClick={action ? action : () => {}}
      className={`rounded-md bg-white px-10 py-3 shadow-xl transition-colors ${colorClass[color]}`}
    >
      {children}
    </button>
  );
};

export default UIButton;
