"use client";
import PostCard from "@/etc/components/sections/PostCard";
import { PostsSkeleton } from "@/etc/components/skelton";
import { POST_API_URL } from "@/etc/config/apiConstants";
import { ALL_POSTS_QUERY_KEY } from "@/etc/config/Constants";
import useFetch from "@/hooks/useFetch";
import { usePathname } from "next/navigation";
import React from "react";
import ServicesImg from "./components/ServicesImg";

const ServicesPage: React.FC = () => {
  const pathname = usePathname();
  const id = pathname.slice(10);
  const { data: posts, loading } = useFetch(ALL_POSTS_QUERY_KEY, POST_API_URL);

  //@ts-ignore
  const filteredData = posts?.filter((item) => item.services == id);
  if (loading) {
    return (
      <>
        <div className="mx-auto p-10">
          <PostsSkeleton />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="mx-auto p-4 md:p-10">
        <ServicesImg />
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
          {/* @ts-ignore */}
          {filteredData?.map((item) => (
            <PostCard key={item._id} post={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
