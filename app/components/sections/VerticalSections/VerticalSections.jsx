"use client";
import VerticalSection from './VerticalSection'
import VerticalSectionSkeleton from "./VerticalSectionSkeleton";
import { POST_API_URL } from '@/app/config/apiConstants';
import useGetSection from '@/app/hooks/useGetSection';

const VerticalSections = ({ secid }) => {
    const { data, loading } = useGetSection(POST_API_URL, -4, secid);

    if (loading) {
        return <VerticalSectionSkeleton />
    }
    return (
        <div className=" mx-auto py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                {data?.map((filteredData, _index) => (
                    <VerticalSection id={_index} key={_index} post={filteredData} />
                ))}
            </div>
        </div>
    )
}

export default VerticalSections