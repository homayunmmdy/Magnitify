"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

const SinglePost = () => {
  const pathname = usePathname();
  const id = pathname.slice(7);
  const [battle, setBattle] = useState();

  useEffect(() => {
    const fetchBattle = async () => {
      try {
        const response = await axios.get(`/api/Posts/${id}`);
        setBattle(response.data.foundTicket);
      } catch (error) {
        console.error("Error fetching battle:", error);
      }
    };

    fetchBattle();
  }, [id]);

  return battle;
};

export default SinglePost;