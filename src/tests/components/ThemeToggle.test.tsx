import React from 'react'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeToggle from "../../components/ThemeToggle";

describe("ThemeToggle", () => {
  const componentsHelper = () => {
    render(<ThemeToggle />);

    return {
      lightIcon: screen.getByTestId('light'),
      darkIcon: screen.getByTestId('dark'),
      user: userEvent.setup(),
      checkbox: screen.getByRole("checkbox"),
    };
  };
  it("renders the light mode icon initially", () => {
    const { lightIcon } = componentsHelper();

    expect(lightIcon).toBeInTheDocument();
    expect(lightIcon).toHaveClass("swap-off");
  });

  it("toggles to dark mode when clicked", () => {
    const { user, darkIcon, checkbox } = componentsHelper();

    user.click(checkbox);

    expect(darkIcon).toBeInTheDocument();
    expect(darkIcon).toHaveClass("swap-on");
  });

  it("toggles back to light mode when clicked twice", () => {
    const { user, lightIcon, checkbox } = componentsHelper();

    user.click(checkbox); // Toggle to dark mode
    user.click(checkbox); // Toggle back to light mode

    expect(lightIcon).toBeInTheDocument();
    expect(lightIcon).toHaveClass("swap-off");
  });

  it("renders with correct aria-labels", () => {
    const { user, checkbox } = componentsHelper();

    const lightModeIcon = screen.getByLabelText("light Mode themeToggle icon");
    expect(lightModeIcon).toBeInTheDocument();

    user.click(checkbox);

    const darkModeIcon = screen.getByLabelText("dark Mode themeToggle");
    expect(darkModeIcon).toBeInTheDocument();
  });
});
