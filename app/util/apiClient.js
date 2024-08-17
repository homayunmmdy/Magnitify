import axios from "axios";

class APIClient {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL: baseURL,
    });
  }

  async get(endpoint) {
    try {
      const response = await this.client.get(endpoint);
      return response.data.document;
    } catch (error) {
      console.error(`Error fetching data from ${endpoint}:`, error);
      throw error;
    }
  }

  // You can add more methods for POST, PUT, DELETE etc. as needed
}

export default APIClient;
