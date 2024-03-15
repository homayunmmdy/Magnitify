"use client";
import { useState, useEffect } from "react";
import axios from "axios";
// import { Link, useParams } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FcNext, FcPrevious } from "react-icons/fc";
import { usePathname } from "next/navigation";
import BreadCrump from "../../ui/components/BreadCrump";
const Ticket = () => {
  const pathname = usePathname();
  const id = pathname.slice(9);

  const [battle, setBattle] = useState();

  useEffect(() => {
    fetchBattle();
  }, [id]);
  const fetchBattle = async () => {
    try {
      const response = await axios.get(`/api/Tickets/${id}`);
      setBattle(response.data.foundTicket);
    } catch (error) {
      console.error("Error fetching battle:", error);
    }
  };

  if (!battle) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex flex-row w-full px-8">
        <div className="shrink-0 h-full	w-[70%] ">
          <img className="w-full h-[70%] p-3" src={battle.imgurl} title={battle.title} alt={battle.title} width="880" height="450" loading="lazy"/>
         <BreadCrump />
          <div className="p-4">
            <h1 className="text-center mb-3">{battle.title}</h1>
            <p>
              <div id="pos-article-display-card-94403"></div>
              {battle.description}
            </p>
            <p>{battle.body}</p>
            <div id="pos-article-text-card-94410"></div>
            <div id="pos-article-display-94407"></div>
          </div>
        </div>
        <div className="flex-1 h-full">
        <div id="pos-article-text-94696"></div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
