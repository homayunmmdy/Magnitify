import { InputHTMLAttributes } from "react";
import { AllowedColors, AllowedInputType } from "./AllowedOptions";

type BaseType = {
  id?: string;
  style?: string;
  ariaLabel?: string;
  icon?: JSX.Element;
  required?: boolean;
};

export type ButtonType = {
  title: string | JSX.Element;
  color: `btn-${AllowedColors}` | null;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  onClick?: () => void;
  onClickEvent?: (e: any) => void;
  removeDefaultStyle?: boolean;
} & Omit<BaseType, "required">;

export type InputType = {
  color?: `input-${AllowedColors}` ;
  type: AllowedInputType;
  placeholder?: string;
  onChange?: (e: any) => void;
  defaultChecked?: boolean;
  label?: string;
  checked?:boolean;
  removeDefaultStyle?:boolean;
} & BaseType & InputHTMLAttributes<HTMLInputElement>;

export type TextareaType = {
  name?: string;
  rows?: number;
  value?: string | number;
  color: `textarea-${AllowedColors}`| null;
  placeholder?: string;
  onChange?: (e: any) => void;
  label?: string;
} & BaseType;