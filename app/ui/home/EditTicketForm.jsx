"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";

const EditTicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;
  const router = useRouter();
  const startingTicketData = {
    title: "",
    description: "",
    body: "",
    section: "1",
    imgurl: "",
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["body"] = ticket.body;
    startingTicketData["section"] = ticket.section;
    startingTicketData["imgurl"] = ticket.imgurl;
  }

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (EDITMODE) {
      const res = await fetch(`/api/Posts/${ticket._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to update ticket");
      }
    } else {
      const res = await fetch("/api/Posts", {
        method: "POST",
        body: JSON.stringify({ formData }),
        //@ts-ignore
        "Content-Type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }
    }

    router.refresh();
    router.push("/admin/posts");
  };
  const [sections, setSections] = useState();

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await axios.get(`/api/Section`);
        setSections(response.data.sections);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  }, []);

  return (
    <div className=" flex justify-center">
      {loading && <span className="absolute loading loading-ring loading-lg"></span>}
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-full md:w-1/2"
      >
        <h3>{EDITMODE ? "ویرایش پست" : "پست جدید"}</h3>
        <label>لینک عکس</label>
        <input
          id="imgurl"
          name="imgurl"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.imgurl}
          className="input input-bordered input-primary w-full"
        />
        <label>تیتر</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
          className="input input-bordered input-primary w-full"
        />
        <label>لید</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
          className="textarea textarea-primary"
        />
        <label>متن</label>
        <textarea
          id="body"
          name="body"
          onChange={handleChange}
          required={true}
          value={formData.body}
          rows="10"
          className="textarea textarea-primary"
        />
        <label>بخش</label>
        <select
          className="select select-primary w-full"
          name="section"
          value={formData.section}
          onChange={handleChange}
        >
          {sections?.map((section) => (
            <option key={section._id} value={section.secid}>
              {section.name}
            </option>
          ))}
        </select>
        <input
          type="submit"
          className="btn btn-active btn-primary"
          value={EDITMODE ? "دخیره" : "پست"}
        />
      </form>
    </div>
  );
};

export default EditTicketForm;
