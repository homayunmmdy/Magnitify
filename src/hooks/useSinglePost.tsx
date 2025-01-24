"use client";
import APIClient from "@/util/apiClient";
import { getParameterId } from "@/util/Util";
import { POST_API_URL } from "../config/apiConstants";
import { useQuery } from "@tanstack/react-query";

/**
 * Custom hook to fetch a single post by its ID using React Query
 *
 * @description
 * This hook extracts a post ID from the URL parameters and fetches the 
 * corresponding post data from the API, leveraging React Query for 
 * state management.
 *
 * @returns {Object} The result object from useQuery containing data, isLoading, and isError
 *
 * @example
 * const { data: post, isLoading, isError } = useSinglePost();
 */

const useSinglePost = () => {
  const id = getParameterId(7);
  const apiClient = new APIClient(POST_API_URL);

  const fetchPost = async () => {
    const postData = await apiClient.get(`/${id}`);
    return postData;
  };

  const { data, isLoading, isError } = useQuery(
    ["SinglePost", id], 
    fetchPost,
    {
      enabled: !!id, // Fetch only if the ID exists
      retry: 2, // Retry twice in case of failure
      staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
    }
  );

  return { data, isLoading, isError };
};

export default useSinglePost;
