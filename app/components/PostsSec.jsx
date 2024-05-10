"use client";
import PostSec from './PostSec'
import useDataFetching from "./useDataFetching";
import PostSecSkeleton from "./PostSecSkeleton";

const PostsSec = ({secid}) => {
    const { data, loading } = useDataFetching("/api/Posts", -4, secid);

    if (loading) {
        return <PostSecSkeleton />
    }
    return (
        <div className=" mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                {data?.map((filteredData, _index) => (
                    <PostSec id={_index} key={_index} post={filteredData} />
                ))}
            </div>
        </div>
    )
}

export default PostsSec