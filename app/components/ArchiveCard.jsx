import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArchiveCard = ({ post }) => {
    return (
        <>
            <Link
                href={`/Posts/${post._id}`}
                className="relative bg-white border rounded-lg shadow-md transform transition duration-500 hover:scale-105">
                <div className="p-2 flex justify-center">
                    <Link href={`/Posts/${post._id}`}>
                        <Image className="rounded-md aspect-video"
                            src={post.imgurl}
                            alt={post.title}
                            loading="lazy" />
                    </Link>
                </div>
                <div className="px-4 pb-3">
                    <Link href={`/Posts/${post._id}`}>
                        <h5
                            className="text-xl font-semibold tracking-tight hover:text-violet-800 text-gray-900">
                            {post.title}
                        </h5>
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