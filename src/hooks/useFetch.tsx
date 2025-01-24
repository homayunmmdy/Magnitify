"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

/**
 * A custom hook for fetching data using React Query and Axios
 * 
 * @template T The type of data expected to be returned from the API
 * @param {string} queryKey - A unique key for the query cache
 * @param {string} url - The URL endpoint to fetch data from
 * 
 * @returns {Object} An object containing:
 * - `data`: The parsed data from the API response
 * - `loading`: Boolean indicating if the query is in progress
 * - `error`: Any error that occurred during the fetch
 * 
 * @example
 * // Basic usage
 * const { data, loading, error } = useFetch('users', '/api/users');
 * 
 * @example
 * // With TypeScript type annotation
 * const { data, loading, error } = useFetch<User[]>('users', '/api/users');
 */

const useFetch = (queryKey: string, url: string) => {
  const {
    data: mainData,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: [queryKey],
    queryFn: () => axios.get(url).then((res) => res.data),
  });

  const data = mainData?.data

  return { data, loading, error };
};

export default useFetch;
