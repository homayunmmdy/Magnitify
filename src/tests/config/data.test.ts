import React from 'react'
import { describe, expect, it } from "vitest";
import { features, FooterLinkData, PriceItemDate } from "../../config/data";

describe("Features Data", () => {
  it("should have the correct structure and length", () => {
    expect(Array.isArray(features)).toBe(true);
    expect(features).toHaveLength(4);
  });

  it("should have valid properties for each feature", () => {
    features.forEach((feature) => {
      expect(feature).toHaveProperty("id");
      expect(feature).toHaveProperty("title");
      expect(feature).toHaveProperty("icon");
      expect(feature).toHaveProperty("description");

      expect(typeof feature.id).toBe("number");
      expect(typeof feature.title).toBe("string");
      expect(typeof feature.description).toBe("string");
      expect(feature.icon).toBeTruthy();
    });
  });

  it("should contain the expected feature titles", () => {
    const expectedTitles = [
      "Full CRUD",
      "Access All your posts Easily",
      "FeedBack",
      "Services",
    ];

    const actualTitles = features.map((feature) => feature.title);
    expect(actualTitles).toEqual(expectedTitles);
  });
});

describe("Footer Link Data", () => {
  it("should have the correct structure and length", () => {
    expect(Array.isArray(FooterLinkData)).toBe(true);
    expect(FooterLinkData).toHaveLength(8);
  });

  it("should have valid properties for each footer link", () => {
    FooterLinkData.forEach((link) => {
      expect(link).toHaveProperty("id");
      expect(link).toHaveProperty("title");
      expect(link).toHaveProperty("href");
      expect(link).toHaveProperty("icon");

      expect(typeof link.id).toBe("number");
      expect(typeof link.title).toBe("string");
      expect(typeof link.href).toBe("string");
      expect(link.icon).toBeTruthy();
    });
  });

  it("should have valid href formats", () => {
    FooterLinkData.forEach((link) => {
      expect(link.href).toMatch(/^\/.*$/); // Should start with /
    });
  });

  it("should contain all expected routes", () => {
    const expectedRoutes = [
      "/",
      "/FAQs",
      "/privacy_policy",
      "/tickets/new",
      "/contribution",
      "/about",
      "/contacts",
      "/time",
    ];
    const actualRoutes = FooterLinkData.map((link) => link.href);
    expect(actualRoutes).toEqual(expectedRoutes);
  });
});

describe("Price Item Data", () => {
  it("should have the correct structure and length", () => {
    expect(Array.isArray(PriceItemDate)).toBe(true);
    expect(PriceItemDate).toHaveLength(3);
  });

  it("should have valid properties for each price item", () => {
    PriceItemDate.forEach((item) => {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("special");
      expect(item).toHaveProperty("titr");
      expect(item).toHaveProperty("description");
      expect(item).toHaveProperty("features");

      expect(typeof item.id).toBe("number");
      expect(typeof item.special).toBe("boolean");
      expect(typeof item.titr).toBe("string");
      expect(typeof item.description).toBe("string");
      expect(Array.isArray(item.features)).toBe(true);
    });
  });

  it("should have valid features structure for each price item", () => {
    PriceItemDate.forEach((item) => {
      item.features.forEach((feature) => {
        expect(feature).toHaveProperty("id");
        expect(feature).toHaveProperty("name");
        expect(feature).toHaveProperty("mark");

        expect(typeof feature.id).toBe("number");
        expect(typeof feature.name).toBe("string");
        expect(typeof feature.mark).toBe("boolean");
      });
    });
  });

  it("should have the correct pricing tiers", () => {
    const expectedTiers = ["Basic", "Premium", "Pro"];
    const actualTiers = PriceItemDate.map((item) => item.titr);
    expect(actualTiers).toEqual(expectedTiers);
  });

  it("should have Premium as the only special tier", () => {
    const premiumItem = PriceItemDate.find((item) => item.titr === "Premium");
    const nonPremiumItems = PriceItemDate.filter(
      (item) => item.titr !== "Premium"
    );

    expect(premiumItem?.special).toBe(true);
    nonPremiumItems.forEach((item) => {
      expect(item.special).toBe(false);
    });
  });
});
