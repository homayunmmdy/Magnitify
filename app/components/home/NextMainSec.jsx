"use client";
import { POST_API_URL } from "@/app/config/constants";
import NextMain from "./NextMain";
import NextMainSkeleton from "./NextMainSkeleton";
import useDataFetching from "@/app/hooks/useDataFetching";


const NextMainSec = () => {
    const { data, loading } = useDataFetching(POST_API_URL, -4, 2);

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