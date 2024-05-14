"use client";
import RecentPosts from "@/app/components/RecentPosts";
import SinglePost from "@/app/components/SinglePost";
import PostSeclton from "./PostSkelton";
import { SignIn, useUser } from "@clerk/nextjs";
import FormattedTimestamp from "@/app/components/FormattedTimestamp";

const Post = () => {
  const post = SinglePost();
  const { user } = useUser();

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


  return (
    <>
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
              <div id="pos-article-text-card-94410"></div>
              <div className="prose max-w-none">
                <pre className="p-3 text-lg leading-9	">
                  <div id="pos-article-display-card-94403"></div>
                  {post.body}</pre>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4">
              <RecentPosts />
              <div id="pos-article-text-94402"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
