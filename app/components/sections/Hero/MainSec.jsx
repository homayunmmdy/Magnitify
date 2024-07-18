"use client";
import { POST_API_URL } from "@/app/config/apiConstants";
import useGetSection from "@/app/hooks/useGetSection";
import Main from "./Main";
import MainSecSkeleton from "./MainSecSkeleton";

const MainSec = () => {
    const { data, loading } = useGetSection(POST_API_URL, -1, 1);

    if (loading) {
        return <MainSecSkeleton />
    }
    return (
        <>
            {data?.map((post, _index) => (
                <Main id={_index} key={_index} post={post} />
            ))}
        </>
    )
}

export default MainSec