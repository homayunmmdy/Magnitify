import React from "react";

const NextMainSeclton = () => {
  return (
    <div className="flex flex-col gap-2 py-2 h-full mb-4">
      
      <div className="h-[50%] ">
        <div className="flex flex-col gap-3 py-1 h-full">
          <div className="relative rounded-xl w-full bg-base-100 shadow-xl h-full">
            <div className="skeleton w-full h-full aspect-video object-cover rounded-xl"></div>
          </div>
        </div>
      </div>
      <div className="h-[50%] ">
        <div className="flex flex-col gap-3 py-1 h-full">
          <div className="relative rounded-xl w-full bg-base-100 shadow-xl h-full">
            <div className="skeleton w-full h-full aspect-video object-cover rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextMainSeclton;
