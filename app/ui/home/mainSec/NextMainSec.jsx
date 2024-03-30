"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NextMain from "./NextMain";
import NextMainSeclton from "./NextMainSeclton";

const NextMainSec = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/Posts`);
        setData(response.data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  if (!data) {
    return <NextMainSeclton />;
  }
  const filteredData = data.filter((item) => item.section === "2");

  return (
    <div className="flex flex-col gap-2 h-full">
      {filteredData.map((filteredData, _index) => (
        <NextMain id={_index} key={_index} ticket={filteredData} />
      ))}
    </div>
  );
};

export default NextMainSec;
