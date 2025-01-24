"use client";
import PostCard from "@/components/sections/PostCard";
import { LATEST_POSTS_KEY } from "@/config/Constants";
import useGetLatestPosts from "@/hooks/useGetLatestPosts";
import { PostsCashType } from "@/types/CashTypes";
import ErrorBoundaryProvider from "@/util/ErrorBoundaryProvider";
import React, { useState } from "react";

const RecentPosts: React.FC = () => {
  const [recentSize] = useState(-4);
  const { posts } = useGetLatestPosts(recentSize, LATEST_POSTS_KEY);
  return (
    <>
      <div className="grid h-full grid-cols-1 items-start gap-x-6 gap-y-10 py-8 md:grid-cols-2 xl:grid-cols-4">
        {posts?.map((post: PostsCashType) => (
            <PostCard post={post} key={post._id}/>
        ))}
      </div>
    </>
  );
};

export default () => (
  <ErrorBoundaryProvider>
    <RecentPosts />
  </ErrorBoundaryProvider>
);
