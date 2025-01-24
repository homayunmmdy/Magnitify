"use client";
import { Button, Input } from "@/components";
import { SECTIONS_API_URL } from "@/config/apiConstants";
import { SectionCashType } from "@/types/CashTypes";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormLayout } from "../shared";

const EditSectionForm = ({ data }: { data: SectionCashType }) => {
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
      <FormLayout
        title={EDITMODE ? "Edit Section" : "New Section"}
        isLoading={handler.isLoading}
      >
        <form
          onSubmit={handleSubmit}
          method="post"
          className="mb-3 flex w-full flex-col gap-3 md:w-1/2"
        >
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
          <Button type="submit" color="btn-primary">
          {EDITMODE ? "Save" : "create"}
        </Button>
        </form>
      </FormLayout>
    </>
  );
};

export default EditSectionForm;
