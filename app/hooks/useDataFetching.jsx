"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPostData = async (url) => {
  const response = await axios.get(url);
  return response.data.data;
};

const useDataFetching = (url, lengthItem, secId) => {
  const { data: postData, isLoading } = useQuery({
    queryKey: ['postData'],
    queryFn: fetchPostData(url),
  })
  const filteredData = postData?.filter((item) => item.section === `${secId}`);
  const data = filteredData?.slice(lengthItem);

  return { data, isLoading };
};

export default useDataFetching;