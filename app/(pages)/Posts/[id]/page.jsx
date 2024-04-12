"use client";
import BreadCrump from "../../../ui/components/BreadCrump";
import NewsletterBox from "../../../ui/components/NewsletterBox";
import RecentPosts from "../../../ui/sections/RecentPosts";
import SinglePost from "../../../ui/home/SinglePost";
import PostSkelton from "./PostSkelton";
const Ticket = () => {
  const post = SinglePost();

  if (!post) {
    return <PostSkelton />
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-4 p-4 md:p-8">
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <img
            className="w-full p-3 aspect-video rounded-3xl"
            src={post.imgurl}
            title={post.title}
            alt={post.title}
            width="880"
            height="450"
            loading="lazy"
          />
          <BreadCrump />
          <div >
            <h1 className="text-center mb-3">{post.title}</h1>
            <p>
              <div id="pos-article-display-card-94403"></div>
              {post.description}
            </p>
            <p>{post.body}</p>
            <div id="pos-article-text-card-94410"></div>
            <div id="pos-article-display-94407"></div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          {/* <RecentPosts /> */}
          <div id="pos-article-text-94696"></div>
          <NewsletterBox />
        </div>
      </div>
    </>
  );
};

export default Ticket;
