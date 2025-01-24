import toast from "react-hot-toast";
import FormHandler from "../../../util/handler/FormHandler";

// Mocking the dependencies
vi.mock("react-hot-toast", () => ({
  default: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

describe("FormHandler", () => {
  let formHandler: FormHandler;
  let setFormMock: any;
  let routerMock: any;

  beforeEach(() => {
    setFormMock = vi.fn();
    routerMock = {
      refresh: vi.fn(),
      push: vi.fn(),
    };
    formHandler = new FormHandler(
      setFormMock,
      "https://api.example.com",
      routerMock
    );
  });

  describe("trakeChange", () => {
    it("should update the form state with the new value", () => {
      const event = {
        target: {
          name: "testField",
          value: "testValue",
        },
      } as React.ChangeEvent<HTMLInputElement>;

      formHandler.trakeChange(event);

      expect(setFormMock).toHaveBeenCalledWith(expect.any(Function));
      const updater = setFormMock.mock.calls[0][0];
      const prevState = { testField: "oldValue" };
      expect(updater(prevState)).toEqual({ testField: "testValue" });
    });
  });

  describe("trakeBodyChanges", () => {
    it("should update the body field in the form state", () => {
      const content = "new body content";

      formHandler.trakeBodyChanges(content);

      expect(setFormMock).toHaveBeenCalledWith(expect.any(Function));
      const updater = setFormMock.mock.calls[0][0];
      const prevState = { body: "old body content" };
      expect(updater(prevState)).toEqual({ body: "new body content" });
    });
  });

  describe("submit", () => {
    it("should handle form submission in create mode", async () => {
      const event = {
        preventDefault: vi.fn(),
      } as unknown as React.FormEvent<HTMLFormElement>;
      const formData = { name: "Test Item" };

      global.fetch = vi.fn().mockResolvedValueOnce({
        ok: true,
      });

      await formHandler.submit(event, formData);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(global.fetch).toHaveBeenCalledWith("https://api.example.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });
      expect(toast.success).toHaveBeenCalledWith("Item added successfully");
      expect(routerMock.refresh).toHaveBeenCalled();
      expect(routerMock.push).toHaveBeenCalledWith("/admin");
    });

    it("should handle form submission in edit mode", async () => {
      const event = {
        preventDefault: vi.fn(),
      } as unknown as React.FormEvent<HTMLFormElement>;
      const formData = { name: "Test Item" };
      const id = "123";

      global.fetch = vi.fn().mockResolvedValueOnce({
        ok: true,
      });

      await formHandler.submit(event, formData, id);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(global.fetch).toHaveBeenCalledWith("https://api.example.com/123", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });
      expect(toast.success).toHaveBeenCalledWith("Item updated successfully");
      expect(routerMock.refresh).toHaveBeenCalled();
      expect(routerMock.push).toHaveBeenCalledWith("/admin");
    });

    it("should handle form submission failure", async () => {
      const event = {
        preventDefault: vi.fn(),
      } as unknown as React.FormEvent<HTMLFormElement>;
      const formData = { name: "Test Item" };

      global.fetch = vi.fn().mockResolvedValueOnce({
        ok: false,
      });

      await expect(formHandler.submit(event, formData)).rejects.toThrow(
        "Failed to create ticket"
      );
      expect(toast.error).toHaveBeenCalledWith("Something went wrong");
    });
  });

  describe("addCategory", () => {
    it("should add a new category to the form state", () => {
      const setCategoryInputMock = vi.fn();
      const categoryInput = "New Category";

      formHandler.addCategory(categoryInput, setCategoryInputMock);

      expect(setFormMock).toHaveBeenCalledWith(expect.any(Function));
      const updater = setFormMock.mock.calls[0][0];
      const prevState = { categories: [] };
      expect(updater(prevState)).toEqual({
        categories: [{ id: expect.any(Number), name: "New Category" }],
      });
      expect(setCategoryInputMock).toHaveBeenCalledWith("");
      expect(toast.success).toHaveBeenCalledWith("Category added successfully");
    });

    it("should not add a category if the input is empty", () => {
      const setCategoryInputMock = vi.fn();
      const categoryInput = "";

      formHandler.addCategory(categoryInput, setCategoryInputMock);

      expect(setFormMock).not.toHaveBeenCalled();
      expect(setCategoryInputMock).not.toHaveBeenCalled();
      expect(toast.error).toHaveBeenCalledWith(
        "name for the category is required"
      );
    });
  });

  describe("CategoryChanges", () => {
    it("should update the name of a specific category", () => {
      const event = {
        target: {
          value: "Updated Category",
        },
      } as React.ChangeEvent<HTMLInputElement>;
      const id = 123;

      formHandler.CategoryChanges(event, id);

      expect(setFormMock).toHaveBeenCalledWith(expect.any(Function));
      const updater = setFormMock.mock.calls[0][0];
      const prevState = {
        categories: [
          { id: 123, name: "Old Category" },
          { id: 456, name: "Another Category" },
        ],
      };
      expect(updater(prevState)).toEqual({
        categories: [
          { id: 123, name: "Updated Category" },
          { id: 456, name: "Another Category" },
        ],
      });
    });
  });

  describe("removeCategory", () => {
    it("should remove a category from the form state", () => {
      const id = 123;

      formHandler.removeCategory(id);

      expect(setFormMock).toHaveBeenCalledWith(expect.any(Function));
      const updater = setFormMock.mock.calls[0][0];
      const prevState = {
        categories: [
          { id: 123, name: "Old Category" },
          { id: 456, name: "Another Category" },
        ],
      };
      expect(updater(prevState)).toEqual({
        categories: [{ id: 456, name: "Another Category" }],
      });
    });
  });

  describe("isLoading", () => {
    it("should return the current loading state", () => {
      formHandler["loading"] = true;
      expect(formHandler.isLoading).toBe(true);

      formHandler["loading"] = false;
      expect(formHandler.isLoading).toBe(false);
    });
  });
});
