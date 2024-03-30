"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TicketCard from "../home/TicketCard";
import PostsSkelton from "../home/PostsSkelton";

const PostSec = ({ secid, title }) => {
  const [data, setData] = useState(null);

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

  // Display skeleton while data is loading
  if (!data) {
    return <PostsSkelton />;
  }

  const filteredData = data.filter((item) => item.section === `${secid}`);

  return (
    <>
      {filteredData.length == "0" ? null : <>  <div className="flex items-center justify-between py-4 border-t border-b border-gray-200 dark:border-gray-700 not-format my-2">
        <span className="text-sm font-bold text-gray-900 lg:mb-0 dark:text-white">
          {title}
        </span>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((filteredData, _index) => (
            <TicketCard id={_index} key={_index} ticket={filteredData} />
          ))}
        </div></>}

    </>
  );
};

export default PostSec;

