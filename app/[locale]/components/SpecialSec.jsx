"use client";
import SpecialSecSkeleton from "./SpecialSecSkeleton";
import useDataFetching from "./useDataFetching";

const SpecialSec = () => {
    const { data, loading } = useDataFetching("fa/api/Posts", -6, 8);

    if (loading) {
        return <SpecialSecSkeleton />;
    }
    return (
        <div>
            {data?.map((post) => (
                <div key={post._id}>
                    <a href={`/Posts/${post._id}`}>
                        <div className="h-40 bg-cover text-center overflow-hidden rounded-lg"
                            style={{ backgroundImage: `url(${post.imgurl})` }}
                            title={post.title}>
                        </div>
                    </a>
                    <a href={`/Posts/${post._id}`}
                        className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                        {post.title}</a>
                </div>
            ))}
        </div>
    )
}

export default SpecialSec