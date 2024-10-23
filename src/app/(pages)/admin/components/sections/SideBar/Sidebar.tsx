"use client";
import { Button } from "@/components";
import SiteConfig from "@/etc/config/stie";
import Link from "next/link";
import React,{ useState } from "react";
import NavLink from "./NavLink";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full h-full p-4">
        <div className="flex justify-between items-center">
          <Link
            className="block px-4 py-3 m-0 text-lg space-nowrap "
            href="/admin"
          >
            Admin
            <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
              {" "}
              {SiteConfig.name}
            </span>
          </Link>
          <Button
            title={
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
            }
            style="lg:hidden"
            color="btn-primary"
            ariaLabel="close and open menu"
          />
        </div>
        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent mb-2" />
        {isOpen && <NavLink />}
      </div>
    </>
  );
};

export default Sidebar;
