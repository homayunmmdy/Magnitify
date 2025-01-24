"use client"
import { CONTACTS_API_URL, POST_API_URL, SECTIONS_API_URL, SERVICES_API_URL } from "@/config/apiConstants";
import axios from "axios";
import { useEffect, useState } from "react";

const useGetStats = () => {
  const [data, setData] = useState({
    posts: [],
    sections: [],
    contacts: [],
    services: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          postsResponse,
          sectionsResponse,
          contactsResponse,
          servicesResponse,
        ] = await Promise.all([
          axios.get(`${POST_API_URL}`),
          axios.get(`${SECTIONS_API_URL}`),
          axios.get(`${CONTACTS_API_URL}`),
          axios.get(`${SERVICES_API_URL}`),

        ]);

        setData({
          posts: postsResponse.data.data,
          sections: sectionsResponse.data.data,
          contacts: contactsResponse.data.data,
          services: servicesResponse.data.data,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return data
};

export default useGetStats;
