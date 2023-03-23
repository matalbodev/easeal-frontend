type InputProps = {
  placeholder: string;
  type: string;
  name: string;
  id: string;
};

const UIInput = (props: InputProps) => {
  return (
    <input
      placeholder={props.placeholder}
      className="block rounded-md bg-white p-3 shadow-lg focus:shadow-none focus:ring-2 focus:ring-blue-500"
      type={props.type}
      name={props.name}
      id={props.id}
    />
  );
};

export default UIInput;
