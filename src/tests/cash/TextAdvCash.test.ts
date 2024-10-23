import TextAdvCash from "../../etc/cash/TextAdvCash";
import { TextAdvCashType } from "@/types/CashTypes";

describe("TextAdvCash", () => {
  it("should have the correct structure", () => {
    expect(Array.isArray(TextAdvCash)).toBe(true);
    expect(TextAdvCash.length).toBeGreaterThan(0);

    TextAdvCash.forEach((adv: TextAdvCashType) => {
      expect(adv).toHaveProperty("_id");
      expect(adv).toHaveProperty("textadvid");
      expect(adv).toHaveProperty("advname");
      expect(adv).toHaveProperty("body");
      expect(adv).toHaveProperty("link");
      expect(adv).toHaveProperty("createdAt");
      expect(adv).toHaveProperty("updatedAt");
      expect(adv).toHaveProperty("__v");
    });
  });

  it("should not have non-empty values", () => {
    TextAdvCash.forEach((adv: TextAdvCashType) => {
      expect(adv.advname.trim()).not.toBe("");
      expect(adv.body.trim()).not.toBe("");
      expect(adv.link.trim()).not.toBe("");
    });
  });

  it("should have show valid data string for date", () => {
    TextAdvCash.forEach((adv: TextAdvCashType) => {
      expect(isNaN(Date.parse(adv.createdAt))).toBeFalsy();
      expect(isNaN(Date.parse(adv.updatedAt))).toBeFalsy();
    });
  });

  it("should have unique _id value", () => {
    const idSet = new Set(TextAdvCash.map((i) => i._id));
    expect(idSet.size).toBe(TextAdvCash.length);
  });
});
