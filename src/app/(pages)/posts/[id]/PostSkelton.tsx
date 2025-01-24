import React from "react";

const PostSkelton: React.FC = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="mx-auto flex w-[94%] flex-col items-center justify-center px-4 py-8 md:w-[92%]">
          <div className="border-b-2 border-amber-400 bg-base-100">
            <div className="skeleton mb-6 h-6 w-full"></div>
            <div className="skeleton mb-4 h-4 w-32"></div>
          </div>
        </div>
        <div className="py-8">
          <div className="mx-auto flex w-[94%] flex-col gap-8 md:w-[92%] md:flex-row">
            <div className="w-full md:w-3/4">
              <div className="skeleton aspect-video w-full rounded-3xl"></div>
              <div className="prose max-w-none">
                <div className="py-4">
                  <div className="skeleton mb-4 h-4 w-[80%]"></div>
                  <div className="skeleton mb-4 h-4 w-full"></div>
                  <div className="skeleton mb-4 h-4 w-full"></div>
                  <div className="skeleton mb-4 h-4 w-full"></div>
                  <div className="skeleton mb-4 h-4 w-full"></div>
                  <div className="skeleton mb-4 h-4 w-full"></div>
                  <div className="skeleton mb-4 h-4 w-full"></div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <div className="skeleton h-96 w-full rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostSkelton;
