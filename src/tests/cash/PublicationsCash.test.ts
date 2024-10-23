import { PublicationsCashType } from "@/types/CashTypes";
import PublicationsCash from "../../etc/cash/PublicationsCash";

describe("PublicationsCash", () => {
  it("should have the correct structure", () => {
    expect(Array.isArray(PublicationsCash)).toBe(true);
    expect(PublicationsCash.length).toBeGreaterThan(0);

    PublicationsCash.forEach((book: PublicationsCashType) => {
      expect(book).toHaveProperty("_id");
      expect(book).toHaveProperty("title");
      expect(book).toHaveProperty("imgurl");
      expect(book).toHaveProperty("description");
      expect(book).toHaveProperty("author");
      expect(book).toHaveProperty("page_amount");
      expect(book).toHaveProperty("publisher");
      expect(book).toHaveProperty("publication_date");
      expect(book).toHaveProperty("pdf_link");
      expect(book).toHaveProperty("body");
      expect(book).toHaveProperty("createdAt");
      expect(book).toHaveProperty("updatedAt");
      expect(book).toHaveProperty("__v");
    });
  });

  it("should not have non-empty values", () => {
    PublicationsCash.forEach((book: PublicationsCashType) => {
      expect(book.title.trim()).not.toBe("");
      expect(book.imgurl.trim()).not.toBe("");
      expect(book.description.trim()).not.toBe("");
      expect(book.author.trim()).not.toBe("");
      expect(book.publisher.trim()).not.toBe("");
      expect(book.body.trim()).not.toBe("");
      if (book.pdf_link) expect(book.pdf_link.trim()).not.toBe("");
    });
  });

  it("should have show valid data string for date", () => {
    PublicationsCash.forEach((book: PublicationsCashType) => {
      if (book.publication_date)
        expect(isNaN(Date.parse(book.publication_date))).toBeFalsy();
      expect(isNaN(Date.parse(book.createdAt))).toBeFalsy();
      expect(isNaN(Date.parse(book.updatedAt))).toBeFalsy();
    });
  });

  it("should have unique _id value", () => {
    const idSet = new Set(PublicationsCash.map((i) => i._id));
    expect(idSet.size).toBe(PublicationsCash.length);
  });
});
