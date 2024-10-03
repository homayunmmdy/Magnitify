import React from "react";
import Titr from "../../components/Titr";
import { render, screen } from '@testing-library/react'

describe("Titr Components", () => {
  const defaultProps = {
    title: "posts",
    item: "text-left",
    style: "font-bold",
  };

  it("should render correctly", () => {
    render(<Titr {...defaultProps} />);

    const titr = screen.getByText(/posts/i)

    expect(titr).toBeInTheDocument()
    expect(titr).toHaveClass('font-bold')
    expect(titr).toHaveClass('text-left')
  });
});
