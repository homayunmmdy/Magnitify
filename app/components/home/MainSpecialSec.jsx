"use client"
import useDataFetching from '@/app/hooks/useDataFetching';
import Link from 'next/link'
import React from 'react'

const MainSpecialSec = () => {
    const { data } = useDataFetching("/api/Posts", -1, 9);

    return (
        <div>
            {data?.map((post, _index) => (
                <div key={post._id}>
                    <Link href="#">
                        <div className="bg-cover text-center overflow-hidden min-h-80"
                            style={{ backgroundImage: `url(${post.imgurl})` }}
                        >
                        </div>
                    </Link>
                    <div
                        className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                        <div className="">
                            <Link href="#"
                                className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">{post.title}</Link>
                            <p className="text-gray-700 text-base mt-2">
                                {post.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MainSpecialSec