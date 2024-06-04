"use client";
import { POST_API_URL } from "@/app/config/apiConstants";
import NextMain from "./NextMain";
import NextMainSkeleton from "./NextMainSkeleton";
import useGetSection from "@/app/hooks/useGetSection";


const NextMainSec = () => {
    const { data, loading } = useGetSection(POST_API_URL, -4, 2);

    if (loading) {
        return <NextMainSkeleton />;
    }

    return (
        <>
            {data?.map((filteredData, _index) => (
                <NextMain id={_index} key={_index} post={filteredData} />
            ))}
        </>
    )
}

export default NextMainSec