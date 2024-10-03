"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { POST_API_URL } from "../etc/config/apiConstants";

//@ts-ignore
const useGetLatestPosts = (recentSize, queryKey) => {
  const { data: mainData, isLoading: loading } = useQuery({
    queryKey: [queryKey],
    queryFn: () => axios.get(POST_API_URL).then((res) => res.data),
  });

  const posts = mainData?.data.slice(recentSize);

  return { posts, loading };
};

export default useGetLatestPosts;
