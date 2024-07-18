"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { POST_API_URL } from '../config/apiConstants';

const useGetLatestPosts = (recentSize) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const postResponse = await axios.get(`${POST_API_URL}`);
                setPosts(postResponse.data.data.slice(recentSize));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [recentSize]);

    return { posts, loading };
};

export default useGetLatestPosts;