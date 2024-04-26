"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SubHero from "./SubHero";

const SubHeroSec = () => {
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
    const filteredData = data.filter((item) => item.section === "3");
    const posts = filteredData.slice(recentSize)
    return (
        <div>
            <hr className="border-b-2 border-gray-300 my-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {posts.map((filteredData, _index) => (
                    <SubHero id={_index} key={_index} post={filteredData} />
                ))}
            </div>
        </div>
    )
}

export default SubHeroSec