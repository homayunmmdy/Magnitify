"use client";
import RecentPosts from "@/app/(pages)/Posts/[id]/components/RecentPosts";
import SinglePost from "@/app/components/layout/SinglePost";
import PostSeclton from "./PostSkelton";
import { SignIn, useUser } from "@clerk/nextjs";
import FormattedTimestamp from "@/app/services/FormattedTimestamp";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Meta from "@/app/services/Meta";

const Post = () => {
  const post = SinglePost();
  const { user } = useUser();
  const API_URL = process.env.API_URL;
  const pathname = usePathname();
  const id = pathname.slice(7);

  // if (!user) {
  //   return (<div className="flex justify-center py-5 mt-10"> <SignIn /></div>)
  // }

  if (!post) {
    return <PostSeclton />
  }
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  };

  const canonicalUrl = `${API_URL}/Posts/${id}`
  return (
    <>
      <Meta
        title={post.title}
        description={post.description.slice(0, 160)}
        canonical={canonicalUrl}
      />
      <div className="flex flex-col ">
        <div className="bg-indigo-500 pt-10">
          <div className="w-[97%] sm:w-[95%] md:w-[92%] mx-auto px-4 py-8">
            <h1 className="text-4xl text-center font-extrabold text-white">{post.title}</h1>
            <p className="text-lg  text-center my-3 text-white"><FormattedTimestamp timestamp={post.createdAt} options={options} /></p>
          </div>
        </div>
        <div className="bg-white py-8">
          <div className="w-[97%] sm:w-[95%] md:w-[92%] mx-auto flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-3/4 ">
              <img
                className="w-full py-3 aspect-video rounded-3xl"
                src={post.imgurl}
                title={post.title}
                alt={post.title}
                loading="lazy"
              />
              <div className="prose max-w-none">
                <p className="p-3 text-lg leading-9	">
                  {post.body}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/4 py-3">
              <RecentPosts />
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Post;