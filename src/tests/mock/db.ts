import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

export const db = factory({
  posts: {
    id: primaryKey(faker.number.int),
  },
});
