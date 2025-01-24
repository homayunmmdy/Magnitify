"use client";
import PostCard from "@/components/sections/PostCard";
import { LATEST_POSTS_KEY } from "@/config/Constants";
import useGetLatestPosts from "@/hooks/useGetLatestPosts";
import { PostsCashType } from "@/types/CashTypes";
import ErrorBoundaryProvider from "@/util/ErrorBoundaryProvider";
import React, { useState } from "react";
import RecentPostSkeleton from "./RecentPostSkeleton";

const RecentPosts: React.FC = () => {
  const [recentSize] = useState(-3);
  const { posts, loading } = useGetLatestPosts(recentSize, LATEST_POSTS_KEY);

  if (loading) {
    return <RecentPostSkeleton />;
  }
  return (
    <>
      <div className="w-full rounded-[10px] border border-amber-100 p-4 sm:p-7">
        <h2 className="text-custom-4 text-dark mb-3 text-center text-xl font-semibold">
          Recent Posts
        </h2>
        {posts && (
          <div className="grid grid-cols-1 items-start gap-x-3 gap-y-5">
            {posts?.map((Post: PostsCashType) => (
              <PostCard post={Post} key={Post._id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default () => (
  <ErrorBoundaryProvider>
    <RecentPosts />
  </ErrorBoundaryProvider>
);
