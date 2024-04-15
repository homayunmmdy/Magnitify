import React from "react";
import TicketCard from "./TicketCard";
import AllPost from "./AllPost";
import PostsSkelton from "./PostsSkelton";

const Posts = async () => {
  const data = await AllPost();

  if (!data?.posts) {
    return <PostsSkelton />;
  }

  const posts = data.posts;

  return (
    <div className="p-5">
      <div>
        {posts && (
          <div className="mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((Post, _index) => (
                <TicketCard id={_index} key={_index} ticket={Post} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
