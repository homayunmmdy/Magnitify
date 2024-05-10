"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

const SinglePost = () => {
  const pathname = usePathname();
  const id = pathname.slice(7);
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/Posts/${id}`);
        setPost(response.data.foundTicket);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  return post;
};

export default SinglePost;