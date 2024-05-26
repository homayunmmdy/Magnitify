"use client";
import Main from "./Main";
import MainSecSkeleton from "./MainSecSkeleton";
import useDataFetching from "@/app/hooks/useDataFetching";

const MainSec = () => {
    const { data, loading } = useDataFetching("/api/Posts", -1, 1);

    if (loading) {
        return <MainSecSkeleton />
    }
    return (
        <>
            {data?.map((filteredData, _index) => (
                <Main id={_index} key={_index} post={filteredData} />
            ))}
        </>
    )
}

export default MainSec