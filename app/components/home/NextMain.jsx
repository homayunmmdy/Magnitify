import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NextMain = ({ post }) => {
    return (
        <>
            <Link href={`/Posts/${post._id}`} className='grid grid-cols-12  gap-4 md:gap-8 items-center mb-4'>
                <div className='col-span-12 md:col-span-6 xl:col-span-4'>
                    <div>
                        <Image src={post.imgurl}
                            alt={post.title}
                            className="w-full h-full aspect-video object-cover rounded-md"
                            width={270}
                            height={150}
                        />
                    </div>
                </div>
                <div className='col-span-12 md:col-span-6 xl:col-span-8'>
                    <p className='font-light my-2 text-lg leading-relaxed'>
                        {post.title}
                    </p>
                </div>
            </Link>
        </>
    )
}

export default NextMain