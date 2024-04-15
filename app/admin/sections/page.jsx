"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteBlock from "../../[locale]/ui/home/DeleteBlock";
import { useRouter } from "next/navigation";

const Section = () => {
  const [formData, setFormData] = useState({ name: '', secid: 1 });
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('fa/api/Section', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      if (res.ok) {
        router.refresh();
      } else {
        console.error("Error deleting item:", res.statusText);
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to submit data');
    }
  };
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`fa/api/Section`);
        setData(response.data.sections);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>name:</label>
          <input
            type="text"
            name="name"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>secid:</label>
          <input
          type="number"
            name="secid"
            value={formData.content}
            onChange={handleChange}
            required
         />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>آیدی</th>
              <th>قسمت</th>
              <th>حذف</th>
            </tr>
          </thead>
          {data?.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>{item.secid}</td>
                <td>{item.name}</td>
                <td>
                  <DeleteBlock path="Section" id={item._id} />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Section;
