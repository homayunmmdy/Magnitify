"use client";
import NextMain from "./NextMain";
import NextMainSkeleton from "./NextMainSkeleton";
import useDataFetching from "./useDataFetching";

const NextMainSec = () => {
    const { data, loading } = useDataFetching("fa/api/Posts", -4, 2);

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