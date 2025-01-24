import { ContactsCashType } from "@/types/CashTypes";
import ContactsCash from "../../cash/ContactsCash";

describe("Contacts Cash", () => {
  it("should have the correct structure", () => {
    expect(Array.isArray(ContactsCash)).toBe(true);
    expect(ContactsCash.length).toBeGreaterThan(0);

    ContactsCash.forEach((contact: ContactsCashType) => {
      expect(contact).toHaveProperty("_id");
      expect(contact).toHaveProperty("name");
      expect(contact).toHaveProperty("email");
      expect(contact).toHaveProperty("message");
      expect(contact).toHaveProperty("createdAt");
      expect(contact).toHaveProperty("updatedAt");
      expect(contact).toHaveProperty("__v");
    });
  });

  it("should have valid email addresses", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    ContactsCash.forEach((contact: ContactsCashType) => {
      expect(contact.email).toMatch(emailRegex);
    });
  });

  it("should have non-empty name and message", () => {
    ContactsCash.forEach((contact: ContactsCashType) => {
      expect(contact.name.trim()).not.toBe("");
      expect(contact.message.trim()).not.toBe("");
    });
  });

  it("should have valid date string for createdAt and updateAt", () => {
    ContactsCash.forEach((contact: ContactsCashType) => {
      expect(isNaN(Date.parse(contact.createdAt))).toBeFalsy();
      expect(isNaN(Date.parse(contact.updatedAt))).toBeFalsy();
    });
  });

  it("should have unique _id value", () => {
    const idSet = new Set(ContactsCash.map((i) => i._id));
    expect(idSet.size).toBe(ContactsCash.length);
  });
});
