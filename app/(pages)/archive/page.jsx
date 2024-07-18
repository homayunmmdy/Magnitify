"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { POST_API_URL } from "@/app/config/apiConstants";
import Pagination from "./components/Pagination";
import { ArchiveCard, ArchiveSectionsSkeleton } from "@/app/components/sections";

const ArchiveSections = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [filter, setFilter] = useState("");
  const [selectedService, setSelectedService] = useState("all");
  const [selectedSection, setSelectedSection] = useState("all");
  const [selectedTime, setSelectedTime] = useState("all");
  const [services, setServices] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await axios.get(POST_API_URL);
        setData(postResponse.data.data);

        const serviceResponse = await axios.get("/api/services");
        setServices(serviceResponse.data.data);

        const sectionResponse = await axios.get("/api/section");
        setSections(sectionResponse.data.data);

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

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const filterByTime = (posts) => {
    const now = new Date();
    return posts.filter(post => {
      const postDate = new Date(post.createdAt);
      if (selectedTime === "last_week") {
        const lastWeek = new Date(now.setDate(now.getDate() - 7));
        return postDate >= lastWeek;
      } else if (selectedTime === "last_month") {
        const lastMonth = new Date(now.setMonth(now.getMonth() - 1));
        return postDate >= lastMonth;
      } else if (selectedTime === "last_year") {
        const lastYear = new Date(now.setFullYear(now.getFullYear() - 1));
        return postDate >= lastYear;
      } else {
        return true;
      }
    });
  };

  const filteredData = data.filter(post => {
    const matchesFilter = post.title.toLowerCase().includes(filter.toLowerCase());
    const matchesService = selectedService === "all" || post.service === selectedService;
    const matchesSection = selectedSection === "all" || post.section === selectedSection;

    return matchesFilter && matchesService && matchesSection;
  });

  const timeFilteredData = filterByTime(filteredData);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = timeFilteredData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (loading) {
    return <div className="w-[94%] md:w-[92%] mx-auto py-14"><ArchiveSectionsSkeleton /></div>;
  }

  return (
    <div className="w-[94%] md:w-[92%] mx-auto mt-14">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold mb-4 sm:mb-0">Archive</h1>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            className="border rounded px-4 py-2"
            placeholder="Search..."
            value={filter}
            onChange={handleFilterChange}
          />
          {/* <select
            className="border rounded px-4 py-2"
            value={selectedService}
            onChange={handleServiceChange}
          >
            <option value="all">All Services</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
          <select
            className="border rounded px-4 py-2"
            value={selectedSection}
            onChange={handleSectionChange}
          >
            <option value="all">All Sections</option>
            {sections.map(section => (
              <option key={section.id} value={section.id}>
                {section.name}
              </option>
            ))}
          </select> */}
          <select
            className="border rounded px-4 py-2"
            value={selectedTime}
            onChange={handleTimeChange}
          >
            <option value="all">All Time</option>
            <option value="last_week">Last Week</option>
            <option value="last_month">Last Month</option>
            <option value="last_year">Last Year</option>
          </select>
        </div>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentPosts.map((post, index) => (
          <ArchiveCard key={index} post={post} />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={timeFilteredData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};



export default ArchiveSections;