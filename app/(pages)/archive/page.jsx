"use client"
import { POST_API_URL } from '@/app/config/apiConstants';
import Link from 'next/link';
import { useState } from 'react';
import { FaCircleDot } from "react-icons/fa6";
import Pagination from './components/Pagination';

const ArchivePage = () => {
  const { data } = useFetchh(POST_API_URL);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 25;

  // Calculate current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ul className="mb-5 flex flex-col gap-4">
        {currentPosts.map((item, index) => (
          <li key={index} className="group flex p-2 gap-2 items-center hover:border-2 rounded-xl hover:border-indigo-600 hover:border-solid">
            <FaCircleDot color='#E51E1E' />
            <Link className="group-hover:text-indigo-600 font-semibold truncate" href={item.link}>
              {item.title.slice(0, 99)}
            </Link>
          </li>
        ))}
      </ul>
      <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default ArchivePage;