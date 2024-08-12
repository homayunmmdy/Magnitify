"use client";
import { useState, useEffect } from "react";

const useGetSection = (url, lengthItem, secId) => {
    const [postData, setPostData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPostData(data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching postData:", error);
                setLoading(false);
            }
        };

        fetchPostData();
    }, [url]);

    const filteredData = postData?.filter((item) => item.section === `${secId}`);
    const data = filteredData?.slice(lengthItem);

    return { data, loading };
};

export default useGetSection;
