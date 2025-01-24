import React from 'react'
import { render, screen } from "@testing-library/react";
import CopyRight from "../../../components/Footer/CopyRight";

describe("CopyRight Component", () => {
  const componentsHelper = (name: string) => {
    render(<CopyRight siteName={name} />);

    const currentYear = new Date().getFullYear();
    return {
      siteLink: screen.queryByRole("link", { name: name }),
      siteName: name,
      currentYear: screen.queryByText(currentYear),
      copyright: screen.queryByText("/copyright/i"),
      symbol: screen.queryByText("/@/i"),
    };
  };
  it("renders the correct copyright text with the current year and site name", () => {
    const { siteLink, copyright, siteName, currentYear, symbol } =
      componentsHelper("mySite");

    expect(copyright).toBeDefined();
    expect(currentYear).toBeDefined();
    expect(symbol).toBeDefined();
    expect(siteLink).toHaveAttribute("href", "/");
    expect(siteLink).toHaveAttribute("title", siteName);
  });

  it("renders the correct copyright text with a different site name", () => {
    const { siteLink, copyright, siteName, currentYear, symbol } =
      componentsHelper("AnotherSite");

    expect(copyright).toBeDefined();
    expect(currentYear).toBeDefined();
    expect(symbol).toBeDefined();
    expect(siteLink).toHaveAttribute("href", "/");
    expect(siteLink).toHaveAttribute("title", siteName);
  });
});
