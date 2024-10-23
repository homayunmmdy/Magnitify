import React from "react";
import Button from "../../components/Button";
import { ButtonType } from "@/types/FormFiledType";
import { render, screen } from "@testing-library/react";
import { Fa0 } from "react-icons/fa6";

describe("button components", () => {
  const defaultProps: ButtonType = {
    id: "1",
    title: "Click Here",
    icon: <Fa0 />,
    color: "btn-primary",
    type: "button",
    style: "text-white",
    disabled: true,
    onClick: vi.fn(),
    ariaLabel: "Click Button",
  };

  it("should render button with default value", () => {
    render(<Button {...defaultProps} />);

    const ButtonElement = screen.getByText("Click Here");

    expect(ButtonElement).toBeInTheDocument();
    expect(<Fa0 />).toBeDefined();
    expect(ButtonElement).toHaveClass("btn btn-primary");
    expect(ButtonElement).toHaveAttribute("type", "button");
    expect(ButtonElement).toHaveAttribute("id", "1");
    expect(ButtonElement).toHaveClass("text-white");
    expect(ButtonElement).toBeDisabled();
    expect(screen.getByLabelText("Click Button")).toBeInTheDocument();
  });

  it("should remove default style if user set removeDefaultStyle to true", () => {
    render(<Button {...defaultProps} removeDefaultStyle={true} color={null} />);

    expect(screen.queryByText("Click Here")).not.toHaveClass("btn");
  });
});
