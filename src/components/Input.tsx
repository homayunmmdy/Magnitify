import React from "react";
import { InputType } from "@/types/FormFiledType";

const Input: React.FC<InputType> = ({
  id,
  style,
  value,
  placeholder,
  name,
  color,
  type,
  onChange,
  required,
  icon,
  label,
  defaultChecked,
}: InputType) => {
  const classes = `input input-bordered ${icon ? "" : style} ${
    color ? color : ""
  }`;
  return (
    <>
      {icon ? (
        <label
          data-testid="label"
          className={`${classes} flex items-center gap-2`}
        >
          {icon}
          <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            id={id}
            required={required}
            className={style}
            defaultChecked={defaultChecked}
          />
        </label>
      ) : label ? (
        <>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            value={value}
            className={classes}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            id={id}
            required={required}
          />
        </>
      ) : (
        <input
          type={type}
          value={value}
          className={classes}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          id={id}
          required={required}
        />
      )}
    </>
  );
};

export default Input;
