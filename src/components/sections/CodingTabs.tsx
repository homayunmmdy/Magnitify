"use client";
import { Button } from "@/components";
import { POST_API_URL } from "@/config/apiConstants";
import { ALL_POSTS_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { PostsCashType } from "@/types/CashTypes";
import { useState } from "react";
import PostCard from "./PostCard";
import { Posts4x4Skeleton } from "../skelton";

const CodingTabs = () => {
  const [activeTab, setActiveTab] = useState<"6" | "7" | "8" | "9" | "10">("6");

  const tabs = [
    { id: "6", title: "JS/TS" },
    { id: "7", title: "React" },
    { id: "8", title: "DSA" },
    { id: "9", title: "Technical" },
    { id: "10", title: "Behaviour" },
  ];

  const { data: posts, loading } = useFetch(ALL_POSTS_QUERY_KEY, POST_API_URL);

  if (loading) {
    return <Posts4x4Skeleton />;
  }
  const filteredPosts = posts.filter(
    (post: PostsCashType) => post.section == activeTab
  );

  return (
    <>
      {/* Tabs */}
      <div className="mb-12 flex flex-wrap justify-center gap-4">
        {tabs.map(({ id, title }) => (
          <Button
            color="btn-primary"
            key={id}
            onClick={() => setActiveTab(id as typeof activeTab)}
            className={activeTab !== id ? "btn-outline" : ""}
          >
            {title}
          </Button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {filteredPosts.map((post: PostsCashType) => (
          <PostCard post={post} key={post._id}/>
        ))}
      </div>
    </>
  );
};

export default CodingTabs;
