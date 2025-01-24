import React from 'react'
import { render, screen } from "@testing-library/react";
import MainSec from "../../../components/skelton/MainSec";

describe("MainSec Component", () => {
  it("renders the MainSec component with two grid items", () => {
    render(<MainSec />);

    // Check if the main grid container is rendered
    const gridContainer = screen.getByTestId("mainGrid");
    expect(gridContainer).toBeInTheDocument();

    // Check if there are two grid items rendered
    const skeletonLoaders = screen.getAllByTestId("gridItem");
    expect(skeletonLoaders).toHaveLength(2);
  });

  it('renders skeleton loaders inside each grid item', () => {
    render(<MainSec />);

    // Check if skeleton loaders are rendered inside each grid item
    const skeletonLoaders = screen.getAllByTestId('skeletonLoader');
    expect(skeletonLoaders).toHaveLength(4); // 2 large skeletons and 2 small skeletons

    // Verify that each grid item contains two skeleton loaders
    const gridItems = screen.getAllByTestId("gridItem");

    gridItems.forEach((gridItem) => {
      const skeletons = gridItem.querySelectorAll('[data-testid="skeletonLoader"]');
      expect(skeletons).toHaveLength(2); // One large and one small skeleton per grid item
    });
  });
});
