import { InputType } from "@/types/FormFiledType";
import { render, screen } from "@testing-library/react";
import { FaUser } from "react-icons/fa";
import Input from "../../components/Input";
import React from 'react'

describe("Input Compoennets", () => {
  it("should render the input with default value", () => {
    const { inputElement } = renderComponents();

    expect(inputElement).toHaveAttribute("id", "1");
    expect(inputElement).toHaveAttribute("name", "sample name");
    expect(inputElement).toHaveClass("custom-style");
    expect(inputElement).toHaveAttribute("value", "john");
    expect(inputElement).toHaveClass("input input-bordered");
    expect(inputElement).toHaveClass("input-primary");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toBeRequired();
    expect(inputElement).toHaveProperty("defaultChecked");
  });

  it("should render input with icon", () => {
    const { labelElement, inputElement } = renderComponents({
      icon: <FaUser />,
    });

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass("flex items-center gap-2");
    expect(labelElement).toHaveClass("input input-bordered");
    expect(inputElement).toHaveClass("custom-style");
    expect(labelElement).toHaveClass("input-primary");
  });

  it("should applies the correct class based on style and color props", () => {
    const { inputElement } = renderComponents({
      style: "custom-style",
      color: "input-primary",
    });

    expect(inputElement).toHaveClass(
      "input input-bordered custom-style input-primary"
    );
  });
  it("should applies the correct class based on style and color props for input with icon", () => {
    const { inputElement, labelElement } = renderComponents({
      icon: <FaUser />,
      style: "custom-style",
      color: "input-primary",
    });

    expect(labelElement).toHaveClass(
      "input input-bordered  input-primary flex items-center gap-2"
    );
    expect(inputElement).toHaveClass("custom-style");
  });

  it("should remove default style if user set removeDefaultStyle to true", () => {
    const { inputElement } = renderComponents({ removeDefaultStyle: true});

    expect(inputElement).not.toHaveClass("input");
  });

  it('should return simple input if is not meet any of options', () => {
    const { inputElement, labelElement } = renderComponents({label: undefined});

    expect(labelElement).not.toBeInTheDocument();
    expect(inputElement).toHaveClass('input input-bordered')
  })
  
  const renderComponents = (props: Partial<InputType> = {}) => {
    const defaultProps: InputType = {
      id: "1",
      name: "sample name",
      style: "custom-style",
      value: "john",
      color: `input-primary`,
      type: "text",
      label: "label",
      placeholder: "Enter Text",
      onChange: vi.fn,
      required: true,
      defaultChecked: true,
    };
    render(<Input {...defaultProps} {...props} />);
    return {
      labelElement: screen.queryByTestId("label"),
      inputElement: screen.getByPlaceholderText("Enter Text"),
    };
  };
});
