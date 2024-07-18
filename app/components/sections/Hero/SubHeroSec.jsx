"use client";
import useGetLatestPosts from "@/app/hooks/useGetLatestPosts";
import { useState } from "react";
import SubHero from "./SubHero";
import SubHeroSkeleton from "./SubHeroSkeleton";


const SubHeroSec = () => {
    const [recentSize] = useState(-5);
    const { posts, loading } = useGetLatestPosts(recentSize);

    if (loading) {
        return <SubHeroSkeleton />;
    }

    return (
        <>
            <hr className="border-b-2 border-gray-300 my-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {posts?.map((post, _index) => (
                    <SubHero id={_index} key={_index} post={post} />
                ))}
            </div>
        </>
    )
}

export default SubHeroSec