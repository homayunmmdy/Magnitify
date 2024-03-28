import React from "react";

const PostSkelton = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <div className="p-3">
            <div className="skeleton aspect-video rounded-3xl w-full"></div>
          </div>
          <div className="p-4">
            <div className="skeleton h-4 w-[80%] mb-4"></div>
            <div className="skeleton h-4 w-full mb-4"></div>
            <div className="skeleton h-4 w-full mb-4"></div>
            <div className="skeleton h-4 w-full mb-4"></div>
            <div className="skeleton h-4 w-full mb-4"></div>
            <div className="skeleton h-4 w-full mb-4"></div>
            <div className="skeleton h-4 w-full mb-4"></div>
          </div>
        </div>
        <div className="col-span-0 md:col-span-4 lg:col-span-3"></div>
      </div>
    </div>
  );
};

export default PostSkelton;
