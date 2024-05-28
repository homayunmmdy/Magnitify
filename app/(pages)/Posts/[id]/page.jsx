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

  if (!user) {
    return (<div className="flex justify-center py-5"> <SignIn /></div>)
  }

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
      <div className="flex flex-col">
        <div className="bg-base-200 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">{post.title}</h1>
            <p className="text-lg  text-center my-3"><FormattedTimestamp timestamp={post.createdAt} options={options} /></p>
          </div>
        </div>
        <div className="bg-white py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 px-4">
              <img
                className="w-full p-3 aspect-video rounded-3xl"
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
            <div className="w-full md:w-1/4 px-4">
              <RecentPosts />
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Post;