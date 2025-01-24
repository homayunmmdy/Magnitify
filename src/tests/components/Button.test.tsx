import React from 'react'
import { ButtonType } from "@/types/FormFiledType";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Fa0 } from "react-icons/fa6";
import Button from "../../components/Button";

describe("Button component", () => {
  const defaultProps: ButtonType = {
    id: "1",
    color: "btn-primary",
    type: "button",
    className: "text-white",
    disabled: true,
    onClick: vi.fn(),
    children: (
      <>
        <Fa0 /> Click Here
      </>
    ),
    ariaLabel: "Click Button",
  };

  it("should render button with default attributes", () => {
    const { btn } = renderComponents();

    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute("type", "button");
    expect(btn).toHaveAttribute("id", "1");
    expect(btn).toBeDisabled();
    expect(btn).toHaveAccessibleName("Click Button");
  });

  it("should not call onClick when button is disabled", async () => {
    const { btn, user } = renderComponents();

    await user.click(btn);

    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });

  it("should render children inside button", () => {
    render(<Button {...defaultProps} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("Click Here");
  });

  it("should apply removeDefaultStyle prop correctly", () => {
    render(<Button {...defaultProps} removeDefaultStyle={true} color='btn-null' className='text-white'/>);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).not.toHaveClass("btn");
    expect(buttonElement).toHaveClass("text-white");
  });

  it("should render button with the correct aria-label", () => {
    render(<Button {...defaultProps} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveAttribute("aria-label", "Click Button");
  });

  it("should apply button type attribute correctly", () => {
    render(<Button {...defaultProps} type="submit" />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveAttribute("type", "submit");
  });

  it("should handle missing id attribute gracefully", () => {
    render(<Button {...defaultProps} id={undefined} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).not.toHaveAttribute("id");
  });

  const renderComponents = () => {
    const defaultProps: ButtonType = {
      id: "1",
      color: "btn-primary",
      type: "button",
      className: "text-white",
      disabled: true,
      onClick: vi.fn(),
      children: (
        <>
          <Fa0 /> Click Here
        </>
      ),
      ariaLabel: "Click Button",
    };
    render(<Button {...defaultProps} />);

    return {
      btn: screen.getByRole("button"),
      user: userEvent.setup(),
    };
  };
});
