"use client";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { PostsCashType } from "../types/DataTypes";
import ContentWrapper from "./ContentWrapper";

const FullPost = () => {
  const { data } = useFetch("article", "/api/posts");
  const [randomPost, setRandomPost] = useState<PostsCashType | null>(null);

  useEffect(() => {
    if (data && data.length > 0) {
      // Generate random index based on data length
      const randomIndex = Math.floor(Math.random() * data.length);
      // Select the random post
      setRandomPost(data[randomIndex]);
    }
  }, [data]);

  if (!randomPost) {
    return (
      <ContentWrapper title="از میان خبرها">
        <p>در حال بارگذاری...</p>
      </ContentWrapper>
    );
  }

  const PostBody = DOMPurify.sanitize(randomPost.body);

  return (
    <ContentWrapper title="از میان خبرها">
      <div key={randomPost._id}>
        <Image
          className="w-1/3 m-2.5 mr-4 mb-2 h-auto float-left"
          src={randomPost.imgurl}
          width={124}
          height={124}
          alt={randomPost.title}
        />
        <p>
          <b>{randomPost.title}</b>
          <div dangerouslySetInnerHTML={{ __html: PostBody }} />
        </p>
      </div>
    </ContentWrapper>
  );
};

export default FullPost;