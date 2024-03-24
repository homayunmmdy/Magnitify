"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TicketCard from "../home/TicketCard";
const PostSec = ({place , title}) => {
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
    <>
      <div className="flex items-center justify-between py-4 border-t border-b border-gray-200 dark:border-gray-700 not-format">
        <span className="text-sm font-bold text-gray-900 lg:mb-0 dark:text-white">
          {title}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data
          ?.filter((item) => item.category == `${place}`)
          .map((filteredData, _index) => (
            <TicketCard id={_index} key={_index} ticket={filteredData} />
          ))}
      </div>
    </>
  );
};

export default PostSec;
