import { TextareaType } from "@/types/FormFiledType";
import React from "react";

const Textarea: React.FC<TextareaType> = ({
  id,
  style,
  value,
  placeholder,
  name,
  rows,
  color,
  onChange,
  required,
  label,
  icon,
}: TextareaType) => {
  const classes = `textarea textarea-bordered ${icon ? "" : style} ${
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
          <textarea
            value={value}
            rows={rows}
            className={style}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            id={id}
            required={required}
          />
        </label>
      ) : label ? (
        <>
          <label htmlFor={id}>{label}</label>
          <textarea
            value={value}
            rows={rows}
            className={classes}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            id={id}
            required={required}
          />
        </>
      ) : (
        <textarea
          value={value}
          rows={rows}
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

export default Textarea;
