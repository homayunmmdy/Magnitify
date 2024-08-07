"use client"
import { POST_API_URL } from '@/app/config/apiConstants';
import useGetSection from '@/app/hooks/useGetSection';
import Link from 'next/link';
import { GrLinkNext } from "react-icons/gr";
import NextInfluncerSkeleton from './NextInfluncerSkeleton';

const NextInfluncer = () => {
    const { data, loading } = useGetSection(POST_API_URL, -3, 6);

    if (loading) {
        return <NextInfluncerSkeleton />
    }
    return (
        <>
            {data?.map((post, _index) => (
                <Link href={`/Posts/${post._id}`}
                    key={post._id}
                    className="pt-6 pb-4 space-y-2">
                    <h3 className="text-3xl font-bold">{post.title}</h3>
                    <p>{post.description}</p>
                </Link>
            ))}
        </>
    )
}

export default NextInfluncer