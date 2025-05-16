"use client";
import PostCard from "@/components/sections/PostCard";
import { POST_API_URL } from "@/config/apiConstants";
import { ALL_POSTS_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { PostsCashType } from "@/types/CashTypes";
import { getParameterId } from "@/util/Util";
import { useRouter } from "next/navigation";
import React from "react";
import NotFound from "../../[...not_found]/not-found";
import ServicesImg from "./components/ServicesImg";
import PostsSkeleton from "@/app/(pages)/services/[id]/components/PostsSkeleton";

const ServicesPage: React.FC = () => {
  const id = getParameterId(10);
  const { data: posts, loading } = useFetch(ALL_POSTS_QUERY_KEY, POST_API_URL);
  const router = useRouter();

  if (loading) {
    return (
      <>
        <div className="mx-auto p-10">
          <PostsSkeleton />
        </div>
      </>
    );
  }

  const filteredData = posts?.filter(
    (item: PostsCashType) => item.services == id
  );

  if (!filteredData || filteredData.length == 0) {
    return NotFound();
  }

  const sortedByTime = filteredData.sort(
    (
      a: { createdAt: string | number | Date },
      b: { createdAt: string | number | Date }
    ) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  );

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 pt-2 sm:px-6 lg:px-8">
        <ServicesImg />
        <div className="flex flex-col gap-4 divide-y-4">
          {sortedByTime.map((item: PostsCashType) => (
            <PostCard key={item._id} post={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
