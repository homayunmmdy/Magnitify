"use client";
import { Button } from "@/components";
import { TIMELINE_API_URL } from "@/etc/config/apiConstants";
import { TIMELINE_KEY } from "@/etc/config/Constants";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { DeleteBlock } from "../admin/components/elements";

const TimeLinePage: React.FC = () => {
  const { data } = useFetch(TIMELINE_KEY, TIMELINE_API_URL);

  // @ts-ignore
  const sortedByTime = data?.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-6">
        {/* @ts-ignore */}
        {sortedByTime?.map((item, index) => (
          <li key={item._id}>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={`${
                index % 2 === 0
                  ? "timeline-start md:text-end"
                  : "timeline-end md:text-start"
              } mb-10 `}
            >
              {/* <time className="font-mono italic">1984</time> */}
              <div className="text-lg font-black">{item.title} </div>
              <p>{item.description}</p>

              <span
                className={`flex gap-3 my-2 ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                } `}
              >
                <Link
                  href={`/admin/time/${item._id}`}
                  style={{ display: "contents" }}
                >
                  <Button
                    title={<FaEdit />}
                    color="btn-warning"
                    type="button"
                  />
                </Link>
                <DeleteBlock path="time" id={item._id} />
              </span>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TimeLinePage;
