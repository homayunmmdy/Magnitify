import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

//@ts-ignore
const RecentPost = ({ post }) => {
    return (
        <>
            <Link href={`/posts/${post._id}`} className="relative flex flex-col items-start gap-2">
                <Image
                    src={post.imgurl}
                    alt={post.title}
                    width={662.172}
                    height={372.469}
                    className='mb-3 shadow-lg rounded-lg  bg-slate-50 w-full sm:mb-2   xl:w-full'
                />
                <div className="order-1 sm:ml-6 xl:ml-0">
                    <h3 className="mb-1">{post.title}</h3>
                </div>
            </Link>
        </>
    )
}

export default RecentPost