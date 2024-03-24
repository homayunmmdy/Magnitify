"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NextMain from "./NextMain"
const NextMainSec = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/Tickets`);
        setData(response.data.tickets);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-2 py-2 h-full">
      {data
          ?.filter((item) => item.category == "next main")
          .map((filteredData, _index) => (
            <NextMain id={_index} key={_index} ticket={filteredData} />
          ))}
    </div>
  );
};

export default NextMainSec;
