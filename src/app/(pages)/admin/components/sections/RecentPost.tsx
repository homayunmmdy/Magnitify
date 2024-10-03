import Image from "next/image";
import Link from "next/link";
import React from "react";

//@ts-ignore
const RecentPost = ({ post }) => {
  return (
    <>
      <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <Link href={`/posts/${post._id}`}>
          <Image
            src={post.imgurl}
            alt={post.title}
            className="mb-6 aspect-video shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
            width={1216}
            height={640}
          />
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 font-semibold">
              {post.title.slice(0, 60)}
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
              <p>{post.description.slice(0, 60)}</p>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default RecentPost;
