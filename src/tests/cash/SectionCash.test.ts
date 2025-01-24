import { SectionCashType } from "@/types/CashTypes";
import SectionCash from "../../cash/SectionCash";

describe("Section Cash", () => {
  it("should have the correct structure", () => {
    expect(Array.isArray(SectionCash)).toBe(true);
    expect(SectionCash.length).toBeGreaterThan(0);

    SectionCash.forEach((service: SectionCashType) => {
      expect(service).toHaveProperty("_id");
      expect(service).toHaveProperty("name");
      expect(service).toHaveProperty("secid");
      expect(service).toHaveProperty("createdAt");
      expect(service).toHaveProperty("updatedAt");
      expect(service).toHaveProperty("__v");
    });
  });

  it("should not have non-empty values", () => {
    SectionCash.forEach((service: SectionCashType) => {
      expect(service.name.trim()).not.toBe("");
    });
  });

  it("should have show valid data string for date", () => {
    SectionCash.forEach((services: SectionCashType) => {
      expect(isNaN(Date.parse(services.createdAt))).toBeFalsy();
      expect(isNaN(Date.parse(services.updatedAt))).toBeFalsy();
    });
  });

  it("should have unique _id value", () => {
    const idSet = new Set(SectionCash.map((i) => i._id));
    expect(idSet.size).toBe(SectionCash.length);
  });
});
