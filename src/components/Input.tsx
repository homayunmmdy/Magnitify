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
  checked,
  removeDefaultStyle,
  min ,
  max
}: InputType) => {
  const classes = removeDefaultStyle ? style :`input input-bordered ${icon ? "" : style} ${color}`;
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
            checked={checked}
            min={min}
            max={max}
            defaultChecked={defaultChecked}
          />
        </label>
      ) : label ? (
        <>
          <label data-testid="label" htmlFor={id}>{label}</label>
          <input
            type={type}
            value={value}
            className={classes}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            id={id}
            min={min}
            max={max}
            checked={checked}
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
          min={min}
          max={max}
          checked={checked}
          required={required}
        />
      )}
    </>
  );
};

export default Input;
