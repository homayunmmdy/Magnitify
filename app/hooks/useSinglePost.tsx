'use client';
import { useQuery } from '@tanstack/react-query';
import { POST_API_URL } from '../config/Constants';
import APIClient from '../util/apiClient';

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

const useSinglePost = (postId?: string | string[]) => {
   const apiClient = new APIClient(POST_API_URL);

   const fetchPost = async () => {
      if (!postId) throw new Error('Post ID is required');
      return apiClient.get(`/${postId}`);
   };

   return useQuery({
      queryKey: ['SinglePost', postId],
      queryFn: fetchPost,
      enabled: !!postId,
      retry: 2,
      staleTime: 5 * 60 * 1000,
   });
};

export default useSinglePost;
