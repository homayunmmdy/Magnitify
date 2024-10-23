"use client";
import { Button, Input, Textarea } from "@/components";
import {
  POST_API_URL,
  SECTIONS_API_URL,
  SERVICES_API_URL,
} from "@/etc/config/apiConstants";
import { SECTIONS_QUERY_KEY, SERVICES_QUERY_KEY } from "@/etc/config/Constants";
import useFetch from "@/hooks/useFetch";
import FormHandler from "@/util/handler/FormHandler";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { SelectField } from "../elements";

//@ts-ignore
const EditPostForm = ({  post }) => {
  const EDITMODE = post._id !== "new";
  const router = useRouter();
  const startingTicketData = {
    title: EDITMODE ? post.title : "",
    description: EDITMODE ? post.description : "",
    body: EDITMODE ? post.body : "",
    section: EDITMODE ? post.section : "1",
    services: EDITMODE ? post.services : "1",
    imgurl: EDITMODE ? post.imgurl : "",
    categories: EDITMODE ? post.categories : [],
  };

  const [formData, setFormData] = useState(startingTicketData);
  const [categoryInput, setCategoryInput] = useState("");
  const handler = new FormHandler(setFormData, POST_API_URL, router);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData, post._id);

  const { data: services } = useFetch(SERVICES_QUERY_KEY, SERVICES_API_URL);
  const { data: sections } = useFetch(SECTIONS_QUERY_KEY, SECTIONS_API_URL);

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
          {EDITMODE ? "Edit Post" : "New Post"}
        </h3>
        <div>
          <Image
            src={formData.imgurl}
            title={formData.title}
            alt={formData.title}
            height={390.938}
            width={695}
            className="w-full rounded-xl border border-indigo-500 aspect-video"
          />
        </div>
        <Input
          id="imgurl"
          type="text"
          name="imgurl"
          label="Image Link"
          color="input-primary"
          value={formData.imgurl}
          onChange={handler.trakeChange}
        />
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
          id="body"
          name="body"
          label="Body"
          color="textarea-primary"
          value={formData.body}
          onChange={handler.trakeChange}
          required
        />
        {/* Add New Category */}
        <div className="flex w-full gap-2 mt-2">
          <Input
            type="text"
            value={categoryInput}
            color="input-primary"
            onChange={(e) => setCategoryInput(e.target.value)}
            placeholder="New Category"
            style="w-full"
          />
          <Button
            title="Add Category"
            type="button"
            onClick={() => handler.addCategory(categoryInput,setCategoryInput)}
            color="btn-primary"
          />
        </div>

        {/* Categories List */}
        <div className="flex flex-col gap-2">
          <h4>Categories</h4>
          {/* @ts-ignore */}
          {formData.categories.map((category) => (
            <div key={category.id} className="flex w-full items-center gap-2">
              <Input
                type="text"
                value={category.name}
                color="input-primary"
                onChange={(e) => handler.CategoryChanges(e, category.id)}
                style="w-full"
              />
              <Button
                type="button"
                onClick={() => handler.removeCategory(category.id)}
                color="btn-error"
                title={<MdDeleteOutline />}
              />
            </div>
          ))}
        </div>
        {services && (
          <SelectField
            id="services"
            name="services"
            label="Services"
            value={formData.services}
            onChange={handler.trakeChange}
            options={services}
          />
        )}
        {sections && (
          <SelectField
            id="section"
            name="section"
            label="Section"
            value={formData.section}
            onChange={handler.trakeChange}
            options={sections}
          />
        )}
        <Input
          type="submit"
          style="btn btn-active btn-primary"
          value={EDITMODE ? "Save" : "Post"}
        />
      </form>
    </div>
  );
};

export default EditPostForm;
