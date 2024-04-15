"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import OneSec from "./OneSec";
import OneSecSeclton from "./OneSecSeclton"

const OneSections = () => {
    const [data, setData] = useState();

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
    }, []);
    if (!data) {
        return <OneSecSeclton />;
    }
    const filteredData = data.filter((item) => item.section === "8");

    return (
        <div className="py-3">
            {filteredData.map((filteredData, _index) => (
                <OneSec id={_index} key={_index} ticket={filteredData} />
            ))}
        </div>
    );
};

export default OneSections;
