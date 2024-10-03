"use client";
import { Button, Input } from "@/components";
import { EMAIL_API_URL } from "@/etc/config/apiConstants";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TfiEmail } from "react-icons/tfi";

const EmailList = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    emails: "",
  });

  const handler = new FormHandler(setFormData, EMAIL_API_URL, router);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData);

  return (
    <>
      {handler.isLoading && (
        <span className="absolute loading loading-ring loading-lg"></span>
      )}
      <div className="mx-auto max-w-7xl px-4 my-5">
        <div className="flex flex-wrap items-center w-full  p-5 mx-auto text-left border border-gray-200 rounded lg:flex-nowrap md:p-8 dark:border-gray-700">
          <div className="flex-1 w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
            <h3 className="mb-2 text-2xl font-bold">Subscribe to EmailList</h3>
            <p>
              Provide your email to get email notification when we launch new
              products or publish new articles
            </p>
          </div>
          <div className="w-full px-1 flex-0 md:w-auto lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="tags" value="earlyaccess" />
              <div className="flex flex-col sm:flex-row">
                <Input
                  type="emails"
                  value={formData.emails}
                  placeholder="Enter your email address"
                  required={true}
                  id="emails"
                  name="emails"
                  style="flex-1 sm:mr-5 px-3 py-2"
                  icon={<TfiEmail />}
                  color="input-primary"
                  onChange={handler.trakeChange}
                />
                <Button
                  title="Subscribe"
                  type="submit"
                  style="mt-5 sm:mt-0 "
                  color="btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailList;
