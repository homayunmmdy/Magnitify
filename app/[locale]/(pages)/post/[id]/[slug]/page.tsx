"use client";
import useSinglePost from "@/app/hooks/useSinglePost";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

const PostPage = () => {
  const router = useRouter();
  const { id, slug } = useParams(); // Get `id` and `slug` from the URL

  const { data: post } = useSinglePost(id);

  useEffect(() => {
    if (post && post.title) {
      const correctSlug = slugify(post.title);
      if (slug !== correctSlug) {
        router.replace(`/post/${post._id}/${correctSlug}`);
      }
    }
  }, [post, slug, router]);

  return <div>
    <h1 className="text-2xl font-libertine border-b border-[#a2a9b1] pb-1">{post.title}</h1>
  </div>;
};

export default PostPage;
