import React from 'react'
import { render, screen } from "@testing-library/react";
import ReactQueryProvider from "../../components/ReactQueryProvider";

describe("ReactQueryProvider", () => {
  it("renders children and provides QueryClientProvider context", () => {
    const testMessage = "Test Child";
    render(
      <ReactQueryProvider>
        <div>{testMessage}</div>
      </ReactQueryProvider>
    );

    // Check if the child component is rendered
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
