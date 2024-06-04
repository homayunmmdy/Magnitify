"use client";
import { POST_API_URL } from "@/app/config/apiConstants";
import Main from "./Main";
import MainSecSkeleton from "./MainSecSkeleton";
import useGetSection from "@/app/hooks/useGetSection";

const MainSec = () => {
    const { data, loading } = useGetSection(POST_API_URL, -1, 1);

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