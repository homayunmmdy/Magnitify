"use client"
import useDataFetching from '@/app/hooks/useDataFetching';
import Link from 'next/link';
import React from 'react'

const InfluncerSec = () => {
  const { data } = useDataFetching("/api/Posts", -1, 5);

  return (
    <>
      {data?.map((post, _index) => (
        <Link href={`/Posts/${post._id}`} className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto"
          style={{ backgroundImage: `url(${post.imgurl})` }}
          key={post._id}
        >
          <div className="flex flex-col items-center p-8 py-12 text-center dark:text-gray-800">
            <h1 className="py-4 text-5xl font-bold">{post.title}</h1>
            <p className="pb-6">{post.description}</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </div>
        </Link>
      ))}
    </>
  )
}

export default InfluncerSec