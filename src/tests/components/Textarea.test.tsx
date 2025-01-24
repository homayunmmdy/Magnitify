import React from 'react'
import { TextareaType } from "@/types/FormFiledType";
import { render, screen } from "@testing-library/react";
import { FaUser } from "react-icons/fa";
import Textarea from "../../components/Textarea";

describe("textarea Compoennets", () => {
  it("should render the textarea with default value", () => {
    const { TextareaElement } = renderComponents();

    expect(TextareaElement).toHaveAttribute("id", "1");
    expect(TextareaElement).toHaveAttribute("name", "sample name");
    expect(TextareaElement).toHaveClass("custom-style");
    expect(TextareaElement).toHaveAttribute("rows", "2");
    expect(TextareaElement).toHaveClass("textarea textarea-bordered");
    expect(TextareaElement).toHaveClass("textarea-primary");
    expect(TextareaElement).toBeInTheDocument();
    expect(TextareaElement).toBeRequired();
  });

  it("should render textarea with icon", () => {
    const { labelElement, TextareaElement } = renderComponents({
      icon: <FaUser />,
    });

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass("flex items-center gap-2");
    expect(labelElement).toHaveClass("textarea textarea-bordered");
    expect(TextareaElement).toHaveClass("custom-style");
    expect(labelElement).toHaveClass("textarea-primary");
  });

  it("should applies the correct class based on style and color props", () => {
    const { TextareaElement } = renderComponents({
      style: "custom-style",
      color: "textarea-primary",
    });

    expect(TextareaElement).toHaveClass(
      "textarea textarea-bordered custom-style textarea-primary"
    );
  });
  it("should applies the correct class based on style and color props for textarea with icon", () => {
    const { TextareaElement, labelElement } = renderComponents({
      icon: <FaUser />,
      style: "custom-style",
      color: "textarea-primary",
    });

    expect(labelElement).toHaveClass(
      "textarea textarea-bordered  textarea-primary flex items-center gap-2"
    );
    expect(TextareaElement).toHaveClass("custom-style");
  });

  it("should return simple textarea if is not meet any of options", () => {
    const { TextareaElement, labelElement } = renderComponents({
      label: undefined,
    });

    expect(labelElement).not.toBeInTheDocument();
    expect(TextareaElement).toHaveClass("textarea textarea-bordered");
  });

  const renderComponents = (props: Partial<TextareaType> = {}) => {
    const defaultProps: TextareaType = {
      id: "1",
      style: "custom-style",
      ariaLabel: "textarea label",
      name: "sample name",
      rows: 2,
      value: "john",
      color: `textarea-primary`,
      label: "label",
      placeholder: "Enter Text",
      onChange: vi.fn,
      required: true,
    };
    render(<Textarea {...defaultProps} {...props} />);
    return {
      labelElement: screen.queryByTestId("label"),
      TextareaElement: screen.getByPlaceholderText("Enter Text"),
    };
  };
});
