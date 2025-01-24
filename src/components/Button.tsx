import React from "react";
import { ButtonType } from "@/types/FormFiledType";

const Button: React.FC<ButtonType> = ({
  id,
  children,
  color,
  className,
  onClick,
  disabled,
  type,
  ariaLabel,
  value,
  form,
  removeDefaultStyle,
}: ButtonType) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      id={id}
      value={value}
      form={form}
      className={removeDefaultStyle ? ` ${className}` : `btn ${color === 'btn-null' ? '' : color} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
