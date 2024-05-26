"use client"
import { useState, useEffect } from "react";
import axios from "axios";

const useDataFetching = (url, lengthItem, secId) => {
    const [postData, setPostData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setPostData(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching postData:", error);
                setLoading(false);
            }
        };

        fetchPostData();
    }, [url]);

    const filteredData = postData?.filter((item) => item.section === `${secId}`)
    const data = filteredData?.slice(lengthItem)

    return { data, loading };
};

export default useDataFetching;