"use client";
import { MORE_POSTS_QUERY_KEY } from "@/etc/config/Constants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/CashTypes";
import Titr from "../../../components/Titr";
import { PostsSkeleton } from "../skelton";
import PostCard from "./PostCard";

const MorePosts = () => {
  const { data, loading } = useGetSection(MORE_POSTS_QUERY_KEY, -3, 7);

  if (loading) {
    return <PostsSkeleton />;
  }

  return (
    <>
      <div className="mx-auto pb-6">
        <Titr title="پست های بیشتر" item="text-right" />
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {data?.map((post: PostsCashType) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MorePosts;
