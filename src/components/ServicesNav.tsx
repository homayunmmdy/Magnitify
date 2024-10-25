"use client";
import { SERVICES_API_URL } from "@/etc/config/apiConstants";
import { SERVICES_QUERY_KEY } from "@/etc/config/Constants";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react'

const ServicesNav: React.FC = () => {
  const { data: services, loading } = useFetch(
    SERVICES_QUERY_KEY,
    SERVICES_API_URL
  );
  const pathname = usePathname();

  if (loading) {
    return (
      <>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl my-3 md:my-4 lg:my-5 xl:my-6">
          {pathname.includes("services") ? "سرویس ها" : "خانه"}
        </h1>
        <div className="w-[94%] md:w-[92%] mx-auto skeleton h-16"></div>
      </>
    );
  }
  return (
    <>
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl my-3 md:my-4 lg:my-5 xl:my-6">
        {pathname.includes("services") ? "Services" : "Home"}
      </h1>
      <div className="navbar w-[94%] md:w-[92%] mx-auto border-t-2 border-b-2 border-gray-500 p-0">
        <div className="w-full  navbar-start">
          <div className="navbar-center justify-center sm:justify-normal w-full py-2 flex-wrap flex">
            <ul className="menu  menu-horizontal justify-center sm:justify-normal items-center sm:items-stretch p-0">
              {/* @ts-ignore */}
              {services?.map((item) => {
                const href = `/services/${item.secid}`;
                return (
                  <li key={item.id} className="mx-1">
                    {pathname == href ? (
                      <Link
                        href={href}
                        className="bg-slate-700 hover:bg-slate-700 text-white rounded-xl"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Link
                        className="hover:bg-base-100 border-2 border-base-100 hover:text-slate-700 hover:border-slate-700 rounded-xl"
                        href={href}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesNav;
