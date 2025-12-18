"use client";
import useSinglePost from "@/app/hooks/useSinglePost";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const PostRedirectPage = () => {
  const router = useRouter();
  const params = useParams();
  
  // Extract params correctly based on your route structure
  const locale = params.locale as string;
  const id = params.id as string;

  // Debug: Log the params to see what you're getting
  console.log("Params:", { locale, id });

  const { data: post, isLoading, isError } = useSinglePost(id);

  // Helper function to create slug from title
  const slugify = (title: string) =>
    title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

  useEffect(() => {
    if (post && post.title) {
      const correctSlug = slugify(post.title);
      // Construct the correct URL with locale
      const correctUrl = `/${locale}/post/${id}/${correctSlug}`;
      console.log("Redirecting to:", correctUrl);
      router.replace(correctUrl);
    }
  }, [locale, post, id, router]);

  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Handle error state
  if (isError || !post) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            Post Not Found
          </h1>
          <p className="text-gray-600">
            The requested post could not be loaded.
          </p>
          <button
            onClick={() => router.push(`/${locale || ""}`)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to the correct URL...</p>
      </div>
    </div>
  );
};

export default PostRedirectPage;