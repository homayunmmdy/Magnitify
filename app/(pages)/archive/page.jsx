"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import ArchiveCard from "../../components/ArchiveCard";
import ArchiveCardSkeleton from "../../components/ArchiveCardSkeleton";

const ArchivePage = () => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const ticketResponse = await axios.get("api/Posts");
        setTickets(ticketResponse.data.data);
        setFilteredTickets(ticketResponse.data.data.slice(0, pageSize));

        const sectionResponse = await axios.get("api/Section");
        setSections(sectionResponse.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pageSize]);

  const handleFilterChange = (filterType, value) => {
    setLoading(true)
    let filtered;
    if (filterType === "section") {
      filtered = value == 0 ? tickets : tickets.filter((ticket) => ticket.section == value);
    } 
    
    
    setFilteredTickets(filtered.slice(0, pageSize));
    setLoading(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;
    setFilteredTickets(tickets.slice(startIndex, endIndex));
  };

  return (
    <div className="p-2 md:p-5">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   xl:grid-cols-4 gap-4 mb-4">
       
          <div className="flex flex-col gap-3">
            <span className="mr-2">Filter by Section:</span>
            <select
              className="p-2 border border-gray-300 rounded"
              onChange={(e) => handleFilterChange("section", e.target.value)}
            >
              <option value={0}>All</option>
              {sections?.map((sec) => (
                <option key={sec._id} value={sec.secid}>
                  {sec.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {loading ? <ArchiveCardSkeleton /> :
          (
            <>
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {filteredTickets?.map((filteredTicket, index) => (
                  <ArchiveCard
                    id={index}
                    key={index}
                    post={filteredTicket}
                  />
                ))}
              </div>
              {filteredTickets?.length < "12" ? null : <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(tickets.length / pageSize) }, (_, i) => (
                  <button
                    key={i}
                    className={`mx-1 p-2 border ${currentPage === i + 1 ? "bg-blue-500 text-white" : "border-gray-300"
                      } rounded`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>}
            </>
          )
        }
      </div>
    </div>
  );
};

export default ArchivePage;