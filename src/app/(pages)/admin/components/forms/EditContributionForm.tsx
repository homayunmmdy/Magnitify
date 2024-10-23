"use client";
import { Input, Textarea } from "@/components";
import { CONTRIBUTION_API_URL } from "@/etc/config/apiConstants";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import { useState } from "react";

//@ts-ignore
const EditContributionForm = ({  contribute }) => {
  const EDITMODE = contribute._id !== "new";
  const router = useRouter();
  const startingTicketData = {
    title: EDITMODE ? contribute.title : "",
    description: EDITMODE ? contribute.description : "",
    link: EDITMODE ? contribute.body : "",
    date: EDITMODE ? contribute.imgurl : "",
  };

  const [formData, setFormData] = useState(startingTicketData);
  const handler = new FormHandler(setFormData, CONTRIBUTION_API_URL, router);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData, contribute._id);

  return (
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
          {EDITMODE ? "Edit Contribution" : "New Contribution"}
        </h3>

        <Input
          type="text"
          id="title"
          name="title"
          label="Title"
          color="input-primary"
          value={formData.title}
          onChange={handler.trakeChange}
          required
        />
        <Textarea
          id="description"
          name="description"
          color="textarea-primary"
          label="description"
          value={formData.description}
          onChange={handler.trakeChange}
        />
        <Textarea
          id="link"
          name="link"
          label="Link"
          color="textarea-primary"
          value={formData.link}
          onChange={handler.trakeChange}
        />
        <Input
          type="datetime-local"
          id="date"
          name="date"
          placeholder="date"
          label="Date"
          value={formData.date}
          color="input-primary"
          onChange={handler.trakeChange}
          style="w-full"
          required
        />
        <Input
          type="submit"
          style="btn btn-active btn-primary"
          value={EDITMODE ? "Save" : "Post"}
        />
      </form>
    </div>
  );
};

export default EditContributionForm;