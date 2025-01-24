"use client";
import RecentPosts from "@/app/(pages)/posts/[id]/components/RecentPosts";
import "@/app/tiptap.css";
import useSinglePost from "@/hooks/useSinglePost";
import React from "react";
import NotFound from "../../[...not_found]/not-found";
import NewsBody from "./components/NewsBody";
import NewsHead from "./components/NewsHead";
import PostMeta from "./components/PostMeta";
import PostSeclton from "./PostSkelton";

type PostsCashType = {
  _id: string;
  title: string;
  body: string;
  description: string;
  createdAt: string;
  imgurl: string;
  categories: { id: string; name: string }[];
};

const Post: React.FC = () => {
  const { data: post, isLoading, isError } = useSinglePost();

  if (isLoading) {
    return <PostSeclton />;
  }

  if (isError || !post || !post._id) {
    return NotFound();
  }

  return (
    <>
      <PostMeta post={post} />
      <div className="flex flex-col">
        <NewsHead title={post.title} createdAt={post.createdAt} />
        <div className="py-8">
          <div className="mx-auto flex w-[94%] flex-col gap-8 md:w-[92%] md:flex-row">
            <div className="w-full md:w-3/4">
              <NewsBody post={post} />
            </div>
            <div className="w-full py-3 md:w-1/4">
              <RecentPosts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
