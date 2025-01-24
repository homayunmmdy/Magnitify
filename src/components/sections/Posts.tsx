"use client";
import Titr from "@/components/Titr";
import { POSTS_QUERY_KEY } from "@/config/Constants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/CashTypes";
import ErrorBoundaryProvider from "@/util/ErrorBoundaryProvider";
import React from "react";
import PostCard from "./PostCard";
import { PostsSecSkeleton } from "../skelton";

const Posts: React.FC = () => {
  const { data, loading } = useGetSection(POSTS_QUERY_KEY, -6, 2);

  if (loading) {
    return <PostsSecSkeleton />;
  }

  return (
    <>
      <article className="mx-auto pb-6">
        <Titr title="Posts" item="text-left" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {data?.map((post: PostsCashType) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </article>
    </>
  );
};

export default () => (
  <ErrorBoundaryProvider>
    <Posts />
  </ErrorBoundaryProvider>
);
