import {
  // Query keys
  ALL_POSTS_QUERY_KEY,
  ALL_TEXTADV_QUERY_KEY,
  // Local storage keys
  AUTH_KEY,
  COMMENTS_KEY,
  CONTACTS_QUERY_KEY,
  CONTRIBUTION_KEY,
  EMAIL_QUERY_KEY,
  LATEST_POSTS_KEY,
  MAIN_POSTS_QUERY_KEY,
  MASTER_KEY,
  MORE_POSTS_QUERY_KEY,
  // Section query keys
  POSTS_QUERY_KEY,
  SECTIONS_QUERY_KEY,
  SERVICES_IMG_KEY,
  SERVICES_QUERY_KEY,
  SINGLE_POST_QUERY_KEY,
  SWIPER_SEC,
  TICKETS_QUERY_KEY,
  TIMELINE_KEY,
  TOTAL_VIEW,
  VERTICAL_POSTS_QUERY_KEY,
} from "../../config/Constants";

describe("Constants", () => {
  describe("Local Storage Keys", () => {
    test("should have correct local storage key values", () => {
      expect(AUTH_KEY).toBe("authenticated");
      expect(MASTER_KEY).toBe("masterEditor");
      expect(TOTAL_VIEW).toBe("total_view");
    });

    test("should have unique local storage keys", () => {
      const localStorageKeys = [AUTH_KEY, MASTER_KEY, TOTAL_VIEW];
      const uniqueKeys = new Set(localStorageKeys);
      expect(uniqueKeys.size).toBe(localStorageKeys.length);
    });
  });

  describe("Query Keys", () => {
    test("should have correct query key values", () => {
      expect(ALL_POSTS_QUERY_KEY).toBe("all_posts");
      expect(ALL_TEXTADV_QUERY_KEY).toBe("all_textadv");
      expect(SERVICES_QUERY_KEY).toBe("services");
      expect(SECTIONS_QUERY_KEY).toBe("sections");
      expect(CONTACTS_QUERY_KEY).toBe("contacts");
      expect(EMAIL_QUERY_KEY).toBe("emails");
      expect(LATEST_POSTS_KEY).toBe("latest_posts");
      expect(TICKETS_QUERY_KEY).toBe("tickets");
      expect(SERVICES_IMG_KEY).toBe("services_img");
      expect(TIMELINE_KEY).toBe("timeLine");
      expect(CONTRIBUTION_KEY).toBe("contribution");
      expect(COMMENTS_KEY).toBe("comments");
    });

    test("should have unique query keys", () => {
      const queryKeys = [
        ALL_POSTS_QUERY_KEY,
        ALL_TEXTADV_QUERY_KEY,
        SERVICES_QUERY_KEY,
        SECTIONS_QUERY_KEY,
        CONTACTS_QUERY_KEY,
        EMAIL_QUERY_KEY,
        LATEST_POSTS_KEY,
        TICKETS_QUERY_KEY,
        SERVICES_IMG_KEY,
        TIMELINE_KEY,
        CONTRIBUTION_KEY,
        COMMENTS_KEY,
      ];
      const uniqueKeys = new Set(queryKeys);
      expect(uniqueKeys.size).toBe(queryKeys.length);
    });
  });

  describe("Section Query Keys", () => {
    test("should have correct section query key values", () => {
      expect(POSTS_QUERY_KEY).toBe("posts");
      expect(MORE_POSTS_QUERY_KEY).toBe("more_posts");
      expect(MAIN_POSTS_QUERY_KEY).toBe("main_posts");
      expect(SINGLE_POST_QUERY_KEY).toBe("single_post");
      expect(VERTICAL_POSTS_QUERY_KEY).toBe("vertical_posts");
      expect(SWIPER_SEC).toBe("swiper_sec");
    });

    test("should have unique section query keys", () => {
      const sectionQueryKeys = [
        POSTS_QUERY_KEY,
        MORE_POSTS_QUERY_KEY,
        MAIN_POSTS_QUERY_KEY,
        SINGLE_POST_QUERY_KEY,
        VERTICAL_POSTS_QUERY_KEY,
        SWIPER_SEC,
      ];
      const uniqueKeys = new Set(sectionQueryKeys);
      expect(uniqueKeys.size).toBe(sectionQueryKeys.length);
    });
  });

  describe("Cross-category uniqueness", () => {
    test("should have unique keys across all categories", () => {
      const allKeys = [
        // Local storage keys
        AUTH_KEY,
        MASTER_KEY,
        TOTAL_VIEW,

        // Query keys
        ALL_POSTS_QUERY_KEY,
        ALL_TEXTADV_QUERY_KEY,
        SERVICES_QUERY_KEY,
        SECTIONS_QUERY_KEY,
        CONTACTS_QUERY_KEY,
        EMAIL_QUERY_KEY,
        LATEST_POSTS_KEY,
        TICKETS_QUERY_KEY,
        SERVICES_IMG_KEY,
        TIMELINE_KEY,
        CONTRIBUTION_KEY,
        COMMENTS_KEY,

        // Section query keys
        POSTS_QUERY_KEY,
        MORE_POSTS_QUERY_KEY,
        MAIN_POSTS_QUERY_KEY,
        SINGLE_POST_QUERY_KEY,
        VERTICAL_POSTS_QUERY_KEY,
        SWIPER_SEC,
      ];

      const uniqueKeys = new Set(allKeys);
      expect(uniqueKeys.size).toBe(allKeys.length);
    });
  });

  describe("Type checking", () => {
    test("all constants should be strings", () => {
      const allConstants = [
        AUTH_KEY,
        MASTER_KEY,
        TOTAL_VIEW,
        ALL_POSTS_QUERY_KEY,
        ALL_TEXTADV_QUERY_KEY,
        SERVICES_QUERY_KEY,
        SECTIONS_QUERY_KEY,
        CONTACTS_QUERY_KEY,
        EMAIL_QUERY_KEY,
        LATEST_POSTS_KEY,
        TICKETS_QUERY_KEY,
        SERVICES_IMG_KEY,
        TIMELINE_KEY,
        CONTRIBUTION_KEY,
        COMMENTS_KEY,
        POSTS_QUERY_KEY,
        MORE_POSTS_QUERY_KEY,
        MAIN_POSTS_QUERY_KEY,
        SINGLE_POST_QUERY_KEY,
        VERTICAL_POSTS_QUERY_KEY,
        SWIPER_SEC,
      ];

      allConstants.forEach((constant) => {
        expect(typeof constant).toBe("string");
      });
    });
  });
});
