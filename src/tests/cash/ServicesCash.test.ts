import ServicesCash from "../../etc/cash/ServicesCash";
import { ServicesCashType } from "@/types/CashTypes";

describe("ServicesCash", () => {
  it("should have the correct structure", () => {
    expect(Array.isArray(ServicesCash)).toBe(true);
    expect(ServicesCash.length).toBeGreaterThan(0);

    ServicesCash.forEach((service: ServicesCashType) => {
      expect(service).toHaveProperty("_id");
      expect(service).toHaveProperty("name");
      expect(service).toHaveProperty("secid");
      expect(service).toHaveProperty("imgurl");
      expect(service).toHaveProperty("description");
      expect(service).toHaveProperty("createdAt");
      expect(service).toHaveProperty("updatedAt");
      expect(service).toHaveProperty("__v");
    });
  });

  it("should not have non-empty values", () => {
    ServicesCash.forEach((service: ServicesCashType) => {
      expect(service.name.trim()).not.toBe("");
      expect(service.imgurl.trim()).not.toBe("");
      expect(service.description.trim()).not.toBe("");
    });
  });

  it("should have show valid data string for date", () => {
    ServicesCash.forEach((services: ServicesCashType) => {
      expect(isNaN(Date.parse(services.createdAt))).toBeFalsy();
      expect(isNaN(Date.parse(services.updatedAt))).toBeFalsy();
    });
  });

  it("should have unique _id value", () => {
    const idSet = new Set(ServicesCash.map((i) => i._id));
    expect(idSet.size).toBe(ServicesCash.length);
  });
});