"use client";
import { LATEST_POSTS_KEY } from "@/etc/config/Constants";
import useGetLatestPosts from "@/hooks/useGetLatestPosts";
import React, { useState } from "react";
import RecentPost from "./RecentPost";
import RecentPostSkeleton from "./RecentPostSkeleton";

const RecentPosts: React.FC = () => {
  const [recentSize] = useState(-3);
  const { posts, loading } = useGetLatestPosts(recentSize, LATEST_POSTS_KEY);

  if (loading) {
    return <RecentPostSkeleton />;
  }
  return (
    <>
      <div className="w-full rounded-[10px] border border-indigo-100 p-4 sm:p-7">
        <h2 className="text-custom-4 text-dark mb-3 text-center text-xl font-semibold">
          جدیدترین پست ها
        </h2>
        {posts && (
          <div className="grid grid-cols-1 items-start gap-x-3 gap-y-5">
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
