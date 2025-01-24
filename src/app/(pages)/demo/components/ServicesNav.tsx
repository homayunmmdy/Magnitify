"use client";
import { SERVICES_API_URL } from "@/config/apiConstants";
import { SERVICES_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { ServicesCashType } from "@/types/CashTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ServicesNav: React.FC = () => {
  const { data: services, loading } = useFetch(
    SERVICES_QUERY_KEY,
    SERVICES_API_URL
  );
  const pathname = usePathname();

  if (loading) {
    return (
      <>
        <h2 className="my-3 text-center text-3xl md:my-4 md:text-4xl lg:my-5 lg:text-5xl xl:my-6 xl:text-6xl">
          {pathname.includes("services") ? "Services" : "Home"}
        </h2>
        <div className="skeleton mx-auto h-16 w-[94%] md:w-[92%]"></div>
      </>
    );
  }
  return (
    <>
      <span className="my-3 block text-center text-3xl md:my-4 md:text-4xl lg:my-5 lg:text-5xl xl:my-6 xl:text-6xl">
        {pathname.includes("services") ? "Services" : "Home"}
      </span>
      <div className="navbar mx-auto w-[94%] border-b-2 border-t-2 border-gray-500 p-0 md:w-[92%]">
        <div className="navbar-start w-full">
          <nav className="navbar-center flex w-full flex-wrap justify-center py-2 sm:justify-normal">
            <ul className="menu menu-horizontal items-center justify-center p-0 sm:items-stretch sm:justify-normal">
              {services?.map((item: ServicesCashType) => {
                const href = `/services/${item.secid}`;
                return (
                  <li key={item._id} className="mx-1">
                    {pathname == href ? (
                      <Link
                        href={href}
                        className="rounded-xl bg-slate-700 text-white hover:bg-slate-700"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Link
                        className="rounded-xl border-2 border-base-100 hover:border-slate-700 hover:bg-base-100 hover:text-slate-700"
                        href={href}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ServicesNav;
