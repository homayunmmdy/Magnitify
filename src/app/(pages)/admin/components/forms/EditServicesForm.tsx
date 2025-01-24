"use client";
import { Button, Input, Textarea } from "@/components";
import { SERVICES_API_URL } from "@/config/apiConstants";
import { SERVICES_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { ServicesCashType } from "@/types/CashTypes";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FormLayout, ImagePreview } from "../shared";

const EditServicesForm = ({ data }: { data: ServicesCashType }) => {
  const EDITMODE = data._id !== "new";
  const router = useRouter();

  const startingData = {
    name: EDITMODE ? data.name : "",
    secid: EDITMODE ? data.secid : 1,
    imgurl: EDITMODE ? data.imgurl : "",
    description: EDITMODE ? data.description : "",
  };

  const [formData, setFormData] = useState(startingData);
  const { data: services } = useFetch(SERVICES_QUERY_KEY, SERVICES_API_URL);

  const handler = new FormHandler(setFormData, SERVICES_API_URL, router);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    services.map((service: ServicesCashType) => {
      if (service.secid === formData.secid) {
        toast.error("Service id already exist try another");
        e.preventDefault();
      } else {
        handler.submit(e, formData, data._id);
      }
    });

  return (
    <>
      <FormLayout
        title={EDITMODE ? "Edit Services" : "New Services"}
        isLoading={handler.isLoading}
      >
        <form
          onSubmit={handleSubmit}
          method="post"
          className="mb-3 flex w-full flex-col gap-3 md:w-1/2"
        >
          <ImagePreview
            imgurl={formData.imgurl}
            title={formData.name}
            onChange={handler.trakeChange}
          />
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
            value={formData.secid}
            color="input-primary"
            onChange={handler.trakeChange}
            required
          />
          <Textarea
            id="description"
            name="description"
            label="description"
            color="textarea-primary"
            value={formData.description}
            onChange={handler.trakeChange}
          />
          <Button type="submit" color="btn-primary">
          {EDITMODE ? "Save" : "create"}
        </Button>
        </form>
      </FormLayout>
    </>
  );
};

export default EditServicesForm;
