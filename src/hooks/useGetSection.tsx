"use client";
import { POST_API_URL } from "@/config/apiConstants";
import { PostsCashType } from "@/types/CashTypes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

/**
 * A custom hook to fetch and filter posts from a specific section
 * 
 * @param {string} queryKey - A unique key for React Query caching and invalidation
 * @param {number} lengthItem - The number of posts to display in the section
 * @param {number} secId - The section ID to filter posts
 * 
 * @returns {Object} An object containing:
 * - data: Filtered array of posts limited to the specified number of posts for the section
 * - loading: Boolean indicating if the data is currently being fetched
 * 
 * @throws {Error} Throws an error if the API request fails
 * 
 * @example
 * // Fetch up to 5 posts from section with ID 1
 * const { data, loading } = useGetSection('posts', 5, 1);
 */

const useGetSection = (queryKey: string, lengthItem: number, secId: number) => {
  const {
    data: mainData,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: [queryKey],
    queryFn: () => axios.get(POST_API_URL).then((res) => res.data),
    retry: false,
  });

  const filteredData = mainData?.data?.filter(
    (item: PostsCashType) => item.section === secId.toString()
  );

  if (error) {
    throw error;
  }
  const data = filteredData?.slice(lengthItem);

  return { data, loading };
};

export default useGetSection;
