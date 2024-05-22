import React from 'react'
import FormattedTimestamp from '../layout/FormattedTimestamp';
import Link from 'next/link';

const PostSec = ({ post }) => {
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };
    return (
        <>
            <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center h-[450px] rounded-md"
                style={{ backgroundImage: `url(${post.imgurl})` }}
            >
                <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900">
                </div>
                <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-end items-center">
                    <div className="text-white font-regular flex flex-col justify-end">
                        <span className="text-2xl leading-0 font-semibold"><FormattedTimestamp timestamp={post.createdAt} options={options} /></span>
                    </div>
                </div>
                <main className="p-5 z-10">
                    <Link href={`/Posts/${post._id}`}
                        className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">
                        {post.title}
                    </Link>
                </main>
            </div>
        </>
    )
}

export default PostSec