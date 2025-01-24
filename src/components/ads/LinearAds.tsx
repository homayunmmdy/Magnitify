"use client";
import Titr from "@/components/Titr";
import { TEXTADV_API_URL } from "@/config/apiConstants";
import { ALL_TEXTADV_QUERY_KEY } from "@/config/Constants";
import { TextAdvCashType } from "@/types/CashTypes";
import ErrorBoundaryProvider from "@/util/ErrorBoundaryProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { FaCircleDot } from "react-icons/fa6";
import LinearAdsLoading from "./LinearAdsLoading";

const LinearAds = ({id} : {id : number}) => {
  const {
    data: mainData,
    isLoading,
    error,
  } = useQuery({
    queryKey: [ALL_TEXTADV_QUERY_KEY],
    queryFn: () => axios.get(TEXTADV_API_URL).then((res) => res.data),
    retry: false,
  });

  if (isLoading) {
    return <LinearAdsLoading />;
  }

  if (error) {
    throw error;
  }

  const filteredData = mainData?.data?.filter(
    (item: TextAdvCashType) => item.textadvid == id
  );
  const ads = filteredData?.slice(-12);

  return (
    <>
      <article>
        <Titr title="Ads Demo Page" item="text-center" />
        <ul className="mb-3 flex flex-col gap-4">
          {ads.map((adv: TextAdvCashType) => (
            <li
              key={adv._id}
              className="group flex cursor-pointer items-start gap-2 rounded-xl border-2 border-dotted border-gray-400 p-2 hover:border-solid hover:border-gray-900"
            >
              <div className="h-7 w-7 flex-shrink-0">
                <FaCircleDot
                  className="h-full w-full text-indigo-700"
                  size={28}
                  color="#4338CA"
                />
              </div>
              <Link
                className="line-clamp-2 font-semibold group-hover:text-indigo-600"
                href={adv.link}
              >
                {adv.body}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
};

export default ({id} : {id : number}) => (
  <ErrorBoundaryProvider>
    <LinearAds id={id}/>
  </ErrorBoundaryProvider>
);
