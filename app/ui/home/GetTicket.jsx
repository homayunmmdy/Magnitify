
const GetTicket = async () => {
  const API_URL = process.env.API_URL;

  try {
    const res = await fetch(`${API_URL}/api/Posts`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default GetTicket;
