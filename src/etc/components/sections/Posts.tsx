"use client";
import Titr from "@/components/Titr";
import { POSTS_QUERY_KEY } from "@/etc/config/Constants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/CashTypes";
import { PostsSecSkeleton } from "../skelton";
import PostCard from "./PostCard";
import React from "react";

interface Props {
  amount : number ,
  id : number,
  title : string
}
const Posts: React.FC<Props> = ({amount , id, title}: Props) => {
  const { data, loading } = useGetSection(POSTS_QUERY_KEY, amount, id);

  if (loading) {
    return <PostsSecSkeleton />;
  }

  return (
    <>
      <div className="mx-auto pb-6">
        <Titr title={title} item="text-right" />
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {data?.map((post: PostsCashType) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
