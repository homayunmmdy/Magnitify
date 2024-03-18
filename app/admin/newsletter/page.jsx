import React from "react";

const getData = async () => {
    const API_URL = process.env.API_URL;
  try {
    const res = await fetch(`${API_URL}/api/Newsletter`, {
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

const Newsletter = async () => {
  const data = await getData();
  console.log(data)
  if (!data?.subscriptions) {
    return <p>No  email .</p>;
  }

  const subscriptionsData = data.subscriptions;


  return (
    <div className="p-5">
      <div>
        {subscriptionsData.map((data) => (
                    <div key={data._id}>
                       <p>{data.email}</p> 
                    </div>
                  ))}
             
    
      </div>
    </div>
  );
};

export default Newsletter;