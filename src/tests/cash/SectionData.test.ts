import SectionData from "../../etc/cash/SectionData";
import { SectionCashType } from "@/types/CashTypes";

describe("SectionData", () => {
  it("should have the correct structure", () => {
    expect(Array.isArray(SectionData)).toBe(true);
    expect(SectionData.length).toBeGreaterThan(0);

    SectionData.forEach((service: SectionCashType) => {
      expect(service).toHaveProperty("_id");
      expect(service).toHaveProperty("name");
      expect(service).toHaveProperty("secid");
      expect(service).toHaveProperty("createdAt");
      expect(service).toHaveProperty("updatedAt");
      expect(service).toHaveProperty("__v");
    });
  });

  it("should not have non-empty values", () => {
    SectionData.forEach((service: SectionCashType) => {
      expect(service.name.trim()).not.toBe("");
    });
  });

  it("should have show valid data string for date", () => {
    SectionData.forEach((services: SectionCashType) => {
      expect(isNaN(Date.parse(services.createdAt))).toBeFalsy();
      expect(isNaN(Date.parse(services.updatedAt))).toBeFalsy();
    });
  });

  it("should have unique _id value", () => {
    const idSet = new Set(SectionData.map((i) => i._id));
    expect(idSet.size).toBe(SectionData.length);
  });
});