import ContributionCash from "@/etc/cash/ContributionCash";
import { ContributeCashType } from "@/types/CashTypes";

describe("Points Cash", () => {
  it("should have the correct structure", () => {
    expect(Array.isArray(ContributionCash)).toBe(true);
    expect(ContributionCash.length).toBeGreaterThan(0);

    ContributionCash.forEach((contribute: ContributeCashType) => {
      expect(contribute).toHaveProperty("_id");
      expect(contribute).toHaveProperty("title");
      expect(contribute).toHaveProperty("description");
      expect(contribute).toHaveProperty("link");
      expect(contribute).toHaveProperty("date");
      expect(contribute).toHaveProperty("createdAt");
      expect(contribute).toHaveProperty("updatedAt");
      expect(contribute).toHaveProperty("__v");
    });
  });

  it("should not have non-empty values", () => {
    ContributionCash.forEach((contribute: ContributeCashType) => {
      expect(contribute.title.trim()).not.toBe("");
      expect(contribute.description.trim()).not.toBe("");
      expect(contribute.link.trim()).not.toBe("");
    });
  });

  it("should have show valid data string for date", () => {
    ContributionCash.forEach((contribute: ContributeCashType) => {
      expect(isNaN(Date.parse(contribute.date))).toBeFalsy();
      expect(isNaN(Date.parse(contribute.createdAt))).toBeFalsy();
      expect(isNaN(Date.parse(contribute.updatedAt))).toBeFalsy();
    });
  });

  it("should have unique _id value", () => {
    const idSet = new Set(ContributionCash.map((i) => i._id));
    expect(idSet.size).toBe(ContributionCash.length);
  });
});
