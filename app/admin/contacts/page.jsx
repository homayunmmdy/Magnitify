import React from "react";

const getData = async () => {
    const API_URL = process.env.API_URL;
  try {
    const res = await fetch(`${API_URL}/api/Contacts`, {
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

const ContactsPage = async () => {
  const data = await getData();
  if (!data?.contact) {
    return <p>No data send.</p>;
  }

  const contactData = data.contact;


  return (
    <div className="p-5">
      <div>
        {contactData.map((data) => (
                    <div>
                       <h2>{data.title}</h2> 
                       <p>{data.content}</p>
                    </div>
                  ))}
             
    
      </div>
    </div>
  );
};

export default ContactsPage;