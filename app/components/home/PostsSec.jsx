"use client";
import PostSec from './PostSec'
import useDataFetching from '@/app/hooks/useDataFetching';
import PostSecSkeleton from "./PostSecSkeleton";
import { POST_API_URL } from '@/app/config/constants';

const PostsSec = ({ secid }) => {
    const { data, loading } = useDataFetching(POST_API_URL, -4, secid);

    if (loading) {
        return <PostSecSkeleton />
    }
    return (
        <div className=" mx-auto py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                {data?.map((filteredData, _index) => (
                    <PostSec id={_index} key={_index} post={filteredData} />
                ))}
            </div>
        </div>
    )
}

export default PostsSec