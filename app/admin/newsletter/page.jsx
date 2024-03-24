import React from "react";
import DeleteBlock from "../../ui/home/DeleteBlock";

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
  console.log(data);
  if (!data?.subscriptions) {
    return <p>No email .</p>;
  }

  const subscriptionsData = data.subscriptions;

  return (
    <div className="p-5">
      <div>
        <div className="overflow-x-auto h-96">
          <table className="table table-pin-rows">
            <thead>
              <tr>
                <th>ایمیل</th>
                <th>حذف</th>
              </tr>
            </thead>
            {subscriptionsData.map((data) => (
              <tbody key={data._id}>
                <tr>
                  <td>{data.email}</td>
                </tr>
                <tr>
                  <td>
                    <DeleteBlock path="Newsletter" id={data._id} />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
