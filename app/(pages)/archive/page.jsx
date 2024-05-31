"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { POST_API_URL } from "@/app/config/constants";
import ArchiveCard from "@/app/components/home/ArchiveCard";
import ArchiveCardSkeleton from "@/app/components/home/ArchiveCardSkeleton";

const ArchiveSections = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12); // Number of posts per page
  const [filter, setFilter] = useState(""); // Filter state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(POST_API_URL);
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = data.filter(post =>
    post.title.toLowerCase().includes(filter.toLowerCase()) ||
    post.body.toLowerCase().includes(filter.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (loading) {
    return <ArchiveCardSkeleton />;
  }

  return (
    <div className="w-[97%] sm:w-[95%] md:w-[92%] mx-auto mt-14">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Archive</h1>
        <input
          type="text"
          className="border rounded px-4 py-2"
          placeholder="Search..."
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentPosts.map((post, index) => (
          <ArchiveCard key={index} post={post} />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center items-center py-6">
      <ul className="inline-flex -space-x-px">
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 border ${currentPage === number ? "bg-indigo-700 text-white" : "bg-white text-indigo-700"
                } hover:bg-indigo-700 hover:text-white`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ArchiveSections;
