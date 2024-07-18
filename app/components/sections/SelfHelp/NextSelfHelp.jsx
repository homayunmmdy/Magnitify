"use client";
import { POST_API_URL } from "@/app/config/apiConstants";
import useGetSection from "@/app/hooks/useGetSection";
import Link from "next/link";
import NextSelfHelpSkeleton from "./NextSelfHelpSkeleton";

const NextSelfHelp = () => {
    const { data, loading } = useGetSection(POST_API_URL, -6, 8);

    if (loading) {
        return <NextSelfHelpSkeleton />;
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
                    <h3 href={`/Posts/${post._id}`}
                        className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                        {post.title}
                    </h3>
                </div>
            ))}
        </>
    )
}

export default NextSelfHelp