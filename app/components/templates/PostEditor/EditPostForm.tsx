"use client";
import { PostsCashType } from "@/app/types/DataTypes";
import FormHandler from "@/app/util/FormHandler";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TiptapEditor from "./TiptapEditor";

const EditPostForm = ({ post }: { post: PostsCashType }) => {
  const EDIT_MODE = post._id !== "new";
  const router = useRouter();

  const startingTicketData = {
    title: EDIT_MODE ? post.title : "",
    body: EDIT_MODE ? post.body : "",
    imgurl: EDIT_MODE ? post.imgurl : "",
    fields: EDIT_MODE ? post.fields ?? [] : [],
  };

  const [formData, setFormData] = useState(startingTicketData);
  const handler = new FormHandler(setFormData, "/api/posts", router);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData, post._id);

  return (
    <div>
      <form id="post-form" onSubmit={handleSubmit}>
        <TiptapEditor
          content={formData.body}
          onChange={handler.trakeBodyChanges}
          formData={formData}
          onTitleChange={handler.trakeChange}
          onImageUrlChange={handler.trakeChange} // Pass the same handler for image URL
        />
      </form>
    </div>
  );
};

export default EditPostForm;