"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

const useBattle = () => {
    const pathname = usePathname();
    const id = pathname.slice(9);
  const [battle, setBattle] = useState();

  useEffect(() => {
    const fetchBattle = async () => {
      try {
        const response = await axios.get(`/api/Tickets/${id}`);
        setBattle(response.data.foundTicket);
      } catch (error) {
        console.error("Error fetching battle:", error);
      }
    };

    fetchBattle();
  }, [id]);

  return battle;
};

export default useBattle;