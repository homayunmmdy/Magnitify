"use client";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import useFetch from "../hooks/useFetch";
import { PostsCashType } from "../types/DataTypes";
import ContentWrapper from "./ContentWrapper";

const FullPost = () => {
  const { data } = useFetch("article", "/api/posts");

  return (
    <ContentWrapper title="از میان خبرها">
      {data?.map((post: PostsCashType) => {
        const PostBody = DOMPurify.sanitize(post.body);
        return (
          <div key={post._id}>
            <Image
              className="w-1/3 m-2.5 mr-4 mb-2 h-auto float-left"
              src={post.imgurl}
              width={124}
              height={124}
              alt=""
            />
            <p>
              <b>{post.title}</b>

              <div dangerouslySetInnerHTML={{ __html: PostBody }} />
            </p>
          </div>
        );
      })}
    </ContentWrapper>
  );
};

export default FullPost;
