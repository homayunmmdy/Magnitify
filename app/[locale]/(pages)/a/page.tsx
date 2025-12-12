"use client";
import useFetch from "@/app/hooks/useFetch";
import { PostsCashType } from "@/app/types/DataTypes";
import { Link } from "@/i18n/navigation";
import { useState } from "react";

const AdminPage = () => {
  const { data } = useFetch("article", "/api/posts");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [selectedArticle, setSelectedArticle] = useState<PostsCashType | null>(
    null
  );
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  // Filter articles based on search query
  const filteredArticles =
    data?.filter((article: PostsCashType) => {
      const query = searchQuery.toLowerCase();
      return (
        article.title?.toLowerCase().includes(query) ||
        article.body?.toLowerCase().includes(query) 
      );
    }) || [];

  const handleAdd = () => {
    setModalMode("add");
    setFormData({ title: "", body: ""});
    setIsModalOpen(true);
  };

  const handleEdit = (article: PostsCashType) => {
    setModalMode("edit");
    setSelectedArticle(article);
    setFormData({
      title: article.title,
      body: article.body
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this article?")) {
      console.log("Delete article:", id);
      // Implement delete logic
    }
  };

  const handleSubmit = () => {
    if (!formData.title  || !formData.body) {
      alert("Please fill in all fields");
      return;
    }
    if (modalMode === "add") {
      console.log("Add article:", formData);
      // Implement add logic
    } else {
      console.log("Edit article:", selectedArticle?._id, formData);
      // Implement edit logic
    }
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Wikipedia style */}
    

      <div >
        {/* Search and Add Section */}
        <div className="mb-6 flex gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search articles
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title or body ..."
              className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleAdd}
            className="font-bold cursor-pointer px-3 bg-[#f8f9fa] text-[#202122] border border-[#72777d]"
          >
            Add New Article
          </button>
        </div>

        {/* Results count */}
        <div className="text-sm text-gray-600 mb-4">
          Showing {filteredArticles.length}{" "}
          {filteredArticles.length === 1 ? "article" : "articles"}
        </div>

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
                    No articles found
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

      {/* Modal for Add/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="border-b border-gray-300 px-6 py-4 bg-gray-50">
              <h2 className="text-xl font-serif text-black">
                {modalMode === "add" ? "Add New Article" : "Edit Article"}
              </h2>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Body
                </label>
                <textarea
                  value={formData.body}
                  onChange={(e) =>
                    setFormData({ ...formData, body: e.target.value })
                  }
                  rows={10}
                  className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono text-sm"
                />
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  {modalMode === "add" ? "Add Article" : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
