import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Main = ({ post }) => {
    return (
        <>
            <Link href={`/Posts/${post._id}`} className='grid grid-cols-12  gap-4 md:gap-8 h-full'>
                <div className='col-span-12 xl:col-span-5 h-full'>
                    <Image src={post.imgurl}
                        alt={post.title}
                        className="w-full h-full sm:h-[450px] object-cover rounded-md"
                        width={700}
                        height={600}
                    />
                </div>
                <div className='col-span-12 xl:col-span-7 grid items-center'>
                    <section className='py-4'>
                        <h1 className="text-4xl font-light text-black mb-6 sm:text-6xl xl:text-6xl tracking-wide leading-relaxed">
                            {post.title}
                        </h1>
                        <p className='leading-10 font-medium'>
                            {post.description}
                        </p>
                    </section>
                </div>
            </Link>
        </>
    )
}

export default Main