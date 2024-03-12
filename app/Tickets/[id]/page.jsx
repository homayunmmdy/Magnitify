'use client'
import { useState, useEffect } from "react";
import axios from "axios";
// import { Link, useParams } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FcNext , FcPrevious} from "react-icons/fc";
import { usePathname } from 'next/navigation';
import Link from "next/link";


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
      {/* <Link to="/">Back to home</Link> */}
      <div>
        <button
          data-drawer-target="cta-button-sidebar"
          data-drawer-toggle="cta-button-sidebar"
          aria-controls="cta-button-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="cta-button-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <IoHome className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />

                  <span className="ms-3">Home</span>
                </Link>
              </li>
            
            </ul>
            
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
            {battle.title}
        </div>
      </div>
    </div>
  );
};

export default Ticket;