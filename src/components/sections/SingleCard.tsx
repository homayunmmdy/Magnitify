"use client";
import { Button } from "@/components";
import Titr from "@/components/Titr";
import { SINGLE_POST_QUERY_KEY } from "@/config/Constants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/CashTypes";
import ErrorBoundaryProvider from "@/util/ErrorBoundaryProvider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SingleCardSkeleton } from "../skelton";
const SingleCard: React.FC = () => {
  const { data, loading } = useGetSection(SINGLE_POST_QUERY_KEY, -1, 3);

  if (loading) {
    return <SingleCardSkeleton />;
  }

  return (
    <article>
      <Titr
        title="Single Posts"
        item="text-center"
        style="mb-4 text-xl md:text-2xl lg:text-3xl"
      />
      {data?.map((post: PostsCashType) => (
        <Link
          href={`/posts/${post._id}`}
          key={post._id}
          className="card my-5 bg-base-100 shadow-xl lg:card-side"
        >
          <figure>
            <Image
              src={!post.imgurl ? "/static/Image/logo.jpg" : post.imgurl}
              alt={post.title.slice(0, 70)}
              width={928}
              height={548}
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title">{post.title.slice(0, 70)}</h3>
            <p>{post.description.slice(0, 150)}</p>
            <div className="card-actions justify-end">
              <Button color="btn-primary">Read Now</Button>
            </div>
          </div>
        </Link>
      ))}
    </article>
  );
};

export default () => (
  <ErrorBoundaryProvider>
    <SingleCard />
  </ErrorBoundaryProvider>
);
