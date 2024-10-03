import React from "react";
import { render, screen } from "@testing-library/react";
import FullHoverAnimation from "../../components/FullHoverAnimation";

describe("FullHoverAnimation components", () => {
  it("should render correctly without link", () => {
    render(<FullHoverAnimation text="text" />);

    expect(screen.getByText("text")).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
  it("should render correctly with link", () => {
    render(<FullHoverAnimation text="text" link="https://google.com" />);

    expect(screen.getByText("text")).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
