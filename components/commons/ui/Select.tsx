type SelectProps = {
  options: {
    value: string;
    label: string;
  }[];
  onChange: (value: string) => void;
};

const UISelect = (props: SelectProps) => {
  const { options, onChange } = props;

  return (
    <select
      className="block py-2 px-4 shadow-md"
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default UISelect;
