"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "./Main";

const MainSec = () => {
    const [data, setData] = useState([]);
    const [recentSize] = useState(-1);

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
    const filteredData = data.filter((item) => item.section === "1");
    const posts = filteredData.slice(recentSize)
    return (
        <>
            <div >
                <div >
                    {posts.map((filteredData, _index) => (
                        <Main id={_index} key={_index} post={filteredData} />
                    ))}

                </div>
            </div>
        </>
    )
}

export default MainSec