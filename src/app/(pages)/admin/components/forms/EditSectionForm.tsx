"use client";
import { Input } from "@/components";
import { SECTIONS_API_URL } from "@/etc/config/apiConstants";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

//@ts-ignore
const EditSectionForm = ({ data }) => {
  const EDITMODE = data._id !== "new";
  const router = useRouter();

  const startingData = {
    name: EDITMODE ? data.name : "",
    secid: EDITMODE ? data.secid : 1,
  };

  const [formData, setFormData] = useState(startingData);
  const handler = new FormHandler(setFormData, SECTIONS_API_URL, router);
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
            {EDITMODE ? "Edit Section" : "New Section"}
          </h3>
          <Input
            id="name"
            type="text"
            name="name"
            label="Name"
            color="input-primary"
            value={formData.name}
            onChange={handler.trakeChange}
          />
          <Input
            id="secid"
            type="number"
            name="secid"
            label="secid"
            color="input-primary"
            value={formData.secid}
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

export default EditSectionForm;
