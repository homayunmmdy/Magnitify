"use client"
import { POST_API_URL } from '@/app/config/constants';
import useDataFetching from '@/app/hooks/useDataFetching';
import Link from 'next/link';
import React from 'react'
import { GrLinkNext } from "react-icons/gr";

const InfluncerSec = () => {
  const { data } = useDataFetching(POST_API_URL, -1, 5);

  return (
    <>
      {data?.map((post, _index) => (
        <Link href={`/Posts/${post._id}`} className="shadow-xl flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover lg:col-span-6 lg:h-auto"
          style={{ backgroundImage: `url(${post.imgurl})` }}
          key={post._id}
        >
          <div className="flex flex-col items-center p-8 py-12 text-center">
            <h1 className="py-4 text-5xl font-bold">{post.title}</h1>
            <p className="pb-6">{post.description}</p>
            <GrLinkNext className="animate-bounce" size={28} />
          </div>
        </Link>
      ))}
    </>
  )
}

export default InfluncerSec