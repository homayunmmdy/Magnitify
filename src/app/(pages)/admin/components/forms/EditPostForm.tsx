"use client";
import { Button, Input, Textarea } from "@/components";
import {
  POST_API_URL,
  SECTIONS_API_URL,
  SERVICES_API_URL,
} from "@/config/apiConstants";
import { SECTIONS_QUERY_KEY, SERVICES_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { PostsCashType } from "@/types/CashTypes";
import FormHandler from "@/util/handler/FormHandler";
import { checkMaster } from "@/util/Util";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CategoryList, SelectField, SelectFiledSkeleton } from "../elements";
import { FormLayout, ImagePreview } from "../shared";
import TiptapEditor from "../TiptapEditor";

const EditPostForm = ({ post }: { post: PostsCashType }) => {
  const EDITMODE = post._id !== "new";
  const router = useRouter();
  let master = checkMaster();

  const startingTicketData = {
    title: EDITMODE ? post.title : "",
    description: EDITMODE ? post.description : "",
    body: EDITMODE ? post.body : "",
    section: EDITMODE ? post.section : "1",
    services: EDITMODE ? post.services : "1",
    imgurl: EDITMODE ? post.imgurl : "",
    categories: EDITMODE ? post.categories ?? [] : [],
    masterEditor: master ? true : false,
    source: EDITMODE ? post.source : "",
  };

  const [formData, setFormData] = useState(startingTicketData);
  const [categoryInput, setCategoryInput] = useState("");
  const handler = new FormHandler(setFormData, POST_API_URL, router);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData, post._id);

  const { data: services, loading: serviceLoading } = useFetch(
    SERVICES_QUERY_KEY,
    SERVICES_API_URL
  );
  const { data: sections, loading: sectionLoading } = useFetch(
    SECTIONS_QUERY_KEY,
    SECTIONS_API_URL
  );

  return (
    <FormLayout
      title={EDITMODE ? "ویرایش پست" : "پست جدید"}
      isLoading={handler.isLoading}
    >
      <form
        onSubmit={handleSubmit}
        method="post"
        className="mb-3 flex w-full flex-col gap-3 md:flex-row"
      >
        <div className="w-full md:w-1/2">
          {serviceLoading ? (
            <SelectFiledSkeleton label="Services" />
          ) : (
            <SelectField
              id="services"
              name="services"
              label="سرویس"
              value={formData.services}
              onChange={handler.trakeChange}
              options={services}
            />
          )}


          <Input
            type="text"
            id="title"
            name="title"
            label="تیتر"
            style="w-full mb-2"
            color="input-neutral"
            value={formData.title}
            onChange={handler.trakeChange}
            required
          />
          <Textarea
            id="description"
            name="description"
            style="w-full mb-2"
            color="textarea-neutral"
            label="توضیحات"
            value={formData.description}
            onChange={handler.trakeChange}
          />
          {/* Add New Category */}
          <div className="mt-2 flex w-full gap-2">
            <Input
              type="text"
              value={categoryInput}
              color="input-neutral"
              onChange={(e) => setCategoryInput(e.target.value)}
              placeholder="برچسب جدید"
              style="w-full"
            />
            <Button
              type="button"
              onClick={() =>
                handler.addCategory(categoryInput, setCategoryInput)
              }
              color="btn-neutral"
            >
              اضافه کردن برچسب
            </Button>
          </div>

          {/* Categories List */}
          {formData.categories.length > 0 ? (
            <div className="flex flex-col gap-2">
              <h4>Categories</h4>
              {formData.categories.map((category) => (
                <CategoryList
                  key={category.id}
                  category={category}
                  onChange={handler.trakeChange}
                  onRemove={handler.removeCategory}
                />
              ))}
            </div>
          ) : null}
         
          <Button
            type="submit"
            color="btn-neutral"
            aria-label={EDITMODE ? "ذحیره" : "پست"}
            className="btn-active mt-3 hidden w-full md:block"
          >
            {EDITMODE ? "ذحیره" : "پست"}
          </Button>
        </div>
        <div className="w-full md:w-1/2">
          <div id="tiptap-style">
            <label htmlFor="body" className="label">
              متن پست
            </label>
            <TiptapEditor
              content={formData.body}
              onChange={handler.trakeBodyChanges}
            />
          </div>
          <Input
            type="text"
            id="source"
            name="source"
            label="منبع"
            style="w-full mt-2"
            color="input-neutral"
            value={formData.source}
            onChange={handler.trakeChange}
          />
          <Button
            type="submit"
            color="btn-neutral"
            aria-label={EDITMODE ? "ذحیره" : "پست"}
            className="btn-active mt-3 block w-full md:hidden"
          >
            {EDITMODE ? "ذحیره" : "پست"}
          </Button>
        </div>
      </form>
    </FormLayout>
  );
};

export default EditPostForm;
