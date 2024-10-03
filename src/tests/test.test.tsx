import { it, expect, describe } from "vitest";
import { db } from "./mock/db";

describe("group", () => {
    it("should", async () => {
        const product = db.posts.create()
        console.log(product)
    });
});
