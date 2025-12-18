"use client";
import useSinglePost from "@/app/hooks/useSinglePost";
import DOMPurify from "isomorphic-dompurify";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import '../../../../tiptap.css'

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

  const PostBody = DOMPurify.sanitize(post?.body);

  return (
    <div>
      <h1 className="text-2xl font-libertine border-b border-[#a2a9b1] pb-1">
        {post?.title}
      </h1>
      <div
        className="prose mb-3 max-w-none text-base leading-9"
        id="tiptap-style"
        dangerouslySetInnerHTML={{ __html: PostBody }}
      />
    </div>
  );
};

export default PostPage;
