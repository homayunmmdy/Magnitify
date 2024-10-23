import { EmailCashType } from "@/types/CashTypes";
import EmailData from "../../etc/cash/EmailData";

describe("EmailData", () => {
  it("should have the correct structure", () => {
    expect(Array.isArray(EmailData)).toBe(true);
    expect(EmailData.length).toBeGreaterThan(0);

    EmailData.forEach((email: EmailCashType) => {
      expect(email).toHaveProperty("_id");
      expect(email).toHaveProperty("email");
      expect(email).toHaveProperty("createdAt");
      expect(email).toHaveProperty("updatedAt");
      expect(email).toHaveProperty("__v");
    });
  });
  
  it("should have valid email addresses", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    EmailData.forEach((email: EmailCashType) => {
      expect(email.email).toMatch(emailRegex);
    });
  });

  it("should have valid date string for createdAt and updateAt", () => {
    EmailData.forEach((email: EmailCashType) => {
      expect(isNaN(Date.parse(email.createdAt))).toBeFalsy();
      expect(isNaN(Date.parse(email.updatedAt))).toBeFalsy();
    });
  });

  it("should have unique _id value", () => {
    const idSet = new Set(EmailData.map((i) => i._id));
    expect(idSet.size).toBe(EmailData.length);
  });
});
