import React from "react";

const NextMain = ({ ticket }) => {
  return (
    <div className="h-[50%]">
      <div className="flex flex-col gap-3 py-1 h-full">
        <div className="relative rounded-xl w-full bg-base-100 shadow-xl h-full">
            <img
              src={ticket.imgurl}
              alt={ticket.title}
              className="w-full h-full aspect-video object-cover rounded-xl"
            />
          <div className="absolute bottom-1  p-2 w-full  rounded-xl text-white">
            <h2 className=" truncate text-xl">{ticket.title}</h2>
            <p className="truncate">{ticket.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextMain;
