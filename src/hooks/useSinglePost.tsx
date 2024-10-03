"use client";
import APIClient from "@/util/apiClient";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { POST_API_URL } from "../etc/config/apiConstants";

const useSinglePost = () => {
  const pathname = usePathname();
  const id = pathname.slice(7);
  const [post, setPost] = useState();
  const apiClient = new APIClient(POST_API_URL);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await apiClient.get(`/${id}`);
        setPost(postData);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  return post;
};

export default useSinglePost;
