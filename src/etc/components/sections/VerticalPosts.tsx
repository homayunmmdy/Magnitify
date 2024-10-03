"use client";
import Titr from "@/components/Titr";
import { VERTICAL_POSTS_QUERY_KEY } from "@/etc/config/Constants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/CashTypes";
import { VerticalSkeleton } from "../skelton";
import VerticalPost from "./VerticalPost";

const VerticalPosts = () => {
  const { data, loading } = useGetSection(VERTICAL_POSTS_QUERY_KEY, -4, 4);

  if (loading) {
    return <VerticalSkeleton />;
  }

  return (
    <>
      <div className="mx-auto py-6">
        <Titr title="Vertical Posts" item="text-left" />
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
          {data?.map((post: PostsCashType) => (
            <VerticalPost key={post._id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VerticalPosts;
