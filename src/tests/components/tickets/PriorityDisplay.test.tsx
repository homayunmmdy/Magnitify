import { render, screen } from "@testing-library/react";
import PriorityDisplay from "../../../components/tickets/PriorityDisplay";
import React from 'react'

describe("PriorityDisplay Components", () => {
  it.each([
    { amount: 0 },
    { amount: 1 },
    { amount: 2 },
    { amount: 3 },
    { amount: 4 },
    { amount: 5 },
  ])("Should show $amount fire when priority is $amount", ({ amount }) => {
    render(<PriorityDisplay priority={amount} />);
    const Icons = screen
      .queryAllByTestId("icon")
      .filter((icon) => icon.classList.contains("text-red-500"));

    expect(Icons).toHaveLength(amount);
  });
});
