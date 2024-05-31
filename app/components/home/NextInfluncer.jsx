"use client"
import useDataFetching from '@/app/hooks/useDataFetching';
import Link from 'next/link';
import { GrLinkNext } from "react-icons/gr";

const NextInfluncer = () => {
    const { data } = useDataFetching("/api/Posts", -3, 6);

    return (
        <>
            {data?.map((post, _index) => (
                <Link href={`/Posts/${post._id}`}
                    key={post._id}
                    className="pt-6 pb-4 space-y-2">
                    <h1 className="text-3xl font-bold">{post.title}</h1>
                    <p>{post.description}</p>
                    <Link rel="noopener noreferrer" href="/archive" className="animate-bounce  inline-flex items-center py-2 space-x-2 text-sm">
                        <span>Read more</span>
                       <GrLinkNext size={16} />
                    </Link>
                </Link>
            ))}
        </>
    )
}

export default NextInfluncer