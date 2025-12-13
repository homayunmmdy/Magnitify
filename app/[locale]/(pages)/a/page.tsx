"use client";
import useFetch from "@/app/hooks/useFetch";
import { PostsCashType } from "@/app/types/DataTypes";
import { Link } from "@/i18n/navigation";
import { useRouter } from "next/navigation";
import { useSearch } from "@/app/context/SearchContext";
import { Suspense } from "react";

const AdminPageContent = () => {
  const { searchQuery } = useSearch();
  const router = useRouter();
  
  const { data } = useFetch("article", "/api/posts");
  
  // Filter articles based on search query from context
  const filteredArticles =
    data?.filter((post: PostsCashType) => {
      const query = searchQuery.toLowerCase();
      return (
        post.title?.toLowerCase().includes(query) ||
        post.body?.toLowerCase().includes(query)
      );
    }) || [];

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this article?")) {
      console.log("Delete article:", id);
      try {
        const res = await fetch(`/api/posts/${id}`, {
          method: 'DELETE',
        });
        if (res.ok) {
          router.refresh();
        } else {
          console.error('Error deleting item:', res.statusText);
        }
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Search indicator removed - now using header search */}
      
      <div>
        {/* Search and Add Section - Removed search input */}
        <div className="mb-6 flex gap-4 items-end justify-end">
          <Link
            href="/a/new"
            className="font-bold cursor-pointer px-3 bg-[#f8f9fa] text-[#202122] border border-[#72777d]"
          >
            Add New Article
          </Link>
        </div>

        {/* Results count */}
        <div className="text-sm text-gray-600 mb-4">
          Showing {filteredArticles.length}{" "}
          {filteredArticles.length === 1 ? "article" : "articles"}
          {searchQuery && ` for "${searchQuery}"`}
        </div>

        {/* Clear search button */}
        {searchQuery && (
          <div className="mb-4">
            <button
              onClick={() => {
                const { clearSearch } = useSearch();
                clearSearch();
              }}
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Articles Table - Classic Wikipedia style */}
        <div className="border border-gray-300 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="px-4 py-3 text-left font-semibold text-black">
                  Title
                </th>
                <th className="px-4 py-3 text-left font-semibold text-black">
                  Created
                </th>
                <th className="px-4 py-3 text-left font-semibold text-black">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredArticles.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-8 text-center text-gray-500"
                  >
                    {searchQuery 
                      ? `No articles found for "${searchQuery}"`
                      : "No articles found"}
                  </td>
                </tr>
              ) : (
                filteredArticles.map(
                  (article: PostsCashType, index: number) => (
                    <tr
                      key={article._id}
                      className={`border-b border-gray-200 hover:bg-gray-50 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="px-4 py-3">
                        <div className="font-medium text-blue-600 hover:underline cursor-pointer">
                          {article.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {article.body?.substring(0, 100)}...
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        {new Date(article.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <Link
                            href={`/a/${article._id}`}
                            className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                          >
                            Edit
                          </Link>
                          <span className="text-gray-300">|</span>
                          <button
                            onClick={() => handleDelete(article._id)}
                            className="text-red-600 hover:text-red-800 hover:underline text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Wrap in Suspense for useSearch
const AdminPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-10 bg-gray-200 rounded mb-6"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    }>
      <AdminPageContent />
    </Suspense>
  );
};

export default AdminPage;