"use client";
import { POST_API_URL } from "@/app/config/apiConstants";
import useGetSection from "@/app/hooks/useGetSection";
import NextMain from "./NextMain";
import NextMainSkeleton from "./NextMainSkeleton";


const NextMainSec = () => {
    const { data, loading } = useGetSection(POST_API_URL, -4, 2);

    if (loading) {
        return <NextMainSkeleton />;
    }

    return (
        <>
            {data?.map((post, _index) => (
                <NextMain id={_index} key={_index} post={post} />
            ))}
        </>
    )
}

export default NextMainSec