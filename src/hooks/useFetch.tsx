"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
