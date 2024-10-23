import { TicketsCashType } from "@/types/CashTypes";
import TicketsCash from "../../etc/cash/TicketsCash";

describe("Ticket Cash", () => {
    const priorityMin = 0
    const priorityMax = 5
    const progressMin = 0
    const progressMax = 100
  it("should have the correct structure", () => {
    expect(Array.isArray(TicketsCash)).toBe(true);
    expect(TicketsCash.length).toBeGreaterThan(0);

    TicketsCash.forEach((tickets: TicketsCashType) => {
      expect(tickets).toHaveProperty("_id");
      expect(tickets).toHaveProperty("title");
      expect(tickets).toHaveProperty("description");
      expect(tickets).toHaveProperty("body");
      expect(tickets).toHaveProperty("priority");
      expect(tickets).toHaveProperty("progress");
      expect(tickets).toHaveProperty("status");
      expect(tickets).toHaveProperty("startTime");
      expect(tickets).toHaveProperty("endTime");
      expect(tickets).toHaveProperty("createdAt");
      expect(tickets).toHaveProperty("updatedAt");
      expect(tickets).toHaveProperty("__v");
    });
  });

  it("should not have non-empty values", () => {
    TicketsCash.forEach((ticket: TicketsCashType) => {
      expect(ticket.title.trim()).not.toBe("");
      expect(ticket.description.trim()).not.toBe("");
      expect(ticket.body.trim()).not.toBe("");
    });
  });

  it("should have show valid data string for date", () => {
    TicketsCash.forEach((ticket: TicketsCashType) => {
      expect(isNaN(Date.parse(ticket.startTime))).toBeFalsy();
      expect(isNaN(Date.parse(ticket.endTime))).toBeFalsy();
      expect(isNaN(Date.parse(ticket.createdAt))).toBeFalsy();
      expect(isNaN(Date.parse(ticket.updatedAt))).toBeFalsy();
    });
  });

  it("should have valid text for status", () => {
    const validStatus: string[] = ["not started", "started", "delay", "done"];
    TicketsCash.forEach((ticket: TicketsCashType) => {
      expect(validStatus.includes(ticket.status)).toBeTruthy();
    });
  });

  it('should have right min and max for values', () => {
    TicketsCash.forEach((ticket: TicketsCashType) => {
        expect(ticket.priority).toBeGreaterThan(priorityMin);
        expect(ticket.priority).toBeLessThanOrEqual(priorityMax);
        expect(ticket.priority).toBeGreaterThan(progressMin);
        expect(ticket.priority).toBeLessThanOrEqual(progressMax);
      });
  })

  it("should have unique _id value", () => {
    const idSet = new Set(TicketsCash.map((i) => i._id));
    expect(idSet.size).toBe(TicketsCash.length);
  });
  
});
