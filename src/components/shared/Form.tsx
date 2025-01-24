"use client";
import { Button, Input, Textarea } from "@/components";
import { ShareFormType } from "@/types/entities";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegMessage, FaUser } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

/**
 * @typedef {Object} Props - The properties passed to the Form component.
 * @property {string} buttonText - The text to display on the submit button.
 * @property {Object} initalData - The initial data for the form fields.
 * @property {string} API - The API endpoint to submit the form data to.
 */

/**
 * A reusable form component that handles input fields for name, email, and message.
 * It uses a custom FormHandler to manage form state and submission.
 *
 * @param {Props} props - The properties passed to the Form component.
 * @returns {JSX.Element} - The rendered form component.
 */

const Form = ({ buttonText, initalData, API }: ShareFormType) => {
  const router = useRouter();
  const [formData, setFormData] = useState(initalData);

  const handler = new FormHandler(setFormData, API, router);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData);

  return (
    <>
      {handler.isLoading && (
        <span className="loading loading-ring loading-lg absolute"></span>
      )}
      <form className="rounded-xl border-2 border-amber-600 p-5" onSubmit={handleSubmit}>
        <div className="mb-6">
          <Input
            type="text"
            name="name"
            placeholder="نام"
            value={formData.name}
            color="input-neutral"
            onChange={handler.trakeChange}
            required={true}
            style="w-full"
            icon={<FaUser />}
          />
        </div>
        <div className="mb-6">
          <Input
            type="email"
            name="email"
            color="input-neutral"
            placeholder="ایمیل"
            value={formData.email}
            onChange={handler.trakeChange}
            required={true}
            style="w-full"
            icon={<TfiEmail />}
          />
        </div>
        <div className="mb-6">
          <Textarea
            rows={6}
            name="message"
            placeholder="لطفا نظر خود را در این قسمت بنویسید ..."
            value={formData.message}
            color="textarea-neutral"
            onChange={handler.trakeChange}
            required={true}
            style="w-full"
            icon={<FaRegMessage />}
          />
        </div>
        <div>
          <Button type="submit" color="btn-neutral" className="w-full p-3">
            {buttonText}
          </Button>
        </div>
      </form>
    </>
  );
};

export default Form;
