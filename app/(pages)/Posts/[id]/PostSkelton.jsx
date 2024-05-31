import React from "react";

const PostSkelton = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="bg-indigo-500 pt-10">
          <div className="w-[97%] sm:w-[95%] md:w-[92%] mx-auto px-4 py-8 flex justify-center items-center flex-col">
            <div className="skeleton h-6 w-full mb-6"></div>
            <div className="skeleton h-4 w-32 mb-4"></div>
          </div>
        </div>
        <div className="bg-white py-8">
          <div className="w-[97%] sm:w-[95%] md:w-[92%] mx-auto flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-3/4 ">
              <div className="skeleton aspect-video rounded-3xl w-full"></div>
              <div className="prose max-w-none">
                <div className="py-4">
                  <div className="skeleton h-4 w-[80%] mb-4"></div>
                  <div className="skeleton h-4 w-full mb-4"></div>
                  <div className="skeleton h-4 w-full mb-4"></div>
                  <div className="skeleton h-4 w-full mb-4"></div>
                  <div className="skeleton h-4 w-full mb-4"></div>
                  <div className="skeleton h-4 w-full mb-4"></div>
                  <div className="skeleton h-4 w-full mb-4"></div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 ">
              <div className="skeleton h-96  rounded-3xl w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostSkelton;
