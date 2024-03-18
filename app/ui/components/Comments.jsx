import React from "react";

const getComments = async () => {
    const API_URL = process.env.API_URL;
  try {
    const res = await fetch(`${API_URL}/api/Comments`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const Comments = async () => {
  const data = await getComments();
  if (!data?.comment) {
    return <p>No data send.</p>;
  }

  const commentsData = data.contact;


  return (
    <div className="p-5">
      <div>
        {commentsData.map((data) => (
                    <div key={data._id}>
                       <h2>{data.title}</h2> 
                       <p>{data.content}</p>
                    </div>
                  ))}
             
    
      </div>
    </div>
  );
};

export default Comments;