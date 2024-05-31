"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ArchiveCard from './ArchiveCard'
import ArchiveCardSkeleton from "./ArchiveCardSkeleton";
import Link from "next/link";
import { POST_API_URL } from "@/app/config/constants";

const ArchiveSections = () => {
  const [data, setData] = useState();
  const [recentSize] = useState(-12);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(POST_API_URL);
        setData(response.data.data.slice(recentSize));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  if (!data) {
    return <ArchiveCardSkeleton />;
  }
  return (
    <>
      <div className="h-full flex w-full justify-center items-center">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {data?.map((filteredData, _index) => (
            <ArchiveCard id={_index} key={_index} post={filteredData} />
          ))}
        </div>
      </div>
      <div className="m-1 flex justify-center items-center mt-2">
        <Link className="border-2 border-blue-700	 rounded-xl	text-indigo-700 hover:text-white font-medium flex p-3 bg-base-100  hover:bg-indigo-700 hover:opacity-90 lg:transition-all lg:ease-linear lg:duration-200 w-13" href="/archive" >More</Link>
      </div>
    </>
  )
}

export default ArchiveSections