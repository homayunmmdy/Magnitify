"use client";
import DOMPurify from "isomorphic-dompurify";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { PostsCashType } from "../types/DataTypes";
import ContentWrapper from "./ContentWrapper";

const FullPost = () => {
  const { data } = useFetch("article", "/api/posts");
  const t = useTranslations("main");
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
      <ContentWrapper title={t("from_the_news")}>
        <p>{t("loading")}...</p>
      </ContentWrapper>
    );
  }

  const PostBody = DOMPurify.sanitize(randomPost.body);

  return (
    <ContentWrapper title={t("from_the_news")}>
      <div key={randomPost._id}>
        <Image
          className="w-1/3 m-2.5 mr-4 mb-2 h-auto float-left"
          src={randomPost.imgurl}
          width={124}
          height={124}
          alt={randomPost.title}
        />
        <p>
          <div dangerouslySetInnerHTML={{ __html: PostBody }} />
        </p>
      </div>
    </ContentWrapper>
  );
};

export default FullPost;
