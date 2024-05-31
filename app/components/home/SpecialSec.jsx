"use client";
import Link from "next/link";
import SpecialSecSkeleton from "@/app/components/home/SpecialSecSkeleton";
import useDataFetching from '@/app/hooks/useDataFetching';
import { POST_API_URL } from "@/app/config/constants";

const SpecialSec = () => {
    const { data, loading } = useDataFetching(POST_API_URL, -6, 8);

    if (loading) {
        return <SpecialSecSkeleton />;
    }
    return (
        <>
            {data?.map((post) => (
                <div key={post._id}>
                    <Link href={`/Posts/${post._id}`}>
                        <div className="h-40 bg-cover text-center overflow-hidden rounded-lg"
                            style={{ backgroundImage: `url(${post.imgurl})` }}
                            title={post.title}>
                        </div>
                    </Link>
                    <Link href={`/Posts/${post._id}`}
                        className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                        {post.title}
                    </Link>
                </div>
            ))}
        </>
    )
}

export default SpecialSec