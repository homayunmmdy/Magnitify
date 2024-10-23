import { ContactsCashType } from "@/types/CashTypes";
import ContactsData from "../../etc/cash/ContactsData";

describe("ContactsData", () => {
  it("should have the correct structure", () => {
    expect(Array.isArray(ContactsData)).toBe(true);
    expect(ContactsData.length).toBeGreaterThan(0);

    ContactsData.forEach((contact: ContactsCashType) => {
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
    ContactsData.forEach((contact: ContactsCashType) => {
      expect(contact.email).toMatch(emailRegex);
    });
  });

  it("should have non-empty name and message", () => {
    ContactsData.forEach((contact: ContactsCashType) => {
      expect(contact.name.trim()).not.toBe("");
      expect(contact.message.trim()).not.toBe("");
    });
  });

  it("should have valid date string for createdAt and updateAt", () => {
    ContactsData.forEach((contact: ContactsCashType) => {
      expect(isNaN(Date.parse(contact.createdAt))).toBeFalsy();
      expect(isNaN(Date.parse(contact.updatedAt))).toBeFalsy();
    });
  });
  
  it("should have unique _id value", () => {
    const idSet = new Set(ContactsData.map((i) => i._id));
    expect(idSet.size).toBe(ContactsData.length);
  });
});
