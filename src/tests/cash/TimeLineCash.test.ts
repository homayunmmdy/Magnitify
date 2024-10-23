import { TimeLIneCashType } from "@/types/CashTypes";
import TimeLineCash from "../../etc/cash/TimeLineCash";

describe("TimeLineCash", () => {
  it("should have the correct structure", () => {
    expect(Array.isArray(TimeLineCash)).toBe(true);
    expect(TimeLineCash.length).toBeGreaterThan(0);

    TimeLineCash.forEach((time: TimeLIneCashType) => {
      expect(time).toHaveProperty("_id");
      expect(time).toHaveProperty("title");
      expect(time).toHaveProperty("date");
      expect(time).toHaveProperty("description");
      expect(time).toHaveProperty("createdAt");
      expect(time).toHaveProperty("updatedAt");
      expect(time).toHaveProperty("__v");
    });
  });

  it("should have non-empty title and description", () => {
    TimeLineCash.forEach((time: TimeLIneCashType) => {
      expect(time.title.trim()).not.toBe("");
      expect(time.description.trim()).not.toBe("");
    });
  });

  it("should have valid date string for date, createdAt and updateAt", () => {
    TimeLineCash.forEach((time: TimeLIneCashType) => {
      expect(isNaN(Date.parse(time.date))).toBeFalsy();
      expect(isNaN(Date.parse(time.createdAt))).toBeFalsy();
      expect(isNaN(Date.parse(time.updatedAt))).toBeFalsy();
    });
  });

  it("should have unique _id value", () => {
    const idSet = new Set(TimeLineCash.map((i) => i._id));
    expect(idSet.size).toBe(TimeLineCash.length);
  });
});
