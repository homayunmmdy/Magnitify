import { EmailCashType } from "@/types/CashTypes";
import EmailCash from "../../cash/EmailCash";

describe("Email Cash", () => {
  it("should have the correct structure", () => {
    expect(Array.isArray(EmailCash)).toBe(true);
    expect(EmailCash.length).toBeGreaterThan(0);

    EmailCash.forEach((email: EmailCashType) => {
      expect(email).toHaveProperty("_id");
      expect(email).toHaveProperty("email");
      expect(email).toHaveProperty("createdAt");
      expect(email).toHaveProperty("updatedAt");
      expect(email).toHaveProperty("__v");
    });
  });

  it("should have valid email addresses", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    EmailCash.forEach((email: EmailCashType) => {
      expect(email.email).toMatch(emailRegex);
    });
  });

  it("should have valid date string for createdAt and updateAt", () => {
    EmailCash.forEach((email: EmailCashType) => {
      expect(isNaN(Date.parse(email.createdAt))).toBeFalsy();
      expect(isNaN(Date.parse(email.updatedAt))).toBeFalsy();
    });
  });

  it("should have unique _id value", () => {
    const idSet = new Set(EmailCash.map((i) => i._id));
    expect(idSet.size).toBe(EmailCash.length);
  });
});
