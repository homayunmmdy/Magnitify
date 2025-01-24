"use client";
import Titr from "@/components/Titr";
import { VERTICAL_POSTS_QUERY_KEY } from "@/config/Constants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/CashTypes";
import ErrorBoundaryProvider from "@/util/ErrorBoundaryProvider";
import React from "react";
import VerticalPost from "./VerticalPost";
import { VerticalSkeleton } from "../skelton";

const VerticalPosts: React.FC = () => {
  const { data, loading } = useGetSection(VERTICAL_POSTS_QUERY_KEY, -4, 4);

  if (loading) {
    return <VerticalSkeleton />;
  }

  return (
    <>
      <article className="mx-auto py-6">
        <Titr title="Vertical Posts" item="text-left" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {data?.map((post: PostsCashType) => (
            <VerticalPost key={post._id} post={post} />
          ))}
        </div>
      </article>
    </>
  );
};

export default () => (
  <ErrorBoundaryProvider>
    <VerticalPosts />
  </ErrorBoundaryProvider>
);
