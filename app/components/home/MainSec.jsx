"use client";
import { POST_API_URL } from "@/app/config/constants";
import Main from "./Main";
import MainSecSkeleton from "./MainSecSkeleton";
import useDataFetching from "@/app/hooks/useDataFetching";

const MainSec = () => {
    const { data, loading } = useDataFetching(POST_API_URL, -1, 1);

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