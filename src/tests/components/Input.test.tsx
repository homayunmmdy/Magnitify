import React from "react";
import Input from "../../components/Input";
import { InputType } from "@/types/FormFiledType";
import { render, screen } from "@testing-library/react";
import { FaUser } from "react-icons/fa";

describe("Input Compoennets", () => {
  const defaultProps: InputType = {
    id: "1",
    name: "sample name",
    style: "custom-style",
    value: "john",
    color: `input-primary`,
    type: "text",
    placeholder: "Enter Text",
    onChange: vi.fn,
    required: true,
    defaultChecked: true,
  };
  it("should render the input with default value", () => {
    render(<Input {...defaultProps} />);

    const inputElement = screen.getByPlaceholderText("Enter Text");

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
    render(<Input {...defaultProps} icon={<FaUser />} />);
    const labelElement = screen.getByTestId("label");
    const inputElement = screen.getByPlaceholderText("Enter Text");

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass("flex items-center gap-2");
    expect(labelElement).toHaveClass("input input-bordered");
    expect(inputElement).toHaveClass("custom-style");
    expect(labelElement).toHaveClass("input-primary");
  });

  it("should applies the correct class based on style and color props", () => {
    render(
      <Input {...defaultProps} style="custom-style" color="input-primary" />
    );

    const inputElement = screen.getByPlaceholderText("Enter Text");
    expect(inputElement).toHaveClass(
      "input input-bordered custom-style input-primary"
    );
  });
  it("should applies the correct class based on style and color props for input with icon", () => {
    render(
      <Input {...defaultProps} icon={<FaUser />} style="custom-style" color="input-primary" />
    );
    const labelElement = screen.getByTestId("label");
    const inputElement = screen.getByPlaceholderText("Enter Text");

    expect(labelElement).toHaveClass(
      "input input-bordered  input-primary flex items-center gap-2"
    );
    expect(inputElement).toHaveClass(
      "custom-style"
    );
  });
});
