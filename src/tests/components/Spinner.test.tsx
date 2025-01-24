import React from 'react'
import { render, screen } from "@testing-library/react";
import Spinner from "../../components/Spinner";

describe("Spinner Component", () => {
  it("renders the spinner correctly", () => {
    render(<Spinner />);

    // Check if the spinner container is rendered
    const spinnerContainer = screen.getByTestId("spinnerContainer");
    expect(spinnerContainer).toBeInTheDocument();

    // Check if the spinner element is rendered
    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement).toHaveClass("loading-spinner");
    expect(spinnerElement).toHaveClass("text-primary");
    expect(spinnerElement).toHaveClass("loading-lg");
  });
});
