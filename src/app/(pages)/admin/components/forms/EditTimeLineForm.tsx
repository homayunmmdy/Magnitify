"use client";
import { Input } from "@/components";
import { TIMELINE_API_URL } from "@/etc/config/apiConstants";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

//@ts-ignore
const EditTextAdvForm = ({ data }) => {
  const EDITMODE = data._id !== "new";
  const router = useRouter();

  const startingData = {
    title: EDITMODE ? data.title : "",
    date: EDITMODE ? data.date : "",
    description: EDITMODE ? data.description : "",
  };
  const [formData, setFormData] = useState(startingData);
  const handler = new FormHandler(setFormData, TIMELINE_API_URL, router);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData, data._id);

  return (
    <>
      <div className="flex justify-center">
        {handler.isLoading && (
          <span className="absolute loading loading-ring loading-lg"></span>
        )}
        <form
          onSubmit={handleSubmit}
          method="post"
          className="flex flex-col gap-3 w-full md:w-1/2 mb-3"
        >
          <h3 className="text-center font-semibold text-2xl">
            {EDITMODE ? "Edit TimeLine" : "New TimeLine"}
          </h3>
          <Input
            id="title"
            type="text"
            name="title"
            label="title"
            color="input-primary"
            value={formData.title}
            onChange={handler.trakeChange}
            required
          />
          <Input
            type="datetime-local"
            id="date"
            name="date"
            label="date"
            color="input-primary"
            value={formData.date}
            onChange={handler.trakeChange}
          />
          <Input
            type="text"
            id="description"
            name="description"
            label="description"
            color="input-primary"
            value={formData.description}
            onChange={handler.trakeChange}
            required
          />
          <Input
            type="submit"
            style="btn btn-active btn-primary"
            value={EDITMODE ? "Save" : "Post"}
          />
        </form>
      </div>
    </>
  );
};

export default EditTextAdvForm;
