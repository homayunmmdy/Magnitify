import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArchiveCard = ({ post }) => {
    return (
        <>
            <Link
                href={`/Posts/${post._id}`}
                className="group relative bg-white border rounded-lg shadow-md transition duration-300 delay-100 transform hover:scale-105">
                <div className="p-2 flex justify-center">
                    <Link href={`/Posts/${post._id}`}>
                        <img className="rounded-md aspect-video"
                            src={post.imgurl}
                            alt={post.title}
                            loading="lazy" />
                    </Link>
                </div>
                <div className="px-4 pb-3">
                    <Link href={`/Posts/${post._id}`}>
                        <h3
                            className="text-xl font-semibold transition duration-300 delay-100 tracking-tight group-hover:text-violet-800 text-gray-900">
                            {post.title}
                        </h3>
                    </Link>
                    <p className="antialiased text-gray-600 text-sm break-all truncate">
                        {post.description}
                    </p>
                </div>
            </Link>
        </>
    )
}

export default ArchiveCard