"use client";
import { LATEST_POSTS_KEY } from "@/etc/config/Constants";
import useGetLatestPosts from "@/hooks/useGetLatestPosts";
import { useState } from "react";
import RecentPost from "./RecentPost";
import RecentPostSkeleton from "./RecentPostSkeleton";

const RecentPosts = () => {
  const [recentSize] = useState(-3);
  const { posts, loading } = useGetLatestPosts(recentSize, LATEST_POSTS_KEY);

  if (loading) {
    return <RecentPostSkeleton />;
  }
  return (
    <>
      <div className=" w-full rounded-[10px] border border-indigo-100 p-4 sm:p-7">
        <h2 className="font-semibold text-custom-4 text-dark mb-3 text-xl text-center">
          Recent Posts
        </h2>
        {posts && (
          <div className="grid grid-cols-1  gap-y-5 gap-x-3 items-start ">
            {/* @ts-ignore */}
            {posts?.map((Post, _index) => (
              <RecentPost key={_index} post={Post} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default RecentPosts;
