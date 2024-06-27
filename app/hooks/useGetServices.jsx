"use client";
import { useState, useEffect } from "react";
import APIClient from "../util/apiClient";

const apiClient = new APIClient('/api');
const useGetServices = (secId) => {
    const [postData, setPostData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                setLoading(true);
                const response = await apiClient.get('/posts');
                setPostData(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching postData:", error);
                setLoading(false);
            }
        };

        fetchPostData();
    }, []);

    // const filteredData = postData?.filter((item) => item.service === `${secId}`);

    return { postData, loading };
};

export default useGetServices;
