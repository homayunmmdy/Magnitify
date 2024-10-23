"use client";
import { Input, Spinner } from "@/components";
import { PUBLICARIONS_API_URL } from "@/etc/config/apiConstants";
import { ALL_PUBLICATIONS_QUERY_KEY } from "@/etc/config/Constants";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Pagination, ItemsTable } from "../components/elements";

const Publications = () => {
  const data = useFetch(ALL_PUBLICATIONS_QUERY_KEY, PUBLICARIONS_API_URL);

  const [publications, setPublications] = useState(data?.data || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [publicationPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setPublications(data?.data || []);
  }, [data]);

  const indexOfLastPost = currentPage * publicationPerPage;
  const indexOfFirstPost = indexOfLastPost - publicationPerPage;
  //@ts-ignore
  const filteredPosts = publications.filter((post) =>
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
                    <ItemsTable post={Post} baseURL="publications"/>
                  ))}
                </tbody>
              </table>
              <Pagination
                postsPerPage={publicationPerPage}
                totalPosts={filteredPosts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div>
        ) : (
          <p className="text-red-600 font-bold">No book found.</p>
        )}
      </div>
    </div>
  );
};

export default Publications;
