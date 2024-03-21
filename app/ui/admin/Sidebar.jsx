1 | "use client";
import React, { useState } from "react";
import SiteConfig from "../../config/site";
import AdminNavLink from "./NavLink";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full h-full px-4">
        <div className="flex justify-between items-center">
          <a
            class="block px-4 py-3 m-0 text-lg whitespace-nowrap text-slate-700"
            href="/"
            target="_blank"
          >
            ادمین
            <span class="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
              {" "}
              {SiteConfig.name}
            </span>
          </a>
          <svg
            onClick={toggleMenu}
            className="h-6 w-6 lg:hidden"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </div>
        <hr class="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent mb-2" />
        {isOpen && <AdminNavLink />}
        <a
          class="inline-block w-full px-6 py-3 my-4 font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg select-none shadow-soft-md bg-150 bg-x-25 leading-pro text-xs bg-gradient-to-tl from-purple-700 to-pink-500 hover:shadow-soft-2xl hover:scale-102"
          href="https://www.creative-tim.com/product/soft-ui-dashboard-pro-tailwind?ref=sidebarfree"
        >
          Upgrade to pro
        </a>
      </div>
    </>
  );
};

export default Sidebar;
