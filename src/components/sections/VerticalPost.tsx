import { PostsCashType } from "@/types/CashTypes";
import Link from "next/link";
import React from 'react'

const VerticalPost = ({ post }: {post : PostsCashType}) => {
  return (
    <>
      <Link
        key={post._id}
        href={`/posts/${post._id}`}
        className="group relative flex h-[450px] w-full items-end justify-start overflow-hidden rounded-md bg-indigo-600 bg-cover bg-center text-left transition-all hover:hover:scale-105"
        style={{ backgroundImage: `url(${!post.imgurl? "/static/Image/logo.jpg" : post.imgurl})` }}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 mt-20 bg-gradient-to-b from-transparent to-gray-900"></div>
        <main className="z-10 p-5">
          <h4 className="text-md font-regular font-medium leading-7 tracking-tight text-white group-hover:text-indigo-700 group-hover:underline">
            {post.title.slice(0,90)}
          </h4>
        </main>
      </Link>
    </>
  );
};

export default VerticalPost;
