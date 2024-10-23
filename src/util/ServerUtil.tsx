export const getById = async (baseURL: string, id: string | number) => {
    const API_URL = process.env.API_URL;
  
    try {
      const res = await fetch(`${API_URL}${baseURL}/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
  
      return res.json();
    } catch (error) {
      console.error(error);
    }
  };
  