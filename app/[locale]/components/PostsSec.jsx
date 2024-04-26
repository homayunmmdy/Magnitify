"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PostSec from './PostSec'

const PostsSec = () => {
    const [data, setData] = useState([]);
    const [recentSize] = useState(-4);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`fa/api/Posts`);
                setData(response.data.posts);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [recentSize]);
    if (!data) {
        return <h1>loading</h1>;
    }
    const filteredData = data.filter((item) => item.section === "4");
    const posts = filteredData.slice(recentSize)
    return (
        <div className=" mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                {posts.map((filteredData, _index) => (
                    <PostSec id={_index} key={_index} post={filteredData} />
                ))}
            </div>
        </div>
    )
}

export default PostsSec