"use client";
import RecentPosts from "@/app/(pages)/Posts/[id]/components/RecentPosts";
import { FormatTime } from "@/app/components/layout";
import useReadText from "@/app/hooks/useReadText";
import useSinglePost from "@/app/hooks/useSinglePost";
import Image from "next/image";
import Head from 'next/head'
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa6";
import { readingTime } from 'reading-time-estimator';
import PostSeclton from "./PostSkelton";
import { FaRegMessage } from "react-icons/fa6";
import SiteConfig from "@/app/config/site";




const Post = () => {
    const post = useSinglePost();
  const text = `${post?.title}. ${post?.body}`
  const { isSpeaking, handleReadText, handleStopReading } = useReadText(text);



  if (!post) {
    return <PostSeclton />
  }
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  };
  const readingTimeEstimate = readingTime(text, 100, "en")

  return (
    <>
<Head>
        <title>{post?.title}</title>
        <meta name="description" content={post?.description} />
        <link rel="canonical" href={`${SiteConfig.siteURL}/${post?._id}`} />
      </Head>
      <div className="flex flex-col ">
        <div className="bg-indigo-500 pt-10">
          <div className="w-[94%] md:w-[92%] mx-auto px-4 py-8">
            <h1 className="text-4xl text-center font-extrabold text-white">{post.title}</h1>
            <p className="text-lg  text-center my-3 text-white"><FormatTime timestamp={post.createdAt} options={options} /></p>
          </div>
        </div>
        <div className="bg-white py-8">
          <div className="w-[94%] md:w-[92%] mx-auto flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-3/4 ">
              <Image
                className="w-full aspect-video rounded-3xl"
                src={post.imgurl}
                width={880}
                height={500}
                title={post.title}
                alt={post.title}
                blurDataURL={post.imgurl}
                placeholder="blur"
                layout="responsive"
                loading="lazy"
              />
            <div id="container-e8bfa9a57e9e57a1c63d4f90b5f9c69a"></div>
              <div className="flex gap-3 items-center justify-between p-3">
                <p className="text-center hover:underline hover:text-indigo-600">{readingTimeEstimate.text}</p>
                <Link href="/" className="btn btn-outline btn-primary rounded-full">Back Home</Link>
                <div>
                  {!isSpeaking ? (
                    <button
                      onClick={handleReadText}
                      aria-label="play sound button"
                      className="px-4 py-2 btn text-white btn-primary rounded-full"
                    >
                      <FaPlay />
                    </button>
                  ) : (
                    <button
                      onClick={handleStopReading}
                      aria-label="stop sound button"
                      className="px-4 py-2 btn text-white btn-primary rounded-full"
                    >
                      <FaStop />
                    </button>
                  )}
                </div>
              </div>
              <div className="prose max-w-none">
                <p className="p-3 text-lg leading-9	">
                  {post.body}
                </p>
              </div>
                <div class="w-full p-3">
    <div class="relative group">
      <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
        <FaRegMessage size={120} color="1D4ED8" />

        <div class="space-y-2">
          <p class="text-slate-800 leading-6">Hi, my name is Homayoun. I am the founder of Magnitify. At Magnitify, we write articles about AI, business, and self-improvement. We share insights from books, document our experiences, and explore what we learn about these three topics. I hope you enjoy our content!</p>
        </div>
      </div>
    </div>
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
