"use client";
import { Input, Spinner } from "@/components";
import { POST_API_URL } from "@/etc/config/apiConstants";
import { ALL_POSTS_QUERY_KEY } from "@/etc/config/Constants";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Pagination, ItemsTable } from "../components/elements";

const Posts = () => {
  const data = useFetch(ALL_POSTS_QUERY_KEY, POST_API_URL);

  const [posts, setPosts] = useState(data?.data || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setPosts(data?.data || []);
  }, [data]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
   // @ts-ignore
   const sortedByTime = posts?.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  //@ts-ignore
  const filteredPosts = sortedByTime.filter((post) =>
    //@ts-ignore
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  //@ts-ignore
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //@ts-ignore
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  if (!data?.data) {
    return <Spinner />;
  }

  return (
    <div className="p-5">
      <div>
        <Input
          type="text"
          placeholder="Search posts"
          value={searchQuery}
          onChange={handleSearch}
          icon={
            <FiSearch
              size={24}
              className="h-4 w-4 opacity-70"
              color="#4F46E5"
            />
          }
          style="my-2"
          color="input-primary"
        />
        {currentPosts.length > 0 ? (
          <div className="!z-5 relative flex flex-col rounded-[20px] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full p-4 h-full">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th className="hidden lg:block">Lead</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {/* @ts-ignore */}
                  {currentPosts.map((Post, _index) => (
                    <ItemsTable post={Post} baseURL="posts"/>
                  ))}
                </tbody>
              </table>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={filteredPosts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div>
        ) : (
          <p className="text-red-600 font-bold">No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
