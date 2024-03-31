import React from 'react'
import DeleteBlock from "../../../ui/home/DeleteBlock";

const getData = async () => {
    const API_URL = process.env.API_URL;
    try {
        const res = await fetch(`${API_URL}/api/Users`, {
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

const ManageUser = async () => {
    const data = await getData();
    if (!data?.users) {
        return <p>No users .</p>;
    }
    const usersData = data.users;

    return (
        <div className="p-5">
            <div>
                <div className="overflow-x-auto h-96">
                    <table className="table table-pin-rows">
                        <thead>
                            <tr>
                                <th>ایمیل</th>
                                <th>رمز</th>
                                <th>حذف</th>
                            </tr>
                        </thead>
                        {usersData.map((data) => (
                            <tbody key={data._id}>
                                <tr>
                                    <td>{data.email}</td>
                                    <td>{data.password}</td>
                                    <td>
                                        <DeleteBlock path="Users" id={data._id} />
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageUser