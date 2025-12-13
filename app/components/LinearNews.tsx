"use client";
import DOMPurify from "isomorphic-dompurify";
import { useTranslations } from "next-intl";
import Link from "next/link";
import useFetch from "../hooks/useFetch";
import { PostsCashType } from "../types/DataTypes";
import ContentWrapper from "./ContentWrapper";

const LinearNews = () => {
  const { data } = useFetch("latest_news", "/api/posts");
  const t = useTranslations("main");
  const recentPosts = data?.slice(-20);

  return (
    <ContentWrapper title={t("latest_news")} headBg="blue">
      <ul className="px-5">
        {recentPosts?.map((post: PostsCashType) => {
          const PostBody = DOMPurify.sanitize(post.body);

          return (
            <li className="list-disc " key={post._id}>
                <p className="line-clamp-2">
                <div dangerouslySetInnerHTML={{ __html: PostBody }} />
                </p>
            </li>
          );
        })}
      </ul>
    </ContentWrapper>
  );
};

export default LinearNews;
