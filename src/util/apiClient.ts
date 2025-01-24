import axios from "axios";

class APIClient {
  client: any;
  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL: baseURL,
    });
  }

  async get(endpoint: string) {
    try {
      const response = await this.client.get(endpoint);
      return response.data.document;
    } catch (error) {
      console.error(`Error fetching data from ${endpoint}:`, error);
      throw error;
    }
  }

}

export default APIClient;
