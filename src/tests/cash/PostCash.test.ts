import PostsCash from "../../etc/cash/PostsCash";
import { PostsCashType } from "@/types/CashTypes";

describe("Ticket Cash", () => {
 

  it("should have the correct structure", () => {
    expect(Array.isArray(PostsCash)).toBe(true);
    expect(PostsCash.length).toBeGreaterThan(0);

    PostsCash.forEach((post: PostsCashType) => {
      expect(post).toHaveProperty("_id");
      expect(post).toHaveProperty("title");
      expect(post).toHaveProperty("imgurl");
      expect(post).toHaveProperty("description");
      expect(post).toHaveProperty("services");
      expect(post).toHaveProperty("section");
      expect(post).toHaveProperty("body");
      if(post.categories)
        expect(post).toHaveProperty("categories");
      expect(post).toHaveProperty("createdAt");
      expect(post).toHaveProperty("updatedAt");
      expect(post).toHaveProperty("__v");
    });
  });

  it("should not have non-empty values", () => {
    PostsCash.forEach((post: PostsCashType) => {
      expect(post.title.trim()).not.toBe("");
      expect(post.imgurl.trim()).not.toBe("");
      expect(post.description.trim()).not.toBe("");
      expect(post.body.trim()).not.toBe("");
    });
  });

  it("should have show valid data string for date", () => {
    PostsCash.forEach((post: PostsCashType) => {
      expect(isNaN(Date.parse(post.createdAt))).toBeFalsy();
      expect(isNaN(Date.parse(post.updatedAt))).toBeFalsy();
    });
  });




  it("should have unique _id value", () => {
    const idSet = new Set(PostsCash.map((i) => i._id));
    expect(idSet.size).toBe(PostsCash.length);
  });
  
});
