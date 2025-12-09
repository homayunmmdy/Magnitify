"use client";
import Image from "next/image";
import useFetch from "../hooks/useFetch";
import { PostsCashType } from "../types/DataTypes";

const FullPost = () => {
  const { data } = useFetch("article", "/api/posts");
  return (
    <div>
      {data?.map((post: PostsCashType) => ( 
        <div key={post._id}>
          <Image className="w-1/3 m-2.5 mr-4 mb-2 h-auto float-left" src={post.imgurl} width={124} height={124} alt="" />
          <p>
            <b>{post.title}</b>
            {post.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FullPost;
