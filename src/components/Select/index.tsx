import classNames from 'classnames';

interface SelectOption {
  value: string;
  label: string;
}

interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  placeholder: string;
}

const Select = ({ placeholder, options, className, ...rest }: ISelectProps) => {
  return (
    <select className={classNames(className, 'bg-gray-10 py-3 w-full rounded-xl px-6 text-gray-60')} {...rest}>
      <option hidden>{placeholder}</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
export default Select;
