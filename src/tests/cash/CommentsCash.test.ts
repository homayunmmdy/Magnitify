import { CommentsCashType } from "@/types/CashTypes";
import CommentsCash from "../../cash/CommentsCash";

describe("CommentsCash", () => {
  it("should have the correct structure", () => {
    expect(Array.isArray(CommentsCash)).toBe(true);
    expect(CommentsCash.length).toBeGreaterThan(0);

    CommentsCash.forEach((comment: CommentsCashType) => {
      expect(comment).toHaveProperty("_id");
      expect(comment).toHaveProperty("postId");
      expect(comment).toHaveProperty("name");
      expect(comment).toHaveProperty("email");
      expect(comment).toHaveProperty("message");
      expect(comment).toHaveProperty("createdAt");
      expect(comment).toHaveProperty("updatedAt");
      expect(comment).toHaveProperty("__v");
    });
  });

  it("should have valid email addresses", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    CommentsCash.forEach((comment: CommentsCashType) => {
      expect(comment.email).toMatch(emailRegex);
    });
  });

  it("should not have non-empty values", () => {
    CommentsCash.forEach((comment: CommentsCashType) => {
      expect(comment.name.trim()).not.toBe("");
      expect(comment.email.trim()).not.toBe("");
      expect(comment.message.trim()).not.toBe("");
    });
  });

  it("should have show valid data string for date", () => {
    CommentsCash.forEach((comment: CommentsCashType) => {
      expect(isNaN(Date.parse(comment.createdAt))).toBeFalsy();
      expect(isNaN(Date.parse(comment.updatedAt))).toBeFalsy();
    });
  });

  it("should have unique _id value", () => {
    const idSet = new Set(CommentsCash.map((i) => i._id));
    expect(idSet.size).toBe(CommentsCash.length);
  });
});
