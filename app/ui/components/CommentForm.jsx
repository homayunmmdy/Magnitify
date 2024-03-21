"use client";
import React, { useState } from "react";

const CommentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState("");

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
      const response = await fetch("/api/Comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const data = await response.json();
      setNotification(data.message);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setNotification("Failed to submit data");
    }
  };

  return (
    <div className="mt-5">
      {notification && <p>{notification}</p>}
      <form
        className="max-w-2xl bg-white rounded-lg border p-2 mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-1">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="نام"
            className="w-[50%] bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-10 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="ایمیل"
            className="w-[50%] bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-10 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
          />
        </div>
        <div className="flex mb-2 mt-2">
          <textarea
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="پیام"
            className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-2.5 mx-1 py-1.5 rounded-md text-white text-sm bg-indigo-500"
          >
            ارسال
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
