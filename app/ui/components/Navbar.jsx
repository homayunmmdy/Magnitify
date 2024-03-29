"use client"
import React from "react";
import SiteConfig from "../../config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const nav = SiteConfig.nav;
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 navbar bg-base-100 z-[50]">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="px-3 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {nav.map((item) => (
              <li key={item.id} className="mx-1">
                {pathname === item.link ? <Link href={item.link} className="bg-base-300 rounded-xl">{item.name}</Link> :
                  <Link href={item.link}>{item.name}</Link>}
              </li>
            ))}
            </ul>
          </div>
          <Link href="/" className="text-xl font-bold">
            {SiteConfig.name}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {nav.map((item) => (
              <li key={item.id} className="mx-1">
                {pathname === item.link ? <Link href={item.link} className="bg-base-300 rounded-xl">{item.name}</Link> :
                  <Link href={item.link}>{item.name}</Link>}
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          {/* */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;