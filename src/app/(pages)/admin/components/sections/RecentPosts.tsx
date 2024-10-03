"use client";
import { LATEST_POSTS_KEY } from "@/etc/config/Constants";
import useGetLatestPosts from "@/hooks/useGetLatestPosts";
import { useState } from "react";
import RecentPost from "./RecentPost";

const RecentPosts = () => {
  const [recentSize] = useState(-3);
  const { posts } = useGetLatestPosts(recentSize, LATEST_POSTS_KEY);
  return (
    <>
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start py-8">
        {/* @ts-ignore */}
        {posts?.map((post, _index) => (
          <>
            {/* @ts-ignore */}
            <RecentPost id={_index} key={_index} post={post} />
          </>
        ))}
      </ul>
    </>
  );
};

export default RecentPosts;
