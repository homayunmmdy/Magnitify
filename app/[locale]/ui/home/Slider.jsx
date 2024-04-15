"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TicketCard from "./TicketCard";

const Slider = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`fa/api/Posts`);
        setCategories(response.data.posts);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <div>
      {categories
        ?.filter((ticket) => ticket.category == "main slider")
        .map((filteredTicket, _index) => (
          <TicketCard id={_index} key={_index} ticket={filteredTicket} />
        ))}
    </div>
  );
};

export default Slider;
