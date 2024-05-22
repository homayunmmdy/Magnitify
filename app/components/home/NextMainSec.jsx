"use client";
import NextMain from "./NextMain";
import NextMainSkeleton from "./NextMainSkeleton";
import useDataFetching from "../../layout/useDataFetching";

const NextMainSec = () => {
    const { data, loading } = useDataFetching("/api/Posts", -4, 2);

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