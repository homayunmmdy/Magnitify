"use client";
import { Button, Input } from "@/components";
import { EMAIL_API_URL } from "@/config/apiConstants";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { TfiEmail } from "react-icons/tfi";

const EmailList: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
  });

  const handler = new FormHandler(setFormData, EMAIL_API_URL, router);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData);

  return (
    <>
      {handler.isLoading && (
        <span className="loading loading-ring loading-lg absolute"></span>
      )}
      <div className="mx-auto my-5 max-w-7xl px-4">
        <div className="mx-auto flex w-full flex-wrap items-center rounded border border-gray-200 p-5 text-left md:p-8 lg:flex-nowrap dark:border-gray-700">
          <div className="mb-5 w-full flex-1 md:mb-0 md:w-1/2 md:pr-5 lg:pr-10">
            <h3 className="mb-2 text-2xl font-bold">Subscribe to EmailList</h3>
            <p>
              Provide your email to get email notification when we launch new
              products or publish new articles
            </p>
          </div>
          <div className="flex-0 w-full px-1 md:w-auto lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="tags" value="earlyaccess" />
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                  type="email"
                  value={formData.email}
                  placeholder="Enter your email address"
                  required={true}
                  id="email"
                  name="email"
                  style="flex-1 sm:mr-5 px-3 py-2"
                  icon={<TfiEmail />}
                  color="input-primary"
                  onChange={handler.trakeChange}
                />
                <Button type="submit" className="mt-5 sm:mt-0" color="btn-primary">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailList;
