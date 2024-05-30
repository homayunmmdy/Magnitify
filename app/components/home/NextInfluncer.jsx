"use client"
import useDataFetching from '@/app/hooks/useDataFetching';
import Link from 'next/link';
import React from 'react'

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
                    <a rel="noopener noreferrer" href="/archive" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                </Link>
            ))}
        </>
    )
}

export default NextInfluncer