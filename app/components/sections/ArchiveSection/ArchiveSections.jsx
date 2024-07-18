"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ArchiveCard from './ArchiveCard'
import ArchiveSectionsSkelton from "./ArchiveSectionsSkelton";
import Link from "next/link";
import { POST_API_URL } from "@/app/config/apiConstants";

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
    return <ArchiveSectionsSkelton />;
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
    </>
  )
}

export default ArchiveSections