"use client";
import SubHero from "./SubHero";
import SubHeroSkeleton from "./SubHeroSkeleton";
import useDataFetching from "@/app/hooks/useDataFetching";


const SubHeroSec = () => {
    const { data, loading } = useDataFetching("/api/Posts", -4, 3);

    if (loading) {
        return <SubHeroSkeleton />;
    }

    return (
        <>
            <hr className="border-b-2 border-gray-300 my-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data?.map((filteredData, _index) => (
                    <SubHero id={_index} key={_index} post={filteredData} />
                ))}
            </div>
        </>
    )
}

export default SubHeroSec