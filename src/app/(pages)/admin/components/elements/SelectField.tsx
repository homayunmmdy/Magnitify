import React from "react";

interface SelectFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { _id: string; name: string; secid: string }[];
  className?: string;
}

const SelectField = ({
  id,
  name,
  label,
  value,
  onChange,
  options,
  className = "select select-primary mb-2 w-full",
}: SelectFieldProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
      >
        {options.map((option) => (
          <option key={option._id} value={option.secid}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
