'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentsSec =  () => {
  const [comments, setComments] = useState();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/Comments`);
        setComments(response.data.comment);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, []);

  return (
    <div className="p-5">
      <div>
        {console.log(comments)}
        {comments?.map((data) => (
          <div key={data._id}>
            <h2>{data.title}</h2>
            <p>{data.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSec;
