import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

/**
 * A class that handles form operations and interactions.
 */
class FormHandler {
  private loading: boolean = false;

  /**
   * Constructs a new FormHandler.
   * @para m setForm - Functionto update form state.
   * @param API_URL - The API endpoint URL.
   * @param router - Router object for navigation.
   */
  constructor(
    private setForm: any,
    private API_URL: string,
    private router: any
  ) {}

  /**
   * Handles change events for form inputs.
   * @param e - The change event.
   */
  trakeChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    this.setForm((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /**
   * Handles changes to the body content.
   * @param content - The new content value.
   */
  trakeBodyChanges = (content: string) => {
    this.setForm((prevState: any) => ({
      ...prevState,
      body: content,
    }));
  };

  /**
   * Submits the form data via an API call.
   * @param e - The form event.
   * @param formData - Data to be submitted.
   * @param id - Optional ID to determine edit mode.
   */
  async submit(
    e: React.FormEvent<HTMLFormElement>,
    formData: any,
    id?: string
  ) {
    e.preventDefault();
    const EDITMODE = !id ? false : id !== "new";
    this.loading = true;
    const url = EDITMODE ? `${this.API_URL}/${id}` : `${this.API_URL}`;
    const method = EDITMODE ? "PUT" : "POST";
    const headers = { "Content-Type": "application/json" };

    const res = await fetch(url, {
      method,
      headers,
      body: JSON.stringify({ formData }),
    });

    if (res.ok) {
      this.loading = false;
      toast.success(
        EDITMODE ? "Item updated successfully" : "Item added successfully"
      );
      this.router.refresh();
      this.router.push("/admin");
    } else {
      this.loading = false;
      toast.error("Something went wrong");
      throw new Error(`Failed to ${EDITMODE ? "update" : "create"} ticket`);
    }
  }

  /**
   * Adds a new category to the form.
   * @param categoryInput - The category name input.
   * @param setCategoryInput - Function to reset category input.
   */
  addCategory = (
    categoryInput: string,
    setCategoryInput: Dispatch<SetStateAction<string>>
  ) => {
    if (!categoryInput.trim()) {
      toast.error("name for the category is required");
      return;
    }

    const newCategory = {
      id: Date.now(),
      name: categoryInput,
    };

    this.setForm((prevState: { categories: any }) => ({
      ...prevState,
      categories: [...prevState.categories, newCategory],
    }));
    setCategoryInput(""); // Clear the input field
    toast.success("Category added successfully");
  };

  /**
   * Handles changes to a specific category.
   * @param e - The change event.
   * @param id - The ID of the category being changed.
   */
  CategoryChanges = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const { value } = e.target;
    this.setForm((prevState: { categories: any[] }) => ({
      ...prevState,
      categories: prevState.categories.map((cat: { id: number }) =>
        cat.id === id ? { ...cat, name: value } : cat
      ),
    }));
  };

  /**
   * Removes a category from the form.
   * @param id - The ID of the category to be removed.
   */
  removeCategory = (id: number) => {
    this.setForm((prevState: { categories: any[] }) => ({
      ...prevState,
      categories: prevState.categories.filter(
        (cat: { id: number }) => cat.id !== id
      ),
    }));
  };

  /**
   * Getter for the loading state.
   * @returns {boolean} - The current loading state.
   */
  get isLoading(): boolean {
    return this.loading;
  }
  
}

export default FormHandler;
