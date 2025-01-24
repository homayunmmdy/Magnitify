"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { POST_API_URL } from "../config/apiConstants";

const useGetLatestPosts = (recentSize: number, queryKey: string) => {
  const { data: mainData, isLoading: loading } = useQuery({
    queryKey: [queryKey],
    queryFn: () => axios.get(POST_API_URL).then((res) => res.data),
    retry: false,
  });

  const posts = mainData?.data.slice(recentSize);

  return { posts, loading };
};

export default useGetLatestPosts;
